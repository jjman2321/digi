# 14. TikTok organic for camera and photo apps (2024–2026)

*Written Nov 17, 2026, for Digi (digi.pink). Track 14 of the Digi niche bible.*

**Labels.** **[V]** verified: I measured it myself today on a public TikTok page, or it's quoted from an official page. **[C]** claimed: a founder, vendor or press number I couldn't check. **[E]** estimate: my own reasoning. Confidence is **high / med / low**.

**Method.** I read the public TikTok page of 46 posts and 25 accounts, logged out, the way a browser loads it. I closed nothing and clicked nothing. View, like, save and share counts, upload date, length, sound, the upload country (`locationCreated`) and TikTok's own `isAd` flag all come from the data TikTok puts in each public page. I also read TikTok's Community Guidelines (effective Sep 24, 2026), its Commercial Music Library help page, its Content Posting API docs, the FTC press release on fake reviews, and the practitioner write-ups listed in Sources. Raw data: `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/tt/all.jsonl`.

**Limits (stated plainly).**
- TikTok's hashtag and "discover" pages load their numbers with JavaScript, so I couldn't read hashtag view counts. The owner still has to screenshot TikTok Creative Center (prior file 01's task).
- I found posts through web search, which mostly finds videos. Only one photo-mode carousel URL turned up, and its page carries no data when logged out. So my 46-post sample under-counts carousels. For carousels I rely on the Nov 12 teardown (`/home/user/MMTEST/research/hackathon-2026-11/deep/15-growth-teardown-and-ideas.md`), which counted them by hand.
- The session's web-search budget ran out partway through. A few points (link-in-bio follower minimum, the exact scheduler window) are marked [C] because I couldn't re-check them.
- `isAd: true` in TikTok's page data almost certainly means the post was promoted with money (Promote or Spark Ads). TikTok doesn't document the field, so that reading is **[E, med]**.

---

## Key takeaways

1. **In this niche the biggest hits are short videos, not carousels.** Of the 11 posts in my sample with 1M+ views, all 11 are videos, and their median length is **15 seconds** [V]. The template is a plain photo that flips to the edited look on the beat drop. Carousels work as a second format ("Posted / Deleted": 1.0M [V, teardown]).
2. **Followers don't predict views.** Accounts with 76, 862, 2,316 and 3,800 followers got 232K, 1.0M, 2.3M and 2.2M views [V]. Creators with 500K–9.9M followers got only 0.04–0.97 views per follower [V]. **Pay for content, not for follower counts.**
3. **The two biggest "organic" wins in the niche were probably paid for.** Kapi Cam's 87.2M-view brand video (Oct 1, 2025) and Boothie's founder-voice tutorial (1.3M) both carry TikTok's `isAd` flag [V]. WayShot's 33.1M video isn't flagged, but WayShot pays ambassadors and creators [V, teardown]. Anything paid comes off contest profit.
4. **Expect a long tail.** Brand accounts in this niche sit at a **7.8K–10.7K median** views per post, and only 6–30% of posts pass 100K [V/C, teardown]. Event-camera brands do far worse: Lense posted 373 videos and got one 1.1M hit, while most sit at 1K–20K [V].
5. **The niche's real engine is persona accounts: "just a girl who loves digicams" accounts that the app maker runs.** Boothie runs 6 [V, teardown], Pecra runs a brand account posing as "Chloe", and POV ran wedding-tip personas. Under the FTC's 2024 rule and TikTok's "don't deceive" rule, **Digi must not copy this.** Section 10 gives the compliant version that keeps the format and drops the lie.
6. **Correction:** Digi's own accounts must switch on TikTok's content-disclosure setting too, not only paid creators. TikTok requires it when "Promoting your own business, product, or service" [V, Community Guidelines]. Skipping it can mean reduced reach, then posting limits, then a ban [V].
7. **Brand (Business) accounts can't use the trending-song library.** They must use the Commercial Music Library [V]. Half the winners in my sample used mainstream songs [V], so Digi needs CML picks or its own audio.
8. **Paid reach has a real price list.** Clipping networks (Content Rewards) charge a median **$1 per 1,000 views plus a 10% fee** (708 campaigns, Oct 14, 2026; the Nov 2026 index shows $1.09 across 707 campaigns, and the fee is 8% for verified organisations) [C, med]. UGC marketplaces (SideShift) quote a **$7–9 median per video** on top of $210+/month software [C]. Freelance UGC runs $20–45 per video [C]. Under the contest rules, all of this is ad spend. Scheduling and slideshow software is not [V, contest rules].
9. **Automation is risky in a specific way.** TikTok "strictly prohibit[s] automation tools, scripts, or other tricks designed to bypass our systems" [V]. The official Content Posting API is allowed. But posts from unaudited API clients are forced to private [V], and you can't pick a specific sound through the API (photo posts only get an `auto_add_music` switch), so drafts sent to the inbox still need a human tap [V, TikTok API docs; C, Postiz/Larry]. **Plan the exam-period autopilot around this.**

---

## Corrections to prior research

| # | Prior claim (file) | What's actually true | Evidence |
|---|---|---|---|
| 1 | "The format is settled: 4–7 slide carousels" (deep/05 §1.1) | In this niche, 11–23 s before→after **videos** carry the biggest hits. Boothie's accounts mix ~60% carousels with ~40% videos, but its top 3 posts and WayShot's top post are all videos | 11/11 sampled 1M+ posts are videos, median 15 s [V]; teardown [V] |
| 2 | "Paid creators must switch on the Paid partnership toggle" (deep/05 §1.2) as the main disclosure duty | **Every Digi-run account** must use the content-disclosure setting, because "Promoting your own business, product, or service" requires it | TikTok Community Guidelines, Regulated Goods & Commercial Activities, effective Sep 24, 2026 [V] |
| 3 | Boothie grew with "no money, no paid ads" (deep/05 §1.1, quoting the seller) | Its founder-voice tutorial has `isAd: true`, and 12 Turkish posts carry #tanıtım ("promotion"). Its US/DE accounts present as independent girls while the company runs them | [V] page data today; teardown [V] |
| 4 | "AI-made fictional people only" for organic accounts (deep/09 §6) | AI people hurt: Oliver Henry dropped them because "AI-generated people created an uncanny effect that viewers scrolled past", and TikTok requires a label on realistic AI people. The niche's winners show real-looking people, food, beaches and city lights | Postiz/Larry write-up [C]; TikTok guideline [V] |
| 5 | Astro's local-language accounts "instantly 5x" views (deep/05 table) | The source gives no data for the 5× claim. Treat it as an anecdote | Shortimize article read today [V that no data is given] |
| 6 | TikTok Studio web scheduler handles the exam-period queue (deep/05 §1.4) | That works for videos only. Carousels can't be made on the TikTok website (mobile app only), and API-posted photos land as drafts that need a sound added by hand | SocialBu guide [C]; Postiz/Larry [C]. So: **schedule videos, hand-post carousels** |
| 7 | Brand music not discussed | Business accounts "cannot use the general music library for commercial usage" | TikTok CML help page [V] |
| 8 | "#1 viral digicam app on TikTok" (WayShot listing; quoted in prior files) | That's WayShot's own claim in its bio and listing. Kapi Cam's single post (87.2M) beats WayShot's best measured (33.1M–48.9M) | [V] |

---

## 1. The sample: 30 posts from the digicam / photo-booth / party-camera niche

Measured Nov 17, 2026 (views as of today). "Ad" = TikTok's `isAd` flag. "Loc" = upload country recorded by TikTok.

| Post | Date | Views | Account followers | Length | Saves | Ad | Loc | Sound | Caption (start) |
|---|---|---|---|---|---|---|---|---|---|
| [kapi.cam](https://www.tiktok.com/@kapi.cam/video/7556141447041305874) | 2025-10-01 | 87,200,000 | 107,600 | 15 s | 315,153 | yes | SG | original sound | "I finally hunted down the holy grail of low-pixel photo apps—and it's none other than Kapicam!" |
| [wayshot_app](https://www.tiktok.com/@wayshot_app/video/7670564513447480607) | 2026-08-05 | 33,100,000 | 40,400 | 12 s | 129,585 | no | US | original sound | "Credit:@bill.b.e @pillow.of.cloud Photos edited by wayshot app-make every pic aesthetic #thatfriend" |
| [msbianca.b](https://www.tiktok.com/@msbianca.b/video/7431783194984303880) | 2024-10-31 | 5,300,000 | 231,700 | 15 s | 88,831 | no | PH | 9PM in Shibuya | "instant digiii hahahaha #dazzcam" |
| [princessameliawu](https://www.tiktok.com/@princessameliawu/video/7578277303512304926) | 2025-11-30 | 4,200,000 | 9,900,000 | 35 s | 19,862 | yes | US | original sound | "Secrets to my photos @wayshot_app" |
| [emma.koah](https://www.tiktok.com/@emma.koah/video/7694700461609422101) (Boothie) | 2026-10-09 | 2,300,000 | 2,316 | 15 s | 85,255 | no | TR | Arada Bir x Dracula | "Her paylaşımımda sorulan o efekt" ("the effect everyone asks about") |
| [.okminju](https://www.tiktok.com/@ell3hrz/video/7549619295270046998) | 2025-09-13 | 2,200,000 | 3,800 | 18 s | 92,733 | no | DE | Love Note | "it's called digicamfx btw :3" |
| [dear.d1ry](https://www.tiktok.com/@mypreciousdiary8/video/7401069615058636040) (OldRoll) | 2024-08-09 | 1,800,000 | 195,100 | 24 s | 41,486 | yes | PH | supersonic little winters | "the love I have for digi cams! … APP: OldRoll" |
| [emma.koah](https://www.tiktok.com/@emma.koah/video/7697661987609791750) | 2026-10-17 | 1,500,000 | 2,316 | 23 s | 43,172 | no | TR | Tralala x Cimilli İbo | "Sevdik mi girls" |
| [emma.koah](https://www.tiktok.com/@emma.koah/video/7654923535701331220) | 2026-06-24 | 1,300,000 | 2,316 | 15 s | 68,964 | yes | TR | Kıskıvrak | Reply to a comment; "my own app Boothie… AI effects need a subscription" |
| [lense.app](https://www.tiktok.com/@lense.app/video/7278952371512724768) | 2023-09-15 | 1,100,000 | 13,900 | 5 s | 7,198 | no | NL | original sound | "It is really simple. You place QR-codes at your wedding or party…" |
| [bennett.miaa](https://www.tiktok.com/@bennett.miaa/video/7666551126413577502) (Boothie) | 2026-07-25 | 1,000,000 | 862 | 11 s | 33,309 | no | US | ominous | "in love with this effect (boothie)" |
| [mymunah.n](https://www.tiktok.com/@mymunah.n/video/7525922279004441861) (Dazz) | 2025-07-11 | 879,700 | 217,100 | 11 s | 35,275 | yes | CA | som original | (none) |
| [dimsum_gurl](https://www.tiktok.com/@dimsum_gurl/video/7403801930138520863) | 2024-08-16 | 879,400 | 78,200 | 17 s | 21,316 | no | US | odoriko | "how to take aesthetic photos: OldRoll App" |
| [katamogz](https://www.tiktok.com/@katamogz/video/7261366011159497989) | 2023-07-29 | 703,800 | 2,500,000 | 16 s | 9,631 | no | CA | Moonlight – Sped Up | "digi cam app ! can't wait to use this on vacayy" |
| [nouredamaj](https://www.tiktok.com/@nouredamaj/video/7534278019431648520) | 2025-08-03 | 644,100 | 662,800 | 77 s | 19,491 | no | LB | original sound | "Replying to @Aya.99 dazz cam tutorial" |
| [juanellaaa](https://www.tiktok.com/@juanellaaa/video/7350253728659819781) | 2024-03-25 | 379,800 | 12,600 | 31 s | 2,629 | no | PH | Smart (LE SSERAFIM) | "Digital Camera App… Lofi Cam got you covered" |
| [bennett.miaa](https://www.tiktok.com/@bennett.miaa/video/7668065678129204510) | 2026-07-29 | 356,900 | 862 | 13 s | 7,911 | no | US | 1901 – Instrumental | "Should i post a tutorial (made w boothie app)" |
| [studiocherii](https://www.tiktok.com/@studiocherii/video/7362164228687432993) | 2024-04-26 | 328,500 | 579,500 | 22 s | 5,636 | no | JP | SPOT! (ZICO & JENNIE) | "simulate retro film and digicam effects… *AD" |
| [cranchyou](https://www.tiktok.com/@cranchyou/video/7381190770436541742) | 2024-06-16 | 304,300 | 20,800 | 17 s | 2,058 | no | US | ooo baby baby | "this digital camera effect on iPhone is from Dazz Cam… a little too much green imo" |
| [kee_uc](https://www.tiktok.com/@kee_uc/video/7695736048797715733) | 2026-10-12 | 266,700 | 35,400 | 15 s | 10,510 | no | VN | original sound – keeuc | "Did you try our new batch?" |
| [yeshipolitoo](https://www.tiktok.com/@yeshipolitoo/video/7311412169466236203) | 2023-12-11 | 252,100 | 678,100 | 21 s | 7,159 | no | US | original sound | "Replying to @Haley no photobooth? No problem!" |
| [shakhed](https://www.tiktok.com/@shakhed/video/7601442834708761878) | 2026-02-24 | 239,200 | 1,400,000 | 20 s | 847 | yes | US | original sound | "@wayshot_app #promo" |
| [madison.saier](https://www.tiktok.com/@madison.saier/video/7667369475926248735) (Boothie) | 2026-07-28 | 231,600 | 76 | 14 s | 5,064 | no | US | FREAKED OUT | "how to make ur photo look like it was taken on a digicam" |
| [makimoshi](https://www.tiktok.com/@makimoshi/video/7513006906735185159) | 2025-06-07 | 231,100 | 4,406 | 11 s | 4,188 | no | PH | original sound | Reseller of "Dazz Pro lifetime ₱39" (grey market) |
| [tiktoktosti](https://www.tiktok.com/@tiktoktosti/video/7649826912516246816) | 2026-06-10 | 162,300 | 117,100 | 6 s | 2,028 | no | NL | original sound (mldyht) | "@wayshot_app ad" |
| [eventfulapp](https://www.tiktok.com/@eventfulapp/video/7542531943812893974) | 2025-08-25 | 155,400 | 675 | 34 s | 2,815 | no | GB | Man I Need | "Photobooth App" (iPad booth) |
| [haiiseptiaaa](https://www.tiktok.com/@haiiseptiaaa/video/7565528033050807570) | 2025-10-26 | 148,700 | 76,600 | 30 s | 2,372 | no | ID | MONTAGEM RUGADA | "Aplikasi photobooth ada di hp dan gratis" |
| [wayshot_app](https://www.tiktok.com/@wayshot_app/video/7574987906234764574) | 2025-11-21 | 77,400 | 40,400 | 40 s | 392 | no | US | original | "WayShot is the first to bring Nano Banana Pro to life" |
| [ai_filters](https://www.tiktok.com/@ai_filters/video/7635428762460491016) | 2026-05-02 | 61,300 | 91,400 | 33 s | 18 | no | TR | MASALLAH | "Flash effect tutorial… That's an app on appstore." |
| [7.goldd](https://www.tiktok.com/@7.goldd/video/7673933298275585302) | 2026-08-14 | 30,400 | 208,200 | 6 s | 277 | no | GB | original sound (mldyht) | "why get a digi cam when you can just use @wayshot_app" |

### What the sample says

- **Length.** Median 16.5 s across all 46 posts and 15 s across the 11 posts with 1M+ views [V]. Only one hit runs past 30 s (a 35 s paid mega-creator post). Long tutorials (33–77 s) got 61K–644K.
- **Saves are the strongest tell.** Niche winners save at 2.9–5.3% of views (emma.koah 5.3%, .okminju 4.2%, bennett.miaa 3.3%) [V]. The median across the sample is 1.2%. Saves mean "I'll copy this edit later", so build every post to be saved: a look name, a setting, a pose list.
- **Small accounts win.** Every account under 10K followers that posted the before→after format beat its follower count 50–800 times [V]. Big creators averaged under 1 view per follower, even on paid posts [V].
- **The feature is never the hook.** WayShot's only feature-led post ("first to bring Nano Banana Pro to life") got 77K and 392 saves, against 33.1M for its "make every pic aesthetic" repost [V].
- **Geography follows the poster.** The winners' upload countries are PH, TR, US, DE, SG, CA. Boothie's Turkish account carried it, while its German accounts stalled at ~490 median views and stopped after 7 weeks [V, teardown]. Where the posting phone sits shapes who sees the post first [C, practitioners].
- **WayShot sends creators the same sound.** Two unrelated paid posts (@7.goldd, @tiktoktosti) use the same "original sound – mldyht" [V]. That points to a brief with a fixed sound, so it reads as one campaign [E, med].

---

## 2. Case files (new detail beyond prior files)

### 2.1 Kapi Cam: the biggest single post in the niche
- **Account** [@kapi.cam](https://www.tiktok.com/@kapi.cam): 107.6K followers, **34.7M likes, 731 videos** since Dec 18, 2024, about **1.05 posts a day for 23 months** [V]. Bio: "Vintage camera & Vintage filter / IOS & Android" [V].
- **Hit:** Oct 1, 2025, 15 s, **87.2M views, 5.7M likes, 315K saves, 134K shares**, flagged `isAd` [V]. The caption is written in a first-person user voice ("I finally hunted down the holy grail of low-pixel photo apps") but posted from the brand account.
- **Lesson.** One huge hit came after ~290 posts, and it was most likely boosted. Volume plus a paid push on a proven post. The "user voice from a brand account" is a grey area. Digi's version says "we": "we made the low-pixel camera you were looking for".

### 2.2 WayShot: brand reposts with credit, plus paid creators
- **Account** [@wayshot_app](https://www.tiktok.com/@wayshot_app): 40.4K followers, 20.2M likes, 204 videos since Aug 26, 2025, about **0.46 posts a day** [V]. Upload country US [V]. Bio: "The #1 viral digicam app on TikTok / Search 'WayShot' on App Store" [V].
- **Top measured post:** Aug 5, 2026, 12 s, **33.1M views, 3.9M likes, 352K shares**. Caption: "Credit:@bill.b.e @pillow.of.cloud Photos edited by wayshot app" [V]. The credited accounts are tiny (81 and 16 followers) [V], so WayShot found ordinary users' edits and reposted them.
- **The teardown also measured** a 48.9M post (Oct 2025), a 139M total across 170 posts and a **10.7K median** [V, Nov 12].
- **A third-party write-up** credits WayShot with formats like "the friend who thinks everything is aesthetic" (~48M), a transformation slideshow (~7.5M, ~75K saves) and "What camera did you use?" (several over 2M), plus "~$100K MRR (self-reported)" [C, stealwhatworks, Sep 17, 2026]. The ~48M figure likely matches the teardown's 48.9M post.
- **Paid side:** a 9.9M-follower creator's post got 4.2M views (0.42 views per follower). A 1.4M-follower creator's post got 239K (0.17). A 208K-follower creator's post got 30K (0.15) [V]. **Big paid creators bought little reach.**

### 2.3 Boothie: persona accounts (update)
- Since Nov 12: emma.koah went from 2,271 to **2,316 followers** and 667.8K to **683.7K likes**. Its Oct 17 video went from 1.4M to 1.5M [V]. The bio link carries a UTM tag: `boothieapp.com/?utm_source=tiktok&utm_medium=bio` [V].
- **Personas share one template.** bennett.miaa ("Mia Bennett", created Jul 2, 2026) and emma.koah ("Emma Koah", created Jun 17, 2026) both open with **"Just a girl who love photo editing and digicams 📸🧿"**, with the same typo [V]. madison.saier's display name is "avery" [V]. Boothie launched Jun 23, 2026 (per prior files), and these accounts were created within ~3 weeks of it.
- **Read:** this is a cheap, effective, deceptive model. The FTC bans testimonials that "misrepresent that they are by someone who does not exist" and insider testimonials without a clear disclosure [V, FTC]. Digi's competitors doing it is a reason to stay clean, not a reason to copy. A Digi that wins the contest will get looked at.

### 2.4 Pecra and Clicked (from the Nov 12 teardown; not re-measured)
- **Pecra:** a brand account posing as "Chloe" got **19.8M** on one carousel. Slide 1: "She edits her photos too much"; 2.8M likes, 354K saves. 69 posts, 37.3M total, 7.8K median, then silent since Sep 26 [V, teardown]. Third-party write-up: "~31M views across three accounts", "~$200K MRR" [C].
- **Clicked:** a "comment 'clicked' and I'll DM the link" funnel. 643 followers, 651K total views [V, teardown]. The comment-keyword funnel inflates comments and gets the link out without a link in bio.

### 2.5 Keeuc: the newest entrant (Oct 2026)
- [@kee_uc](https://www.tiktok.com/@kee_uc), created **Oct 3, 2026**. 81 videos in 45 days (**1.8 a day**), 35.4K followers, 1.2M likes [V]. Openly a brand: "Tag us in your keeuc moments / search keeuc in your AppStore" [V].
- Best measured post: "Did you try our new batch?" (filter drop), 266.7K views, 10.5K saves [V].
- **Lesson.** An openly branded account can hit 35K followers in 6 weeks with "new batch of looks" drops. That's the clean model for Digi's brand account.

### 2.6 Event and party cameras: weak on TikTok
- **Lense** ([@lense.app](https://www.tiktok.com/@lense.app)): 373 videos since Nov 2022 (0.25 a day), 13.9K followers [V]. One **5-second** explainer got 1.1M (Sep 15, 2023). Its other five measured posts: 1.2K–20.5K [V]. Two posts used a CapCut template sound ("original sound – CAPCUT TEMPLATES") and got 1.2K and 5.0K [V].
- **POV Disposable:** brand account 219 followers, 24 videos [V]. Its growth came from niche personas instead. One wedding-tips persona (@weddingtipsandtricks4, "TipsfromMay 💍", 424 videos, 641K likes, bio "Search for 'POV' in the App Store") [V] posted Midjourney "my jedi husband" weddings: 1.5M and 811K views (Oct 2024) [C, PlayKit].
- **Read for Digi [E, med]:** "shared party roll" is a hard product to show in a feed. The digicam look sells itself in a 1-second flip. The roll is a sentence of explanation. **Lead with looks and strips; show the roll through the morning reveal (Format 6), never an explainer.**

### 2.7 AI photo trend spikes (what a real viral moment looks like)
- **EPIK "AI yearbook" (Sep–Oct 2023):** took off around Sep 19, peaked ~10 days later, and reached No. 1 on the US App Store [C, TechCrunch, Oct 6, 2023]. #90sAIYearBook had 122.3M views "in under two weeks" and downloads rose ~30× [C, Stylus, Oct 17, 2023].
- **Remini (Jul 2023):** one @Gracesplace video passed 42.9M. Daily net revenue went from ~$90K to $567K [C, Appfigures, via prior file 03].
- **Pattern:** a one-tap transformation people post themselves. The app gets named in comments, and the trend dies in weeks. Digi's equivalent is the **AI group strip** and the **9 a.m. roll**: results people post themselves with a digi.pink watermark.

### 2.8 Format lessons from outside the niche
| Account | Cadence | Result | What to copy | Label |
|---|---|---|---|---|
| Stronger (@strongermobile, gym app) | 725 posts in 295 days (2.5/day, up to 5) | 11 posts >1M; 98% of hits were slideshows; median ~7K | Hook over a selfie → the app shows up on slide 2–3; reuse winning hooks | C (Shortimize, Aug 5, 2024) |
| Astroapp | 385 slideshows in 105 days (3.7/day) | Median 37K; 12 posts >1M | Language-specific accounts; reveal-at-the-end structure | C (Shortimize, Aug 22, 2024) |
| Snugly / Liply (Oliver Henry's "Larry" agent) | 6-slide AI slideshows, ~60 s of human time each | 500K views in under a week; best 234K; **108 paying subs, $588 MRR** | "[another person] + doubt → showed them → they changed their mind" | C (Postiz blog, Apr 16, 2026) |
| Picsart via SideShift creators | Creator network | 185M views at $2.16 CPM over 6 months | Paid UGC at scale in the photo category | C (SideShift site) |

---

## 3. The formats that work, ranked for Digi

| Rank | Format | Best proof in niche | Why it works | Fit for Digi |
|---|---|---|---|---|
| 1 | **Beat-drop before→after video** (plain photo → edited look on the drop, 11–16 s) | 33.1M WayShot, 5.3M Dazz, 2.3M + 1.5M + 1.0M Boothie [V] | Instant payoff in the first second; high saves | 10/10 for free looks + date stamp |
| 2 | **Correction hook** ("don't post your stories like this") | 2.3M and 1.5M, same hook run twice (Boothie TR) [V] | Light shame + fix; works in any language | 9/10 |
| 3 | **Brand repost of a real user's edit with credit** | 33.1M (WayShot) [V] | Real people, real photos, no fakery; credit makes it fair | 9/10 *after launch*, with written OK from the user |
| 4 | **"Posted / Deleted" carousel** | 1.0M (Boothie US) [V, teardown] | Two-line verdict; swipe to see more pairs | 8/10 |
| 5 | **Overheard judgment carousel** ("she edits her photos too much") | 19.8M (Pecra) [V, teardown] | Another person + judgment = story | 8/10, only in true or clearly POV framing |
| 6 | **Reply-to-comment tutorial** | 1.3M (Boothie), 644K (Dazz tutorial) [V] | The comment is social proof; the tutorial gets saved | 8/10, only with real comments |
| 7 | **"What camera did you use?"** | Several >2M (WayShot, per write-up) [C] | The question people really get asked | 7/10 |
| 8 | **Filter "drop" announcement** ("new batch") | 266.7K (Keeuc) [V] | Gives followers a reason to come back | 7/10, weekly look drops |
| 9 | **Simple explainer of a group feature** | 1.1M (Lense, 5 s) as an outlier; most explainers flop [V] | Works only when ultra-short | 5/10, keep under 8 s |
| 10 | **Big paid creator "my secret app"** | 4.2M on 9.9M followers [V] | Reach, but poor per dollar | 3/10 in the contest (all of it is deducted) |

**Green screen and party footage.** I found no niche winner in my sample built on green screen or real party footage. Party footage needs every person's consent, and it reads like an ad. Use green screen for the founder format only (Section 11, Format 9). **[E, med]**

---

## 4. Hooks: how they're built and what failed

**Anatomy of the niche's winning hooks [V, from the sample and teardown]:**
- **Address a group:** "Girls, don't post your Insta stories like this" (2.3M).
- **Third-person judgment:** "She edits her photos too much" (19.8M).
- **Two-word verdicts:** "Posted / Deleted" (1.0M).
- **Confession:** "my obsession for adding flash effect to photos" (357K); "the love I have for digi cams!" (1.8M, paid).
- **Replace the expensive thing:** "why get a digi cam when you can just use…" (30K, paid; weak because it names the app first).
- **Answer a question:** "it's called digicamfx btw :3" (2.2M), the reply to the "what app?" flood.

**What failed [V/C]:**
- **Feature-first:** WayShot's "first to bring Nano Banana Pro to life" got 77K and 392 saves [V]. Larry's failed hooks, "See your room in 12+ styles before you commit" (879 views) and "Why does my flat look like a student loan" (905 views), were about the app or the poster's own problem [C].
- **Naming the app in the first line on a paid post:** "why get a digi cam when you can just use @wayshot_app" got 30K on a 208K-follower account [V].
- **Copy-paste captions across accounts:** Boothie's two German personas used identical captions, got ~490 median views, and were dropped [V, teardown]. The cause could be the market, the duplication, or both [E].

**Rules for Digi hooks [E, high]:**
1. Slide 1 or second 1 carries the whole post. Spend 80% of the time there.
2. Name a person or a moment ("the group photo", "the host", "my mom", "NYE"), not the app.
3. The app name goes in the caption, the bio, a pinned comment, or the last slide only.
4. Six to ten words, lowercase, one line if possible.
5. If it's a story with "my ___", it must be true. Otherwise, use "POV:" or second person ("your iPhone at 2am").

---

## 5. Captions, hashtags, sounds, length, timing

| Item | What winners do | Digi rule | Label |
|---|---|---|---|
| Caption | Short and chatty ("Sevdik mi girls", "instant digiii hahahaha"), or a question that baits a reply ("Should i post a tutorial?") | One short line + app name in brackets + a question. Example: "the flash look everyone asks about (digi, free) — want the settings?" | V |
| Hashtags | 0–5 | 3 max: one niche (#digicam / #photostrip), one moment (#nye / #christmasparty), one broad (#photoedit) | V; Larry used "max 5" [C] |
| Sound | Mainstream songs (K-pop in 2024: LE SSERAFIM "Smart", ILLIT "Magnetic", ZICO & JENNIE "SPOT!"; 2026: Phoenix "1901 – Instrumental", "ominous", "FREAKED OUT") or "original sound" | **Business account → Commercial Music Library only.** Pick a CML track with a clear drop at 1–2 s. Or use a sound we own (shutter click + flash "pop" + a short beat) and make it Digi's audio signature | V (CML page); sounds V |
| Length | Median 15 s for hits | 8–16 s videos; 5–7 slide carousels | V |
| Upload time | Boothie hits went up at 16:07 and 15:40 UTC (TR evening) and 20:55 and 21:31 UTC (US afternoon) | US: 20:00–23:00 UTC = 22:00–01:00 Cairo. Schedule videos. Hand-post carousels at 22:00 Cairo | V (teardown); E |
| Disclosure | Mostly missing on persona accounts | Content-disclosure setting ON ("your brand") on every Digi post; "Paid partnership" on any paid creator post; AI-generated label ON whenever an AI re-light or AI person appears | V (guidelines) |
| Link | UTM'd bio link (Boothie); comment-keyword DM (Clicked) | Business account bio link → digi.pink/t/{account} → App Store link with a campaign token per account (Apple's `ct=` parameter) so contest attribution is clean | V; link mechanics C |

**Bio link note.** Business accounts can add a website link. Personal accounts are commonly said to need 1,000 followers first. I could not re-verify this today [C]. Set up the brand accounts as Business accounts.

---

## 6. Cadence and number of accounts

| Account | Posts per day | Accounts | Median views | Share of posts ≥100K | Label |
|---|---|---|---|---|---|
| Keeuc (brand) | 1.8 | 1 known | n/a | n/a | V |
| Kapi Cam (brand) | 1.05 | 1 | n/a | n/a | V |
| Boothie emma.koah (persona) | 0.84 | 6 total | 8,063 | 27% (34/126) | V |
| Boothie bennett.miaa (persona) | 1.2 | — | 1,107 | 6% (10/161) | V |
| WayShot (brand) | 0.46 | 1 + ambassadors | 10.7K | 15% (25/170) | V |
| Pecra (brand-as-persona) | 0.41 | ~3 | 7.8K | 30% (21/69) | V |
| Lense (brand) | 0.25 | 1 | ~5–20K (my 6) | rare | V |
| Stronger | 2.5–5 | 1 | ~7K | 24 >350K of 725 | C |
| Astroapp | 3.7 | several, by language | 37K | 12 >1M | C |
| Bree Flemings plan | 1 → 3 per account | 20 (10 TT + 10 IG) | none yet | — | C (plan only, Jul 12, 2026) |
| Indie dev ("~15 accounts") | not given | 15 | best ~50K | — | C (DEV post) |
| Vix (manifestation app) | not given | 25 personas | $30K/mo claimed | — | C (podcast summary) |

**Read [E, med].**
- **One to two posts a day per account is the working range.** The best-run niche accounts post about once a day. More volume per account helps only while each post is different.
- **Accounts multiply chances, not views per post.** Each new account is a new lottery ticket with its own audience seed. Boothie's six accounts produced 23.6M views, but **77% came from one** [V, teardown].
- **For a solo founder in exams, 3–4 accounts is the ceiling** you can run without copy-paste (which risks the "unoriginal" flag) and without automation tricks (banned).

---

## 7. How indie founders actually run 5–20 accounts, and which parts break the rules

What practitioners describe, in order [C]:
1. **Make or buy accounts.** Buy "warmed" US accounts (Superwarm is named) or make new ones [C, Nevo/Postiz].
2. **Fake the location.** GPS off, a US VPN or mobile proxy ("not a datacenter IP"), and a $50 Android phone never opened at home [C, Nevo/Postiz].
3. **Warm up.** Days 1–14: like, comment and follow in the niche until the feed shows only niche content. Start posting on day 3 at 1 a day, go to 2 a day in week 2 and 3 a day after that [C, Building While Black, Jul 12, 2026]. Engage before every post "or the account can enter 0-views jail" [C, Nevo].
4. **Personas.** "alex, sarah, bree, kristen, laura", each a fake creator in the niche [C, Building While Black]; Boothie's "Just a girl who love…" accounts [V].
5. **Automate.** An AI agent writes and renders slides and posts drafts through an API scheduler. A human adds the sound and publishes [C, Postiz/Larry].
6. **Clone winners** across accounts with small changes [C, Nevo; Vix].

| Step | TikTok rule / law | Verdict for Digi |
|---|---|---|
| Buying accounts | TikTok ToS bans transferring accounts (prior file 05 §2.2) [V via prior]; FTC bans buying "fake indicators of social media influence, such as followers or views" [V] | **No** |
| VPN / fake location | "accounts that mislead or try to manipulate our platform" [V] | **No.** It also kills contest traceability |
| Warm-up by real engagement | Normal use | **Yes**: 15 min a day of real niche engagement per account |
| Personas posing as independent users | FTC: fake testimonials, undisclosed insider testimonials, and "misrepresenting that a website or entity it controls provides independent reviews or opinions" [V]; TikTok: multiple accounts OK "but not to deceive others" [V] | **No** |
| Openly branded theme accounts | Allowed ("You can have multiple accounts") [V] | **Yes** |
| Automation scripts / unofficial bots | "We strictly prohibit automation tools, scripts, or other tricks designed to bypass our systems" [V] | **No** |
| Official API schedulers (Postiz etc.) | Content Posting API is TikTok's own route; unaudited clients are "restricted to private viewing mode" [V] | **Yes**, via a scheduler that is already audited |
| Cloning winners across accounts | "ineligible for the FYF if it includes unoriginal or reused material without anything new" [V] | **Only with real changes**: new photos, new hook wording, new sound |

---

## 8. Creator, UGC and clipper networks: prices and contest math

**All of these count as ad spend in the contest** ("sponsored posts, paid influencers or shoutouts, affiliate or referral payouts") [V, contest rules]. **Software subscriptions don't** ("Not subtracted: hosting, domains, software…") [V].

| Option | Price | What you get | Label / date |
|---|---|---|---|
| **Content Rewards** (Whop-born clipping marketplace) | Median **$1.00 per 1K views**; 30% of campaigns pay ≥$2; 12% pay ≥$3. **10% fee**. Min budget ~$1,000 (40% of campaigns sit at the minimum); median budget $1,400. Typical clip: min payout $2 (~2K views), max $200 (~150K views) | Many small creators post your clips on their own accounts; you pay per tracked view. 90% of campaigns accept TikTok | C, med (ClipDocker count of 708 campaigns, Oct 14, 2026; vendor-written) |
| **SideShift** (UGC creators for apps) | Median **$7–9 per video** paid by clients (last 90 days). Software $210/$349/$699 per month (yearly) or $299 month-to-month | Briefs, contracts, view tracking, Spark-Ads-ready posts. Picsart: 185M views at $2.16 CPM | C (SideShift site, read Nov 17, 2026) |
| Freelance UGC creator, daily posts | **$20–45 per video**; 1–2 videos a day per creator | Video on your accounts or theirs | C (Nevo) |
| Collabstr marketplace | Average TikTok paid post ~$186; UGC ~$154 | One-off posts | C (prior file 05; page now returns 403) |
| Billo / Insense | From $99/video incl. rights; Insense trial ~$500 | Ad-ready UGC | C (prior file 05) |
| US posting assistant (Upwork) | ~$200/month listing seen | Posts your pre-made content from a US phone | C (prior file 05) |
| Mega creator (≥1M followers) | Not public; usually $1K+ | 0.17–0.42 views per follower in my sample | V for the views |
| ReelFarm (slideshow automation, *software*) | $19–195/month; tier lists conflict | AI slideshows; 2–75 connected accounts | C (Capterra/SuperScale) |
| Postiz (scheduler, *software*) | 7-day free trial; paid plans | Official-API posting to TikTok and 30+ networks | C |

**Rough contest math for clipping [E, low].**
- Real conversion anchor: Larry's apps made **108 paying subs from ~500K views**, about 1 paid user per 4,600 views [C].
- Assume Digi converts at **half that** (1 per ~9,000 views). Assume first payments average ~$25 net: a mix of $39.99 yearly at 85% after Apple's small-business cut (~$34) and weekly $6.99 (~$5.94).
- Then 1,000 views ≈ **$2.80 revenue**, against Content Rewards' ~$1.10 per 1,000 views with the fee. Positive, but thin.
- The trial adds refund and churn risk, and a 2× miss in conversion wipes out the margin.
- **Rule:** spend nothing on clippers until Digi's own organic posts show at least 1 paying user per 10,000 views. Then cap a test at $300 with UTM-tracked links, as the contest's attribution rules require.

---

## 9. What gets accounts restricted

**Official, quoted [V, TikTok Community Guidelines, effective Sep 24, 2026]:**
- **Deceptive behaviour:** "We don't allow accounts that mislead or try to manipulate our platform." Penalties: "Ban your account / Ban additional or new accounts you create / Restrict your account… limiting your ability to post new content, appear in top search results, or in the FYF."
- **Automation:** "We strictly prohibit automation tools, scripts, or other tricks designed to bypass our systems." Also: "If your account is restricted or banned, you may not create or use another account to get around it."
- **Fake metrics:** "we'll remove fake likes, followers, or other inflated signals." Content "that tries to manipulate people into giving gifts or inflating likes or follows isn't eligible for the FYF." So "follow for part 2!" style begging is risky.
- **Unoriginal content:** "Content is also ineligible for the FYF if it includes unoriginal or reused material without anything new."
- **Undisclosed commercial content:** "we may reduce its visibility or apply the content disclosure setting. Repeated failure to make a disclosure can lead to your account being temporarily restricted from posting content, or can lead to an account ban."
- **AI realism:** "label AI-generated or significantly edited content that shows realistic-looking scenes or people. Unlabeled content may be removed, restricted, or labeled."

**Practitioner reports (not confirmed by TikTok) [C, low–med]:**
- Turning on many new accounts at once gets them throttled; warm them up first (Building While Black).
- "0-views jail" after posting without engaging; it recovers after a pause (Nevo).
- Duplicate slides across accounts, visible watermarks from other apps, identical file hashes and robotic schedules flag a post as unoriginal. Recovery takes 2–3 weeks of original posts (OpenClip, vendor).
- Meta (Instagram) detects accounts that "only publish and never engage" (Nevo). Relevant because Digi will cross-post Reels.

**Digi's safe operating rules [E, high]:**
1. Every Digi account is openly Digi in its name or bio.
2. Disclosure setting ON for every post.
3. No IG/CapCut/other-app watermarks on uploads. Export clean files.
4. Never the same file on two accounts. Change at least the photos and the hook.
5. Post by hand or through an audited scheduler. No bots, no engagement buying.
6. 10–15 minutes a day of real engagement per account (reply to every comment for the first 48 hours of each post).
7. AI-generated label ON whenever an AI re-light result or an AI-made person appears.

---

## 10. No fake testimonials: the compliant version of each trick

| What competitors do | Why it's a problem | Digi's compliant version |
|---|---|---|
| "Just a girl who loves digicams" persona run by the company | FTC: fake / insider testimonials; TikTok: deceive | **@digi.tips**: bio "flash & photo strip ideas from the Digi team". Same aesthetic, same formats, honest owner |
| Brand account writing as a user ("I finally hunted down the holy grail…") | Misleads about who is speaking | "we made the low-pixel camera you kept asking for" |
| Founder persona with a fake face | Fake person | Owner's real hands, voice and screen; face optional |
| AI "friends reacting" videos | Fake testimonial plus unlabeled AI realism | Real friends with written consent, or no reaction shot at all |
| "My boyfriend said…" story slides that never happened | Invented testimonial | True stories only. Otherwise "POV:" framing, which TikTok users read as role-play, with no claim that a customer loves the app |
| Reposting strangers' photos | Consent, copyright, "unoriginal" | Repost only users who tag @digi.pink **and** reply "yes" to a DM. Credit them in the caption (WayShot's format, done right) |
| Fake "what app?" comments from alt accounts | Fake engagement | Wait for real ones; pin the best real one; reply with a video |
| "#1 viral app" claims | Unverifiable, possibly false advertising | Specific true claims: "free looks run on your phone", "the strip develops at 9am" |
| Paid creators without a label | TikTok ToS and FTC | "Paid partnership" toggle + "#ad", always |

---

## 11. Ten content formats with production steps

All formats assume **1080×1920 exports, text inside the middle ~70% of the frame** (clear of the status bar and the right-side buttons), **text size ~6.5% of frame width** (Larry's tested size) [C], and the content-disclosure setting ON. "Own photos" means the owner's or consented friends' photos, or non-people subjects (food, Christmas lights, rooms, pets, city at night).

### Format 1: Beat-drop before→after (video, 10–14 s). *The workhorse.*
1. Pick 1 plain iPhone photo (night, indoors, party table, mirror selfie).
2. Run it through one Digi look (free on-device flash + orange date stamp).
3. In CapCut: 0.0–1.2 s plain photo with the hook text; cut to the Digi version exactly on the sound's drop; hold 2 s; repeat with 2–3 more pairs.
4. Sound: a CML track with a hard drop at ~1 s, or Digi's own shutter-pop sound.
5. Caption: "the [look name] look (digi, free on iPhone) — want more?" plus 3 hashtags.
6. Time: ~12 min. Batch 10 at once.

### Format 2: "Posted / Deleted" (carousel, 5–6 slides)
1. Each slide stacks two versions of the same photo: top labelled "posted" (Digi look), bottom "deleted" (plain).
2. Slide 1 = the strongest pair. Slides 2–5 = more pairs. Slide 6 = Digi camera screen with the look name and "digi.pink".
3. Add a sound in the TikTok app (carousels can't be scheduled from the web).
4. Time: ~10 min.

### Format 3: Correction hook ("stop posting your party pics like this") (video, 12–16 s)
1. Screen-record an Instagram-story-style frame of a plain, blurry party photo, with the hook on top.
2. "Like this" → cut to the same photo in the Digi look with the date stamp, set as a story.
3. End on the share sheet: "Share to Story" with the digi.pink watermark visible.
4. Run the same hook again later with a new look (Boothie got 2.3M then 1.5M from the same hook) [V].

### Format 4: Reply-to-comment tutorial (video, 15–25 s)
1. Wait for a real comment ("what app??", "how??").
2. Use TikTok's "reply with video" so the comment sticker shows.
3. Screen-record: open Digi → pick the look → shoot or import → save. Text says each step in 3–4 words.
4. Caption: "the long-awaited tutorial :)" + app name.
5. **Never write the comment yourself or from an alt account.**

### Format 5: Strip build (screen-recording video, 8–12 s)
1. Four photos go in: own photos, or 4 consented friends in different places.
2. Record Digi building the booth strip with a shutter sound per frame, then the strip "printing".
3. Hook: "4 friends, 4 cities, 1 strip" (only if true) or "the photo booth is in your phone now".
4. Ends with the share link screen ("your friends get the strip too").
5. Doubles as App Store preview footage.

### Format 6: The morning reveal (video, 10–15 s). *The party roll's only good TikTok.*
1. After a real party with consenting friends, record the 9:00 a.m. "developing" animation → the grid → the AI group strip.
2. Hook: "our party roll developed at 9am and nobody was ready".
3. Blur or crop anyone who didn't agree to be posted.
4. Post at ~10 a.m. US time (scheduled), when the "morning after" feeling matches.
5. Seasonal: Friendsgiving (Nov 26–29), Christmas parties (Dec 12–24), NYE (Jan 1 morning).

### Format 7: Credited repost of a real user (video or carousel). *After launch only.*
1. Watch for users who share with the digi.pink watermark or tag @digi.pink.
2. DM: "love this — can we repost with credit?" Repost only on a written "yes" (screenshot it).
3. Caption: "Credit: @user. made with digi" (WayShot's 33.1M format) [V].
4. Never edit their face. Ask before adding an AI look on top.

### Format 8: Rating looks /10 (carousel, 8–10 slides)
1. Slide 1: "rating every Digi party look out of 10 (honestly)".
2. One look per slide, same source photo, score + one-line reason ("8/10 — best for mirror selfies").
3. Give the AI re-light look an honest score and say "paid" on that slide. No hiding.
4. Last slide: "which one are you using for NYE?", which pulls comments.

### Format 9: Founder build-in-public (video, 15–30 s; green screen allowed)
1. Owner's hands, laptop and phone; face optional. Real facts only: "med student, exams Dec 5, building a party camera".
2. Green-screen option: owner speaks over a real screenshot of the App Store page, the digi.pink site, or real eBay listings of old digicams (no brand names on screen).
3. One per week: day 1, the App Store approval day, the first 100 users (only when true), "exams start tomorrow, the app runs itself".
4. Post from the founder account. Disclosure ON (own product).

### Format 10: Holiday save-bait (carousel, 6–8 slides)
1. Slide 1: "5 photo booth poses for 4 friends (save before the party)" or "ugly sweater party strip ideas".
2. Use posed strips of the owner and consented friends, or AI-made people with the AI label ON. Keep AI people to a minimum (they underperform [C]).
3. Each slide = pose name + a mini-diagram + the strip.
4. Cross-post to Pinterest with a link to the free digi.pink strip template.

**Weekly batch (Sunday, ~3 hours) [E]:** 10× Format 1, 4× Format 2, 2× Format 3, 2× Format 5, 2× Format 8, 1× Format 9, 2× Format 10 = 23 posts. Format 4, 6 and 7 posts are made live as real comments, parties and users come in.

---

## 12. Thirty ready hook lines

Each line notes its format (F#), its voice, and the real pattern it adapts. **Bold** lines are the ones to test first. Lines marked *true only* may be used only if they actually happened.

| # | Hook (on screen, slide 1 / second 1) | Format | Voice | Adapted from |
|---|---|---|---|---|
| 1 | **stop posting your christmas party pics like this** | F3 | 2nd person | "don't post your stories like this" (2.3M) |
| 2 | **don't post your NYE story like this** | F3 | 2nd person | same |
| 3 | your iPhone is too sharp for party photos. here's the fix | F1 | 2nd person | correction |
| 4 | **posted / deleted** | F2 | neutral | Boothie 1.0M |
| 5 | the 1 pic I posted vs the 40 I deleted | F2 | founder (*true only*) | Posted/Deleted |
| 6 | **no digicam at the party? no problem** | F1 | brand | "no photobooth? No problem!" (252K) |
| 7 | you don't need a 2006 digicam for this | F1 | brand | "replace the expensive thing" |
| 8 | **december 2026, but make it look like 2006** | F1 | brand | date-stamp angle |
| 9 | the orange date stamp is back | F1 | brand | nostalgia |
| 10 | your iPhone at 2am vs a 2006 digicam at 2am | F1 | 2nd person | before/after |
| 11 | **4 friends, 4 cities, 1 photo strip** | F5 | brand (*true only* for the friends shown) | group strip |
| 12 | the photo booth is in your phone now | F5 | brand | explainer, short |
| 13 | **our party roll developed at 9am and nobody was ready** | F6 | founder (*true only*) | morning reveal |
| 14 | POV: the group chat finally has one good photo of everyone | F5/F6 | POV | POV framing |
| 15 | nobody saw the party photos until breakfast | F6 | brand | reveal |
| 16 | **rating every party camera look out of 10 (honestly)** | F8 | brand | ranking |
| 17 | 5 photo booth poses for 4 friends (save before the party) | F10 | brand | save-bait |
| 18 | things that look better with direct flash | F1/F2 | neutral | relatable list |
| 19 | ugly sweater party? 5 photo strip ideas | F10 | brand | seasonal |
| 20 | which party look are you, based on your NYE plans | F8 | brand | quiz |
| 21 | how to make iPhone photos look like a 2000s digicam (free) | F4/F1 | tutorial | "how to make ur photo look like… digicam" (232K) |
| 22 | **the flash effect people keep asking about, step by step** | F4 | tutorial (only after real asks) | "the effect everyone asks about" (2.3M) |
| 23 | what camera did I use? (it's my phone) | F1 | founder | "What camera did you use?" (C: >2M) |
| 24 | **med student. building a party camera between exams. day 1** | F9 | founder | build in public |
| 25 | my exams start dec 5. this app has to sell itself by then | F9 | founder (true) | founder stakes |
| 26 | the free looks are actually free. here's why | F9 | founder | trust angle (vs. paywall complaints) |
| 27 | my mom said our christmas photos all look the same, so I showed her this | F1 | founder (*true only*) | Larry formula (234K) |
| 28 | secret santa, but everyone leaves with the photo strip | F10 | brand | seasonal |
| 29 | the last photo of 2026 should look like this | F1 | brand | NYE |
| 30 | new batch: 6 christmas looks just dropped | F1/F8 | brand | Keeuc "new batch" (267K) |

**Not allowed (rewrite before use):** "the app everyone is using" (false until it's true); "I tried every photobooth app" in a fake customer voice; "this app is #1"; "help me win the contest" (contest rule).

---

## 13. Arabic and Egypt angle (short)

- Upload country shapes who sees a post first [C]. A Digi account posting from Cairo will reach Egypt and the Gulf before the US [E, med].
- Turn that into a second market rather than fighting it. Boothie's Turkish-language account made **77%** of its views [V, teardown], so a local-language account can carry a whole app.
- **@digi.arabic** (or a Gulf-dialect name): Formats 1, 2, 3 and 10 with Arabic hooks, such as "لا تنزلي صور السهرة كده" ("don't post the party pics like that"), and wedding and engagement season content. Respect modesty norms; use own or consented photos only.
- **Pricing caveat [E]:** Egypt's App Store prices and spend are low, while the Gulf is strong. Watch revenue per country in RevenueCat after week 1 and drop the account if it brings views but no money.

---

## What this means for Digi

1. **Nov 17–18: set up 4 openly branded accounts**, all as Business accounts with bio links:
   - @digi.pink (brand, English, looks and strips);
   - @digi.tips (tutorials and poses, "from the Digi team");
   - the owner's founder account ("building Digi between med exams");
   - @digi.arabic (Arabic).
   Never personas.
2. **Nov 17–20: warm up by hand.** 15 minutes a day per account of real liking, commenting and following in #digicam / #photobooth / #christmasparty. Post 1 a day from day 3.
3. **Nov 18: switch on the content-disclosure setting** (promoting your own product) as the default for every post on every account. Turn on the AI-generated label for any AI re-light or AI person.
4. **Nov 18: build a 20-track CML shortlist** (TikTok Creative Center, US, "trending in Commercial Music Library") and make Digi's own 2-second shutter-pop + flash sound. No general-library songs on Digi accounts.
5. **Nov 19–22 (pre-launch): post Format 1 and 2 only** on @digi.pink and @digi.tips, 1–2 a day each. Send traffic to digi.pink (free web filter + waitlist). Hooks #1, #4, #6, #8, #10.
6. **Launch week (Nov 23–30): 2 posts a day on each English account**, 1 a day on founder and Arabic. Add Format 5 (strip build) on approval day and Format 9 weekly. Reply-with-video (Format 4) within 24 hours of the first real "what app?" comment.
7. **Track per account with tagged links:** digi.pink/t/{account} → App Store with a campaign token. This is required for the contest's "show where customers came from" rule [V].
8. **Every Sunday:** sort by **saves per view** (target ≥2%) and profile visits. Re-run the top 3 hooks with new photos and new looks (5 variants each). Kill any format below the account median twice.
9. **Dec 1–4 (pre-exams): batch 60 videos** (Formats 1, 3, 5, 8) and schedule them through TikTok Studio's web scheduler, which accepts videos (window believed to be ~10 days [C]). Carousels can't be scheduled from the web. Either hand-post one carousel a day in 5 minutes, or use an audited API scheduler that supports photo direct-posts with auto-music. Test that by Nov 30.
10. **Seasonal calendar:**
    - Friendsgiving reveals Nov 27–30.
    - "Ugly sweater / Secret Santa" carousels Dec 5–20.
    - Christmas strips Dec 15–24.
    - NYE looks Dec 26–31.
    - "Our roll developed at 9am" on Jan 1. The contest ends Dec 16, but this keeps growth going after.
11. **$0 paid until proof.** No clippers, creators or boosts until organic shows at least 1 paying user per 10,000 views. Then one Content Rewards or SideShift test, capped at $300, with receipts and tagged links. Never pay mega-creators (0.17–0.42 views per follower in the sample).
12. **Format 7 starts the day launch content brings in real tagged users.** DM for permission, keep the screenshot, credit in the caption. This is the clean version of WayShot's 33.1M post.
13. **Open questions to settle by Nov 20:**
    - (a) Email the contest team: is a paid US posting assistant on Digi's own account "ad spend" or labour?
    - (b) Confirm whether the AI label on re-light results changes reach. Test 5 posts with the label against 5 matched posts that use only free (non-AI) looks.
    - (c) Owner: screenshot Creative Center hashtag counts (still missing).

---

## Sources

**TikTok posts and accounts (measured Nov 17, 2026, public pages):**
- https://www.tiktok.com/@kapi.cam/video/7556141447041305874 · https://www.tiktok.com/@kapi.cam
- https://www.tiktok.com/@wayshot_app/video/7670564513447480607 · https://www.tiktok.com/@wayshot_app/video/7574987906234764574 · https://www.tiktok.com/@wayshot_app
- https://www.tiktok.com/@princessameliawu/video/7578277303512304926 · https://www.tiktok.com/@shakhed/video/7601442834708761878 · https://www.tiktok.com/@7.goldd/video/7673933298275585302 · https://www.tiktok.com/@tiktoktosti/video/7649826912516246816
- https://www.tiktok.com/@emma.koah/video/7694700461609422101 · https://www.tiktok.com/@emma.koah/video/7697661987609791750 · https://www.tiktok.com/@emma.koah/video/7654923535701331220 · https://www.tiktok.com/@emma.koah
- https://www.tiktok.com/@bennett.miaa/video/7666551126413577502 · https://www.tiktok.com/@bennett.miaa/video/7668065678129204510 · https://www.tiktok.com/@bennett.miaa · https://www.tiktok.com/@madison.saier/video/7667369475926248735 · https://www.tiktok.com/@madison.saier
- https://www.tiktok.com/@msbianca.b/video/7431783194984303880 · https://www.tiktok.com/@ell3hrz/video/7549619295270046998 · https://www.tiktok.com/@mypreciousdiary8/video/7401069615058636040 · https://www.tiktok.com/@mymunah.n/video/7525922279004441861 · https://www.tiktok.com/@dimsum_gurl/video/7403801930138520863
- https://www.tiktok.com/@katamogz/video/7261366011159497989 · https://www.tiktok.com/@nouredamaj/video/7534278019431648520 · https://www.tiktok.com/@juanellaaa/video/7350253728659819781 · https://www.tiktok.com/@studiocherii/video/7362164228687432993 · https://www.tiktok.com/@studiocherii/video/7355861486889094432
- https://www.tiktok.com/@cranchyou/video/7381190770436541742 · https://www.tiktok.com/@cranchyou/video/7380916340095290666 · https://www.tiktok.com/@kee_uc/video/7695736048797715733 · https://www.tiktok.com/@kee_uc · https://www.tiktok.com/@yeshipolitoo/video/7311412169466236203 · https://www.tiktok.com/@makimoshi/video/7513006906735185159
- https://www.tiktok.com/@eventfulapp/video/7542531943812893974 · https://www.tiktok.com/@haiiseptiaaa/video/7565528033050807570 · https://www.tiktok.com/@ai_filters/video/7635428762460491016 · https://www.tiktok.com/@mikeeest/video/7464581656133897490 · https://www.tiktok.com/@play.rach/video/7387549587248123153 · https://www.tiktok.com/@rafakhira/video/7644876112232729874 · https://www.tiktok.com/@withgeorgy/video/7381057436263779616 · https://www.tiktok.com/@ssophiarocha/video/7463496465407560966
- https://www.tiktok.com/@lense.app/video/7278952371512724768 (+5 other lense.app posts) · https://www.tiktok.com/@lense.app · https://www.tiktok.com/@pov.app/video/7157418467002567978 · https://www.tiktok.com/@pov.app · https://www.tiktok.com/@weddingtipsandtricks4 · https://www.tiktok.com/@youth.days/video/7633416057608293646 · https://www.tiktok.com/@memoreiaph/video/7681955300928130322
- https://www.tiktok.com/@remini · https://www.tiktok.com/@epikapp · https://www.tiktok.com/@oldroll_cam · https://www.tiktok.com/@bill.b.e · https://www.tiktok.com/@pillow.of.cloud

**TikTok policies and docs:**
- Community Guidelines, Integrity & Authenticity (effective Sep 24, 2026): https://www.tiktok.com/community-guidelines/en/integrity-authenticity
- Community Guidelines, Regulated Goods, Services & Commercial Activities (effective Sep 24, 2026): https://www.tiktok.com/community-guidelines/en/regulated-commercial-activities
- FYF standards: https://www.tiktok.com/community-guidelines/en/fyf-standards
- Commercial Music Library help: https://ads.tiktok.com/help/article/commercial-music-library
- Content Posting API, get started: https://developers.tiktok.com/doc/content-posting-api-get-started

**Law:**
- FTC final rule on fake reviews and testimonials (Aug 14, 2024): https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials

**Case studies and practitioner write-ups:**
- PlayKit, POV Disposable breakdown (Oct 10, 2024): https://playkit.beehiiv.com/p/dispo
- Shortimize, Stronger (Aug 5, 2024): https://shortimize.com/blog/the-slideshow-strategy-that-generated-700000-users-in-275-days
- Shortimize, Astroapp (Aug 22, 2024): https://www.shortimize.com/blog/tiktok-multi-account-slideshow-strategy-making-50m-views-per-month/
- Postiz blog, Larry agent (Apr 16, 2026): https://postiz.com/blog/ai-agent-tiktok-views-postiz-api
- Nevo David playbooks (X articles, Apr–Nov 2026) via the nevo brain: https://x.com/wickedguro/status/2046261869963587636 · https://x.com/wickedguro/status/2096974398167392500 · https://x.com/wickedguro/status/2086788813301661865
- Building While Black, 20-account experiment (Jul 12, 2026): https://buildingwhileblack.substack.com/p/the-tiktok-slideshow-marketing-experiment
- DEV, ~15 accounts: https://dev.to/vidur_saini/how-to-market-your-app-on-tiktok-without-ads-or-creators-16dg
- Starter Story summary, Vix: https://finance.biggo.com/podcast/fbb0f4aa8eac0d9b
- Steal What Works, viral apps (updated Sep 17, 2026): https://stealwhatworks.com/blogs/news/tiktok-viral-apps-now
- OpenClip, slideshow unoriginal flag: https://openclip.app/guides/tiktok-slideshow-unoriginal-content-flag
- SocialBu, TikTok slideshows (mobile only): https://socialbu.com/blog/slideshow-on-tiktok

**Creator and clipper pricing:**
- ClipDocker, Content Rewards rates (708 campaigns, Oct 14, 2026): https://clipdocker.com/blog/whop-clipping-rates-2026
- SideShift (read Nov 17, 2026): https://www.sideshift.app/
- ReelFarm pricing (conflicting tiers): https://superscale.ai/alternatives/reelfarm/pricing · https://www.capterra.com/p/10042403/Reels-Farm/
- Collabstr 2026 report (403 today; figures via prior file 05): https://collabstr.com/2026-influencer-marketing-report

**AI photo trend spikes:**
- TechCrunch, EPIK No. 1 (Oct 6, 2023): https://techcrunch.com/2023/10/06/ai-app-epik-hits-no-1-on-the-app-store-for-its-viral-yearbook-photo-feature
- Stylus, 90s yearbook trend (Oct 17, 2023): https://stylus.com/pop-culture-media/90-s-yearbook-trend-refuels-social-media-ai
- Appfigures, Remini (Jul 14, 2023): https://appfigures.com/resources/insights/20230714/2-this-latest-tiktok-success-story-grew-revenue-5x-in-a-week

**Prior internal files built on:**
- `/home/user/MMTEST/research/digi-deep-2026-11/05-marketing-egypt-ops.md`
- `/home/user/MMTEST/research/digi-deep-2026-11/09-contest-plan.md`
- `/home/user/MMTEST/research/hackathon-2026-11/deep/15-growth-teardown-and-ideas.md` and `15-accounts.csv`

---

## Fact-check (2026-11-16)

Adversarial re-check on Nov 17, 2026 of the 11 numbers and rules this chapter's decisions rest on.

**Checked and confirmed (no change)**
1. Kapi Cam brand video: **87.2M** plays, 5.7M likes, 315,143 saves, 134.1K shares, posted **Oct 1, 2025**, `isAd: true`. Re-read from the public page data today. Confirmed.
2. WayShot top video: **33.1M** plays, `isAd: false`. Confirmed.
3. TikTok Community Guidelines, Regulated Commercial Activities: **effective Sep 24, 2026** (released Aug 25, 2026); you "must clearly disclose" commercial content with the content disclosure setting, and "Promoting your own business, product, or service" is a listed trigger. Penalties: reduced visibility, then temporary posting limits, then a possible ban. Confirmed word for word.
4. Integrity & Authenticity: "We strictly prohibit automation tools, scripts, or other tricks designed to bypass our systems"; creators must label realistic AI-generated scenes or people; multiple accounts allowed but "not to deceive others". Confirmed.
5. Content Posting API: "All content posted by unaudited clients will be restricted to private viewing mode." Confirmed on developers.tiktok.com.
6. FTC final rule on fake reviews and testimonials, press release **Aug 14, 2024**: bans testimonials by people who don't exist, undisclosed insider testimonials, company-controlled "independent" review sites, and buying fake followers or views. Confirmed (effective 60 days after Federal Register publication, i.e. Oct 2024).
7. SideShift: median **$7–9 per video** (last 90 days); software $210 / $349 / $699 per month billed yearly, $299 month-to-month; Picsart **185M views at $2.16 CPM** over six months. Confirmed on sideshift.app (vendor claims, so still C).
8. Content Rewards: median CPM **~$1** and **10%** creator fee. Confirmed; the November 2026 index (707 campaigns) shows a $1.09 median.

**Changed**
1. Key takeaway 8: added the November 2026 Content Rewards median ($1.09) and the 8% fee for verified organisations.
2. Key takeaway 9: "sounds can't be added through the API" was too strong. TikTok's photo-post endpoint has an `auto_add_music` switch, but you can't choose a specific sound. Reworded.

**Could not verify**
- Whether TikTok Studio on the web can now create or schedule photo carousels: guides disagree (Metricool says no; Sked says check your account). Keep "schedule videos, hand-post carousels" as the safe plan, and check it in TikTok Studio on day 1.
- Freelance UGC "$20–45 per video" and the 7.8K–10.7K brand median views (from the Nov 12 teardown) were not re-sampled.
- Follower-vs-views examples (76 → 232K, etc.) and the 46-post sample were not re-pulled one by one; the two biggest posts were.
