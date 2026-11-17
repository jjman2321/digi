"""Digi finish v3 ($0, on phone): punchy flash pop on people (segmentation), deeper background w/ glowing point lights, then light sensor sim + LCD stamp."""
import sys, os, io, numpy as np; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from PIL import Image, ImageFilter
import flashsim, finish2
RNG=np.random.default_rng(11)
def pop(im):
    im=im.convert('RGB'); a=np.asarray(im).astype(np.float32)/255; H,W=a.shape[:2]
    p,skin=flashsim.masks(im)
    p=np.asarray(Image.fromarray((np.clip(p,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W/250)))/255.0
    skin=np.asarray(Image.fromarray((np.clip(skin,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W/250)))/255.0
    lum=a.mean(2,keepdims=True)
    subj=a*1.16; subj=np.clip(subj+np.clip((lum-0.5)*1.6,0,1)*skin[...,None]*0.18,0,None)
    subj=1-np.exp(-subj*1.6); subj/= (1-np.exp(-1.6*1.16))
    blur=np.asarray(Image.fromarray((a*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(W/60))).astype(np.float32)/255
    lights=np.clip((a.max(2,keepdims=True)-blur.max(2,keepdims=True))-0.12,0,1)*2.2
    bg=a*0.42+lights*a
    out=subj*p[...,None]+bg*(1-p[...,None])
    m=out.mean(2,keepdims=True); out=m+(out-m)*1.14; out=(out-0.5)*1.10+0.5
    return Image.fromarray((np.clip(out,0,1)*255).astype(np.uint8))
def sensor_light(im,long_side=1600):
    w,h=im.size; k=long_side/max(w,h); im=im.resize((int(w*k),int(h*k)),Image.LANCZOS)
    a=np.asarray(im).astype(np.float32)/255; H,W=a.shape[:2]
    yy,xx=np.mgrid[0:H,0:W]; r=np.sqrt(((xx-W/2)/(W/2))**2+((yy-H*0.45)/(H/2))**2)
    a*=(1.05-0.22*np.clip(r,0,1.4)**2)[...,None]
    a=np.clip(a,0,1)*np.array([0.985,1.0,1.03])
    im=Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6)).filter(ImageFilter.UnsharpMask(2,60,2))
    a=np.asarray(im).astype(np.float32); lum=a.mean(2,keepdims=True)/255; sh=(1-lum)**1.6
    ch=Image.fromarray(np.clip(RNG.normal(128,40,(H//3,W//3,3)),0,255).astype(np.uint8)).resize((W,H),Image.BILINEAR)
    a=a+RNG.normal(0,3.5,(H,W,1))*(0.5+sh)+(np.asarray(ch).astype(np.float32)-128)*0.18*sh*1.4
    im=Image.fromarray(np.clip(a,0,255).astype(np.uint8)); b=io.BytesIO(); im.save(b,'JPEG',quality=74); return Image.open(b).convert('RGB')
def finish(src,dst):
    im=sensor_light(pop(Image.open(src))).convert('RGBA'); im.alpha_composite(finish2.stamp(*im.size)); im.convert('RGB').save(dst,quality=90)
if __name__=='__main__': finish(sys.argv[1],sys.argv[2])
