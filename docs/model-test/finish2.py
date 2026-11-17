"""Digi finishing v2 (runs on the phone, $0): makes an AI-relit photo look like a real 2005 CCD flash snapshot.
Sensor simulation (resolution, lens softness, over-sharpening, flash falloff, shadow chroma noise, JPEG) + orange LCD stamp."""
import sys, io, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/fonts/'
RNG=np.random.default_rng(7)
def stamp(w,h,mm="11",dd="17",yy="26",brand=True):
    L=Image.new('RGBA',(w,h),(0,0,0,0)); d=ImageDraw.Draw(L)
    s=max(16,int(w*0.042)); f7=ImageFont.truetype(FD+'DSEG7Classic-Bold.ttf',s); fb=ImageFont.truetype(FD+'Silkscreen-Bold.ttf',int(s*0.72))
    col=(255,150,40,235); m=int(w*0.055); y=h-m-s
    parts=[mm," ",dd,"   ",yy]; widths=[d.textlength(p,font=f7) for p in parts]; x=w-m-sum(widths)
    for p,wd in zip(parts,widths):
        if p.strip(): d.text((x,y),p,font=f7,fill=col)
        x+=wd
    # apostrophe before the year, drawn like an LCD tick
    ax=w-m-widths[-1]-s*0.30; d.polygon([(ax,y),(ax+s*0.16,y),(ax+s*0.06,y+s*0.34),(ax-s*0.06,y+s*0.34)],fill=col)
    if brand: d.text((m,h-m-int(s*0.86)),"digi.pink",font=fb,fill=col)
    g=L.filter(ImageFilter.GaussianBlur(max(2,s//6)))
    out=Image.new('RGBA',(w,h),(0,0,0,0)); out.alpha_composite(g); out.alpha_composite(L)
    return out
def sensor(im,long_side=1600):
    w,h=im.size; k=long_side/max(w,h); im=im.resize((int(w*k),int(h*k)),Image.LANCZOS)
    a=np.asarray(im).astype(np.float32)/255; H,W=a.shape[:2]
    yy,xx=np.mgrid[0:H,0:W]; r=np.sqrt(((xx-W/2)/(W/2))**2+((yy-H*0.45)/(H/2))**2)
    a*= (1.12-0.42*np.clip(r,0,1.4)**2)[...,None]          # flash hot-spot + falloff/vignette
    a=np.clip((a-0.03)*1.10,0,1)                           # crushed blacks, clipped highlights
    a=a**0.95
    a*=np.array([0.97,1.0,1.05])                           # cold CCD white balance
    im=Image.fromarray((np.clip(a,0,1)*255).astype(np.uint8))
    im=im.filter(ImageFilter.GaussianBlur(0.8)).filter(ImageFilter.UnsharpMask(2,70,2))   # soft lens + cheap over-sharpening
    a=np.asarray(im).astype(np.float32)
    lum=a.mean(2,keepdims=True)/255; shadow=(1-lum)**1.5
    lumn=RNG.normal(0,4.5,(H,W,1)); 
    ch=Image.fromarray(np.clip(RNG.normal(128,40,(H//3,W//3,3)),0,255).astype(np.uint8)).resize((W,H),Image.BILINEAR)
    chn=(np.asarray(ch).astype(np.float32)-128)*0.22
    a=a+lumn*(0.6+shadow)+chn*shadow*1.6
    im=Image.fromarray(np.clip(a,0,255).astype(np.uint8))
    b=io.BytesIO(); im.save(b,'JPEG',quality=70,subsampling=2); im=Image.open(b).convert('RGB')
    return im
def finish(src,dst,brand=True):
    im=sensor(Image.open(src).convert('RGB')).convert('RGBA'); im.alpha_composite(stamp(*im.size,brand=brand))
    im.convert('RGB').save(dst,quality=88,subsampling=2)
if __name__=='__main__':
    if sys.argv[1]=='layer': stamp(int(sys.argv[2]),int(sys.argv[3])).save(sys.argv[4])
    else: finish(sys.argv[1],sys.argv[2])
