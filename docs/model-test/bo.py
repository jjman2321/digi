"""Digi model bake-off helpers: budget guard, image gen/edit (images API + chat API), video jobs."""
import json, os, time, base64, urllib.request, urllib.error, csv, datetime
K=os.environ["OPENROUTER_API_KEY"]; H={"Authorization":"Bearer "+K,"Content-Type":"application/json"}
D=os.path.dirname(os.path.abspath(__file__)); LEDGER=os.path.join(D,"ledger.csv"); BASEF=os.path.join(D,"base.txt")
BUDGET=4.00
def req(url, body=None, timeout=300, raw=False):
    r=urllib.request.Request(url,data=json.dumps(body).encode() if body is not None else None,headers=H,method="POST" if body is not None else "GET")
    with urllib.request.urlopen(r,timeout=timeout) as x: return x.read() if raw else json.load(x)
def usage(): return req("https://openrouter.ai/api/v1/key")["data"]["usage"]
if not os.path.exists(BASEF): open(BASEF,"w").write(str(usage()))
BASE=float(open(BASEF).read())
def spent(): return usage()-BASE
def guard(need):
    s=spent()
    if s+need>BUDGET: raise SystemExit(f"BUDGET STOP spent ${s:.3f}+{need}>{BUDGET}")
def log(kind,model,out,cost,secs,note=""):
    with open(LEDGER,"a",newline="") as f: csv.writer(f).writerow([datetime.datetime.utcnow().isoformat(),kind,model,out,cost,round(secs,1),note])
def b64(p):
    mt='image/jpeg' if p.lower().endswith(('jpg','jpeg')) else 'image/png'
    return f"data:{mt};base64,"+base64.b64encode(open(p,'rb').read()).decode()
def save_img(item,out):
    if item.get("b64_json"): open(out,"wb").write(base64.b64decode(item["b64_json"])); return True
    u=item.get("url") or (item.get("image_url") or {}).get("url")
    if not u: return False
    if u.startswith("data:"): open(out,"wb").write(base64.b64decode(u.split(",",1)[1]))
    else: open(out,"wb").write(urllib.request.urlopen(urllib.request.Request(u,headers={"Authorization":"Bearer "+K}),timeout=120).read())
    return True
def img_api(model,prompt,out,refs=(),aspect="3:4",extra=None,est=0.06):
    guard(est); t=time.time()
    body={"model":model,"prompt":prompt,"aspect_ratio":aspect}
    if refs: body["input_references"]=[{"type":"image_url","image_url":{"url":b64(r)}} for r in refs]
    if extra: body.update(extra)
    try: d=req("https://openrouter.ai/api/v1/images/generations",body,timeout=300)
    except urllib.error.HTTPError as e:
        msg=e.read()[:400].decode(errors='ignore'); print(out,"HTTP",e.code,msg,flush=True); log("img",model,out,None,time.time()-t,"ERR "+msg[:120]); return None
    it=(d.get("data") or [{}])[0]
    if not save_img(it,out): print(out,"unexpected",json.dumps(d)[:300]); log("img",model,out,None,time.time()-t,"noimg"); return None
    c=(d.get("usage") or {}).get("cost"); print(out,"ok cost",c,"t",round(time.time()-t,1),flush=True); log("img",model,out,c,time.time()-t); return out
def img_chat(model,prompt,out,refs=(),aspect="3:4",est=0.06):
    guard(est); t=time.time()
    content=[{"type":"text","text":prompt}]+[{"type":"image_url","image_url":{"url":b64(r)}} for r in refs]
    body={"model":model,"messages":[{"role":"user","content":content}],"modalities":["image","text"],"image_config":{"aspect_ratio":aspect}}
    try: r=req("https://openrouter.ai/api/v1/chat/completions",body,timeout=300)
    except urllib.error.HTTPError as e:
        msg=e.read()[:400].decode(errors='ignore'); print(out,"HTTP",e.code,msg,flush=True); log("img",model,out,None,time.time()-t,"ERR "+msg[:120]); return None
    imgs=r['choices'][0]['message'].get('images') or []
    if not imgs: print(out,'NO IMAGE',json.dumps(r)[:300]); log("img",model,out,None,time.time()-t,"noimg"); return None
    save_img(imgs[0],out); c=r.get('usage',{}).get('cost'); print(out,"ok cost",c,"t",round(time.time()-t,1),flush=True); log("img",model,out,c,time.time()-t); return out
def video(model,prompt,out,first,duration=5,resolution="480p",aspect="3:4",est=0.4,extra=None):
    guard(est); t=time.time()
    body={"model":model,"prompt":prompt,"duration":duration,"resolution":resolution,"aspect_ratio":aspect,
          "frame_images":[{"type":"image_url","image_url":{"url":b64(first)},"frame_type":"first_frame"}]}
    if extra: body.update(extra)
    try: j=req("https://openrouter.ai/api/v1/videos",body)
    except urllib.error.HTTPError as e:
        msg=e.read()[:500].decode(errors='ignore'); print(out,"HTTP",e.code,msg,flush=True); log("vid",model,out,None,0,"ERR "+msg[:160]); return None
    jid=j["id"]; print("job",out,jid,flush=True)
    for i in range(100):
        time.sleep(10); s=req(f"https://openrouter.ai/api/v1/videos/{jid}")
        if s["status"]=="completed":
            open(out,'wb').write(req(s["unsigned_urls"][0],raw=True,timeout=600))
            c=(s.get("usage") or {}).get("cost"); print("vid ok",out,"cost",c,"t",round(time.time()-t),flush=True); log("vid",model,out,c,time.time()-t,json.dumps(s.get("usage"))[:100]); return out
        if s["status"] in("failed","cancelled"): print("FAILED",out,s.get("error"),flush=True); log("vid",model,out,None,time.time()-t,"FAIL "+str(s.get("error"))[:150]); return None
    print("TIMEOUT",out); log("vid",model,out,None,time.time()-t,"timeout"); return None
