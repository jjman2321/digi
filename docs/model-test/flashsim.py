"""On-device 'real flash' sim ($0, faces untouched): person segmentation -> flash-lit subject, black background, keeps light dots."""
import sys, numpy as np, mediapipe as mp
from PIL import Image, ImageFilter
from mediapipe.tasks.python import vision, BaseOptions
SEG=vision.ImageSegmenter.create_from_options(vision.ImageSegmenterOptions(base_options=BaseOptions(model_asset_path='selfie_multiclass.tflite'),output_confidence_masks=True))
def masks(im):
    r=SEG.segment(mp.Image(image_format=mp.ImageFormat.SRGB,data=np.asarray(im.convert('RGB'))))
    cm=[np.squeeze(m.numpy_view()).astype(np.float32) for m in r.confidence_masks]
    return 1-cm[0], cm[3]+cm[2]*0.6   # person prob, skin prob
def flash(im):
    im=im.convert('RGB'); a=np.asarray(im).astype(np.float32)/255; H,W=a.shape[:2]
    p,skin=masks(im)
    p=np.asarray(Image.fromarray((p*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W/300)))/255.0
    # subject: flat frontal flash = lift shadows, +exposure, soft highlight roll-off, specular on skin
    lum=a.mean(2,keepdims=True)
    subj=a**0.78*1.28
    subj=1-np.exp(-subj*1.25)                      # roll-off
    subj=subj/ (1-np.exp(-1.25*1.28))
    spec=np.clip((lum-0.55)*2.2,0,1)*skin[...,None]*0.35
    subj=np.clip(subj+spec,0,1)
    subj=subj*np.array([0.96,1.0,1.06])            # cold flash
    # distance falloff: lower part/closer brighter; slight radial
    yy,xx=np.mgrid[0:H,0:W]; r=np.sqrt(((xx-W/2)/(W*0.62))**2+((yy-H*0.42)/(H*0.62))**2)
    subj*= (1.08-0.30*np.clip(r,0,1.5)**2)[...,None]
    # background: near black, keep point lights glowing
    bg=a*0.10+np.clip(a-0.72,0,1)*2.6
    bgl=Image.fromarray((np.clip(bg,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W/400))
    bg=np.asarray(bgl).astype(np.float32)/255*np.array([0.92,0.95,1.08])
    # hard flash shadow just behind subject (mask shifted right/down, outside subject)
    sh=np.roll(np.roll(p,int(W*0.018),1),int(H*0.012),0); sh=np.clip(sh-p,0,1)
    bg*= (1-0.6*sh)[...,None]
    out=subj*p[...,None]+bg*(1-p[...,None])
    # punch: contrast + saturation
    m=out.mean(2,keepdims=True); out=m+(out-m)*1.18; out=(out-0.5)*1.06+0.5
    return Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8))
if __name__=='__main__':
    flash(Image.open(sys.argv[1])).save(sys.argv[2])
