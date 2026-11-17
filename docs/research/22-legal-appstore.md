# 22 · Legal and App Store: what can get Digi rejected, removed or sued, and how to avoid it

**Date:** Tue Nov 17, 2026. **Track:** 22-legal-appstore.
**Builds on:** `digi-deep-2026-11/04-tech-safety-legal.md` (§5–6), `digi-deep-2026-11/07-apple-end-to-end.md` (§0–4) and `digi-bible-2026-11/21-tech-ai-cost.md` (§5). This chapter re-checks Apple's live pages today, adds the law that changed in 2026, reads the BytePlus (Seedream) rules that chapter 21 couldn't open, runs a US trademark scan on "DIGI", and ends with a pre-submission checklist.

**Labels**
- **[V]** = I read it today on a primary source: Apple's own pages, the USPTO search API, the iTunes API, the FTC, a statute translation, or BytePlus's policy page source.
- **[C]** = secondary source (law firm, press, forum, tracker), or a primary page I could only read in part.
- **[E]** = my estimate, with a confidence (high / med / low).

**This is research, not legal advice.** Items marked "lawyer" need one paid hour with a US privacy and IP lawyer before or right after launch.

Raw pages, the USPTO JSON and the iTunes pulls are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/bible/legal22/`.

---

## Key takeaways

1. **Apple's rules haven't changed since Oct 16, 2026**, and that version targets apps like Digi by name. Guideline 1.2 now covers "AI content creation apps" and "nonconsensual intimate imagery". The new 2.5.19 bans features that switch on after review [V]. Build to that text, not to older blog posts.
2. **The most likely rejection is not about AI.** In 2025 Apple rejected 2,093,244 of 9,100,620 submissions (23%). **65% of rejections were "Performance"**: crashes, placeholders, broken purchases, backend off. Privacy and other "Legal" issues came second at 24% [V, Apple Transparency Report 2025]. Ship a build that works on a real iPhone with the server on.
3. **The second most likely rejection is the AI consent screen.** Apple's exact rejection text asks you to "explain what data is sent, identify who the data is sent to, and ask the user's permission before sharing" [V, Apple forum thread 815109, Feb 2026]. Digi must name **OpenRouter (USA) and BytePlus/ByteDance (Singapore)** before the first photo leaves the phone.
4. **The paywall must show the price louder than the trial.** In Aug 2026 Apple rejected a paywall because it "promotes the free trial … more clearly and conspicuously than the billed amount" [V, forum 841626]. Apple's page says "the amount that will be billed must be the most prominent pricing element" [V]. Trial toggles have been rejected since Jan 2026 [C, RevenueCat, Adapty, Superwall]. Exact compliant copy is in §2.
5. **Seedream's own rules add three duties chapter 21 didn't know about** [V, BytePlus GenAI Acceptable Use Policy, updated Aug 31, 2026]:
   - Keep minors out, "including through appropriate access controls, age-assurance measures, and content moderation";
   - Never "delete, tamper with, or conceal" the AI labels the model puts on its output;
   - Never depict "any person's … likeness without appropriate consent".
   **Test today whether Seedream outputs carry a visible "AI generated" mark.** If they do, don't crop it or cover it with the date stamp.
6. **Stay 18+ and rate the app 18+.** Apple says a terms-of-use minimum age above the calculated rating means you "must override" to match [V]. The 18+ policy in the README therefore forces an 18+ store rating. That corrects chapter 07, which suggested 13+. None of 14 competitor apps I checked is rated 18+ (all are 4+ or 12+) [V, iTunes API], so this is a choice, not a category norm.
7. **The federal TAKE IT DOWN Act is live and the FTC is using it.** Enforcement began May 19, 2026. On May 20 the FTC sent warning letters to **12 "nudify" companies**. The penalty is **up to $53,088 per violation** [V, FTC]. Digi needs a public 48-hour removal form before launch. It costs one afternoon.
8. **"DIGI" is crowded and weak as a trademark, but usable.** The USPTO has **4,994 marks starting with "DIGI"** (live and dead). Digi International owns "DIGI" for networking hardware and software since the 1990s. Digifilm LLC registered "DIGIFILM" for cameras in 2025, and a Pittsburgh DJ company owns "DIGIBOOTHS" for event photo booths [V, USPTO]. The EU trademark office has called "DIGI" a short form of "digital" [C]. Use "Digi" with a descriptor, don't name features "Digi Booth" or "Digi Film", and file for the logo or "DIGI.PINK", not the bare word.
9. **New apps are reviewed slower than Apple's headline number.** Apple says 90% of submissions finish within 48 hours [V]. Runway's tracker shows a **20 h 8 m** average wait plus 46 m in review (two weeks to Nov 12) [V]. But developers reported **new** apps waiting a week or more in Oct 2026, and Apple confirmed "some new apps take longer" [C, MobileGamer, Oct 20]. Plan for **3–7 days** for v1.0, plus one rejection round.
10. **Egypt matters for the owner, not for users.** Egypt's data law became enforceable on **Nov 1, 2026** (some firms say Oct 31; CMS notes the regulator might count the grace period to the end of 2026 because the regulations were published late) and needs a licence to send Egyptians' data abroad [C]. Leave Egypt off the storefront list in v1. Egypt's cybercrime law also makes the person who runs a site liable for "negligently" exposing it to crimes (Art. 29) [V, Law 175/2018 translation]. Strong moderation protects the owner personally.

---

## 0. What I corrected from earlier work

| # | Earlier claim (where) | What is true now | Source |
|---|---|---|---|
| 1 | "Avoid 18+; override to 13+" (07 §1b) | If the terms say 18+, Apple says you "must override" the rating to 18+. You can't have 18+ terms and a 13+ rating. 18+ also matches BytePlus's minors clause | Apple ASC Help "Set an app age rating" [V]; BytePlus AUP [V] |
| 2 | "Plan for 48 h per review round" (07 §0.1) | True for updates. New apps were taking days to weeks in Oct 2026. Apple's own figure: average **1.5 days** across all apps, 14 h for minor updates, and "some new apps take longer" | MobileGamer, Oct 20, 2026 [C]; Runway Nov 12 [V] |
| 3 | Consent copy "Nobody uses your photos to train AI" (21 §5.4) | I could not find a BytePlus "no training on API inputs" clause. Its policy page is about use, not training. Don't promise what you can't verify. See the corrected copy in §4.3 and the routing test in §4.4 | BytePlus AUP and ToS page source [V, partial] |
| 4 | "Read the BytePlus AUP in a browser; no minors clause found" (21 §5.4) | Read it (the text is embedded in the page source). It **does** have a minors clause, a likeness-consent clause, a "don't remove AI labels" clause and a "don't use our names" clause. Quotes in §4.5 | BytePlus AUP, updated Aug 31, 2026 [V] |
| 5 | Per-photo checkbox "Everyone in this photo is 18+" (04 §4, 21 §5.2) | Fine for parties, but many December photos are family photos with kids. A checkbox people must tick falsely teaches them to lie. Block AI looks when the screen sees a likely child, and steer those photos to the free on-device looks. Copy in §5.3 | Product judgement [E, med] |
| 6 | Holiday window "no 2025 notice" (07 §3) | Still true on Apple's news list today. A MacRumors page dated Dec 2, 2024 carries the last confirmed Apple notice ("longer … December 20-26"). There's no 2026 notice yet | Apple Developer News [V]; MacRumors [V] |
| 7 | TAKE IT DOWN: "Private share links are arguably not a forum" (04 §6) | Still arguable for one-off links. But shared group **Rolls** are a place where users post content for each other. FTC guidance lists "messaging, image or video sharing" platforms as examples. Treat Digi as covered | FTC "Complying with the Take It Down Act" [V] |
| 8 | Apple "1.1.4 includes apps that generate nudity" (07 §1) | The Oct 16 news post says so. The 1.1.4 text itself is unchanged. The new wording sits in 1.2 and 2.5.19 | Guidelines + news, Oct 16, 2026 [V] |
| 9 | Minnesota nudify ban "in force" (04 §6) | In force since Aug 1, 2026. xAI sued on Jul 27, 2026; the court denied a TRO on Jul 31 and a preliminary injunction on **Sep 4, 2026**, so the ban stays in force while the case continues | Minnesota AG press release (Sep 4, 2026), Minnesota Lawyer [V] |

---

## 1. Apple's rules that touch Digi (text as of Nov 17, 2026)

The live Guidelines page says **"Last Updated: October 16, 2026"**. Its size and text match yesterday's copy byte for byte, apart from spacing [V]. The Oct 16 change log: 1.2 clarified, **2.5.19 new** (hidden features), **2.3.14 new** (creative assets), Section 5 child exploitation clarified [V, Apple Developer News].

### 1.1 Guideline-by-guideline table (exact words, then what Digi does)

| Rule | Exact words (V) | What Digi does |
|---|---|---|
| **1.1.4** | No "overtly sexual or pornographic material" | No swimwear, "hot", body or clothing looks. Output check on every AI image (ch. 21 §5) |
| **1.1.6** | "trick/joke functionality … 'for entertainment purposes' won't overcome this" | The fake date stamp is a style, not a claim. Let users set any date; never present it as proof of when a photo was taken |
| **1.2** | Apps that let users "create, generate, upload, share" content, "including … AI content creation apps", must have: "A method for filtering objectionable material", "A mechanism to report offensive content and timely responses", "The ability to block abusive users", "Published contact information" | Filter: input and output checks. Report: on every Roll photo and every share page. Block: in Roll › Members. Contact: support@digi.pink in Settings and on the store page |
| 1.2 (removal) | Apps "used primarily for … objectification of real people (such as 'hot-or-not' voting)" "may be removed without notice" | No rating of people. No "who looks best" votes in Rolls |
| 1.2 (enforcement) | "Developers who fail to implement appropriate safeguards or fail to remediate identified violations after notice may be considered in violation of the Developer Code of Conduct" | A Code of Conduct breach can end the developer account, not just the app. Answer every report within 24 h |
| **2.1(a)** | "include demo account info (and turn on your back-end service!)"; "We will reject … binaries that crash" | Reviewer needs credits. Server and AI keys live during review. Friendly error if AI times out |
| **2.1(b)** | In-app purchases must be "complete, up-to-date, visible to the reviewer and functional" | Weekly, Yearly and Party Pack all reachable and attached to v1.0 |
| **2.3.7** | Name ≤ 30 characters; no "trademarked terms, popular app names, pricing information" in metadata; subtitles must not "reference other apps, or make unverifiable product claims" | No "G7X", "Kodak", "Dispo", "Free", "#1" anywhere in name, subtitle or keywords |
| **2.3.8** | Icons, screenshots and previews must "adhere to a 4+ age rating even if your app is rated higher" | No drinks, bottles, cleavage or club shots in screenshots, even though the app is 18+ |
| **2.3.9** | "You are responsible for securing the rights to use all materials in your app icons, screenshots, and previews" | Screenshot faces: the owner, paid models with signed releases, or AI-generated people. Never user photos |
| **2.3.14** (new) | Creative assets must avoid "unverifiable product claims, or specific or discounted pricing" | No "50% off" in header art |
| **2.5.19** (new) | "Don't include any hidden, dormant, or undocumented features" | New looks added from the server must stay in the same content class. Say so in the review notes |
| **3.1.1** | "Any credits … purchased via in-app purchase may not expire"; "make sure you have a restore mechanism" | Party Pack digis never expire. Restore button on the paywall and in Settings |
| **3.1.2(a)** | Period "at least seven days"; "Subscriptions may include consumable credits"; "should allow a user to get what they've paid for without performing additional tasks, such as posting on social media" | Weekly is fine. Never make "share to IG" a condition for a paid feature |
| **3.1.2(c)** | "Before asking a customer to subscribe, you should clearly describe what the user will get for the price" | Paywall states the AI-digi allowance in numbers. §2 |
| **3.2.2(x)** | Apps "must not force users to rate the app, review the app … in order to access functionality" | No "rate us for 3 free digis" |
| **4.1(c)** | "You cannot use another developer's icon, brand, or product name in your app's icon or name" | Own icon. No camera-brand silhouette |
| **4.3(b)** | "Don't submit apps that are indistinguishable from what's already widely available" | See §1.4. Lead with Rolls and group strips |
| **4.5.4** | Push "should not be used for promotions … unless customers have explicitly opted in" | "Your roll developed" pushes are service messages. Promo pushes need a separate opt-in |
| **4.8** | Third-party login requires an equal option that "limits data collection to the user's name and email address" and lets users "keep their email address private" | Anonymous sign-in for v1. If Google login is ever added, add Sign in with Apple |
| **5.1.1(i)** | Privacy policy link "in the App Store Connect metadata field and within the app"; it must "Explain its data retention/deletion policies and describe how a user can revoke consent" | digi.pink/privacy, linked from Settings and the paywall |
| **5.1.1(ii)** | "Paid functionality must not be dependent on or require a user to grant access to this data"; "an easily accessible and understandable way to withdraw consent" | Settings › Privacy › AI processing On/Off |
| **5.1.1(iii)** | "use the out-of-process picker or a share sheet rather than requesting full access to protected resources like Photos" | System photo picker for imports. Add-only Photos permission for saving |
| **5.1.1(v)** | "If your app supports account creation, you must also offer account deletion within the app" | "Delete my data" in Settings even with anonymous accounts |
| **5.1.2(i)** | "You must clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission before doing so" | Consent screen in §4.3, before the first upload |
| **5.1.2(vi)** | Data from "Camera APIs, or Photo APIs" "may not be used for marketing, advertising or use-based data mining, including by third parties" | Never put a user's photo in an ad or a TikTok, even a great one, unless it came through a separate opt-in submission with a signed release [E, med] |
| **5.1.4** | Apps that "collect, transmit, or have the capability to share personal information (such as … photos …) from a minor must … comply with all applicable children's privacy statutes" | 18+ gate. If a user turns out to be under 13, delete their data (COPPA) |
| **5.2.1** | "Don't use protected third-party material such as trademarks" | Look names stay generic: "2005 Digicam", not "Canon"; "Instant", not "Polaroid" |
| **5.3.1 / 5.3.2** | Contests "must be sponsored by the developer" with official rules in the app saying "Apple is not a sponsor" | Only if Digi runs a "best NYE digi" giveaway |

### 1.2 What actually gets apps rejected (Apple's own 2025 numbers)

Source: Apple, *2025 App Store Transparency Report* [V, https://www.apple.com/legal/app-store/transparency/2025/].

| Measure (2025, worldwide) | Number | Share |
|---|---|---|
| Submissions reviewed | 9,100,620 | |
| Submissions rejected | 2,093,244 | **23.0%** of reviewed |
| Rejected for **Performance** (2.x: completeness, bugs, metadata) | 1,354,418 | **64.7%** of rejections |
| Rejected for **Legal** (5.x: privacy, IP) | 495,673 | 23.7% |
| Rejected for **Design** (4.x: copycats, minimum function, spam) | 415,532 | 19.9% |
| Rejected for **Business** (3.x: payments, subscriptions) | 283,820 | 13.6% |
| Rejected for **Safety** (1.x: content, UGC) | 151,159 | 7.2% |
| Approved after a rejection | 387,087 | 18.5% of rejections |
| Apps removed from the store | 166,899 | |
| Removed for 1.1.4 sexual content / 1.2 UGC / 4.3 spam / 4.1 copycats | 360 / 241 / 418 / 279 | |

Shares add up to more than 100% because one rejection can cite several guidelines. Apple's App Review page also says "over 40% of unresolved issues are related to guideline 2.1: App Completeness" [V].

**What it means:** the boring stuff decides launch day. A crash on the reviewer's iPad, a dead link to the privacy policy, or a purchase that won't load causes more rejections than anything AI-specific.

### 1.3 The exact rejection messages Digi should pre-empt

**(a) AI data sharing: 5.1.1(i) + 5.1.2(i)** [V, Apple Developer Forums thread 815109, Feb 2026, quoted by the developer]:

> "The app appears to share the user's personal data with a third-party AI service but the app does not clearly explain what data is sent, identify who the data is sent to, and ask the user's permission before sharing the data. Apps may only use, transmit, or share personal data after they meet all of the following requirements: Disclose what data will be sent · Specify who the data is sent to · Obtain the user's permission before sending data · Identify in the privacy policy what data the app collects, how it collects that data, all uses of that data, and confirm any third party the app shares data with provides the same or equal protection"

Another developer was rejected eight times because reviewers "were not presented with the consent prompt" even though it was the first screen [C, thread 820209]. The fix is in the review notes: say exactly where the consent appears and attach a screenshot.

**(b) Trial louder than price: 3.1.2(c)** [V, forum thread 841626, Aug 2026]:

> "The auto-renewable subscription promotes the free trial, introductory pricing, or introductory period for the subscription more clearly and conspicuously than the billed amount."

**(c) Spam: 4.3(b).** Developers in 2026 report vague notes like "already enough of these apps on the App Store" and "similar binary, metadata, and/or concept" [C, forum threads 838619, 853129, 812196]. No camera-filter-specific thread surfaced in my search.

### 1.4 The 4.3(b) "spam" risk is real for a digicam app

I pulled every US App Store result for nine searches ("digi", "digicam", "digi camera", "digi cam", "y2k camera", "ccd camera", "disposable camera", "film camera", "photo booth") [V, iTunes Search API, Nov 17, 2026]:

- **582** unique Photo & Video apps came back.
- **243 (42%)** were released in the last 12 months.
- Launches per month rose from 5 (Nov 2025) to 8 (Dec–Feb), 14 (Mar), 25 (Jun), 33 (Jul), 34 (Sep), 29 (Oct) and **30 in the first 17 days of November**.
- Recent examples: "Pixie+ — Y2K Digicam" (May 2026), "Y2K Cam 2003: Retro Digicam" (Jul 2026), "Tokdak - Y2K CCD Digicam" (Oct 2026), "Pocket Digicam: Y2K CCD Cam" (Oct 2026), "XA: Y2K Digicam & Film Camera" (Nov 8, 2026).

Two readings, both true:
1. Apple is still approving these apps, so the category isn't closed.
2. A plain "digicam filter + date stamp" app is now the textbook case of "indistinguishable from what's already widely available".

**How Digi reads as "meaningfully different"** (put this in the review notes, the first screenshot and the first line of the description):
- **Rolls:** a shared party roll that "develops" for everyone the next morning.
- **Group AI strips:** each friend's photos combined into one booth strip.
- **Party mode:** one phone passed around the room, one set at the end.
- The free digicam look is a feature, not the product.

Review-notes line [E, high]:
> "Digi is a party camera for groups. Friends join a shared Roll by link. Photos stay hidden until 10 am the next day, then 'develop' for everyone. Optional AI looks re-light photos and build group photo strips. The on-device film looks are free and work offline."

### 1.5 What 1.2 means for Rolls (user-generated content)

A Roll is UGC even without a public feed. Apple's four musts, mapped to screens:

| Must (1.2) | Where in Digi | Detail |
|---|---|---|
| Filter | Server | Input and output checks before a photo enters a Roll (ch. 21 §5.2) |
| Report | Long-press any Roll photo › "Report"; "Report" link on every digi.pink/s/ page | Reasons: nudity, someone under 18, I'm in this and want it removed, harassment, other. Confirmation: "Thanks. We'll review this within 24 hours." |
| Block | Roll › Members › "Remove and block" | Removes the person's photos from that Roll and stops them rejoining |
| Contact | Settings › Help; App Store support URL | support@digi.pink and digi.pink/support |

Also: terms accepted before the first Roll post with a zero-tolerance line ("No nudity, no one under 18, no photos of people who didn't agree. We remove content and ban accounts that break this."). Reviewers often ask for this [C, 07 §1].

---

## 2. Subscriptions, the trial and the paywall (3.1.1, 3.1.2)

### 2.1 What Apple's subscription page requires on the sign-up screen [V]

From https://developer.apple.com/app-store/subscriptions/ :
- "Subscription name and duration, and the content or services provided during the subscription period"
- "Full renewal price, shown clearly and prominently, and localized in available currencies"
- "A way for current subscribers to sign in or restore purchases"
- "your app and App Store metadata must include links to your Terms of Use and Privacy Policy"
- "the amount that will be billed must be the most prominent pricing element in the layout … a breakdown price … should be displayed in a subordinate position and size"
- Free trials: "clearly indicate how long the free trial lasts and the price billed once the free trial is over"

Add the forum rejection in §1.3(b): a trial that is louder than the price fails. Trial toggles ("Enable free trial" switches) have been rejected since mid-January 2026 [C, RevenueCat "RIP toggle paywall"; Adapty; Superwall].

### 2.2 Compliant paywall copy for Digi's three products [E, high on compliance; check numbers against ch. 06/21]

Use the final AI-digi allowance from ch. 21 (it discusses 50–60 a month for yearly) in place of `[N]`.

**Yearly card (pre-selected):**
> **$39.99/year after a 3-day free trial**
> That's about $0.77 a week. Includes [N] AI digis every month.

**Weekly card:**
> **$6.99/week**
> Includes [N] AI digis every week. No trial.

**Party Pack card:**
> **$5.99 one-time: 25 AI digis**
> Not a subscription. Your digis never expire.

**Button:** "Continue". Avoid "Start free trial" as the biggest text on the screen. If you want trial words on the button, make the price line above it the same size or larger [E, med].

**Small print under the button (always visible, not behind a "more" link):**
> Free for 3 days, then $39.99 a year. Renews automatically until you cancel. Cancel any time in Settings › Apple Account › Subscriptions, at least 24 hours before the trial or period ends. Monthly AI digis reset each month; Party Pack digis never expire.
> Terms · Privacy · Restore

**Rules this copy follows:**
- **The billed amount is the biggest price on screen.** $39.99 is bold. $0.77 is smaller and lighter.
- **"What you get" is a number** (3.1.2(c) asks "How many issues per month?").
- **Two digi buckets, explained.** A monthly allowance that resets is part of the subscription, not "purchased credits". Party Pack digis are purchased credits and must never expire (3.1.1). Spend allowance first, pack digis second. Show both counts in the app: "12 monthly · 25 pack". Apple's text allows subscriptions that "include consumable credits" [V], but I found no Apple page on resetting allowances specifically [E, med: common practice, e.g. many AI apps].
- **A visible close button** from the first frame. No delayed X. No fake countdown.
- **Weekly and Yearly in one subscription group**, so nobody can hold both (3.1.2(b)).

### 2.3 Trial abuse and refunds (contest money)

Refunds reduce contest profit until winners are confirmed (README §2). Two cheap protections:
- Cap AI digis during the trial (for example 5), and say so: "Trial includes 5 AI digis." [E, high]
- Send a push 24 hours before the trial converts. It isn't required by Apple, but surprise renewals are a top refund reason in WayShot's reviews (ch. 19) [E, med].

---

## 3. Age rating (2026 system) and who Digi is for

### 3.1 The tiers and what pushes an app up [V, ASC Help "Age ratings values and definitions"]

| Rating | Triggers relevant to Digi |
|---|---|
| **4+** | Can still include "User-generated content", "Messaging and chat", "Advertising", "Age assurance" |
| **9+** | "Infrequent mature or suggestive themes" |
| **13+** | "Social media" capability; "Infrequent alcohol, tobacco, or drug use or references"; "Infrequent sexual content or nudity" |
| **16+** | "Unrestricted web access"; "Frequent mature or suggestive themes" |
| **18+** | "Frequent alcohol, tobacco, or drug use or references"; "Frequent sexual content or nudity"; gambling. **Dating & Relationships** is 18+ minimum from Nov 16, 2026 [V, news Nov 2] |

**New since yesterday:** from **Nov 16, 2026**, every submission must answer the **Shared Location** and **Dating and Relationships** questions. All apps must have them by **Jan 12, 2027** [V, Apple news Nov 2, 2026].

**Social media** means a feed or discovery method "that visibly spreads content to many users" [V]. Invite-only Rolls with no explore page = **No**.

### 3.2 The override rule (this corrects chapter 07)

> "If your app has a EULA with minimum age requirements that exceed the rating that Apple calculated, you must override to a rating that adheres to the requirements." [V, ASC Help "Set an app age rating"]

So: **terms say 18+ → store rating must be 18+.** The override "will apply in all regions" [V].

### 3.3 Options, side by side

| Option | Pros | Cons | Score /10 |
|---|---|---|---|
| **A. 18+ terms, 18+ rating, Declared Age Range check (pick)** | Matches the README, the contest's own adult focus and BytePlus's minors clause. Lowest CSAM and COPPA exposure. Easy story for App Review. Texas SB 2420 parental-consent flows mostly don't apply to an adults-only app | Unusual for the category. Blocked for unconfirmed adults in Australia, Brazil and Singapore since Feb 24, 2026 [V]. Effect on search or featuring is unknown (I found no data) | **8** |
| B. 16+ terms, 16+ rating | Still adult-leaning. Wider funnel (16–17) | Teens' photos go to an unmoderated model. You'd need parental-consent handling in Texas, Utah, Louisiana. BytePlus requires "age-appropriate experiences" for minors | 5 |
| C. 13+ terms, 13+ rating (07's suggestion) | Largest funnel. Matches Lapse, Locket, POV (all 12+ legacy label) | COPPA edge cases, teens in party photos, Texas consent flows, CSAM risk with `is_moderated: false` models (ch. 21) | 4 |

**What competitors chose** [V, iTunes Lookup API, Nov 17]: Dazz, Dispo, Pecra, Once, Remini, Tezza = 4+. Lapse, Locket, POV, Lensa, Esti, WayShot, Boothie, Sparkle = 12+ (the API still shows the legacy 12+ label). None is 18+. Outside these 14, Partiful (the party-invite leader) shows the legacy **17+** label, so an adult rating is not unheard of next to party apps [V, Lookup Nov 16].

### 3.4 Honest questionnaire answers for Digi [E, high; answer for the real build]

| Question | Answer |
|---|---|
| Parental controls | No |
| **Age assurance** | **Yes** (Declared Age Range + date-of-birth fallback) |
| Unrestricted web access | No |
| **User-generated content** | **Yes** (Rolls, share links) |
| Messaging and chat | No (unless Rolls get comments) |
| Advertising | No |
| Social media | No (no feed, no discovery) |
| Shared Location | No |
| Dating and Relationships | No |
| Alcohol / tobacco / drugs | "Infrequent" if any look, sticker or sample shows drinks. Otherwise None |
| Mature / suggestive themes | None (filters block it) |
| Override | **Override to Higher Age Rating → 18+** |

### 3.5 US age laws in plain words

| Law | Status | What it asks of Digi |
|---|---|---|
| **Texas SB 2420** (App Store Accountability Act) | District court blocked it Dec 23, 2025. 5th Circuit stayed that block May 28, 2026 (stay pending appeal Jun 4). Supreme Court declined to vacate the stay [C, MoFo, CCIA]. Apple applies it to new Texas accounts from Jun 4, 2026 [V, Apple news Jun 3] | Ask Apple's Declared Age Range API for the user's age category. Good-faith reliance on the store's signal is a safe harbor [C]. An 18+ app blocks minors instead of handling parental consent |
| Utah, Louisiana | New Utah accounts from May 6, 2026; Louisiana from Jul 1, 2026 [V, Apple news] | Same API |
| **California AB 1043** (Digital Age Assurance Act) | Signed Oct 13, 2025; main duties from **Jan 1, 2027**. AG fines up to $2,500 per child (negligent) / $7,500 (intentional). No private lawsuits [C] | Request the OS age signal at download/launch. Declared Age Range covers it. Treat the signal as "actual knowledge" of age |
| COPPA (amended rule) | Compliance date Apr 22, 2026 [C, ch. 04] | Don't knowingly collect from under-13s. Delete if found |

**Build:** `expo-age-range` at first launch. If the range is under 18, show: "Digi is for adults 18+. Come back on your 18th birthday." and stop. If the user declines to share, ask for a birth year; under 18 → same screen [E, high].

---

## 4. Privacy: consent, labels and where the photos go

### 4.1 The data map (what leaves the phone)

| Data | Leaves the phone? | Goes to | Kept |
|---|---|---|---|
| Free on-device looks (film, flash, date stamp) | **No** | Nowhere | On the phone only |
| Photo for an AI look | Yes | Digi backend (Supabase, ch. 21) → **OpenRouter, Inc. (USA)** → **BytePlus Pte. Ltd. (Singapore)**, the Seedream provider [V, OpenRouter `/api/v1/providers` lists "Seed", headquarters "SG", with BytePlus privacy and terms links] | Original: delete right after the job. Result: 30 days |
| Screening (Llama Guard, Nova Lite per ch. 21) | Yes (a resized copy) | OpenRouter → Meta-model host / Amazon | Per provider policy [E: verify] |
| Roll photos | Yes | Digi backend; shown to Roll members | Until the Roll owner deletes it, or a set expiry |
| Purchases | Yes | Apple, RevenueCat | Per their policies |
| Crash data / analytics | Yes | Sentry / PostHog (if used) | Per settings |

**Strip location data before upload** (EXIF GPS). It cuts liability and isn't needed [E, high].

### 4.2 App Privacy ("nutrition label") answers [E, high; match the real SDK list]

| Data type | Collected | Purpose | Linked to user | Tracking |
|---|---|---|---|---|
| User Content › **Photos or Videos** | Yes | App Functionality | Yes (tied to an anonymous user ID) | No |
| Identifiers › **User ID** | Yes | App Functionality | Yes | No |
| Purchases › **Purchase History** | Yes | App Functionality | Yes | No |
| Usage Data › Product Interaction | Only if analytics is on | Analytics | Yes | No |
| Diagnostics › Crash Data | Only if Sentry is on | App Functionality | Yes | No |
| Contact Info › Email | Only if support form or sign-in collects it | App Functionality | Yes | No |
| Location, Contacts, Health, Browsing, Financial, Sensitive Info | No | | | |

"Data Used to Track You: **None**", as long as there's no Meta/TikTok ad SDK using IDFA. If you add one for paid ads (ch. 16), the label changes and App Tracking Transparency is required.

Common mistake: answering "Data Not Collected" while the app uploads photos to a server. That contradicts 2.3 ("privacy information" must be accurate) [V].

### 4.3 The AI consent screen (corrected copy)

Shown once, full screen, before the first photo goes to the server. **No network call before "Allow."** Nothing pre-ticked. [E, high]

> **Before your first AI digi**
>
> To make an AI look, Digi sends this photo to **OpenRouter (USA)**, which passes it to the image model's maker, **BytePlus, a ByteDance company (Singapore)**. They create your new image and send it back.
>
> **What's sent:** this photo, including the faces in it, and the look you picked. Nothing else.
>
> **How long we keep it:** we delete your original right after your digi is made, and your AI result after 30 days. You can delete it sooner in Settings.
>
> **Training:** Digi never uses your photos to train AI.
>
> Only use photos where everyone is 18+ and okay with it.
>
> **[Allow AI looks]**  **[Not now]**
> *Change this any time in Settings › Privacy.*

Notes:
- "Digi never uses your photos to train AI" is true of Digi. **Don't** add "and our partners don't either" until §4.4 is checked.
- "Not now" must still leave the free camera fully usable (5.1.1(ii): paid features can't depend on granting data access; free features must not either).
- Real examples on Mobbin: CapCut asks "Allow CapCut to upload your photos to our server?" with **Allow / Not now** [Mobbin](https://mobbin.com/screens/757b8736-ddfd-44bc-ab58-793cc0045d7f?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp). Google Arts & Culture's Art Transfer says "Your photo is not stored by us or used for training" [Mobbin](https://mobbin.com/screens/3aa366fb-d188-42c2-bc7c-d2b55ecf4f84?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp). Warby Parker uses a checkbox that spells out its face scanning in detail [Mobbin](https://mobbin.com/screens/b6bded59-11cb-4ba5-aeb4-4f32ef0603da?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp). Cal AI's version ("Your Photos, Your Privacy … never shared without your consent" + Continue) names no recipient, which is the pattern Apple's 5.1.2(i) rejection text describes [Mobbin](https://mobbin.com/screens/dcf735f6-52fd-4181-bf5e-442065642bb4?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp) [E, med].

### 4.4 A 5-minute test that tells you whether Seedream may keep or train on photos

OpenRouter lets a request say "only route me to providers that don't collect data". Its docs say that if you opt out of training, OpenRouter "won't route to providers that train" [C, OpenRouter docs, provider logging].

**Test (developer, one call, about $0.03):** send one Seedream request with the provider preference `data_collection: "deny"` (and, separately, a zero-data-retention preference if OpenRouter offers it for images).
- **Works:** OpenRouter treats Seed as non-training. You can add "and our AI partners don't train on it either" to the consent copy, citing OpenRouter's listing.
- **Fails with "no endpoints":** Seed may retain or train. Keep the copy as in §4.3, tell users in the privacy policy that BytePlus's own policy applies, and weigh FLUX.3 Klein (Black Forest Labs) or MAI (Microsoft) as primary, as ch. 21 suggested.

### 4.5 What BytePlus's rules say (read today) [V]

Source: BytePlus Acceptable Use Policy page (`docs.byteplus.com/en/docs/legal/docs-acceptable-use-policy`), "Last updated: August 31, 2026". The text sits in the page's embedded data. BytePlus Pte. Ltd. is the Singapore company that provides the service [V, ToS page].

| Clause (exact words) | What Digi does |
|---|---|
| You may not "depict any person's voice or likeness without appropriate consent or rights, including non-consensual intimate imagery" | Uploader consent checkbox. Group Rolls where each friend joins (consent by design). No celebrity looks |
| "abuse or harm a minor … or provide a minor with content or interactions incompatible with their age" | Block AI looks on likely-child photos (§5.3) |
| With AI Services "you shall ensure age-appropriate experiences and prevent unlawful or inappropriate access to or use of the service by minors, including through appropriate access controls, age-assurance measures, and content moderation mechanisms" | 18+ gate, Declared Age Range, input/output checks |
| You must not "delete, tamper with, or conceal the deep synthesis service identifiers or labels generated by AI Services in the output in any manner" | **Test now:** does the OpenRouter output carry a visible "AI generated" corner mark or metadata? Third-party docs say Seedream's `watermark` setting defaults to on and puts "AI generated" in the **bottom-right** [C, Volcengine/Novita/GMI docs]. Digi's date stamp is also bottom-right (ch. 21 §3). If a mark exists, don't crop it, cover it or strip its metadata. Move the date stamp or keep the mark visible |
| You must not "use, reference, copy, or register the trademarks, trade names, names, or logos of BytePlus or its affiliates (including … 'Byteplus', 'Seedance' …) … or state or imply that your products … have been approved or endorsed by BytePlus" | **Tension with Apple 5.1.2(i)**, which requires naming who gets the data. Naming BytePlus as a data recipient in a privacy notice is a legal disclosure, not branding [E, med]. Never write "Powered by Seedream" in marketing, never use their logo. Lawyer item |
| "provide appropriate notices that users are interacting with an AI and that content is AI generated"; "implement appropriate reporting or feedback channels" | An "AI" chip on every AI result and share page. The report button (§1.5) |
| Must not "evade, bypass, or disrupt … content filtering" | No prompt tricks to get past refusals |

I did **not** find a training or retention clause on the pages I could read. Treat training as unknown until §4.4 is done.

### 4.6 Purpose strings (Info.plist) [E, high]

| Key | Text |
|---|---|
| `NSCameraUsageDescription` | "Digi uses your camera to take photos with flash and film looks." |
| `NSPhotoLibraryAddUsageDescription` | "Digi saves your finished photos and strips to your library." |
| `NSPhotoLibraryUsageDescription` | Leave it out if you only use the system picker. Set the `expo-image-picker` plugin's `photosPermission` to `false` [E, med: check the plugin docs for SDK 58] |
| `NSMicrophoneUsageDescription` | Leave it out unless Digi records video. The `expo-camera` plugin adds it by default; set `microphonePermission: false` [E, med] |

### 4.7 GDPR and the UK (later, not for the contest)

- Launch **US-only** (as the README says). The EU and UK bring GDPR, the AI Act's labelling and the UK Online Safety Act at once (§6).
- Under GDPR, photos are "biometric data" only when "processed through a specific technical means allowing the unique identification or authentication of a natural person" (Recital 51) [C]. A re-light edit without face recognition is ordinary personal data, but sending EU photos to Singapore still needs a transfer mechanism (Standard Contractual Clauses) [E, high].
- The EU also requires the DSA trader-status check to list in EU storefronts (ch. 07) [V].

---

## 5. Faces, consent and minors in photos

### 5.1 Illinois BIPA: the live risk

- **The 2026 theory:** two proposed class actions against Grok's operators claim that transforming a photo of a face creates a "face-specific representation" that counts as a face-geometry scan. *Padilla* (filed Oct 7, 2026, N.D. Ill. 1:26-cv-12335) and *Wilson* (filed Oct 12, 2026, 1:26-cv-12502). The proposed class is Illinois residents who uploaded **their own** face. Pleading stage; no ruling [C, FKKS, ClassAction.org, Top Class Actions].
- **Filters too:** in Feb 2026 a federal judge in Illinois ruled that Illinois law (not California's) governs a BIPA suit over Messenger and Messenger Kids **face filters**. The case continues [C, MLex/Law360].
- **Damages:** $1,000 per negligent violation, $5,000 per reckless one; since 2024, per person rather than per scan [C, ch. 04].
- **Texas CUBI** covers "a record of … face geometry", AG-only, up to $25,000 per violation [C, ch. 04].

**What Digi does** [E, med; lawyer item]:
1. Publish a **biometric data policy** on digi.pink: Digi doesn't build face templates or recognise anyone; AI processing may analyse faces to re-light them; originals are deleted after the job, results after 30 days; data is never sold.
2. Get **written consent** from the uploader for their own face at the consent screen. An e-sign checkbox can count as a "written release" under the 2024 amendment [C, ch. 04]. Add one line to §4.3: "I agree to Digi's Biometric Data Policy."
3. Never run face recognition, face embeddings or face-landmark detection on user photos. The ch. 21 screening asks a vision model for "people_count" and "youngest_apparent_age". That's an estimate from a face, and under the Wilson theory it could be argued to be a scan. Keep no output except the yes/no decision and the count [E, low-med].
4. Non-users in group photos can't consent through Digi. The uploader attests for them. This risk can be reduced, not removed.

### 5.2 Other people in the photo

- **Rolls are consent by design:** everyone in the Roll joined by link and agreed to the terms. Push Rolls as the hero flow.
- **"Remove me" form:** anyone (not only users) can ask for a photo of them to be removed: digi.pink/remove. Same 48-hour clock as TAKE IT DOWN (§6.1).
- **Marketing:** the contest bans "deepfakes or real people without consent" (ch. 04, L12). Use the owner, paid models with releases, or clearly AI-made people in ads.

### 5.3 Children in photos (the December problem)

Christmas photos include kids. Here's a rule that is honest and still sells [E, med]:

- **Free on-device looks:** allowed for every photo. Nothing leaves the phone.
- **AI looks:** blocked when the screening check says someone may be under 18. Refund the digi automatically.
- **Block message (friendly, no blame):**
  > **AI looks are for grown-up photos**
  > It looks like someone in this photo might be under 18, so we didn't send it to AI. Your digi is back. Try a free film look instead. It works on any photo.
  > [Try Film look]  [Pick another photo]
- **Per-photo checkbox** (not pre-ticked), shown only for AI looks:
  > ☐ Everyone in this photo is 18+ and okay with an AI edit.

Why so strict:
- The image models on Digi's key are not moderated by OpenRouter (`is_moderated: false`) [V, ch. 21].
- BytePlus's minors clause (§4.5).
- **18 U.S.C. § 2258A:** knowing failure to report apparent CSAM can cost **up to $600,000** for a first offence by a provider with under 100M users [V, ch. 04].
- Age guesses are unreliable near 18. Expect some young-looking adults to be blocked. That costs a few sales, which is fine.

---

## 6. Deepfake and intimate-image laws

Digi is not a nudify app: fixed looks, no free-text prompt, no body or clothing edits, output checks. The laws below matter because **a model can drift**, and because Rolls host user content.

### 6.1 US federal: TAKE IT DOWN Act (Pub. L. 119-12)

| Item | Fact | Source |
|---|---|---|
| Platform duty start | **May 19, 2026** | FTC press release [V] |
| Who is covered | Services that "primarily provide a forum for user-generated content", e.g. "social media, messaging, image or video sharing, and gaming platforms" | FTC business guidance [V] |
| Notice | "plain-language information about its notice and removal process", "clear and conspicuous" | FTC [V] |
| Removal | Within **48 hours** of a valid request; "reasonable efforts to find and remove known identical copies" | FTC [V] |
| Covers AI fakes | Yes: "digital forgeries", images "created or altered using software, an app, or artificial intelligence" | FTC [V] |
| Penalty | Treated as an FTC rule violation: **up to $53,088 per violation** | FTC [V] |
| Enforcement so far | Letters to ~15 large platforms before the deadline; **May 20, 2026: warning letters to 12 "nudify" companies** that "appear to lack" a removal process. Victim complaint site: TakeItDown.ftc.gov. No lawsuit found yet | FTC [V]; WilmerHale [C] |

**Digi's version (one afternoon) [E, high]:**
- Footer link on every digi.pink page and in the app's Settings: **"Report an intimate image or remove a photo of me."**
- Form fields: the link or Roll name; "This is me / I'm authorised to act for this person"; a good-faith statement; electronic signature; contact email.
- Auto-reply: "We got your request. We'll review it and remove qualifying content within 48 hours."
- On approval: delete the item and any exact copies (match by file hash across storage), ban the uploader, log the request.

### 6.2 US states (selected, 2026)

| State | Law | Status | Why it matters |
|---|---|---|---|
| **Minnesota** | HF 1606, nudification ban: services can't let users "nudify" anyone; AG fines up to **$500,000 per violation**; victims can sue | In force Aug 1, 2026. xAI sued to block it (Jul 27, 2026); the court denied a preliminary injunction on Sep 4, 2026 (confirmed by the Minnesota AG), so the ban stands while the case continues | 19th News, Multistate, Lawfare [C] |
| **California** | AB 621 (amends Civ. Code § 1708.86): victims can sue creators and services that keep "deepfake pornography services" running; up to **$25,000** per violation, **$50,000** if malicious | In force Jan 1, 2026 | Digital Policy Alert, Assembly analysis [C] |
| **Wyoming** | HB 102 (Enrolled Act 32), new felonies for nonconsensual synthetic sexual material and AI child abuse material | In force Jul 1, 2026. Civil provisions for developers reported inconsistently. I found **no** 72-hour removal rule | Wyoming Legislature, RecordingLaw [C] |
| Texas | HB 441 widened deepfake sexual content crimes | Effective Sep 1, 2025 | Tracker [C] |

Grasp Labs LLC is reported as a Wyoming LLC (earlier research, `pf-06-legal.md`) [C]. Wyoming's new law is criminal and aimed at people who make or share such material. Digi's design keeps it out of scope [E, med].

**FTC fake-review rule:** AI-made "customers" in ads or persona accounts posing as real users can break the FTC's 2024 rule banning fake reviews and testimonials (civil penalties per violation) [C, FTC Aug 14, 2024]. Label AI personas as AI or as the brand.

### 6.3 UK (skip the storefront in v1)

- **Creating** a sexually explicit deepfake without consent is a crime under the Data (Use and Access) Act 2025, which added ss. 66E–66F to the Sexual Offences Act 2003. In force **Feb 6, 2026** [C, Hansard Jan 2026, trackers].
- **Making or supplying a "purported intimate image generator"** is a crime under the Crime and Policing Act 2026 (new s. 66I), in force **Jun 29, 2026** [C, CPS guidance].
- Rolls and share pages would make Digi a user-to-user service under the Online Safety Act, with risk assessments and possibly "highly effective" age checks [C, ch. 04].

### 6.4 EU AI Act, Article 50 (skip the EU in v1)

| Duty | Date | Source |
|---|---|---|
| 50(2) machine-readable marking of AI images by the **provider of the AI system** | From Aug 2, 2026. Systems already on the market before then get until **Dec 2, 2026** (AI/Digital Omnibus, Reg. (EU) 2026/1744). A new app has no grace period | Reed Smith, Usercentrics, opencorpo [C] |
| 50(4) deployers label deepfakes | From Aug 2, 2026, not delayed | Reed Smith [C] |
| Code of Practice on marking and labelling | Published Jun 10, 2026; found adequate Jul 8–9, 2026; final Commission guidelines Jul 20, 2026 | Reed Smith [C] |
| Detection interoperability | By Feb 2, 2027 | Reed Smith [C] |

Digi would likely count as a provider: it builds an AI system on top of Seedream and puts it on the market under its own name [E, med]. The Act exempts systems that "perform an assistive function for standard editing" or "do not substantially alter the input" [C, Art. 50(2) text as summarised]. A re-light look might fit; a restyle won't. When Digi enters the EU: C2PA/IPTC "AI-generated" metadata written **after** grain and frames (re-encoding can strip it), plus the visible "AI" chip.

---

## 7. Egypt considerations (the owner lives there; users don't)

### 7.1 Egypt's Personal Data Protection Law (Law 151/2020)

| Item | Fact | Source |
|---|---|---|
| Executive Regulations | Ministerial Decree 816 of 2025, in force around Nov 1–2, 2025 | Shahid / S&P briefing, Mondaq [C] |
| Compliance deadline | **Nov 1, 2026** (one-year transition). Already passed | S&P, Kennedys, e-cens [C] |
| Sending data abroad | "Personal data may not be transferred, stored, shared, processed, or accessed outside Egypt" without a licence from the Personal Data Protection Centre; needs explicit consent and an adequacy check | S&P [C] |
| Foreign companies | Must appoint a representative in Egypt | S&P [C] |
| Small processors | 1–100,000 records: exempt from licence **fees** (not from licensing) | S&P [C] |
| Enforcement so far | No published enforcement decisions found | Trackers [C] |

**What it means for Digi [E, med]:**
1. **Remove Egypt from the App Store availability list in v1.** Every Egyptian user's photo would go to the US and Singapore, which needs a licence.
2. This also fits the contest rule against sales to friends and family (README §2).
3. **Side effect:** the owner's own Egyptian Apple Account won't see the live listing. Use TestFlight to test, and a US Apple Account (sandbox) to check the store page.
4. The owner handling support emails from Egypt is a grey area (a US company's data accessed from Egypt). Keep user data in the US/backends; don't download photos to a personal laptop. Lawyer item if Digi grows.

### 7.2 Egypt's cybercrime law (Law 175/2018): the owner's personal exposure

From the English translation published by Andersen Egypt [V]:
- **Art. 25:** prison of at least 6 months and/or a fine of EGP 50,000–100,000 for anyone who "violates any of the family principles or values in Egyptian society, invades the sanctity of private life … or publishes … images … that violate the privacy of any person without their consent".
- **Art. 26:** 2–5 years and/or EGP 100,000–300,000 for using technology "to process another person's personal data for the purpose of linking it to content that is contrary to public morals".
- **Art. 27:** at least 2 years and/or EGP 100,000–300,000 for anyone who "creates, manages, or uses a website … for the purpose of committing or facilitating" a crime.
- **Art. 29:** the person "responsible for managing a website" who "negligently causes the exposure" of it to a crime under this law, through "failure to take the security precautions", faces at least 6 months and/or EGP 10,000–100,000.

**Plain meaning:** the owner runs digi.pink from Egypt. If users abuse it and he did nothing, Art. 29 is the hook [E, med]. The moderation stack, report form and logs are also his personal protection.

**Marketing from Egypt:** in 2025 Egyptian authorities arrested content creators under these laws, often citing "family values" [C, Human Rights Watch, Sep 10, 2025]. Keep the owner's own posts away from alcohol, club and suggestive content. Party energy can come from lights, music, friends and AI-made demo scenes [E, high].

**Government takedowns:** Apple removed 13 apps in Egypt at government request in 2025 [V, Transparency Report]. Not a risk for an app that isn't listed there.

---

## 8. Trademark check: "Digi"

### 8.1 USPTO results (search API, Nov 17, 2026) [V]

There are **4,994** USPTO records starting with "DIGI" (all statuses) and 252 ending with it. These are the live ones that matter for a camera and photo app:

| Mark | Owner | Reg. no. | Goods / services | Risk for Digi |
|---|---|---|---|---|
| **DIGI** | Digi International Inc. (Delaware) | 2630891, 2319992, 2317478, 5020936, 5153771 | Class 9/42: networking hardware and software; the 2015 filings include "electronic sensors and cameras" for M2M/IoT | **Medium** if Digi files for bare "DIGI" in class 9. **Low** for plain use as an app name (different buyers and channels) [E, med]. They also publish iOS apps ("Digi Axess Mobile") [V, iTunes] |
| **DIGIFILM** | Digifilm LLC (Arizona) | 8187226 (filed Aug 22, 2025) | Class 9: cameras, digital cameras, "cameras for self-developing film" | Don't name a look or feature "Digi Film" |
| DIGI FLIM / DIGIFLIM | Thorlabs | 7508604 / 7508340 | Scientific cameras | Low |
| **DIGIBOOTHS** | Pittsburgh Digital DJs | 5120740, 7309538 | Class 41: "providing photo booth services for events" | Don't call the strip feature "Digi Booth" |
| **DIGIS** | Limit Break, International | 7892438 | Class 9: NFT image files | Low. Using "digis" as an in-app credit word is descriptive use. Don't file "DIGIS" |
| BLUSH DIGICAM | Wolf Retail Corp. | pending (99721497) | Cameras | Low |
| DIGIMON | Bandai | 2436641, 2458906 | Old class 9 lists include cameras | Low |
| DIGIMARC | Digimarc Corp. | several | Watermarking software | Don't call the watermark "DigiMark" |
| DIGISELF | EmbodyMe, Inc. | pending (99564523) | AI avatars | Low |
| "DIGI PINK" / "DIGIPINK" | — | **No record** | — | Clear on the USPTO |

### 8.2 Elsewhere

- **App Store names with "Digi"** [V, iTunes]: "Digi Merge" (game), "DigiD" (Dutch gov), "Mi DIGI" / "My DIGI" / "DIGI.ro" (Digi Communications, the European telecom), "Vintage Camera Filters DigiCam", "DigiCamFX Camera", "Pixie+ — Y2K Digicam" and more. I couldn't check whether the exact name "Digi" is free; App Store Connect tells you when you create the record.
- **EU:** in Sep 2025 the EU trademark office reportedly refused "DIGI" for telecom services because many people read it as short for "digital". Digi Communications is appealing [C, Mobilissimo, Geeknetic]. Digi Communications operates in Romania, Spain, Italy, Portugal, Belgium and the UK [C]. Expect a weak mark and a loud neighbour if Digi expands to Europe.

### 8.3 What to do

1. **App Store name:** "Digi: Party Camera" (18 characters) [E, high]. A descriptor makes it unique and searchable.
2. **Feature names:** "Roll", "Strip", "Party mode". Not "DigiBooth", "DigiFilm", "DigiMark".
3. **Filing (after the contest unless cheap):** file the **logo** or "DIGI.PINK" in classes 9 (downloadable software) and 42 (non-downloadable software / SaaS). A bare "DIGI" for camera software risks a "merely descriptive" refusal and an opposition from Digi International [E, med].
   - USPTO base fee: **$350 per class** (since Jan 18, 2025) [C, USPTO fee page].
   - **US attorney required if the applicant is "foreign-domiciled".** For a company, domicile is its principal place of business, and a registered-agent address doesn't count [C, USPTO 2019 domicile rule]. An LLC run from Egypt probably needs a US attorney [E, med]. Budget roughly $500–1,500 in fees [E, low].
4. **Don't let anyone register "Digi" handles first:** grab @digi.pink / @digipink on TikTok, Instagram, Snapchat, X today (no legal cost).

---

## 9. Review times, December and the holiday slowdown

### 9.1 Numbers

| Measure | Value | Date | Source |
|---|---|---|---|
| Apple's stated speed | "at least 50% of submissions in less than 24 hours and 90% in less than 48 hours" | Live Nov 17, 2026 | developer.apple.com/distribute/app-review [V] |
| Apple's stated average | 1.5 days for all apps; 14 h for minor updates; 378,000 submissions a week; "some new apps take longer" | Oct 2026 (12-week average) | Apple statement via MobileGamer, Oct 20, 2026 [C] |
| Third-party tracker | **20 h 8 m** waiting + **46 m** in review | 2 weeks to Nov 12, 2026 | Runway App Review times [V] |
| Developer reports | New apps waiting a week or more; expedites taking 3–5 days | Oct 2026 | MobileGamer [C] |
| Submission growth | +84% year on year (attributed to AI-made apps) | 2026 | The Information via MobileGamer [C] |

**My planning numbers [E, med]:** v1.0 first verdict in **2–7 days**. A rejection round adds **1–3 days**. Updates after approval: **under 24 h** most of the time.

### 9.2 Holiday history

| Year | What Apple did | Source |
|---|---|---|
| 2016–2020 | App Store Connect closed to submissions for Christmas week (typically **Dec 23–27**) | MacTrast (2020), GoodBarber, iPhone Mania [C] |
| 2021 | Stayed open for the first time; "reviews may take longer" Dec 23–27 | MacRumors, 9to5Mac, Nov 8, 2021 [C] |
| 2022 | Open; slower Dec 23–27 | AppleInsider [C] |
| 2023 | Open; slower ~Dec 22–27 | ch. 07 [C] |
| **2024** | Open; "reviews may take longer to complete from **December 20-26**" | MacRumors quoting Apple, Dec 2, 2024 [V] |
| 2025 | **No notice** on Apple's news list | Apple Developer News, checked Nov 17, 2026 [V] |
| 2026 | **No notice yet** | Same [V] |

**Thanksgiving:** Thu **Nov 26, 2026**. Expect slower answers Nov 26–27 [E, med].

### 9.3 Dates that matter for the contest (Nov 16 – Dec 16)

| Date | Do |
|---|---|
| **Thu Nov 19 (latest)** | Submit v1.0 with all three purchases, set to manual release |
| Nov 20–25 | Fix and resubmit the same day if rejected. Reply in App Review with what changed |
| **By Tue Nov 24** | Target live, before Thanksgiving and Black Friday |
| Early Dec | v1.1: fixes, Christmas looks (same content class, listed in "What's New") |
| **By Thu Dec 10** | Last update that must land before the contest ends Dec 16 |
| **By Mon Dec 14** | Submit the NYE update, so it clears before the likely ~Dec 19–27 slowdown |
| Dec 19–27 | Avoid depending on any review. Only critical fixes |

**Expedite:** Apple allows it for "fixing a critical bug" or "releasing your app to coincide with an event you're directly associated with" [V]. A profit contest is a weak fit for "event". Save the request for a crash fix with repro steps [E, high].

---

## 10. Pre-submission checklist

Tick every line before pressing "Submit for Review".

**A. Accounts and paperwork**
- [ ] Account Holder accepted the latest Developer Program License Agreement (Oct 13, 2026) [V].
- [ ] Paid Apps Agreement **Active**; tax and bank done (ch. 07).
- [ ] Small Business Program enrolment submitted (ch. 07).
- [ ] App Review contact info current.

**B. Store record**
- [ ] Name with a descriptor ("Digi: Party Camera"), ≤ 30 characters, no brand or price words.
- [ ] Subtitle with no other app names and no "#1", "best", "free".
- [ ] Keywords with no G7X, Kodak, Polaroid, Dispo, Huji, Dazz, Lapse, Boothie.
- [ ] Screenshots show the app in use; all faces are owner, released models or AI-made; no drinks; 4+-safe (2.3.8).
- [ ] First screenshot and first description line lead with Rolls / group strips (4.3(b)).
- [ ] Description says what costs money: "Free film camera. AI looks need Digi Pro or a Party Pack." (2.3.2).
- [ ] Terms of Use link in the description (or custom EULA) and Privacy Policy URL in ASC (3.1.2, 5.1.1(i)).
- [ ] Support URL live (digi.pink/support) with an email address.
- [ ] Category Photo & Video; Content Rights: "contains third-party content" = Yes.
- [ ] Availability: **US only** (no EU, UK, Egypt) for v1.

**C. Age rating**
- [ ] Questionnaire answered as in §3.4, including **Shared Location** and **Dating and Relationships** (required since Nov 16) [V].
- [ ] Age Assurance = Yes; UGC = Yes; Social Media = No.
- [ ] **Override to 18+**, matching the terms.

**D. Privacy**
- [ ] App Privacy label matches every SDK (§4.2). Tracking = None (no ad SDKs).
- [ ] Privacy policy names OpenRouter (USA) and BytePlus (Singapore), the data sent, retention (original deleted after job, result 30 days), how to withdraw consent, how to delete data, the biometric data policy, and the contest tracker on digi.pink.
- [ ] Consent screen (§4.3) appears before any upload; **no network call before "Allow"**; nothing pre-ticked.
- [ ] Settings › Privacy: AI processing toggle; "Delete my photos and data".
- [ ] Purpose strings as in §4.6; no unused permissions.
- [ ] System photo picker for imports; add-only access for saving.
- [ ] EXIF GPS stripped before upload.

**E. Safety (1.2, TAKE IT DOWN, BytePlus)**
- [ ] Input and output checks live (ch. 21 §5.2); likely-child photos blocked for AI looks with the §5.3 message and automatic refund.
- [ ] No free-text prompt anywhere.
- [ ] Report on every Roll photo and share page; Remove-and-block in Roll members.
- [ ] Terms with the zero-tolerance line, accepted before first Roll post.
- [ ] digi.pink/remove form live; 48-hour process written down; hash-match deletion.
- [ ] "AI" chip on AI results; any Seedream "AI generated" mark left visible and uncropped.
- [ ] Written CSAM procedure (don't view, preserve 1 year, report to NCMEC, ban); NCMEC ESP registration started (ch. 04).
- [ ] 18+ gate with `expo-age-range` + birth-year fallback.

**F. Purchases (3.1.x)**
- [ ] Weekly + Yearly in one group; Party Pack consumable; all three attached to v1.0 with review screenshots.
- [ ] Paywall copy as in §2.2: billed price biggest; trial length and post-trial price stated; no toggle; visible close; Terms · Privacy · Restore.
- [ ] Party Pack digis never expire; monthly allowance labelled "resets monthly".
- [ ] Nothing paid depends on sharing, rating or allowing data access.
- [ ] Sandbox purchase, restore and refund tested on a real iPhone.

**G. Build quality (2.1, the #1 rejection cause)**
- [ ] Tested on the newest iPhone and iOS, on iPad compatibility mode, with camera denied, with no network, on slow network.
- [ ] Server, AI keys and credit limits live for the review window; AI timeout shows a kind error.
- [ ] No placeholder text, "coming soon" tabs or dead links.
- [ ] No feature hidden behind a remote flag that the reviewer can't see (2.5.19).

**H. Review notes (paste and edit)**
```
Digi is a party camera for groups. Friends join a shared Roll by link; photos stay hidden until 10 am the next day, then develop for everyone. Free on-device film looks work offline. Optional AI looks re-light photos and make group photo strips.

AI consent: a full-screen consent appears the first time a user taps an AI look, before any photo leaves the device. It names OpenRouter (USA) and BytePlus (Singapore), says what is sent and how long it is kept. Screenshot attached. Users can turn AI processing off in Settings › Privacy.

Safety: no free-text prompts. Every upload and every AI result is checked automatically; photos that may include minors are not sent to AI. Report is on every Roll photo and share page; Roll › Members › Remove and block. Users accept terms with a zero-tolerance policy before posting to a Roll. Support: support@digi.pink.

Age: Digi is 18+. The app checks the Declared Age Range on first launch.

Purchases: Digi Pro Weekly $6.99 and Digi Pro Yearly $39.99 (3-day trial) in one group; Party Pack 25 digis $5.99 (consumable, never expires). Paywall: tap any AI look or Settings › Digi Pro. Restore is on the paywall and in Settings.

Demo: the review build's test account has 20 AI digis. Roll invite link for testing: [link].

New looks are added server-side within the same content policy; there are no hidden features.
```

---

## What this means for Digi

1. **Today (Nov 17):** run two developer tests on Seedream: (a) does the output carry a visible "AI generated" mark or AI metadata; (b) does a request with `data_collection: "deny"` still route to Seed. Write the results into the privacy copy (§4.3–4.5).
2. **Today:** move the date stamp if the Seedream mark sits bottom-right, or keep both visible. Don't crop or cover AI labels (BytePlus AUP).
3. **Today:** set the age plan: 18+ terms, **18+ store rating via override**, `expo-age-range` + birth-year fallback (§3). Update chapter 07's 13+ advice.
4. **Today:** add the §5.3 child-photo rule to the AI pipeline: block AI looks on likely-minor photos, auto-refund, offer the free film look.
5. **By Nov 18:** publish four pages on digi.pink: /privacy (names OpenRouter and BytePlus), /terms (18+, zero tolerance, consent of everyone pictured), /biometric (BIPA-style policy), /remove (48-hour TAKE IT DOWN form). Link all four from Settings and the store record.
6. **By Nov 18:** build the paywall with the §2.2 copy. No trial toggle. Billed price biggest. Attach all three purchases to v1.0.
7. **By Nov 18:** add Report and Remove-and-block to Rolls and share pages; write the 1-page CSAM procedure; start NCMEC ESP registration.
8. **By Nov 19:** submit v1.0, **US storefront only** (no Egypt, EU, UK), manual release, with the §10 review notes and a consent-screen screenshot.
9. **App Store name:** "Digi: Party Camera". Avoid "DigiBooth", "DigiFilm", "DigiMark" anywhere. Grab @digipink social handles today.
10. **Marketing guardrails (owner, from Egypt):** no alcohol or club scenes on the owner's own accounts; label AI-made people as AI; never use a user's photo in an ad without a separate signed release (Apple 5.1.2(vi), FTC fake-testimonial rule).
11. **Plan reviews around reality:** v1.0 may take 2–7 days. Last contest-critical update by Dec 10; NYE update submitted by Dec 14; freeze Dec 19–27.
12. **One lawyer hour (after launch, before scaling):** BIPA wording and the group-photo attestation; naming BytePlus vs its trademark clause; whether to file "DIGI.PINK" (classes 9 and 42) and whether a US attorney is required; Egypt PDPL exposure if the owner handles user data from Egypt.

---

## Sources

All accessed Nov 17, 2026 unless noted. [V] primary, [C] secondary.

**Apple**
- App Review Guidelines, "Last Updated: October 16, 2026": https://developer.apple.com/app-store/review/guidelines/ [V]
- Apple Developer News (Oct 16, 2026 guideline updates; Nov 2, 2026 age descriptors; Jun 3, 2026 Texas; Dec 2025 items): https://developer.apple.com/news/ [V]
- App Review page (review times, 2.1 share, expedite): https://developer.apple.com/distribute/app-review/ [V]
- Auto-renewable subscriptions page (sign-up screen, billed amount, trials): https://developer.apple.com/app-store/subscriptions/ [V]
- Age ratings values and definitions: https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions/ [V, copy from Nov 16]
- Set an app age rating (override rule): https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating/ [V, copy from Nov 16]
- Age requirements for Brazil, Australia, Singapore, Utah, Louisiana: https://developer.apple.com/news/ (item "Age requirements for apps distributed in Brazil, Australia, Singapore, Utah, and Louisiana"; local copy `digi/apple/raw/agereq.txt`) [V]
- 2025 App Store Transparency Report: https://www.apple.com/legal/app-store/transparency/2025/ [V]
- Forum thread 815109 (5.1.1(i)/5.1.2(i) rejection text, Feb 2026): https://developer.apple.com/forums/thread/815109 [V]
- Forum thread 820209 (consent screen not seen): https://developer.apple.com/forums/thread/820209 [C]
- Forum thread 841626 (3.1.2(c) trial prominence, Aug 2026): https://developer.apple.com/forums/thread/841626 [V]
- Forum threads on 4.3 spam: https://developer.apple.com/forums/thread/838619 · https://developer.apple.com/forums/thread/853129 · https://developer.apple.com/forums/thread/812196 [C]
- MacRumors, holiday review notice (Dec 2, 2024): https://www.macrumors.com/2024/12/02/app-store-review-times-holidays/ [V]
- MacRumors, submissions open over holidays (Nov 8, 2021): https://www.macrumors.com/2021/11/08/app-store-connect-open-this-holiday-season/ [C]
- MacTrast 2020 shutdown: https://www.mactrast.com/2020/11/apple-tells-developers-app-store-connect-shutdown-for-holidays-dec-23-to-dec-27/amp/ [C]
- MobileGamer, review slowdowns and Apple statement (Oct 20, 2026): https://mobilegamer.biz/app-store-review-times-are-being-dragged-down-by-a-flood-of-ai-made-apps-and-games/ [C]
- Runway App Review times (updated Nov 12, 2026): https://www.runway.team/appreviewtimes [V]
- RevenueCat, "RIP toggle paywall": https://www.revenuecat.com/blog/growth/rip-toggle-paywall [C]
- Adapty, toggle paywall rejections: https://adapty.io/blog/your-toggle-paywall-is-about-to-get-rejected/ [C]
- Superwall, trial toggles: https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios [C]

**App Store data**
- iTunes Search API (9 searches, US): https://itunes.apple.com/search?term=digicam&country=us&entity=software&limit=200 (and the other terms listed in §1.4) [V]
- iTunes Lookup API (14 competitor age ratings): https://itunes.apple.com/lookup?id=6775603987,6749303003,6757448890,1422471180,1491684197,1636699256,6754265953,1636032890,1470373330,1436732536,6457366208,1393061654,6811675349,1600525061&country=us [V]

**AI provider terms**
- OpenRouter providers API (Seed, HQ SG, BytePlus policy links): https://openrouter.ai/api/v1/providers [V]
- OpenRouter Seedream 5.5 endpoints: https://openrouter.ai/api/v1/models/bytedance-seed/seedream-5-5/endpoints [V]
- OpenRouter provider logging docs: https://openrouter.ai/docs/guides/privacy/provider-logging [C]
- BytePlus Acceptable Use Policy (updated Aug 31, 2026): https://docs.byteplus.com/en/docs/legal/docs-acceptable-use-policy [V, page source]
- BytePlus GenAI AUP: https://docs.byteplus.com/en/docs/legal/acceptable_use_policy_byteplus_genai [V, page source]
- BytePlus Terms of Service (BytePlus Pte. Ltd., Singapore): https://docs.byteplus.com/en/docs/legal/docs-terms-of-service [V, partial]
- Seedream `watermark` default (third-party/Volcengine docs): https://docs.volcengine.com/docs/6492/2172373?lang=en · https://docs.novita.ai/nl/api-reference/model-apis-seedream-4-0 · https://docs.gmicloud.ai/model-quickstarts/image/seedream-5-0-pro [C]

**US law**
- FTC, "FTC Begins Enforcing the TAKE IT DOWN Act" (May 2026): https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-begins-enforcing-take-it-down-act [V]
- FTC, warning letters to 12 nudify companies (May 20, 2026): https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-sends-warning-letters-companies-about-compliance-take-it-down-act [V]
- FTC, "Complying With the Take It Down Act": https://www.ftc.gov/business-guidance/resources/complying-take-it-down-act [V]
- WilmerHale, "The TAKE IT DOWN Act Goes Live" (Jun 15, 2026): https://www.wilmerhale.com/en/insights/client-alerts/20260615-the-take-it-down-act-goes-live [C]
- Minnesota nudification ban: https://19thnews.org/2026/04/minnesota-nudification-ban-ai-deepfake/ · https://www.multistate.ai/updates/vol-103-minnesota-nudification-technology-ban · https://www.lawfaremedia.org/article/musk-s-minnesota-deepfake-fight-could-define-ai-s-first-amendment [C]
- California AB 621: https://digitalpolicyalert.org/change/16531-amendment-to-section-170886-of-the-california-civil-code-establishing-civil-liability-for-non-consensual-digitised-sexually-explicit-material-assembly-bill-621-on-deepfake-pornography · https://apcp.assembly.ca.gov/media/876 [C]
- California AB 1043: https://www.kelleydrye.com/viewpoints/blogs/ad-law-access/faq-digital-age-assurance-act-california-youth-safety-on-the-internet [C]
- Wyoming HB 102: https://wyoleg.gov/2026/Enroll/HB0102.pdf · https://www.recordinglaw.com/news/wyoming-hb-102-ai-deepfake-felony-law/ [C]
- Texas SB 2420 litigation: https://www.mofo.com/resources/insights/251111-texas-targets-app-stores-with-new-accountability-law · https://ccianet.org/litigation/ccia-v-paxton/ · https://fpf.org/blog/comparing-enacted-app-store-accountability-acts/ [C]
- BIPA and Grok suits: https://technologylaw.fkks.com/post/102o602/not-just-a-selfie-the-new-bipa-theory-aimed-at-generative-ai · https://www.classaction.org/news/grok-lawsuit-claims-spacexai-unlawfully-collects-biometric-facial-scans-from-users-photos · https://topclassactions.com/lawsuit-settlements/lawsuit-news/spacexai-class-action-lawsuit-claims-grok-ai-tool-violates-illinois-privacy-law/ [C]
- Meta face-filter BIPA ruling (Feb 2026): https://www.law360.com/mlex/data-privacy-security/articles/2445634/meta-loss-in-us-biometric-privacy-case-in-ill-underscores-facial-filter-risks [C]
- FTC fake reviews and testimonials rule (Aug 14, 2024): https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials [C]
- 18 U.S.C. § 2258A: https://www.law.cornell.edu/uscode/text/18/2258A [V, via ch. 04]

**UK / EU**
- Hansard, non-consensual sexual deepfakes (Jan 2026): https://hansard.parliament.uk/lords/2026-01-14/debates/2AF08B6C-1AFC-4395-B356-E383ABF28161/SocialMediaNon-ConsensualSexualDeepfakes [C]
- CPS cybercrime guidance (s. 66I, Jun 29, 2026): https://www.cps.gov.uk/prosecution-guidance/cybercrime-prosecution-guidance [C]
- Reed Smith on Art. 50, Code of Practice and guidelines: https://www.reedsmith.com/our-insights/blogs/viewpoints/102nbz0/transparency-obligations-for-ai-generated-content-the-code-of-practice-adequacy/ [C]
- Usercentrics on the Omnibus: https://usercentrics.com/knowledge-hub/eu-ai-act-high-risk-delay-article-50-transparency-consent/ [C]
- Opencorpo, Dec 2 marking deadline: https://www.opencorpo.com/blog/article-50-marking-2-december-2026 [C]
- GDPR Recital 51: https://gdpr-info.eu/recitals/no-51/ [C]

**Egypt**
- Law 175/2018 English translation (Andersen Egypt): https://eg.andersen.com/wp-content/uploads/2025/06/Law-No.-175-of-2018-Concerning-Information-Technology-Crimes.pdf [V]
- PDPL Executive Regulations (S&P briefing): https://www.shandpartners.com/insights/briefings/telecoms-media-technology/the-issuance-of-the-executive-regulations-of-the-data-protection-law-and-the-establishment-of-the-data-protection-centre/ [C]
- Mondaq on the Executive Regulations: https://www.mondaq.com/privacy-protection/1768986/the-issuance-of-the-executive-regulations-of-the-data-protection-law-in-egypt-and-the-establishment-of-the-data-protection-centre [C]
- Kennedys (403 to my fetch; title only): https://www.kennedyslaw.com/en/thought-leadership/article/2026/egypt-s-personal-data-protection-law-the-compliance-countdown-has-begun/ [C]
- HRW, crackdown on content creators (Sep 10, 2025): https://www.hrw.org/news/2025/09/10/egypt-mass-crackdown-targets-online-content-creators [C]

**Trademarks**
- USPTO trademark search API (queries "DIGI", "DIGI*", "*DIGI", "DIGIS", "DIGI PINK", "DIGIPINK", "DIGICAM"): https://tmsearch.uspto.gov/ [V]
- USPTO fees: https://www.uspto.gov/trademarks/fees-payment-information [C]
- USPTO domicile and US-attorney rule: https://www.uspto.gov/trademarks/laws/2019-domicile-and-attorney-rule [C]
- EUIPO "DIGI" refusal coverage: https://www.mobilissimo.ro/stiri-diverse/digi-contesta-decizia-euipo-privind-marca-disputa-juridica-ridica-semne-de-intrebare-despre-protectia-brandului-in-ue · https://www.geeknetic.es/Noticia/38250/DIGI-pierde-el-registro-exclusivo-de-su-logo-en-la-UE-por-ser-un-abreviatura-de-digital-y-tener-un-diseno-demasiado-simple.html [C]

**UI references (Mobbin)**
- CapCut upload consent: https://mobbin.com/screens/757b8736-ddfd-44bc-ab58-793cc0045d7f?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp
- Google Arts & Culture, Art Transfer: https://mobbin.com/screens/3aa366fb-d188-42c2-bc7c-d2b55ecf4f84?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp
- Warby Parker face-scan consent: https://mobbin.com/screens/b6bded59-11cb-4ba5-aeb4-4f32ef0603da?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp
- Cal AI privacy screen: https://mobbin.com/screens/dcf735f6-52fd-4181-bf5e-442065642bb4?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp
- Lovi photo-processing consent: https://mobbin.com/screens/378bedf0-ea07-4fcd-b005-985f0f1bd0a1?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp

Mobbin tool notice (shown as returned):

---

**Your Mobbin AI usage is high this month**

Usage is unlimited during beta. If your usage stays at this level, you may need to purchase more credits once limits take effect. [View usage and plan options](https://mobbin.com/settings/billing-and-usage?utm_source=claude&utm_medium=ai-assistant&utm_source_platform=mcp)

---

## Fact-check (2026-11-16)

An adversarial re-check of the 10 claims in this chapter that matter most for getting approved and staying legal. I used Apple's live pages, the FTC, court and AG releases, the iTunes Lookup API and fresh searches. This is still research, not legal advice.

| # | Claim | Re-check result | Action |
|---|---|---|---|
| 1 | Guidelines last updated Oct 16, 2026; 1.2 now names "AI content creation apps" and "nonconsensual intimate imagery"; new 2.5.19 | Confirmed: Apple developer news (Oct 16, 2026), and the live 1.2 and 2.5.19 text. 2.5.19 bans "hidden, dormant, or undocumented features". | None |
| 2 | Transparency Report 2025: 2,093,244 of 9,100,620 submissions rejected (23%); 65% Performance; Legal 24% | Confirmed: Performance 1,354,418 (64.7%), Legal 495,673 (23.7%). | None |
| 3 | Guideline 5.1.2(i): disclose sharing "with third-party AI" and get explicit permission | Confirmed word for word. | None |
| 4 | Aug 2026 rejection: trial promoted "more clearly and conspicuously than the billed amount" (thread 841626) | Confirmed: the quote is in the thread, created Aug 2026 (screenshots suggest Aug 11–12). | None |
| 5 | Age rating: if the EULA's minimum age exceeds Apple's rating, you "must override" | Confirmed word for word (ASC Help, "Set an app age rating"). | None |
| 6 | None of 14 competitors is rated 18+ | Confirmed for those 14. But Partiful (not in the list) shows the legacy 17+ label. | **Changed**: Partiful note added in §6 |
| 7 | TAKE IT DOWN: FTC enforcement from May 19, 2026; warning letters to 12 nudify companies on May 20; up to $53,088 per violation | Confirmed (FTC press release, May 2026). Some outlets date the letters May 19. No completed FTC penalty case found yet. | None |
| 8 | Apple: 90% of submissions reviewed within 48 h; Apple told MobileGamer (Oct 20, 2026) the average is 1.5 days, 14 h for minor updates, "some new apps take longer" | Confirmed. Apple's page says "at least 50% … in less than 24 hours and 90% in less than 48 hours". | None |
| 9 | Minnesota nudify ban: a Sep 4, 2026 injunction denial "not confirmed" | **Now confirmed**: the court denied xAI's preliminary injunction on Sep 4, 2026 (after a TRO denial on Jul 31). The law stays in force. | **Changed** in §0 row 9 and the state table |
| 10 | Egypt PDPL enforceable Nov 1, 2026 | Mostly confirmed (Kennedys, Baker McKenzie). Some firms say Oct 31; CMS says the late publication may push it to the end of 2026. Either way, the advice to leave Egypt off v1 stands. | **Changed**: nuance added to takeaway 10 |

**Could not verify:** the USPTO count of 4,994 "DIGI" marks and the DIGIFILM and DIGIBOOTHS registrations (the USPTO search wasn't re-run, so treat them as the author's pull from Nov 17); the BytePlus AUP clauses (the page needs a browser; still V from the author's page-source read); Runway's "20 h 8 m" figure (it changes daily); the "3–7 days for a new app" plan, which stays an estimate (E, med).
