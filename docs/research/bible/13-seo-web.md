# 13. SEO and web for Digi (digi.pink): demand, who ranks, free tools, Pinterest, AI search, Arabic, site map

**Written:** Nov 17, 2026. **Builds on:** `digi-deep-2026-11/11-web-seo.md` (Nov 16). That file covers share pages, deep links, tool build specs and technical SEO in detail. This chapter does not repeat those specs. It adds **real search volumes** (the earlier file only had autocomplete counts), new Google Trends pulls, competitor web data, an AI-search test, Pinterest rules, Arabic and Egyptian terms, and a final site map with the first 15 pages. Section 9 lists what I corrected.

**Labels:** **V** = I pulled or read it myself on Nov 16–17, 2026. **C** = someone else's claim that I did not re-check. **E** = my estimate. Confidence is high / med / low.

**Raw data:** `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/seo13/` (`sd.json`, `api/*.json` = search volumes; `gt/*.json` = Google Trends; `ar.json`, `ar2.json`, `yt.json`, `egen.json` = autocomplete; `tranco/` = site ranks).

---

## Key takeaways

1. **The demand is in "photo booth", not "digicam filter".** In the US, "online photo booth" gets ~2,900 searches a month, "photo booth template" ~2,400 and "photo strip template" ~1,900. "Digicam filter" gets only ~140 and "photo strip maker" ~140 (V, Google Ads data via seodata.dev, Nov 2026, med confidence). The earlier plan ranked the strip maker and digicam filter first. That order was wrong (section 9).
2. **The best single web tool is a free webcam photo booth** at `digi.pink/photo-booth`. Its keyword family adds up to roughly **7,000 US searches a month** plus ~2,800 in the UK (E, summed from V volumes; close variants overlap, so med confidence).
3. **Timing beats keywords this season.** "Christmas photo booth" peaked in the week of **Nov 30–Dec 6** last year. "Photo dump captions" peaked **Dec 28–Jan 3**. "Online photo booth" peaked **Jan 18–24**. "Photo strip" peaked in **mid-April** (prom) (V, Google Trends US). Pages must be live 3–6 weeks before each peak.
4. **Google SEO will make little money inside the contest window** (Nov 16–Dec 16). A new domain usually needs weeks to rank. Budget for **0–1,500 Google visits in total before Dec 16** (E, low confidence). The web still matters for the contest because of share pages, Pinterest, and people who see Digi on TikTok and then search for it.
5. **New sites can rank fast in this niche.** `digicamfilter.com` was registered on **Oct 25, 2026** and already shows up in search results for "digicam filter online free" three weeks later. `madegooddesigns.com` (registered Mar 2026) climbed from Tranco rank ~2.14M to ~859K in one month (V, RDAP + Tranco). The field is open, but tools are easy to copy.
6. **For "which app" questions, AI search engines mostly cite App Store pages.** In my test, 17 of 18 links behind "best app to make iPhone photos look like a 2000s digital camera" were App Store listings (V, Nov 17). So the App Store description is our main AI-search copy. For "what is / how to" questions, they cite blog-style pages, including small new sites.
7. **AI-trend searches die fast.** "AI yearbook", "AI photo booth" and "AI polaroid" each spiked for 2–4 weeks in 2026, then fell 75–90% (V, Trends). Build an AI-trend page only while a trend is live, and fold it into a hub afterwards.
8. **Arabic is a trap if done literally.** In Egypt "فلتر" (filter) autocompletes to water filters. "فوتو بوث" autocompletes to Saudi event rentals. The real Arabic demand is **"ترند الصور بالذكاء الاصطناعي"** (AI photo trends, ~720/mo in Egypt) and **Dazz Cam**, ~3,600/mo in Egypt, with "مهكر" (cracked) at ~880/mo. That is a sign of low willingness to pay (V, med). Arabic pages come after Dec 16 and aim at the Gulf.
9. **Pinterest labels AI images "AI modified"** and announced a "see fewer AI pins" control (C, Pinterest, Apr 30, 2025; rollout date unconfirmed). Pins should lead with **free templates, poses and real strip layouts**, with AI before/afters as a minority.
10. **We have no backlink data.** The Ahrefs and Similarweb connectors in this workspace need the owner to authorize them (claude.ai → Settings → Connectors). Public Tranco ranks are used below as a rough popularity signal only.

---

## 1. How much people search: real volumes

### 1.1 Method
- **Volumes:** Google Ads monthly averages for the last 12 months, read from **seodata.dev**. I used the public keyword pages (data dated 2026-11-09) and its free anonymous API (19 calls, Nov 17). Google Ads rounds volumes into buckets (90, 140, 390, 720, 1,300, 1,900, 2,400, 2,900, 4,400…). Treat each number as "about this size", not exact. **Confidence: med.**
- **Trends:** Google Trends explore API, US and worldwide, weekly, "today 12-m" and "today 5-y", pulled Nov 17, 2026. One term ("photo strip") sits in every 12-month US chart, so the indices compare across tables. **Confidence: high** for shape and timing, **low** for converting to absolute numbers.
- **Autocomplete:** Google suggest (web, YouTube) in English (US, Egypt) and Arabic (`hl=ar&gl=eg`). The proxy's IP seems to set the location, so country-specific results are partly unreliable (the Arabic photo-booth suggestions came back Saudi-flavoured).
- **Not used:** Pinterest's typeahead endpoint returned 403. I did not try to get around it.

### 1.2 US monthly searches by cluster (V via seodata.dev, Google Ads 12-month average, Nov 2026)

**A. Webcam booth (tool intent): the biggest tool cluster**
| Query | US / mo | Note |
|---|---|---|
| online photo booth | 2,900 | CPC $4.02 |
| photo booth online | 2,900 | same intent |
| picture booth online | 2,900 | close variant |
| photobooth online | 1,600 | |
| digital photo booth | 1,600 | mixes rental intent |
| photo booth website / photo booth web | 1,300 each | |
| photo booth online free | 140 | |
| online photo booth (UK) | 1,300 | UK "online photobooth" 1,000; "digital photo booth" 480 |

**B. Templates and strips (download intent)**
| Query | US / mo |
|---|---|
| photo booth template(s) | 2,400 |
| photo strip / photo booth strip | 2,400 each |
| photo strip template | 1,900 |
| photo booth strip template(s) | 1,900 |
| printing photo strips | 880 |
| photobooth pictures template | 390 |
| photo booth layouts | 140 |
| **photo strip maker** | **140** |
| photo booth strip maker | 70 |
| photo strip maker online free | 40 |

**C. Filters and looks**
| Query | US / mo | Note |
|---|---|---|
| camera filters free / free camera filters | 4,400 | broad; many want Snapchat-style filters |
| vintage filter camera | 2,900 | |
| camera filter online | 1,900 | |
| online camera with filters | 1,600 | |
| digital camera filter | 1,300 | |
| camera aesthetic | 1,300 | |
| y2k camera / y2k cam | 880 | many want to **buy** a camera |
| aesthetic camera | 720 | |
| digital camera aesthetic | 480 | |
| y2k filter | 390 | spiky (Trends spike Apr 5–11, 2026) |
| digital camera effect / digital camera filter app | 170 each | |
| **digicam filter** | **140** | UK: 0 |
| digicam aesthetic | 90 | |
| y2k photo filter / y2k camera filter | 50 each | |
| flash filter | 110 | mostly "flash filtration"; not our intent |

**D. Date stamp**
| Query | US / mo |
|---|---|
| time stamp photos | 390 |
| how to add timestamp to photos | 140 |
| how to add date to photo | 110 |
| add date to photo | 90 |

The bare "date stamp" term is mostly office rubber stamps. YouTube suggests "date stamp machine", "date stamp gun" and "date stamp on tires" (V). The date stamp should be a **switch inside the camera filter tool**, not its own priority page.

**E. Ideas, poses, captions (inspiration intent, Pinterest-friendly)**
| Query | US / mo |
|---|---|
| photo dump | 8,100 |
| photo dump captions | 6,600 |
| photo booth poses | 2,400 |
| photo booth ideas | 1,900 |
| photo dump meaning | 1,600 |
| instagram dump captions | 720 |
| christmas photo booth / xmas photo booth | 720 |
| christmas photo booth ideas | 480 |
| photo booth pose ideas | 480 |
| cute photo booth poses | 320 |
| party photo booth ideas | 260 |
| christmas party photo booth ideas | 70 |

**F. Apps (navigational and comparison intent)**
| Query | US / mo | Note |
|---|---|---|
| digicam | 12,100 | mostly people shopping for real cameras |
| digi cam | 6,600 | |
| photo booth app | 5,400 | many want iPad booth software for events |
| dazz cam | 4,400 | biggest retro-cam brand search |
| disposable camera app | 1,600 | **our "rolls" feature** |
| disposable camera app for events | 320 | |
| digital disposable camera app | 170 | |
| free disposable camera app | 90 | |

**G. AI-trend terms**
| Query | US / mo (12-mo avg) | Trend shape |
|---|---|---|
| ai yearbook | 1,900 | peak Mar 15–21, 2026; last 4 weeks at ~25% of peak |
| ai 90s yearbook | 1,300 | same trend |
| ai photo booth | 1,000 | CPC **$12.89**, because it is mostly event-rental businesses ("ai photo booth rental" 590) |
| ai polaroid | 0 (Ads) | Trends shows a real spike (Jun 28–Jul 4). Ads probably files it under other phrases. Low confidence |

**H. Head terms (context)**
- "photo booth": **110,000**/mo, mostly local and rental.
- "polaroid frame": 12,100/mo, mostly physical frames ("mini polaroid frame", "polaroid frame size" top the Trends related list).
- "digital camera": 368,000/mo.
These are not Digi targets. They show where the crowd is.

### 1.3 One scale for everything: Google Trends US, last 12 months (V, Nov 17)
Each chart includes "photo strip". Numbers are the 52-week average on a 0–100 scale where 100 = "photo strip" in its busiest week.

| Term | 12-mo avg | Last 4 weeks | Peak week |
|---|---|---|---|
| photo strip (anchor) | 54.8 | 47.0 | Apr 12–18, 2026 |
| photo dump | 39.7 | 43.0 | Dec 28, 2025–Jan 3, 2026 |
| digicam | 38.0 | 41.2 | Mar 29–Apr 4, 2026 |
| polaroid frame | 22.5 | 16.8 | Apr 12–18, 2026 |
| film camera app | 16.5 | 3.8 | May 31–Jun 6, 2026 |
| photo booth app | 15.8 | 11.0 | May 10–16, 2026 |
| ai yearbook | 15.6 | 3.8 | Mar 15–21, 2026 |
| y2k filter | 13.3 | 2.2 | Apr 5–11, 2026 (90) |
| ai photo booth | 12.8 | 2.5 | Apr 12–18, 2026 |
| photo booth ideas | 10.7 | 7.8 | Jan 18–24, 2026 |
| online photo booth | 9.2 | 4.8 | Jan 18–24, 2026 |
| ai polaroid | 9.1 | 1.2 | Jun 28–Jul 4, 2026 |
| dazz cam | 8.1 | 7.8 | May 17–23, 2026 |
| photobooth online | 7.2 | 6.0 | Jan 18–24, 2026 |
| photo dump captions | 6.8 | **10.0 (rising)** | Dec 28, 2025–Jan 3, 2026 |
| photo booth template | 5.7 | 2.0 | Jan 25–31, 2026 |
| disposable camera app | 3.7 | 3.2 | Apr 12–18, 2026 |
| christmas photo booth | 3.3 | **6.0 (rising)** | **Nov 30–Dec 6, 2025 (24)** |
| photo booth poses | 2.0 | 2.2 | Jun 21–27, 2026 |
| date stamp photo | 1.9 | 1.2 | Oct 18–24, 2026 |
| ai photo strip | 1.9 | 0.5 | Mar 1–7, 2026 |
| digicam aesthetic | 0.5 | 0.0 | — |
| digicam filter | 0.2 | 0.8 | — |
| flash photo effect | 0.2 | 0.5 | — |
| photo strip maker | 0.0 | 0.2 | — |

**What it means (E):**
- **Christmas week is the year's spike for booth templates.** Last year "christmas photo booth" jumped ~7× over its average in the first week of December. This year's line is already rising.
- **Photo dump captions peak on New Year's week.** That suits a "2026 photo dump" caption page plus Digi's "year in photos" angle.
- **"Online photo booth" peaks in late January.** The 5-year chart puts its all-time peak in Jan 18–24, 2026. The related queries suggest why: **"picapica" +200%** and **"vintage photo booth online" +800%** were rising (V). A viral web booth (PicaPica) created the spike. Valentine's and Galentine's planning lands in the same weeks.
- **Worldwide, "digicam" is at its 12-month high right now** (100 in the week of Nov 15–21, 2026) (V). Interest in the look is healthy. The search is about cameras, though, not filters.
- **AI-trend terms (y2k filter, ai yearbook, ai photo booth, ai polaroid) spike for 2–4 weeks, then lose 75–90%.** They are TikTok-driven. A page built after the spike gets the tail only.

### 1.4 Rising and breakout queries worth acting on (V, Trends related queries, Nov 17)
| Rising query | Change | What to do |
|---|---|---|
| stained glass photo strip frame | Breakout (US), +700% (WW) | Make a stained-glass frame preset and a free PNG (Christmas fits) |
| walgreens photo strip / walgreens photo strip print | +90 to +140% | Write a "print your strips at Walgreens/CVS" guide; export print-ready 4×6 sheets |
| photo strip size / photo strip printer | +50% | Strip size guide (2×6 in = 600×1800 px at 300 dpi) |
| vintage photo booth online | +800% (5-y) | Make "vintage" the default booth style |
| picapica | +200% (5-y) | Competitor (section 3) |
| once / scene / reveal disposable camera app | +1,600% / Breakout / Breakout | Competitors in shared rolls are getting branded search. An honest "best disposable camera apps for parties" comparison page |
| valentine photo booth ideas | +150% | Galentine's/Valentine's templates live by mid-January |
| how to do a photo dump on tiktok | +170% | Section on the photo dump captions page |
| halloween / fall / weekend / january photo dump captions | Breakout to +80% | Monthly caption sections; "january photo dump captions" is next |
| chroma vault digicam, sliding digicam, mini digicam | Breakout / +1,300% | People are buying cheap new "digicams". Our angle: "same look, no $60 camera" |
| getangie photobooth (WW) | Breakout | Another web booth riding the same wave |

### 1.5 What YouTube autocomplete adds (V, Nov 17)
- **Editing-tool intent:** "digicam filter capcut / lightroom / snapchat", "digicam effect premiere pro / after effects / davinci", "y2k filter capcut / photoshop / lightroom".
- **How-to intent:** "how to make photos look like **digital camera / 2000s / disposable camera / film on iphone**".
- **Party intent:** "disposable camera app for wedding", "pov disposable camera app", "lapse disposable camera app", "best disposable camera app".
- **Booth content intent:** "photo strip tutorial canva", "photo strip instagram story", "photo booth first kiss", "photo booth couple".
- **Meaning:** Short how-to videos on YouTube Shorts ("digicam look on iPhone in 10 seconds") can rank in YouTube search, which Google often shows as a video block. These are cheap to make from screen recordings.

---

## 2. Who ranks now

### 2.1 Search-result snapshot (V, Nov 17, via Claude's web search tool; a US index, **not** Google's exact order)
| Query | What shows up | Weak spot to attack |
|---|---|---|
| digicam filter online free | DigicamFilter (AlternativeTo), Pokecut (test subdomain), WeShop AI (several blog posts), Media.io (6 language copies), ProductHunt "Digital Camera Filter" | Mostly AI-credit tools with watermarks or credits. Few show real before/afters. Several pages look spammy |
| photo strip maker online free | FlexClip (video), Templated, onaircode, PicaPica blog, CapCut/Pixlr/Fotor/Kapwing/Canva **collage** pages, madegooddesigns | Big brands rank with **collage** pages, not strip pages. A real strip tool with frames can beat them |
| online photo booth free webcam 4 cut | Framer hackathon entry, BeautyPlus, CapCut templates, Wavespeed (2 URLs), madegooddesigns, Teamzlab, Floot, Dreamina, FlexClip, orangebot.ai, "5 online photo booth websites" listicle | Crowded, but mostly side tools on AI-model sites. No one combines booth + good templates + app |
| add date stamp to photo online | Cloudinary, Fotor, imageonline, CapCut, Pixelbin, DateStamper app, timemark | Generic stamps. No "orange 2000s digicam stamp" look |
| y2k photo filter online free flash | Pokecut, Dreamina, Fotor "Instagram flash filter", WeShop, Media.io, Wondershare | All AI-credit generators |
| what is the digicam aesthetic | kfconcept, a **pages.dev** blog, VSCO Learn, Frankie, Payhip blog, Phlearn, **wayshot.ai blog**, YouCam, plus 4 obvious spam "parasite" pages | Thin. A good explainer with real comparisons can be cited |

### 2.2 Competitor web footprint (V: RDAP registration dates, Tranco ranks for Nov 16, 2026, public sitemaps)
**Tranco** blends several traffic and popularity lists. Lower is more popular; top sites are under 1,000. It is a rough signal, not visits. **Confidence: low for traffic, med for "big vs small".**

| Site | What it is | Registered | Tranco (Nov 16) | 30 days earlier | Indexable pages (sitemap) |
|---|---|---|---|---|---|
| canva.com | Design (collage pages rank) | old | 296 | 244 | huge |
| capcut.com / dreamina | Editor + AI (prompt pages) | old | 534 | 540 | huge |
| cloudinary.com | Free image tools | old | 795 | 880 | huge |
| picsart.com | Editor + caption blog | old | 4,226 | 4,537 | huge |
| pixlr.com | Collage tool | old | 7,374 | 7,151 | huge |
| fotor.com | Date stamp, flash filter pages | old | 14,259 | 14,123 | huge |
| kapwing.com | Polaroid templates | old | 21,869 | 22,576 | huge |
| media.io | AI filter pages in ~7 languages | old | 32,699 | 33,281 | large |
| wavespeed.ai | AI model host; free booth tool | — | 38,795 | 46,187 | sitemap index |
| beautyplus.com | 4-cut web booth + app funnel | old | 49,410 | 49,201 | large |
| weshop.ai | AI digital camera filter + blog | — | 62,524 | 62,016 | large |
| webcamtoy.com | Old webcam effects site | old | 69,393 | 67,889 | small |
| shotkit.com | Caption lists | old | 132,138 | 132,088 | large |
| floot.com | Retro arcade booth | — | 220,871 | 353,044 | — |
| imageonline.co | Date stamp tool | — | 284,308 | 271,005 | — |
| wayshot.ai | **WayShot app** (US #28 top-grossing photo, per README) | — | 302,499 | — | has a blog |
| pokecut.com | AI filters (test subdomain ranks) | — | 345,795 | 164,652 | — |
| checkcherry.com | Booth-business templates | — | 450,454 | 459,007 | — |
| pov.camera | **POV** shared-camera app (15,701 US ratings) | — | 560,771 | — | 29 |
| hipstamatic.com | Hipstamatic | old | 575,513 | 563,205 | — |
| **madegooddesigns.com** | Web booth + strip frame | **2026-03-26** | **858,590** | **2,139,884** | blocked (403) |
| lense.app | **Lense** event camera app | 2022-11-14 | 1,181,438 | 1,187,873 | **65** |
| snapbar.com | Event booth company ("AI group photos") | — | 1,388,935 | — | — |
| templatesbooth.com | Booth templates | — | 1,426,428 | 1,328,171 | 5 post sitemaps |
| teamzlab.com | Free web booth | — | 1,518,687 | 1,780,444 | — |
| dazz.ltd | Dazz Cam (118,170 US ratings) | — | 1,975,236 | — | — |
| onaircode.com | Strip maker | 2017-07-11 | 2,423,641 | 2,293,147 | blocked (403) |
| picapicaphoto.com | **PicaPica** web booth | **2025-04-26** | not in list | — | **660** |
| digicamfilter.com | Web filter + styles | **2026-10-25** | not in list | — | **32** |
| digicamfx.app | Web filter | 2026-01-27 | not in list | — | 5 |
| party.camera, esti.app, tezza (no site in App Store record), huji.cam, nomo.cam, retrica.co | apps | — | not in list | — | — |

**Patterns (E):**
1. **The retro-cam apps barely do SEO.** Dazz Cam has 118K US ratings but a site ranked ~2M. Tezza and Esti have no ranked site. They grow on TikTok and the App Store, not Google. Web SEO is an open lane, but it is a **side** channel in this category.
2. **The web booths that won did one thing well and translated it.** PicaPica's sitemap has **44 page types × 15 languages = 660 URLs**: 26 frame pages (y2kRetro, kpopVibes, japanesePurikura, retroWave…), 8 blog posts and the tool pages, in zh, ja, ko, es, fr, de, it, ru, pt, vi, id, **ar**, th and English. Its brand became a rising Google query.
3. **DigicamFilter shows the "look pages" model** we planned. It has 11 `/styles/` pages (y2k-compact-digicam, ccd-night-flash, photobooth-strip, disposable-camera, 2000s-date-stamp…), 2 `/compare/` pages, 2 `/guides/` (iPhone, Samsung), 2 keyword landers (`/ccd-camera-filter`, `/y2k-camera-filter`) and 4 blog posts. That is 32 URLs total, and it was registered 3 weeks ago. Expect clones. We win on **AI before/afters and the app**, not on filter code.
4. **Lense is the model for the "rolls" feature.** It has use-case pages (`/disposable-camera-app-for-parties`, `-for-weddings`, `-for-vacations`), a comparison page (`/disposable-camera-app-vs-physical-cameras`), "best X apps" listicles (`/blog/best-disposable-camera-apps`, `/blog/best-party-photo-sharing-apps`), four "alternative to [competitor]" posts, a free `/qr-code-generator`, and 4 languages (nl, de, es). Its own `/disposable-camera-app-for-parties` page was cited in the AI-search answer (section 5).
5. **Big AI sites rank with thin AI-credit pages in many languages** (Media.io, WeShop, Dreamina). They are beatable on usefulness, but not on authority for broad head terms.

### 2.3 Backlinks: what we could not get
- I found no free, login-free source of backlink counts. Ahrefs, Semrush and Similarweb need logins. The Wayback Machine refused connections from this environment.
- **Fix:** this workspace already lists **Ahrefs** and **Similarweb** connectors (marketing plugin) that need authorization. If the owner authorizes them in **claude.ai → Settings → Connectors**, the next session can pull referring domains for picapicaphoto.com, digicamfilter.com, madegooddesigns.com and lense.app. Never paste keys into chat.
- **Where small competitors probably get links (E, from what shows in results):** AlternativeTo listings (DigicamFilter, LensBooth), Product Hunt pages ("Digital Camera Filter", "disposable 3"), "5 online photo booth websites" listicles (ilovefreesoftware), Peerlist/Framer showcase pages, and Reddit threads. All are free to get. Section 8 lists them as tasks.

---

## 3. Free browser tools as SEO magnets: re-ranked with real volumes

The earlier file has the build specs (canvas, WebGL, HEIC handling, export, watermark switch). This section re-ranks the tools with real demand and adds what each one must do to beat the current results.

| Rank | Tool and URL | US demand it targets (V volumes) | Who it must beat | Must-have to win | Build effort (E) |
|---|---|---|---|---|---|
| **1** | **Online photo booth** `/photo-booth` | online photo booth 2,900 · photobooth online 1,600 · photo booth website 1,300 · digital photo booth 1,600 · UK ~2,800 | PicaPica, madegooddesigns, Wavespeed, BeautyPlus, Teamzlab, Floot | Webcam 3/4-shot strip, **vintage style by default**, un-mirrored output, 10+ frames incl. Christmas, NYE and stained glass, print-ready 4×6 sheet, works on iPhone Safari, nothing uploaded | 2 days |
| **2** | **Templates library** `/photo-booth/templates` (+ one page per occasion) | photo booth template 2,400 · photo strip template 1,900 · photo booth strip template 1,900 · christmas photo booth 720 | Canva, TemplatesBooth, CheckCherry, Etsy | Free transparent PNG **and** "use in the booth" button; sizes 2×6 and 4×6; no email gate | 1 day + art |
| **3** | **Camera filter** `/camera-filter` (date stamp is a switch) | vintage filter camera 2,900 · camera filter online 1,900 · digital camera filter 1,300 · time stamp photos 390 · y2k filter 390 · digicam filter 140 | DigicamFilter, Pokecut, WeShop, Media.io, Fotor | On-device, no credits, real **before/after per preset**, orange 2000s date stamp, and a "see the AI version" comparison | 2–3 days |
| 4 | **Strip size and print helper** (inside a guide, not a separate tool) | printing photo strips 880 · photo strip size (rising) · walgreens photo strip (rising) | Walgreens/CVS pages, blogs | Exports a 4×6 sheet with 2 strips and a cut line; answers "will Walgreens print it" honestly | 0.5 day (part of tool 1) |
| 5 | Polaroid frame maker `/polaroid-frame` | polaroid frame 12,100 (mostly physical), "polaroid frame template / transparent" | Kapwing, Adobe Express, Cloudinary | Mini/square/wide, handwritten caption, transparent PNG | 1 day, **after Dec 16** |
| — | Photo dump planner | photo dump 8,100 (meaning/caption intent, not tool intent) | Canva, CapCut | Low tool intent. Do the **captions page** instead | skip for now |
| — | Standalone date-stamp tool | add date to photo 90 | Cloudinary, Fotor | Too small alone | merged into 3 |

**Why the booth is #1 (E):**
- It has the most tool-intent demand.
- Its January peak lands right after the contest. A page live by early December can be indexed and earn links before then.
- It is the closest web match to the app. "You just made a strip. Want the AI party version with your whole group?" is a natural next step.

**Conversion expectations for the tools (E, low confidence; no public benchmark found for web tool → iOS install):**
- Tool users who export: 30–50%.
- Exporters who tap the app button: 3–8%.
- App Store page visits that become installs: 25–40%.
- So 1,000 tool visits ≈ **4–16 installs**. That is useful over months. It is small inside the contest window.

---

## 4. Programmatic SEO: what to scale and what not to

### 4.1 Page families that can scale honestly
Google's spam policy targets pages "generated… without adding value… no matter how it's created" (V, earlier file). Each family below has a **real, unique asset** per page. That asset is what separates it from spam.

| Family | URL pattern | Count | Unique asset per page | Example keywords | When |
|---|---|---|---|---|---|
| Occasion templates | `/photo-booth/templates/<occasion>` | 12 | 3 frame designs (PNG + booth preset), pose list, real example strips | christmas photo booth (720), birthday, graduation, prom, wedding, galentines, bachelorette, sweet 16, NYE, friendsgiving, halloween (next year), valentines | Christmas + NYE now; Galentine's and Valentine's by Jan 10; prom and grad by Feb 15 |
| Looks | `/looks/<look>` | 10–14, hard cap 20 | 3+ before/afters (AI-made fictional people or consenting people), the filter recipe, "best for" occasions, the deep link to the look in the app | digital camera aesthetic (480), y2k camera (880), "2000s party flash", "black and white photo booth" | 3 at launch, +2 a week |
| Captions | `/captions/<occasion>` | 6–8 | 40+ written captions, grouped, short; a matching strip example | photo dump captions (6,600), christmas/NYE/january/birthday/graduation photo dump captions | Photo dump hub now; January by Dec 20 |
| Guides | `/guides/<topic>` | 8–10 | Step-by-step screenshots made by us | how to make photos look like a digital camera on iPhone, photo strip size, print photo strips at Walgreens, photo booth not inverted | 2 before exams, rest after |
| Comparisons | `/best/<topic>`, `/compare/<a>-vs-<b>` | 3–5 | Our own hands-on test table, with dates | best disposable camera apps for parties, digicam filter vs AI restyle, digicam vs film vs disposable look | 1 before exams |
| AI-trend pages (timed) | `/trends/<trend>` | 1 at a time | The honest prompt **and** a one-tap version in the app | e.g. "ai yearbook" when it returns; "ترند الصور" in Arabic | Only within 72 h of a trend starting; merge into a hub after |

### 4.2 Do not build
- **City pages** ("photo booth Miami"). Local rental intent we can't serve. Doorway risk.
- **"[Brand] filter" pages** ("Canon G7X filter", "Dazz Cam filter"). Trademark risk and weak fit. The earlier rule stands: brand names only in body text, and only where truthful.
- **Auto-translated copies of every page.** PicaPica's 15-language model works for a **tool** with little text. For Digi, translate only the booth and camera-filter tool pages into Spanish, Portuguese, Vietnamese, Indonesian and Arabic, and only after Dec 16 (E). Non-English traffic converts to iOS subscriptions poorly.
- **Prompt pages for every AI trend.** Most trends are dead within 3 weeks (section 1.3).

### 4.3 Internal links (the short rule)
- Every tool page links to its 3 matching looks, the current seasonal template, and one guide.
- Every template page links to the booth (with that preset), the captions page for the same occasion, and the app look.
- Every page has one app call to action through `/go/<placement>` (see the earlier file, section 6).

---

## 5. AI search (ChatGPT, Perplexity, Google AI Overviews)

### 5.1 How big it is (C, 2026 studies)
- **Clicks are leaking.** Ahrefs' updated study (December 2025 data) links AI Overviews to a **58% lower CTR for the #1 result** (earlier version: −34.5%) ([Ahrefs](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update)). Pew (2025): users clicked a result 8% of the time when an AI summary appeared vs 15% without (C, via secondary coverage).
- **AI referrals are still small.** SE Ranking puts AI referral traffic at **0.32% of all website traffic in 2026**, up from 0.02% in 2024, with ChatGPT about 75% of it ([SE Ranking](https://seranking.com/blog/ai-traffic-research-study/)). A BrightEdge study puts Google at 86.9% of site traffic vs 1.9% for AI services ([MediaPost](https://www.mediapost.com/publications/article/414195/)).
- **Meaning for Digi (E):** Being cited in AI answers is cheap brand exposure, but it won't drive installs on its own in 2026. Google, Pinterest and the App Store still matter more.

### 5.2 My test: what AI search cites in this niche (V, Nov 17, 2026)
I asked six buyer-style questions through Claude's own web search tool. This is **one** AI search engine, so treat it as a proxy. I could not query ChatGPT or Perplexity from here.

| Question | What the answer was built from |
|---|---|
| "best app to make iphone photos look like a 2000s digital camera" | **17 of 18 links were App Store listings** (digital camera filter, y2k: 2000s photo editor, Retrica, 2000s Camera, CoreCam, 2006CAM, y2kam). Prices and features were quoted straight from the listings |
| "best disposable camera app for parties guests share photos" | App Store (Once, Lense, Party!, PartyCam, Keeps), **lense.app's own use-case page**, PetaPixel review, Product Hunt |
| "app that turns group party photos into a photo booth strip with AI" | App Store (Best Memories: AI Event Photos, Pocketbooth, Curator Live), Snapbar, Aragon, YouCam blog, Dreamina, MockoFun, CyberLink blog |
| "how to make a photo strip on iPhone free" | Collage how-tos (Animaker, Macworld, phot.ai, Pixelcut), a **pages.dev** blog, and the PhotoJoiner App Store page. **No dedicated strip guide was cited**: a gap |
| "what is the digicam aesthetic and how to get it" | Small blogs, a **pages.dev** site, VSCO Learn, **WayShot's blog**, plus several spam pages |
| "digicam filter online free" | AlternativeTo listing, ProductHunt, vendor tool pages |

**Lessons (E, med confidence):**
1. **The App Store listing is our most important AI-search page.** Engines quote its first lines, its price and its feature list. The App Store description needs plain, quotable sentences, e.g.: "Digi turns your party photos into 2000s digicam shots with flash and a date stamp. Free looks run on your phone. AI group strips and shared party rolls are paid." This belongs in the ASO chapter, but it is an SEO decision too.
2. **Small, new sites get cited for "what is / how to" questions.** A plain explainer page can be cited within weeks. Write the first 50 words of each guide as a direct answer.
3. **Comparison and listicle pages get cited for "best app" questions.** Lense owns that pattern for party cameras. We need our own honest `/best/disposable-camera-apps-for-parties`, including competitors and saying where they are better.
4. **Third-party listings feed the answers.** AlternativeTo, Product Hunt and PetaPixel all appeared. Listing Digi on AlternativeTo and Product Hunt costs nothing.

### 5.3 AI-search checklist (adds to the earlier file's section 5)
- [ ] In Cloudflare → AI Crawl Control, allow the search/answer bots (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Google, Bingbot). Training bots are the owner's call.
- [ ] Bing Webmaster Tools on day 1 (ChatGPT search leans on Bing, C) and IndexNow on.
- [ ] Each guide opens with a 40–60 word answer, then a table.
- [ ] Each look page has a one-line definition people can quote ("The 2000s party flash look is…").
- [ ] Every claim with a number links to its source, and every page shows "Updated <date>".
- [ ] `llms.txt` listing tools, looks and guides (10 minutes; no proven traffic effect, C).
- [ ] AlternativeTo, Product Hunt, Peerlist and Framer-community listings for the web booth (free links that AI engines read).

---

## 6. Pinterest SEO

### 6.1 Why it matters more than Google for December
- Pinterest is a search engine for "ideas" and "templates". Those two clusters add up to ~11,000 US Google searches a month (photo booth ideas, poses, templates; V), and Pinterest is where many of them end.
- Pins can show up in Pinterest search within days. Google takes weeks for a new domain (E).
- Pinterest users plan holidays early, so December pins should be live in November (C, Pinterest; earlier file).
- **Pinterest Predicts 2027** should come out in early December 2026; the 2026 edition was published Dec 9, 2025 ([Axios](https://axios.com/2025/12/09/2026-pinterest-trend-report), C). Check it for booth, flash or 2000s trends the day it comes out.

### 6.2 Rules that changed
- **AI labels:** since Apr 30, 2025, Pinterest labels AI-generated or AI-edited image pins "AI modified". It detects them from metadata and classifiers. In the same post Pinterest said a "see fewer" control for Gen-AI pins would come "soon", starting in categories like beauty and art; I found no dated launch for it ([TechCrunch](https://techcrunch.com/2025/04/30/pinterest-launches-new-tools-to-fight-ai-slop/), C, re-checked Nov 17).
  - **Meaning:** pins that are pure AI images may be shown less. Lead with **templates, pose guides, strip layouts and real-photo filter before/afters**. Keep AI before/afters to about 1 pin in 4 (E). Never strip AI metadata to dodge the label; that would be a dark pattern.
- **Text limits (C, several guides):** title up to 100 characters, but only about the **first 40 show** in the feed, so the keyword goes first. Description: use **500 characters** as the safe limit (one source reads 800 from the API spec). Alt text: 500. Use 2–5 hashtags at most, or none.

### 6.3 Ready-to-use pin titles (keyword first, under 40 characters for the visible part)
| Pin | Title | Links to |
|---|---|---|
| Template | "Christmas photo booth template (free PNG)" | `/photo-booth/templates/christmas` |
| Template | "NYE photo strip template, gold + glitter" | `/photo-booth/templates/new-years-eve` |
| Template | "Stained glass photo strip frame, free" | `/photo-booth/templates/christmas#stained-glass` |
| Poses | "Photo booth poses for 4 friends" | `/ideas/photo-booth-poses` |
| Poses | "Couple photo booth poses: 8 that work" | `/ideas/photo-booth-poses#couples` |
| Tool | "Free online photo booth, no app needed" | `/photo-booth` |
| Look | "2000s digicam party look: before/after" | `/looks/2000s-party-flash` |
| Captions | "Christmas photo dump captions (short)" | `/captions/photo-dump#christmas` |
| Guide | "Photo strip size: 2×6 in, 600×1800 px" | `/guides/photo-strip-size` |

**Boards (names are keywords):** Photo booth templates · Christmas party photo booth · New Year's Eve photo ideas · Photo booth poses · Digicam aesthetic · Photo dump captions · Galentine's party ideas · Prom photo ideas.

**Volume target (E):** 3 pins a day, made in batches and scheduled through **Dec 4** with Pinterest's own scheduler, so the exam weeks are covered.

---

## 7. Arabic and Egyptian search

### 7.1 What Egyptians actually type (V, autocomplete `hl=ar&gl=eg` and Google Ads volumes for Egypt, Nov 17)
| Arabic query | Meaning | Signal | Use? |
|---|---|---|---|
| فلتر … | "filter …" | Autocompletes to **water filters** (فلتر تانك، ٧ مراحل) | **No.** Never use "فلتر ديجيتال" as a keyword: it means a digital water filter |
| فلتر كاميرا ايفون / فلتر كاميرا قديمه / فلتر قديم للصور | iPhone camera filter / old camera filter / old filter for photos | Real but small | Yes, as the Arabic camera-filter page title |
| فلتر فلاش انستا / فلتر فلاش تيك توك / فلتر فلاش الترند | flash filter on Insta / TikTok / the trending flash filter | Suggested by autocomplete; volume too small to report | Yes, in the body text |
| برنامج dazz cam / تحميل برنامج dazz cam للاندرويد / dazz cam مهكر | Dazz Cam app / download for Android / **cracked** | dazz cam **3,600/mo** (EG); "تحميل … للاندرويد" 590; "مهكر" (cracked) **880** | Shows demand for the look, mostly **Android and piracy**. Weak for iOS revenue |
| ترند الصور بالذكاء الاصطناعي / ترند الصور الجديد / صور الترند | AI photo trend / the new photo trend / trend photos | 720 / 210 / 390 per month (EG) | **Best Arabic opening:** a timed "this week's photo trend" page that links to the app |
| ترند صور الثمانينات / برومبت | 80s photo trend / prompt | Autocomplete shows "ترند صور الثمانينات برومبت" and "برومبت جاهز للصور gemini" | Arabic users want ready prompts, mostly for free Gemini. Low pay, high reach |
| فوتو بوث / فوتوبوث | photo booth | 1,000/mo in **Saudi Arabia**; suggestions are rentals (Jeddah, Riyadh, Makkah, National Day) | Gulf event intent, not an app |
| فوتو بوث اونلاين | online photo booth | Autocompletes straight into English ("photo booth online kpop / vintage / long distance") | Yes: the Arabic booth page |
| photo booth (English, Egypt) | — | **2,400/mo** in Egypt; related: "online camera" 720, "camera online" 480 | Egyptians use the English term, often meaning "webcam online". The **English** booth page already serves them |
| صور الكريسماس ٢٠٢٦ / صور رأس السنة 2026 / صور الكريسماس بالذكاء الاصطناعي | Christmas 2026 pictures / New Year 2026 pictures / AI Christmas pictures | Strong seasonal autocomplete | Optional seasonal page for the Gulf and Levant |
| صور تخرج 2026 بنات محجبات | graduation photos 2026, girls in hijab | Autocomplete | Later: a respectful grad look (spring) |
| digicam egypt / photo booth mall of egypt / photo booth machine in egypt price | — | English, local shopping | Not our intent |

**Key reading (E, med confidence):**
1. **There is no Arabic word for "photo strip" or "digicam" that people search.** "شريط صور" (photo strip) leads to "شريط صور png" design assets. "ديجي كام" leads to DJI cameras.
2. **Arabic demand is trend- and prompt-driven** (Gemini trends), and price-sensitive (cracked Dazz Cam).
3. **Egypt is good for testing content and for creators (cheap reach). It is weak for subscription revenue.** The Gulf (UAE, KSA) is the Arabic market worth an iOS paywall. Arabic SEO is a **month-2 task**, not a contest task.

### 7.2 Arabic page plan (after Dec 16)
- `/ar` home in Modern Standard Arabic with light Egyptian wording in the hero. One site, with `hreflang="ar"` + `x-default`. The `dir="rtl"` rules match the Wird project.
- `/ar/photo-booth`: title "فوتو بوث اونلاين مجاني: صور ستريب بدون تطبيق" ("Free online photo booth: photo strips with no app").
- `/ar/camera-filter`: title "فلتر الكاميرا القديمة وفلتر الفلاش للصور، مجاناً" ("Free old-camera and flash filter for photos").
- `/ar/trends`: "ترند الصور الجديد" (this week's trend, the honest prompt, and the one-tap version in Digi), updated only when a trend is live.
- **Wording rule:** say "فلتر كاميرا" (camera filter) or "فلتر صور" (photo filter), never a bare "فلتر". Say "ستريب صور" or "صور فوتو بوث" for strips.

---

## 8. Site map for digi.pink and the first 15 pages

### 8.1 Site map
```
digi.pink/
├── /                                   Home: app pitch + 3 free tools + this week's looks
├── /photo-booth                        TOOL 1: free online photo booth (webcam, 3–4 shots)
│   └── /photo-booth/templates          Template library (PNG + "use in booth")
│       ├── /christmas                  (live by Nov 24)
│       ├── /new-years-eve              (Dec 3)
│       ├── /galentines  /valentines    (Jan 10)
│       ├── /birthday  /sweet-16        (Jan)
│       ├── /prom  /graduation          (Feb 15)
│       └── /wedding  /bachelorette     (Mar)
├── /camera-filter                      TOOL 2: 2000s camera filter + orange date stamp
├── /polaroid-frame                     TOOL 3 (after Dec 16)
├── /party                              Shared party rolls (app feature page)
├── /looks/                             Look hub (cap 20)
│   ├── /2000s-party-flash  /black-and-white-booth-strip  /christmas-party
│   ├── /new-years-glitter  /disposable-camera  /y2k-webcam  /paparazzi-flash …
├── /ideas/                             /photo-booth-poses  /christmas-party-photo-ideas  /nye-photo-ideas …
├── /captions/                          /photo-dump (with christmas, nye, january sections) …
├── /guides/                            /digicam-look-on-iphone  /photo-strip-size  /print-photo-strips
│                                       /photo-booth-not-inverted  /what-is-digicam-aesthetic
├── /best/                              /disposable-camera-apps-for-parties
├── /compare/                           /filter-vs-ai-restyle  /digicam-vs-film-vs-disposable
├── /trends/                            One live AI-trend page at a time, then merged
├── /ar/                                Arabic (after Dec 16): /ar/photo-booth  /ar/camera-filter  /ar/trends
├── /about  /press  /support  /privacy  /terms  /ai-images  /report
├── /s/<id>        share pages   (noindex, NOT blocked in robots.txt)
├── /go/<place>    tracked app links (disallowed in robots.txt)
└── go.digi.pink/l/<look>   universal links into the app
```
- Footer on every page: the 3 tools, looks, privacy, terms, report, and "AI images on this site are labelled."
- The contest's traffic tracker goes on every page and is named in the privacy notice (per the README's contest rules).

### 8.2 The first 15 pages: order, keywords, dates
Dates assume the owner builds from Nov 18. Pages 1–13 must be **written and live by Dec 4** (exams start Dec 5). Pages 14–15 can be drafted before exams and published on a schedule.

| # | URL | Main keywords (US/mo, V) | Why now | Live by | Title tag (≤60 chars) |
|---|---|---|---|---|---|
| 1 | `/` | brand; "digi cam app" (autocomplete, V); "pink digicam" | Catches people who saw Digi on TikTok. Carries the Smart App Banner | Nov 20 | Digi: 2000s party camera for iPhone |
| 2 | `/photo-booth` | online photo booth 2,900 · photobooth online 1,600 · photo booth website 1,300 · digital photo booth 1,600 | Biggest tool demand; January peak; needs time to index | Nov 22 | Free Online Photo Booth: 4-Shot Strips, No App |
| 3 | `/photo-booth/templates/christmas` | christmas photo booth 720 · christmas photo booth ideas 480 · "stained glass photo strip frame" (breakout) | Peak week was Nov 30–Dec 6 last year. Barely in time | **Nov 24** | Christmas Photo Booth Templates (Free PNG Strips) |
| 4 | `/photo-booth/templates` | photo booth template 2,400 · photo strip template 1,900 · photo booth strip template 1,900 | Hub that all occasion pages hang from | Nov 24 | Free Photo Strip Templates: 2×6 and 4×6 PNG |
| 5 | `/party` | disposable camera app 1,600 · for events 320 · digital disposable camera app 170 | Rivals (Once, Scene, Reveal) are rising. This is the page for TikTok and ad traffic before Christmas | Nov 26 | Party Camera App: Shared Rolls That Develop Overnight |
| 6 | `/camera-filter` | vintage filter camera 2,900 · camera filter online 1,900 · digital camera filter 1,300 · time stamp photos 390 · y2k filter 390 | Second tool; feeds the looks | Nov 28 | Free 2000s Camera Filter + Date Stamp (Online) |
| 7 | `/looks` | digital camera aesthetic 480 · aesthetic camera 720 · y2k camera 880 | Hub for share pages' "Try this look" | Nov 28 | Digicam Looks: Flash, Film, Y2K, Booth Strips |
| 8 | `/looks/2000s-party-flash` | "digicam aesthetic", "flash photo" (how-to intent) | Hero look; the model for all look pages | Nov 28 | 2000s Party Flash Look: Before/After + How |
| 9 | `/photo-booth/templates/new-years-eve` | NYE photo booth (narrow, V autocomplete), new years photo booth template | NYE is 2 weeks after Christmas. Must be indexed before Dec 31 | Dec 2 | New Year's Eve Photo Booth Templates (Free) |
| 10 | `/captions/photo-dump` | photo dump captions 6,600 · instagram dump captions 720 · christmas / NYE / january photo dump captions | Peak Dec 28–Jan 3. The term is rising now (10.0 vs 6.8 avg) | Dec 2 | Photo Dump Captions: Christmas, NYE, January |
| 11 | `/ideas/photo-booth-poses` | photo booth poses 2,400 · pose ideas 480 · cute poses 320 | Evergreen; strong on Pinterest | Dec 3 | Photo Booth Poses: 30 Ideas for Friends + Couples |
| 12 | `/guides/digicam-look-on-iphone` | "how to make photos look like digital camera / 2000s / disposable on iphone" (V autocomplete, YouTube) | AI engines cite small explainers | Dec 3 | How to Get the Digicam Look on iPhone (Free) |
| 13 | `/guides/photo-strip-size` | printing photo strips 880 · photo strip size (+50%) · walgreens photo strip (+140%) | Rising, easy to win, links to booth export | Dec 4 | Photo Strip Size: 2×6 in, Pixels, and How to Print |
| 14 | `/best/disposable-camera-apps-for-parties` | best disposable camera app (rising +60%), disposable camera app for wedding | AI engines cite listicles; Lense owns this pattern | Draft Dec 4, publish Dec 8 | Best Disposable Camera Apps for Parties (Tested) |
| 15 | `/looks/black-and-white-booth-strip` | photo booth strip, "black and white photo booth" | Second hero look; matches the booth tool | Draft Dec 4, publish Dec 10 | Black and White Photo Booth Strip Look |

**Next 10 (after Dec 16):**
- `/photo-booth/templates/galentines` and `/valentines` (by Jan 10; "valentine photo booth ideas" +150%)
- `/polaroid-frame`
- `/captions/photo-dump#january` refresh
- `/guides/print-photo-strips`
- `/compare/filter-vs-ai-restyle`
- `/guides/what-is-digicam-aesthetic`
- `/ar` + `/ar/photo-booth` + `/ar/trends`
- `/photo-booth/templates/prom` and `/graduation` (by Feb 15; "photo strip" peaks mid-April)

### 8.3 Copy blocks to reuse (plain, honest, no dark patterns)
- **Tool privacy line:** "Your photos never leave this page. Nothing is uploaded. Works with Wi-Fi off."
- **Booth → app:** "Nice strip. Want everyone in it restyled as a 2003 party pic? Digi does group strips with AI."
- **Filter → app:** "This is the filter version. Digi redraws the light: real flash, real 2000s skin, group shots too."
- **Watermark switch:** "Add a small digi.pink mark (helps us keep this free)" [on by default; one tap to turn off].
- **Template download:** "Free PNG. No email. Use it for anything, credit appreciated."
- **AI disclosure on looks:** "Example photos are AI-generated people, not real customers."

---

## 9. Corrections to the earlier web/SEO work

| # | Earlier claim (`digi-deep-2026-11/11-web-seo.md`, Nov 16) | Correction (Nov 17) |
|---|---|---|
| 1 | `/photo-strip-maker` was ranked the #1 page (win 8/10), based on autocomplete breadth | Real volume is ~140/mo for "photo strip maker". The demand sits in **online photo booth (~2,900) and strip/booth templates (~1,900–2,400)**. The strip maker is now a feature of `/photo-booth` and the templates, not a separate page |
| 2 | `/digicam-filter` was the second tool, targeting "digicam filter online free" | "Digicam filter" is ~140/mo in the US and 0 in the UK. Target **"vintage filter camera" (2,900), "camera filter online" (1,900) and "digital camera filter" (1,300)** with the URL `/camera-filter` |
| 3 | `/date-stamp` page with a win score of 8/10 | "Add date to photo" is ~90/mo and "time stamp photos" ~390. The bare "date stamp" is office stamps. The date stamp is a **switch inside `/camera-filter`**, with no separate page now |
| 4 | Autocomplete "breadth" (count of suggestions) was used as a demand signal | Breadth does not track volume. "Date stamp" had 235 suggestions but tiny photo intent. Use the Google Ads volumes in section 1.2 |
| 5 | AI-prompt pages (`/ai-prompts/*`) were ranked #8–10 for launch | Trends shows AI-trend searches lose 75–90% within weeks, and "ai photo booth" is mostly rental-business intent (CPC $12.89). Prompt pages are now **timed `/trends/` pages**, built only while a trend is live |
| 6 | Arabic/Egypt search was not measured | Measured (section 7). Bare "فلتر" means water filters. Arabic photo-booth searches are Saudi rentals. Arabic demand is AI-trend and prompt led, and moves to month 2 |
| 7 | Pinterest pins: mostly before/afters and strips | Pinterest labels AI pins and has announced a "see fewer" control (C; rollout date unconfirmed). Lead with templates, poses and layouts; AI before/afters about 1 in 4 |
| 8 | Competitor list named tools only | Added registration dates, Tranco ranks and sitemap sizes (section 2.2). digicamfilter.com is only 3 weeks old, and PicaPica runs 660 URLs across 15 languages |

Unchanged from the earlier file and still valid: share-page spec (noindex, not blocked), deep-link flow without a paid SDK, technical checklist, `/go/` attribution logging.

---

## What this means for Digi

1. **Before building any page, accept the contest rules and add the contest tracker** to the site template. Name it in the privacy page (contest rule in the README).
2. **Nov 18:** open Google Search Console and Bing Webmaster Tools for digi.pink, turn on IndexNow in Cloudflare, and allow search/answer AI bots in Cloudflare AI Crawl Control.
3. **By Nov 22:** ship `/` and `/photo-booth`. Make the booth "vintage" by default, with 3 or 4 shots, an un-mirror toggle, 10 frames (including **Christmas, NYE and stained glass**), a 4×6 print sheet, nothing uploaded, a watermark switch, and an app button via `/go/web-booth`.
4. **By Nov 24:** ship `/photo-booth/templates` and `/photo-booth/templates/christmas` with 3 free transparent PNG strip frames each (2×6 and 4×6) and a "use in booth" button. Pin all of them the same day.
5. **By Nov 26:** ship `/party` for the shared-rolls feature. Answer "disposable camera app for parties" plainly, and use it as the landing page for any TikTok bio link or ad.
6. **By Nov 28:** ship `/camera-filter` (vintage camera filter + orange date stamp switch), `/looks` and `/looks/2000s-party-flash`, with at least 3 AI-labelled before/afters.
7. **Dec 2–4:** ship NYE templates, `/captions/photo-dump` (with Christmas, NYE and January sections), `/ideas/photo-booth-poses`, `/guides/digicam-look-on-iphone` and `/guides/photo-strip-size`. Draft `/best/disposable-camera-apps-for-parties` and `/looks/black-and-white-booth-strip` and schedule them.
8. **Pinterest, Nov 18–Dec 4:** claim the domain, make 8 keyword-named boards, and batch-schedule **3 pins a day through Dec 31**. About 75% should be templates, poses and layouts, about 25% AI before/afters.
9. **Free links in week 1:** list the web booth on AlternativeTo, Product Hunt and Peerlist. Submit it to "free online photo booth" listicle owners (ilovefreesoftware and similar) with a short, honest note. No paid links: they would count as marketing spend and break Google's rules.
10. **Write the App Store description as AI-search copy.** The first two sentences must say plainly what Digi does, what's free and what's paid. AI engines quote it word for word (section 5.2).
11. **Authorize the Ahrefs and Similarweb connectors** in claude.ai settings if you want real backlink and traffic numbers for PicaPica, DigicamFilter, madegooddesigns and Lense. Don't paste keys into chat.
12. **Set expectations:** count on near-zero Google traffic before Dec 16 (E, low confidence). Judge the web by `/go/` clicks from share pages, Pinterest and brand search. Review Search Console on Jan 9: rewrite any page ranking in positions 8–20.
13. **After Dec 16:** Galentine's and Valentine's templates by Jan 10; `/polaroid-frame`; Arabic `/ar` pages aimed at the Gulf, with the "ترند الصور" (photo trends) page; prom and graduation templates by Feb 15 (the "photo strip" peak is mid-April).
14. **Never build:** city pages, "[camera brand] filter" pages, auto-translated copies of content pages, or a prompt page for a trend that has already peaked.

---

## Sources

**Search volumes (Google Ads data via seodata.dev; US unless noted; pages dated 2026-11-09, API pulls 2026-11-17):**
- https://www.seodata.dev/keyword/digicam-filter
- https://www.seodata.dev/keyword/photo-booth-online
- https://www.seodata.dev/keyword/online-photo-booth
- https://www.seodata.dev/keyword/photo-strip-maker
- https://www.seodata.dev/keyword/photo-booth-template
- https://www.seodata.dev/keyword/photo-booth-app
- https://www.seodata.dev/keyword/dazz-cam
- https://www.seodata.dev/keyword/disposable-camera-app
- https://www.seodata.dev/keyword/digicam
- https://www.seodata.dev/keyword/christmas-photo-booth
- https://www.seodata.dev/keyword/photo-booth-ideas
- https://www.seodata.dev/keyword/ai-photo-booth
- https://www.seodata.dev/keyword/ai-yearbook
- https://www.seodata.dev/keyword/add-date-to-photo
- https://www.seodata.dev/keyword/photo-booth-website
- API endpoint and limits: https://www.seodata.dev/llms.txt
- API pulls (`https://api.seodata.dev/v1/keyword?q=…&country=…`): "photo strip", "y2k filter", "polaroid frame", "photo dump", "photo dump captions", "photo booth poses", "digicam aesthetic", "flash filter", "y2k camera" (US); "digicam", "photo booth", "dazz cam", "برنامج dazz cam", "ترند الصور" (EG); "فوتو بوث" (SA); "online photo booth" (GB). Raw JSON is in the scratch folder.

**Google Trends** (explore API, pulled Nov 17, 2026; US and worldwide; 12-month and 5-year weekly): https://trends.google.com/trends/ (raw: `seo13/gt/US12_a…g.json`, `US5_tools.json`, `WW12_a.json`; earlier pulls in `bible/mt/gt/`).

**Autocomplete** (Nov 17, 2026): `https://suggestqueries.google.com/complete/search` (web: en-US, en-EG, ar-EG; YouTube: `ds=yt`).

**Competitor sites:**
- Tranco ranks (Nov 16, 2026): https://tranco-list.eu/api/ranks/domain/
- RDAP registration dates: https://rdap.org/domain/
- Sitemaps:
  - https://picapicaphoto.pages.dev/sitemap.xml
  - https://www.digicamfilter.com/sitemap.xml
  - https://lense.app/sitemap.xml
  - https://digicamfx.pages.dev/sitemap.xml
  - https://templatesbooth.com/sitemap.xml
  - https://wavespeed.ai/sitemap.xml
  - https://pov.camera/sitemap.xml
- App seller URLs and rating counts: iTunes Search API, US (Nov 17, 2026): https://itunes.apple.com/search?term=…&country=us&entity=software

**Results seen in AI web search (Nov 17, 2026; V that each URL appeared):**
- Tools:
  - https://alternativeto.net/software/digicamfilter/about/
  - https://www.weshop.ai/tools/digital-camera-filter-online
  - https://www.media.io/ai/image-to-image/digital-camera-filter
  - https://www.producthunt.com/products/digital-camera-filter/reviews
  - https://onaircode.com/photo-strip-maker/
  - https://madegooddesigns.com/tools/photo-booth/
  - https://picapicaphoto.pages.dev/blog/how-to-create-photo-strip
  - https://wavespeed.ai/free-tools/online-photo-booth
  - https://beautyplus.com/photo-booth
  - https://tool.teamzlab.com/diagnostic/photo-booth/
  - https://floot.com/tools/photo-booth
  - https://ilovefreesoftware.com/?p=476983
  - https://cloudinary.com/tools/add-date-to-photo
  - https://www.fotor.com/features/add-date-to-photo/
  - https://www.fotor.com/ai-image-generator/instagram-flash-filter/
- Party cameras:
  - https://lense.app/disposable-camera-app-for-parties
  - https://petapixel.com/2024/09/18/hipstamatic-party-app-is-a-disposable-camera-experience-made-for-events
  - https://apps.apple.com/us/app/once-disposable-camera-event/id6754265953
  - https://apps.apple.com/us/app/id6444442256
- AI strips:
  - https://snapbar.com/ai-group-photos
  - https://www.aragon.ai/photo-editor/photobooth-filter
  - https://apps.apple.com/app/id6771945406
- Explainers:
  - https://www.vsco.co/learn/digital-camera-effect
  - https://www.wayshot.ai/blog/inside-the-2000s-digicam-look
  - https://photocultivator.pages.dev/p/digicam-look-explained
  - https://www.digitalcameraworld.com/cameras/compact-cameras/i-wrote-off-the-digicam-as-a-temporary-trend-but-three-years-later-crappy-cameras-have-only-become-more-popular
- iPhone strip apps:
  - https://apps.apple.com/us/app/id972561101
  - https://chatbooks.com/six-free-photo-collage-apps

**AI search impact (C):**
- Ahrefs, AI Overviews and CTR (December 2025 data): https://ahrefs.com/blog/ai-overviews-reduce-clicks-update
- SE Ranking, AI traffic study 2026: https://seranking.com/blog/ai-traffic-research-study/
- BrightEdge study via MediaPost: https://www.mediapost.com/publications/article/414195/

**Pinterest (C):**
- AI labels, Apr 30, 2025: https://techcrunch.com/2025/04/30/pinterest-launches-new-tools-to-fight-ai-slop/
- Pinterest's own post: https://community.pinterest.biz/t/introducing-gen-ai-labels-on-pinterest/30967
- Pinterest Predicts 2026 timing: https://axios.com/2025/12/09/2026-pinterest-trend-report
- Character limits (secondary guides): https://typecount.com/blog/pinterest-description-character-limit and https://bundle.social/tools/pinterest-character-counter

**Earlier files this builds on:**
- `/home/user/MMTEST/research/digi-deep-2026-11/11-web-seo.md`
- `/home/user/MMTEST/research/digi-deep-2026-11/README.md`
- `/home/user/MMTEST/research/digi-bible-2026-11/01-market-trend.md`

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 11 numbers this chapter's decisions rest on.

**Checked and confirmed (no change)**
1. "online photo booth" **2,900**/mo, CPC $4.02 (seodata.dev keyword page, US, updated 2026-11-09). Confirmed.
2. "photo booth template" **2,400**/mo. Confirmed.
3. "digicam filter" **140**/mo; related "vintage filter camera" 2,900, "camera filter online" 1,900, "camera filters free" 4,400. Confirmed. These are Google Ads buckets resold by one small vendor, so they stay medium confidence.
4. `digicamfilter.com` registered **Oct 25, 2026** (Verisign RDAP). Confirmed.
5. `madegooddesigns.com` registered **Mar 26, 2026** (RDAP); Tranco rank **858,590** on Nov 16 vs **2,068,972** on Oct 18. Confirmed in direction and size (the chapter's "~2.14M" start point is a day or two earlier; same story).
6. Ahrefs: AI Overviews linked to **58% lower CTR** for position 1 (Dec 2023 vs Dec 2025 data); earlier study −34.5%. Confirmed on ahrefs.com.
7. Pew: users clicked a traditional result in **8%** of visits with an AI summary vs **15%** without (July 22, 2025 analysis of March 2025 browsing data). Confirmed via several reports of the Pew study.
8. SE Ranking: AI referrals **0.32%** of all website traffic in 2026, 0.02% in 2024, ChatGPT **74.78%** of AI referrals. Confirmed on seranking.com.
9. Pinterest "AI modified" label announced **Apr 30, 2025** (TechCrunch). Confirmed.
10. Pinterest Predicts 2026 published **Dec 9, 2025** (Axios and others). Confirmed, so "early December" for the 2027 edition is a fair guess (E).

**Changed**
1. Section 6.2 and correction row 7: the "see fewer AI pins" control was only *announced as coming soon* on Apr 30, 2025. I found no dated rollout, so the chapter no longer says it is live. The advice (lead with templates, AI about 1 pin in 4) stands.

**Could not verify**
- BrightEdge "Google 86.9% vs AI 1.9% of site traffic" (MediaPost blocked the fetch). Keep as C.
- Google Trends peak weeks (Nov 30–Dec 6, Dec 28–Jan 3, Jan 18–24, mid-April) and the "75–90% drop" of AI-trend searches were not re-pulled; they rest on the author's raw files.
- Arabic and Egyptian volumes (~720/mo, ~3,600/mo, ~880/mo) were not re-queried (daily API cap).
- "0–1,500 Google visits before Dec 16" is the author's estimate (E, low) and can't be checked.
