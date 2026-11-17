from PIL import Image, ImageDraw, ImageFont
R='docs/design/round3/png/'; M='docs/design/research/mobbin/'
B=lambda n:ImageFont.truetype('node_modules/@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf',n)
Md=lambda n:ImageFont.truetype('node_modules/@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf',n)
def board(out,title,sub,opts):
    w,h=360,779; sw,sh=180,390; g=22; top=130; foot=200
    colw=[w*len(o[0])+g*(len(o[0])-1)+(g+sw*len(o[3]) if o[3] else 0) for o in opts]
    S=Image.new('RGB',(sum(colw)+g*(len(opts)+1)+20, top+h+foot),(11,11,14)); d=ImageDraw.Draw(S)
    d.text((g,28),title,font=B(32),fill=(255,255,255)); d.text((g,76),sub,font=Md(20),fill=(180,180,192))
    x=g
    for (ours,l,n,refs,pick),cw in zip(opts,colw):
        for j,o in enumerate(ours): S.paste(Image.open(R+o+'.png').convert('RGB').resize((w,h)),(x+j*(w+g),top))
        rx=x+len(ours)*(w+g)
        for i,r in enumerate(refs):
            S.paste(Image.open(M+r+'.jpg').convert('RGB').resize((sw,sh)),(rx+i*sw,top))
            d.text((rx+i*sw,top+sh+6),r.split('-')[1].title(),font=Md(16),fill=(180,180,192))
        if pick: d.rounded_rectangle((x-8,top-8,x+cw+8,top+h+foot-20),20,outline=(255,79,163),width=5)
        d.text((x,top+h+16),l,font=B(22),fill=(255,79,163) if pick else (255,255,255))
        for k,line in enumerate(n.split('\n')): d.text((x,top+h+52+k*26),line,font=Md(17),fill=(180,180,192))
        x+=cw+g
    S.save(out,quality=85)
board('docs/design/round3/r9-signin.jpg','Sign-in: when and how','Emails + social layer. Mobbin refs beside each.',[
 (['r9-sign-later'],'A: After the wow (Slopes)','9/10 PICK · Apple or email + opt-in\nAsked when you host a roll / add friends',['23-slopes-signup-later'],True),
 (['r9-sign-upfront'],'B: Up front (Once)','7/10 · most emails\nLoses people before the first digi',['24-once-signin-upfront'],False),
 (['r9-sign-phone'],'C: Phone (Lapse, Locket)','6/10 · best friend-finding\nSMS costs + contacts ask',['25-lapse-phone-age13','26-locket-create-account'],False)])
board('docs/design/round3/r9-age.jpg','Age: 13+ app, AI + rolls 18+','Niche: Lapse, Locket, BeReal, Lensa, POV, Boothie = 12+ · Remini, Photoroom, Once = 4+',[
 (['r9-age','r9-age-blocked'],'A: 13+ app, check at first AI / roll','9/10 PICK · camera for 13+\nAI + rolls 18+ (our safety check blocks under-18 faces anyway)',['25-lapse-phone-age13'],True)])
