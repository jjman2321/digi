# 07 · Apple end to end: Digi (digi.pink)

Researched **Mon 16 Nov 2026**. Every fact has a label:

- **V** = read on an official Apple, Expo or RevenueCat page today (URL given)
- **C** = corroborated by third parties (Apple forums, press, vendor blogs)
- **E** = my estimate or prior knowledge, not re-checked today. Verify these in App Store Connect (ASC).

Raw page copies used for this report are in `/tmp/claude-0/-home-user/d8cfe860-009f-5bd2-acef-ac2b4e5ffcfc/scratchpad/digi/apple/raw/` (guidelines.txt, news.txt, appreview.txt and others).

---

## 0. The ten things that decide whether Digi ships in time

1. **The real review-time numbers are lower than the old line.** Apple's own figure today: *"typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours."* The old "90% within 24 h" claim is out of date. Plan for 48 h per round and one rejection round. [V: developer.apple.com/distribute/app-review]
2. **Sign agreements before anything else.** The Account Holder has to accept the latest Developer Program License Agreement (updated 13 Oct 2026) and the **Paid Apps Agreement**, and finish tax and banking. Without the Paid Apps Agreement you cannot create IAPs, and the products will not load. [V: ASC Help "Sign and update agreements"; V: news 13 Oct 2026]
3. **Enrol in the Small Business Program today. This is a direct profit lever for the contest.** The 15% rate starts *"fifteen (15) days after the end of the fiscal calendar month in which your enrollment is approved."* [V: developer.apple.com/app-store/small-business-program] Apple's November fiscal month very likely ends **28 Nov 2026** [C: aso.dev, RevenueCat/Adapty calendars].
   - Approved by 28 Nov: 15% from about 13 Dec.
   - Approved later: 15% only from about mid-January, so you pay 30% for the whole contest.
   - Sales made before the switch date are at 30% either way.
4. **The paywall gets the AI-consent treatment from 5.1.2(i).** Before the **first** upload leaves the phone, show a screen that names the AI provider, says what data is sent and asks for an explicit opt-in. Apple's rejection text demands exactly that: *"does not clearly explain what data is sent, identify who the data is sent to, and ask the user's permission before sharing."* [V: guideline 5.1.2(i); C: Apple forum thread 816140]
5. **Digi counts as user-generated content under 1.2.** The guideline now names **"AI content creation apps"** and **"nonconsensual intimate imagery … including imagery generated using AI tools"** (16 Oct 2026). Digi Roll and share links need four things: filtering, reporting, blocking and published contact info. [V]
6. **Party Pack credits must never expire.** *"Any credits … purchased via in-app purchase may not expire."* A "25 digis for 30 days" design is an automatic 3.1.1 rejection. [V]
7. **Do not force sign-in to try the app.** Per 5.1.1(v), let people make their first digi without an account. Require login only for Digi Roll and sync. If you offer Google login, you must also offer Sign in with Apple or an equivalent (4.8). Account deletion inside the app is mandatory. [V]
8. **Answer the new age-rating questions.** The *Shared Location* and *Dating & Relationships* descriptors are required on every submission **starting today, 16 Nov 2026**. The social-media capability questions have been required since Sept 2026. [V: news 2 Nov 2026, 9 Jul 2026]
9. **Holidays.** App Store Connect does **not** close. The last official notice (2 Dec 2024) said *"reviews may take longer to complete from December 20-26."* There was **no 2025 notice** on Apple's news page, and **no 2026 notice as of today**. Treat 18 Dec as your practical last-safe submission day. [V: developer.apple.com/news]
10. **Featuring needs at least two weeks of notice.** Submit an "App Launch" Featuring Nomination today. Christmas and New Year's Eve In-App Events can be promoted up to 14 days before they start and last up to 31 days. [V]

---

## 1. App Review Guidelines checklist for Digi

Source: https://developer.apple.com/app-store/review/guidelines/ (page says **"Last Updated: October 16, 2026"**) [V]

| # | What it says (V) | What Digi must do |
|---|---|---|
| **1.1 / 1.1.1 / 1.1.4** | No defamatory, mean-spirited or pornographic content. Pornography includes apps that *"generate nudity or sexually explicit imagery"* (16 Oct 2026 news). | Block nude, sexual and "undress" prompts and styles. Run an NSFW check on the **input** photo and on the **output**. Refuse minors combined with suggestive styles. No "spicy" or "bikini" styles. |
| **1.1.6** | False info or trick features; "for entertainment purposes" doesn't excuse it. | Don't make fake ID, fake news or "prank" outputs. |
| **1.2 UGC** | Covers apps where users *"create, generate, upload, share"*, including **AI content creation apps**. Apps **must include**: (1) filtering of objectionable material before it's posted, (2) a way to report content **with timely responses**, (3) blocking of abusive users, (4) published contact info. Failing to do this, or not fixing problems after notice, can be treated as a **Code of Conduct violation**. | **Filter:** moderation API on input and output. **Report:** a "Report" item on every Roll photo and every public share page (web too). **Block:** "Block user" in Roll member lists, which hides their content and removes them. **Contact:** support email in Settings plus the Support URL. Add Terms with a **zero-tolerance clause** that users accept before posting to a Roll. Reviewers' standard UGC rejection asks for an EULA with no tolerance for objectionable content, and for acting on reports within 24 h [C]. Put all of this in the review notes. |
| **1.2 (anonymous / random chat)** | Random or anonymous chat and "hot-or-not" style objectification may be removed without notice. | No public discovery of strangers. Rolls are invite-only. No rating of people's looks. |
| **1.2.1(a)** | Only applies to "creator" apps that monetise creators. | Not applicable unless you add a public creator marketplace. |
| **1.4 Physical harm** | Mostly medical and dangerous activities. | N/A. Don't market Party Pack as a drinking game (4.3(b) also calls drinking games low-value). |
| **1.5 Developer info** | App and Support URL need an easy way to contact you. | digi.pink/support with an email address and a form. Put a contact link in the app's Settings. |
| **2.1(a) Completeness** | Final build, no placeholders, **backend on**, demo account if there's login, tested on device. 2.1 causes *"over 40% of unresolved issues"* [V app-review page]. | AI server must be up 24/7 during review with capacity and timeouts handled. No "coming soon" tabs. Give a demo account **with credits** and a second account already in a shared Roll. |
| **2.1(b) IAP** | IAPs must be complete, visible and working. Explain any that can't be found. | Weekly, Yearly and Party Pack must all be reachable from a visible paywall and the store screen. Attach all three to the 1.0 submission. |
| **2.2** | Betas go in TestFlight, not the App Store. | Don't label the app "beta". |
| **2.3 / 2.3.1** | Metadata, including **privacy info**, must be accurate. New features must be described **specifically** in Review Notes. Misleading marketing can lead to account termination. | Before/after screenshots must be real outputs from this build. Don't promise styles you don't ship. |
| **2.3.2** | Say which items need extra purchases. | Description: "Free to try; Digi Pro subscription or Party Pack required for more digis." |
| **2.3.3** | Screenshots show the app **in use**, not just a splash or login screen. | Use the capture → style → result flow and the Roll screen. Overlay text is allowed. |
| **2.3.7** | Unique name, **max 30 chars**. No trademarks, popular app names, **pricing**, or irrelevant terms in metadata. Subtitles can't reference other apps or make unverifiable claims. | No "Free", "#1", "Best", "Lensa", "Remini", "ChatGPT", "Ghibli", "Pixar" or "Barbie" in the name, subtitle or keywords. Example name: "Digi: AI Photobooth" (19 chars). |
| **2.3.8** | Metadata must suit a **4+** audience even if the app is rated higher. | Screenshots stay family-friendly: no cleavage-heavy glam or party drinking shots. |
| **2.3.9** | You need rights to everything in the screenshots. Use fictional data. | Use consenting models or the team's own faces. No celebrities. |
| **2.3.10** | No other platforms' names or icons. | Don't say "also on Android" in the iOS metadata. |
| **2.3.12** | "What's New" must list significant changes. | Write real notes for each December update. |
| **2.3.13** | In-App Events must match an event type, have accurate dates and work through a deep link. | See §5. |
| **2.3.14 (new 16 Oct 2026)** | Creative assets (header and search-result images and video) must relate to the app, suit all audiences, and avoid misleading references, **unverifiable claims, or specific or discounted pricing**. | No "50% OFF" in creative assets. |
| **2.5.1 / 2.5.2** | Public APIs only. No downloaded code that changes features. | Expo OTA updates are allowed for JS bug fixes only. Don't ship new features over the air. |
| **2.5.13** | Face recognition *for authentication* must use LocalAuthentication. | Digi doesn't do face-auth. N/A. |
| **2.5.14** | Get consent and show a clear indicator when recording with the camera or mic. | The system camera indicator is enough. Ask camera permission only when the user taps Capture. |
| **2.5.16** | Widgets and notifications must relate to the app. | Only notifications like "Your digi is ready" or "New photo in your Roll". |
| **2.5.18** | Ads rules. | No ads in v1. |
| **2.5.19 (new)** | **No hidden, dormant or undocumented features.** This is bait-and-switch. | Don't remote-enable styles or features after review that a reviewer would reject. Enabling ordinary new styles server-side is a grey area [E]: keep them in the same content class and list "new styles are added server-side" in the review notes. |
| **3.1.1 IAP** | Unlocking digital features needs IAP. **Purchased credits may not expire.** You need a restore mechanism for restorable purchases. Gifting is allowed. Randomised items need odds disclosed. | Party Pack is a **Consumable** and never expires. Store the credit balance server-side against the account (consumables aren't restorable by StoreKit). Add a "Restore Purchases" button for subscriptions. No "mystery style" loot boxes. |
| **3.1.1(a) / 3.1.3** | External purchase links are only allowed via entitlements. US storefront apps may include buttons or links to outside purchase methods. | For speed, use IAP only. US web checkout is legal but adds work. Skip it for the contest [E]. |
| **3.1.2(a)** | Subscription period **≥ 7 days**, ongoing value, works on all the user's devices. No extra tasks (posting, contacts) to get what was paid for. Subscriptions **may include consumable credits**. Free trials go through ASC offers. Scam or bait-and-switch subscriptions lead to removal and possibly account termination. | $6.99/week is allowed (7 days). Give Pro a clear allowance (e.g. "60 digis/week"; set your own number) and say it on the paywall. |
| **3.1.2(b)** | No accidental double subscriptions. | Put Weekly and Yearly in **one subscription group** ("Digi Pro"), with Yearly at level 1. |
| **3.1.2(c)** | Describe clearly what users get for the price, and meet Schedule 2 of the DPLA. Apple's subscriptions page **requires** on the sign-up screen: the subscription name and duration, what's provided, the **full renewal price shown clearly and prominently**, a way to sign in or restore, and **Terms of Use + Privacy Policy links in the app and in the metadata**. *"The amount that will be billed must be the most prominent pricing element"*. For trials, say how long the trial lasts and the price after it. [V developer.apple.com/app-store/subscriptions] | Yearly card: show **"$39.99/year"** big and "≈ $0.77/week" small. Weekly card: "$6.99/week, auto-renews". Show a visible close (X) with no delay [C]. Avoid "free trial toggles" that hide the price [C]. Add Terms and Privacy links under the buy button. |
| **3.2.2(x)** | You can't force ratings or reviews to unlock functionality. | No "rate us for 3 free digis". Use the system review prompt only (5.6.1). |
| **4.1(a–c)** | No copycats. No other developer's brand in your icon or name. | Original icon. Don't clone a competitor's UI one-to-one. |
| **4.2 / 4.2.3** | Minimum functionality. Must work standalone. Disclose large first-launch downloads. | A native camera, the Roll, sharing and widgets later all help. Don't build a web wrapper. |
| **4.2.6** | Apps from commercial templates are rejected unless submitted by the content provider. | Don't use a white-label "AI photo app template" binary. 4.3(a) forum cases show reviewers flag "similar binary, metadata and/or concept" [C forum 853129]. |
| **4.3(a)/(b) Spam** | One bundle ID per app. Saturated categories need a *"meaningfully different"* experience. | One app only, with no "Digi Xmas" spin-off. In the review notes, stress what is unique: a group photobooth, shared Digi Roll, party mode (see §4). |
| **4.8 Login** | Using third-party or social login for the primary account requires an equivalent privacy login option. | If you use Google sign-in, add **Sign in with Apple**. Email magic link alone is exempt ("your company's own account system"). |
| **4.10** | Can't monetise built-in capabilities (camera, push). | Charge for AI digis, not for "camera access". |
| **5.1.1(i)** | Privacy policy link in ASC **and** in the app. It must list what's collected, all uses, that third parties (the AI provider, analytics) give equal protection, retention and deletion, and how to revoke consent. | Name the AI provider category or the provider. Say whether photos are retained, for how long, and that they aren't used to train models (only if that's true by contract). |
| **5.1.1(ii)** | Get consent to collect data. Paid features can't depend on granting data access. Give an easy way to withdraw consent. Purpose strings must be clear. | A "Withdraw AI consent" toggle in Settings that stops processing. See the purpose strings in §7. |
| **5.1.1(iii)** | Data minimisation. **Use the out-of-process picker rather than full Photos access** where possible. | Use PHPicker (expo-image-picker launchImageLibraryAsync needs *no* permission [V Expo docs]). For saving, request **add-only** access. |
| **5.1.1(iv)** | Don't manipulate users into consent. Offer alternatives. | If camera is denied, offer the photo picker. |
| **5.1.1(v)** | No login unless there are significant account features. **If accounts exist, deletion must be in the app.** | Guest mode for the first digis. In-app "Delete account" that deletes everything, warns that the Apple subscription continues and links to manage-subscriptions. With Sign in with Apple, revoke tokens with the REST API. [V developer.apple.com/support/offering-account-deletion-in-your-app] |
| **5.1.1(x)** | Basic contact info only if it's optional. | Don't require email before the first digi. |
| **5.1.2(i)** | *"You must clearly disclose where personal data will be shared with third parties, including with third-party AI, and obtain explicit permission before doing so."* Tracking requires ATT. You can't require push, location or tracking to use the app. | Show an AI consent screen before the **first** upload (details in §4). Ask for push after the first digi, and make it optional. |
| **5.1.2(ii)–(v)** | No repurposing, no profile-building, no contact databases, no messaging contacts without an individual action (no "Select All"). | Invite friends to a Roll through the share sheet or a link, not a contacts upload. |
| **5.1.2(vi)** | Data from *"depth and/or facial mapping tools (such as ARKit, **Camera APIs, or Photo APIs**)"* may not be used for marketing, advertising or data mining, **including by third parties**. | This is the face-data rule that matters for Digi. Your AI provider contract must forbid using photos for ads or training. Don't feed face photos to ad SDKs or lookalike audiences. |
| **5.1.4 Kids** | COPPA and GDPR care for kids' data. | Don't target under-13s. Set ToS to 13+ and override the age rating to 13+ (§1b). |
| **5.2.1 IP** | No trademarks or copyrighted works without permission. | Use generic style names: "Hand-drawn anime film", not "Ghibli"; "3D animated movie", not "Pixar". No Disney or Marvel characters. If you use any brand, App Review can ask for authorisation [V app-review page]. |
| **5.2.2** | Third-party services need permission under their ToS. | Confirm the AI model's licence allows commercial use of outputs. |
| **5.3** | Contests and sweepstakes must be developer-sponsored, with rules in the app saying Apple isn't involved. | Applies if Digi runs any user contest (e.g. "best Christmas digi wins"). |
| **5.6 / 5.6.1–5.6.4** | Code of conduct: no manipulative pricing. Accurate developer identity. No review or chart manipulation. High refund rates hurt your standing. | No fake reviews and no incentivised ratings. Watch refund rates on the $6.99 weekly plan. |
| **After You Submit: Expedite** | *"Seek expedited review only when you truly need it."* | See §3. |

### 1b. Age rating (2025–26 system) — what to answer for Digi

Facts [V]:
- Tiers are **4+, 9+, 13+, 16+, 18+**. 13+, 16+ and 18+ were added on 24 Jul 2025.
- New questions cover in-app controls, capabilities, medical, violence, the social-media capability (Jul 2026) and, **from 16 Nov 2026**, Shared Location and Dating & Relationships. These must be answered on any submission, and for all apps by 12 Jan 2027.
- A plain UGC, messaging or ads capability alone is still 4+. A **social media capability** (a feed that *"visibly spreads content to many users"*) means at least 13+. Unrestricted web access means 16+.
- *"If your app has a EULA with minimum age requirements that exceed the rating that Apple calculated, you **must** override."*
- From 24 Feb 2026, Apple blocks 18+ apps in **Australia, Brazil and Singapore** for users not confirmed as adults.
- Apple's July 2025 note says to consider how **AI features** affect how often sensitive content appears.

Recommended answers [E — your call, answer honestly]:

| Question | Answer |
|---|---|
| Parental controls | No |
| Age assurance | **Yes, only if you implement Declared Age Range**, otherwise No |
| Unrestricted web | No (unless you have an in-app browser) |
| User-generated content | **Yes** (Roll and share links) |
| Messaging & chat | Yes only if the Roll has comments or chat |
| Advertising | No |
| Social media | **No**, provided Rolls are private and invite-only with no public feed or discovery. Add a public "explore" feed later and this becomes Yes, meaning 13+ and the Social Media descriptor. |
| Shared Location | No |
| Dating & Relationships | No |
| Content descriptors (violence, sexual, etc.) | "None" if filters block them. Mature or suggestive "Infrequent" if glam or party styles exist (that gives 9+). |
| Override | **Override to 13+**, to match a ToS minimum age of 13 |

Avoid **18+**: it blocks downloads in AU, BR and SG for unverified users, and it shrinks the audience.

### 1c. Declared Age Range API and age-assurance laws

- **What it is [V]:** the iOS 26+ API *"to request that people share their age range."* It needs the `com.apple.developer.declared-age-range` entitlement. For Family Sharing kids, the parent controls sharing.
- **Laws Apple has implemented:**
  - Texas SB2420 live since **4 Jun 2026**, after the injunction was lifted. [V news 3 Jun 2026]
  - Utah, for new accounts from **6 May 2026**. [V]
  - Louisiana from **1 Jul 2026**. [V]
  - Brazil, via age categories. [V]
  - Related tools: the Significant Change API (PermissionKit), an age-rating property in StoreKit, and an App Store Server Notification when a parent revokes consent.
- **For Digi in week 1 [E]:** it's not blocking for review, and the guidelines don't require it for a non-creator, non-mini-app app. Plan it for an early-December update:
  - Add `expo-age-range` (official Expo module; Xcode 26+; test on a device) [V docs.expo.dev/versions/latest/sdk/age-range].
  - Call it at onboarding. If the user is under 13, disable Digi Roll invites.
  - Subscribe to the consent-revocation server notification.
  - This lowers legal risk in TX, UT and LA, where you're responsible for compliance (*"You are solely responsible…"* [V]).

---

## 2. App Store Connect setup checklist (in order)

Roles: **Account Holder (AH)** must do the agreements. Admins or App Managers can do most of the rest.

**A. Account level (today, Mon 16 Nov)**
1. **AH:** accept the updated **Apple Developer Program License Agreement** (13 Oct 2026) at developer.apple.com/account [V news]. Pending agreements block uploads and submissions [E].
2. **AH:** Business → Agreements → **Paid Apps → View and Agree to Terms**. Then fill in **Tax** (US LLC: W-9; plus the other tax forms ASC prompts for) and **Banking** (a USD account in the LLC's name). Status must read **Active**. *"This agreement must be active in order for you to submit or update paid apps and In-App Purchases."* [V ASC Help] Bank verification can take ~24 h or longer [E].
3. **EU DSA trader status:** apps without it are **removed from EU storefronts** until it's verified [V news 16 Jan 2025]. If verification isn't done by launch, launch without EU storefronts and add them later [E].
4. **Small Business Program:** enrol now (≤ $1 M proceeds, list associated accounts) [V]. Aim for approval before 28 Nov (see §0.3).
5. Check that your contact info for App Review is current (it's in the "Before You Submit" checklist) [V].

**B. Identifiers (Certificates, IDs & Profiles)**
6. **Bundle ID**, e.g. `pink.digi.app`. You can't change it later [E].
7. Capabilities on the App ID:
   - **Associated Domains** (Universal Links `applinks:digi.pink`, plus `applinks:www.digi.pink` if used)
   - **Push Notifications**
   - **Sign in with Apple** (if used)
   - **In-App Purchase** (on by default)
   - **Declared Age Range** (when added)
   - **App Groups** (only when you add widgets)
   - **App Clips:** skip for launch. They need their own target and an App Clip experience, which isn't worth it this week [E].

   EAS can sync capabilities automatically from the app config [E: Expo "app credentials" docs].
8. Push: create an APNs key (.p8) once, or let EAS manage it [E].

**C. App record (ASC → Apps → +)**
9. Platform iOS, name (unique, ≤ 30 chars), primary language, bundle ID, SKU (e.g. `DIGI-IOS-001`), user access [E].
10. **App Information:**
    - Subtitle (≤ 30) [E]
    - Category: **Photo & Video**, secondary **Entertainment** [E]
    - **Content Rights:** "contains third-party content?" → Yes (user photos and AI outputs), confirming you have the rights [E]
    - **Age Rating** questionnaire (§1b)
    - **Digital Goods and Services questionnaire:** "Yes → Apple In-App Purchase exclusively". *EU choices lock for 12 months.* [V ASC Help]
    - Regulated Medical Device status: **No**, if prompted [V news Mar 2026]
11. **Privacy:**
    - Privacy Policy URL (digi.pink/privacy). Required [V 5.1.1(i)].
    - App Privacy questionnaire (§2b).
    - Optional: privacy-choices URL [E].
12. **Pricing and Availability:**
    - App price: Free.
    - Storefronts: all, or all minus EU if DSA is pending. Consider excluding China mainland: AI apps there need extra licences [E].
13. **Version page (1.0):**
    - Screenshots: required **iPhone 6.9"/6.3" class**. ASC now requires at least one for "iPhone with Dynamic Island (medium display)", **1206×2622** or 1179×2556. Large sizes: 1320×2868, 1290×2796, 1260×2736. Up to **10 per size**, no alpha [V ASC screenshot specs].
    - iPad screenshots (13", 2064×2752 [E]) are only needed if `supportsTablet: true`. **Set `supportsTablet: false`** to skip iPad work. Reviewers may still run an iPhone app on iPad in compatibility mode, so check the layout doesn't break [E].
    - iPhone Duo screenshots aren't required until April 2027 (iOS 27.1 SDK) [V].
    - Promotional text (170 chars, editable without review), description (4,000), keywords (100 bytes), support URL (**required**), marketing URL (optional), copyright "2026 Grasp Labs LLC" [E for character limits].
    - App Review Information: contact, **demo account + password**, and **Notes** (template in §4b).
    - Version release: **"Manually release this version"**, so you control the launch hour [E].
14. **EULA:** Apple's standard EULA applies by default. For subscriptions, either add a **Terms of Use link in the description** or upload a custom EULA in App Information. Subscription metadata *must* link Terms and Privacy [V subscriptions page]. A missing Terms link is a very common 3.1.2 rejection [C].
15. **Export compliance:** Digi uses only HTTPS/TLS from the OS, which is exempt. Set `ios.config.usesNonExemptEncryption: false` in app.json so the question is answered automatically [V Expo config; V ASC export compliance]. No CCATS or French declaration is needed for exempt-only use [E].

**D. In-App Purchases (ASC → Monetization)**
16. **Subscription group "Digi Pro"** with:

    | Level | Product | Price | Duration | Example product ID |
    |---|---|---|---|---|
    | 1 | Yearly | $39.99 | 1 year | `digi_pro_yearly` |
    | 2 | Weekly | $6.99 | 1 week | `digi_pro_weekly` |

    For each product, add: display name, description, **review screenshot** (of the paywall) and review notes [V subscriptions page on groups and levels; E on required fields]. Add the group localisation (group display name) [E].
17. **Consumable "Party Pack":** $5.99, product ID `digi_party_pack_25`, display name "Party Pack: 25 digis", review screenshot. **Never expires** [V 3.1.1].
18. **Pricing per storefront:** choose US as the base and let Apple auto-equalise 174 storefronts, then optionally lower prices manually in price-sensitive markets (EG, IN, BR) [E]. Apple updates prices for tax and FX periodically [V news].
19. **First-time IAPs must be submitted together with app version 1.0.** Select them in the version's "In-App Purchases and Subscriptions" section before you submit [E, standard ASC behaviour]. Products show "Ready to Submit". Sandbox testing works before approval only if the Paid Apps Agreement is Active [E].
20. **Introductory offer (optional):**
    - Types: free trial, pay-as-you-go, or pay-up-front [V].
    - Recommendation: **no free trial on Weekly** (weekly trials draw refund and abuse [E]). A 3-day trial on Yearly is fine if the paywall states *"3 days free, then $39.99/year"* [V trial disclosure rule].
21. **Offer codes:**
    - Now available for **all IAP types, including consumables** (since 29 Oct 2025) [V news].
    - Two kinds: one-time-use 18-digit codes or custom codes like `XMAS25` [V].
    - Use cases: creator, influencer and press codes for a free Party Pack or a free month of Pro.
    - Redemption is by URL, on the App Store, or in the app via `offerCodeRedemption` (RevenueCat: `presentCodeRedemptionSheet`) [V/E].
22. **Promotional offers and win-back offers** need a server signature [V subscriptions page; E]. **Retention messages** in the cancellation flow have been available since **4 Nov 2026** [V news]. Configure one later, after launch.
23. **Promote IAPs on the product page:** e.g. the Party Pack appears on the store page [V]. This needs the purchase-intent handler in the app; RevenueCat handles it [E].
24. Leave Family Sharing **off** for the consumable. It can't be turned off once enabled for a subscription [E].

**E. RevenueCat side [V rcexpo docs; E for dashboard steps]**
- Create the App Store app. Upload the **In-App Purchase key (.p8)** from ASC → Users and Access → Integrations, and the App Store Connect API key for product import.
- Set up an entitlement `pro` mapped to both subscriptions, and an offering "default" containing Weekly, Yearly and the Party Pack.
- Set up the App Store Server Notifications V2 URL to point at RevenueCat.

### 2b. App Privacy ("nutrition label") answers for Digi

Rules [V developer.apple.com/app-store/app-privacy-details]:
- "Collect" means data leaves the device and is kept longer than needed to serve the request in real time.
- You must include data collected by third-party SDKs.
- Personal data counts as linked to the user.

Answers below assume an account, an AI provider called from **your server**, RevenueCat, crash reporting and product analytics (e.g. Sentry and PostHog), and **no ad SDKs** [E — adjust to the real stack]:

| Data type | Collected? | Purposes | Linked to user? | Tracking? |
|---|---|---|---|---|
| Contact Info → **Email Address** | Yes (if accounts) | App Functionality | Yes | No |
| Contact Info → Name | Only if you store the Sign in with Apple name | App Functionality | Yes | No |
| User Content → **Photos or Videos** | **Yes** (uploads, AI outputs, Roll) | App Functionality (add Product Personalization only if used) | Yes | No |
| User Content → Other User Content | Yes, if Roll captions or comments exist | App Functionality | Yes | No |
| User Content → Customer Support | Optional disclosure if it's only from a support form [V] | — | — | — |
| Identifiers → **User ID** | Yes | App Functionality, Analytics | Yes | No |
| Identifiers → Device ID | Yes, if analytics or RevenueCat stores IDFV | Analytics, App Functionality | Yes | No |
| Purchases → **Purchase History** | Yes (RevenueCat) | App Functionality, Analytics | Yes | No |
| Usage Data → **Product Interaction** | Yes (analytics) | Analytics | Yes | No |
| Diagnostics → **Crash Data**, **Performance Data** | Yes | App Functionality / Analytics | Usually Yes (if a user ID is attached) | No |
| Location, Contacts, Health, Financial, Browsing, Search, Sensitive Info | No | — | — | — |

- **"Data used to track you": None.** This holds only if you add no Meta, TikTok or Google ad SDK that uses IDFA or links data with third-party data for ads.
- If you add ad-attribution SDKs for paid UA, the answer changes to tracking, and you need ATT plus a label update. In the EU there's an alternative ATT prompt from iOS 27.2, and it's the only option in DE, FR, IT, PL and RO [V news 16 Sep 2026].
- Make the label match the binary. Reviewers reject when the binary calls an AI API but the label or privacy policy says nothing is shared [C].

---

## 3. Review timing, expedite, holidays and a launch timeline

**Facts**
- Review speed: *"at least 50% of submissions in less than 24 hours and 90% in less than 48 hours."* [V developer.apple.com/distribute/app-review]
- Repeated rejections for the same guideline make review **slower** [V guidelines, After You Submit].
- You can now send In-App Events, custom product pages and PPO tests to review **separately** from an app version, and submit a critical bug fix separately too (since 29 Oct 2025) [V news].
- **Expedite:**
  - Allowed for a *"critical bug fix"* (include repro steps) or an *"event-related app"* (include the event, its date and your association) [V app-review page].
  - Request it through the Contact Us form ("Expediting an App Review"), **not** the reply field [C: Apple help via search; the form is at developer.apple.com/contact/app-store/?topic=expedite].
  - Grants are discretionary, and abuse gets future requests refused [V].
  - **A profit contest isn't an Apple-recognised "event"**, so don't count on an expedite for v1.0. Save it for a crash fix in December [E].
- **Holidays:**
  - App Store Connect hasn't shut down since the 2016 holidays [C: 9to5mac, MacRumors].
  - 2022 and 2023 notices warned of slow reviews **22–27 Dec** [C].
  - The 2024 notice said **20–26 Dec** [V news 2 Dec 2024].
  - **No 2025 holiday notice** is on Apple's news list (checked today) [V].
  - **No 2026 notice yet** [V]. Expect one in early December. Assume slow reviews **~19–27 Dec 2026** [E].
- **US Thanksgiving is Thu 26 Nov 2026.** Expect slower turnaround on 26–27 Nov [E].
- New apps can take **up to 24 hours** to appear in all storefronts after release [V guidelines].

**Launch timeline (today is Mon 16 Nov)**

| Date | Action | Buffer logic |
|---|---|---|
| **Mon 16 Nov** | Agreements, tax, bank, Small Business Program, DSA, bundle ID, app record, IAP products, age rating, privacy label, Featuring Nomination (App Launch, publish date ~24 Nov). Put AASA live on digi.pink. Privacy, Terms and Support pages live. | Agreements can take a day to become Active. |
| Tue 17 Nov | EAS production build → `eas submit` → TestFlight **internal** (no review) → test purchases in sandbox on a real device | — |
| Wed 18 Nov | Fix bugs. Upload build 2. Add an **external** group and public link, which triggers Beta App Review (it often reads like a mini App Review, so it's a free early warning) [E] | — |
| **Thu 19 Nov (latest)** | **Submit 1.0 + the 3 IAPs** to App Review, set to manual release. Earlier is better. | 90% decided in 48 h, so a verdict by ~Sat 21 Nov. |
| Fri 20 – Sun 22 Nov | If rejected: fix, reply in Resolution Center, resubmit the same day | A second round gives a verdict by ~Mon 23 – Tue 24 Nov. |
| **Mon 23 / Tue 24 Nov** | **Release** (manual). Turn on the Apple Ads Basic test. Publish 2–3 custom product pages (they need their own review, so submit them on 20 Nov). | Live before Thanksgiving and Black Friday. |
| By Sat 21 Nov | Submit **In-App Event #1** "Holiday Party Digis" (badge: Special Event or New Season). Dates 1–25 Dec; promotion can start 14 days earlier. *An event needs the app live, so submit it alongside or right after approval* [E]. | Lasts ≤ 31 days [V]. |
| Wed 2 – Fri 4 Dec | **v1.1** (first fixes, Declared Age Range, retention message, offer codes for creators) | Normal reviews. |
| By Thu 10 Dec | **v1.2** (last revenue-affecting change for the contest, which ends 16 Dec). Submit **In-App Event #2** "New Year's Eve Digis" (26 Dec – 1 Jan, promoted from 12 Dec). | Before the holiday slowdown. |
| 11–18 Dec | Only critical fixes. Request an expedite for a true crash bug. | — |
| **19–27 Dec** | Freeze. No submissions you depend on. | Apple's historical slow window. |

---

## 4. Rejection pre-empt list for AI photo / filter apps

| Risk | Guideline | Pre-empt |
|---|---|---|
| AI consent missing, buried, after the API call, or not seen by the reviewer | 5.1.1(i), 5.1.2(i) | A **full-screen consent before the first upload** (not only in the privacy policy) that: names the provider (e.g. "Photos are sent to [Provider] to create your digi"), lists the data (photo, face in it, style choice), says retention and no training (if true), has **"Allow" and "Not now" buttons, nothing pre-checked**, and **no network call before "Allow"**. Ask again if the user later shares someone else's photo [E]. A revoke toggle in Settings. **Show it to reviewers:** say in the Notes "Consent screen appears on first photo upload; screenshot attached", and attach a screenshot. Forum devs were rejected because reviewers *"were not presented with the consent prompt"* [C forum 820209]. Make it impossible to skip, and don't key it off something that's already set on a fresh install. |
| UGC safeguards missing | 1.2 | Filter, report, block and contact, plus Terms acceptance before the first Roll post. Point to where each one is in the Notes. |
| NSFW or "undress" capability, even accidental | 1.1.4, 1.2, 2.5.19 | Moderate input and output, block prompt injection in any free-text field, and remove free-text prompts in v1 if possible [E]. The Oct 2026 update targets exactly this, so don't give it a reason. |
| Paywall disclosure | 3.1.2(c) | Billed amount most prominent, renewal terms, Terms and Privacy links, Restore, an easy close. Don't make the price look like "per week" when it bills yearly. |
| Consumable expiry or unclear allowance | 3.1.1 | Party Pack never expires. Show "X digis left". |
| Forced sign-in | 5.1.1(v) | Guest first digi. Login only for Roll, sync and purchase restore across devices. |
| No in-app account deletion | 5.1.1(v) | Settings → Delete account, with a real delete (not deactivation). |
| Social login without Sign in with Apple | 4.8 | Add Sign in with Apple, or use email only. |
| Spam or saturated category | 4.3(b), 4.2.6 | Notes: "Digi is a group photobooth: friends share a Digi Roll, and party mode lets a whole party take turns…". An original UI and icon. No template binary. |
| Crashes or backend down during review | 2.1 | Test on the newest iOS and iPhone, on poor networks, with camera denied, with Photos limited and with airplane mode. Keep the server live. Show a friendly error if AI times out, never a hang. |
| Login demo issues | 2.1 | Demo account **already with Pro or credits** (or sandbox purchase works), plus a second account in the same Roll. Give the reviewer a Roll invite link in the Notes. |
| Misleading screenshots | 2.3.3, 2.3.7 | Use real outputs. No prices, "free", competitor names or celebrities. |
| Trademarked style names | 5.2.1, 2.3.7, 4.1(c) | Generic style names (see §1). |
| Purpose strings vague | 5.1.1(ii) | Specific text (see §7). |
| Requiring push to use the app | 5.1.2(i) | Push is optional, asked after value. |
| Incentivised reviews | 3.2.2(x), 5.6.1 | Only the system prompt. |
| iPad layout broken (iPhone-only app) | 2.1, 4.0 | Run once on an iPad simulator in compatibility mode [E]. |
| Hidden features turned on after review | 2.5.19 | Don't. List server-driven style updates in the Notes. |

**4b. Review Notes template (paste and edit)**
```
Digi turns photos into stylised "digis" using a third-party AI image model ([Provider]) called from our server.
• AI consent: shown full-screen before the first photo leaves the device (screenshot attached). Settings › Privacy › AI processing lets users withdraw consent.
• No login needed to try (3 free digis). Sign in only for Digi Roll (shared album with invited friends).
• Demo: reviewer1@digi.pink / ••••  (has Pro). reviewer2@digi.pink / •••• (member of the same Roll "Review Party").
• UGC safeguards: automatic moderation of uploads and outputs; "Report" on every Roll photo and share page; "Block" in Roll › Members; support@digi.pink and digi.pink/support; users accept Terms (zero tolerance for objectionable content) before posting; reports are reviewed within 24 h.
• IAP: Digi Pro Weekly $6.99, Digi Pro Yearly $39.99 (same group), Party Pack 25 digis $5.99 (consumable, never expires). Paywall: Profile › Get Pro; Store › Party Pack.
• Account deletion: Settings › Account › Delete account.
• New styles are added server-side within the same content policy; no hidden features.
```

---

## 5. Store presence tools plan

| Tool | Facts | Use for Digi |
|---|---|---|
| **In-App Events** | Badges: Challenge, Competition, Live Event, Major Update, New Season, Premiere, Special Event. Name ≤ 30, short description ≤ 50, long description ≤ 120. **≤ 31 days**, promoted **≤ 14 days before**. Up to **15 approved** events. Submitted separately from the app. **No prices in metadata.** Deep link required (Universal Link recommended). Not suitable for daily rewards or pure price promos. [V developer.apple.com/app-store/in-app-events] | Event 1 "Holiday Party Digis" (new festive styles, 1–25 Dec). Event 2 "New Year's Eve Digis" (26 Dec – 1 Jan). Event 3 "Friendsgiving Booth" (only if approved before 26 Nov). Each must bring new content (styles), not just a discount. |
| **Featuring Nominations** | ASC → Featuring → Nominations. Types: **App Launch**, New Content, App Enhancements. *"Minimum of two weeks notice… up to three months in advance."* Roles: AH, Admin, App Manager, Marketing. [V ASC Help; V getting-featured] | Submit the App Launch nomination **today**, and a "New Content" nomination for the Christmas event. Realistic odds for a brand-new app are low [E], but it costs nothing. |
| **Custom Product Pages** | Up to **70**. Each has a unique URL. You can now assign **keywords** so a page appears in search. Deep links on iOS 18+. Reviewed separately from app versions. Usable in Apple Ads. [V] | 3 pages at launch: "Christmas card photos", "Party photobooth with friends", "Cartoon yourself". Match each TikTok or IG creative to its page. |
| **Product Page Optimization** | Up to **3 treatments**, one test at a time, ≤ 90 days. Alternate icons must be in the binary. Needs traffic. [V] | Skip until there are about 1–2k product page views a day [E]. Later: test icons and the first screenshot. |
| **Promotional text** | 170 chars, changes without review [E]. | Rotate: "New: Holiday styles 🎄", then "New Year's Eve party mode". |
| **Creative assets (new, Oct 2026)** | Header and search-result images or video. Asset Library. 2.3.14 rules. [V news 5 Oct 2026] | A festive header asset, submitted early and switched on in December. No prices. |
| **Apple Ads (formerly Search Ads)** | **Basic:** automated search-result ads, **pay per install** at a max CPI you set, monthly budget, **$100 credit** for eligible new advertisers. **Advanced:** cost-per-tap, Today tab, Search tab and search results placements, custom-product-page creative, deep links. [V ads.apple.com] Historically Basic had a monthly cap of about $10k per app, and neither tier has a minimum spend [E]. | Start Basic at a small budget with max CPI below your trial-to-pay value. Move to Advanced for exact-match keywords ("ai photobooth", "christmas photo") pointing to CPPs. |
| **Widgets / Live Activities** | Allowed if related to the app (2.5.16) [V]. | Not in week 1. A Live Activity for "digi rendering…" and a Roll widget are good December v1.2 candidates. They need a native target via an Expo config plugin (e.g. `@bacons/apple-targets`) [E]. |
| **Offer codes** | All IAP types, custom or one-time codes [V]. | Creator codes for free Party Packs. Use the redemption URL in bios. |
| **Retention messages** | Since 4 Nov 2026, in the cancellation flow, text, image or offer [V]. | Add in v1.1: "Keep Pro at 50% for a month". |

---

## 6. TestFlight

- **Internal:** up to **100** team members with roles. **No review** needed. Auto-distribute is available. [V developer.apple.com/testflight]
- **External:** up to **10,000** testers. Create a group. **The first build needs Beta App Review approval**; later builds added to groups are sent for review automatically. A beta description and review info are required. [V]
- **Public link:** shareable, can set device and OS criteria, has view and install stats. Disable it when you're full. [V]
- Up to **100 builds** shareable. Builds expire after **90 days** [V for 100 builds; E for 90 days].
- Testers can't be paid or compensated (2.2) [V].
- Significant beta updates should go back through Beta App Review [V 2.2].
- In TestFlight, IAPs use the **sandbox** and aren't charged [E]. Real charges start only on the App Store build.
- **Use for Digi:** run internal testing Tue–Wed. An external public link of ~50–200 friends and party testers on Wed–Thu also serves as early feedback on review risk [E].

---

## 7. Expo / React Native specifics

**Versions [V docs.expo.dev/versions/latest]:**
- Latest is Expo SDK **58** (React Native 0.88, iOS 16.4+, **Xcode 26.4+**). SDK 57 and 56 also need Xcode 26.4+.
- Apple has required the **iOS 26 SDK** since 28 Apr 2026 [V news]. The iOS 27 SDK minimum is expected from April 2027 [V news 9 Sep 2026].
- EAS's default build image meets this [E].
- RevenueCat notes: on Xcode 27 with SDK ≤ 56, a Podfile post_install fix is needed [V rcexpo].

**Dev builds are required:**
- `react-native-purchases` needs an **Expo development build** (`expo-dev-client`), not Expo Go [V RevenueCat Expo docs].
- VisionCamera needs `npx expo prebuild` / `npx expo run:ios`, i.e. a dev build [V visioncamera docs].
- **Recommendation [E]:** for a 1-week launch, use **expo-camera** (simpler) unless you need VisionCamera frame processors. Either way you're on dev builds because of RevenueCat.

**EAS:**
- `eas build -p ios --profile production --auto-submit` uploads to ASC and TestFlight. `eas submit -p ios` works too [V docs.expo.dev/submit/ios].
- `ascAppId` in eas.json is the app's "Apple ID" under App Information. Non-interactive or CI use needs an **App Store Connect API key** (`eas credentials`) [V].
- Credentials (distribution certificate, provisioning profile, push key) can be EAS-managed [E].
- Don't use EAS Update to ship new features (2.5.2, 2.5.19). Use it for JS fixes only.

**app.json (iOS) skeleton:**
```jsonc
{
  "expo": {
    "name": "Digi",
    "ios": {
      "bundleIdentifier": "pink.digi.app",
      "supportsTablet": false,
      "associatedDomains": ["applinks:digi.pink"],
      "usesAppleSignIn": true,                     // only if Sign in with Apple
      "config": { "usesNonExemptEncryption": false },   // V Expo: sets ITSAppUsesNonExemptEncryption
      "infoPlist": {
        "NSCameraUsageDescription": "Digi uses the camera so you can take photos to turn into digis.",
        "NSPhotoLibraryAddUsageDescription": "Digi saves your finished digis to your Photos.",
        "NSPhotoLibraryUsageDescription": "Digi lets you pick photos to turn into digis."  // only needed if you read the library beyond the system picker
      },
      "entitlements": { "com.apple.developer.declared-age-range": true },  // when expo-age-range is added (V)
      "privacyManifests": { /* NSPrivacyAccessedAPITypes for UserDefaults etc. */ }  // V Expo apple-privacy guide
    },
    "plugins": [
      "expo-apple-authentication",
      ["expo-image-picker", { "photosPermission": "Digi lets you pick photos to turn into digis.", "cameraPermission": "Digi uses the camera so you can take photos to turn into digis.", "microphonePermission": false }],
      ["expo-media-library", { "savePhotosPermission": "Digi saves your finished digis to your Photos." }],  // E: verify key names
      "expo-notifications"
    ]
  }
}
```

**Permissions and purpose strings:**
- Use `ImagePicker.launchImageLibraryAsync`, which uses PHPicker; *"No permissions request is necessary"* [V Expo docs]. This matches 5.1.1(iii).
- For saving, use `MediaLibrary.requestPermissionsAsync(writeOnly = true)` [V Expo docs].
- Don't ask for **microphone** unless you record video with sound. Set `microphonePermission: false` [V Expo docs]. Asking for the mic without a need is called out in 5.1.1(iv) [V].
- Strings must say **why**, concretely [V 5.1.1(ii)]. Ask in context (on the Capture tap), not at launch.

**App Tracking Transparency:**
- Only needed if you track (link data with third-party data for ads, or share with data brokers) [V 5.1.2(i), app-privacy page].
- With no ad SDKs, **don't add `expo-tracking-transparency`** and don't show the prompt. A gratuitous ATT prompt invites questions [E].

**StoreKit via RevenueCat [V RevenueCat Expo docs]:**
- `npx expo install expo-dev-client react-native-purchases react-native-purchases-ui`. Don't add purchases-ios separately.
- Configure with the public iOS API key. Fetch offerings. Gate with the `pro` entitlement.
- **Consumable credits must be granted on your server.** Use the RevenueCat webhook to credit 25 digis to the account. RevenueCat doesn't hold a consumable balance [E].
- Add `restorePurchases()` behind a visible button.
- Test with sandbox accounts (ASC → Users and Access → Sandbox) on a real device [E].

**Universal Links (digi.pink):**
- Host `https://digi.pink/.well-known/apple-app-site-association`: JSON, **HTTPS, no redirects**, with `applinks.details[].appIDs: ["<TEAMID>.pink.digi.app"]` and `components` such as `{"/": "/d/*"}` and `{"/": "/roll/*"}` [V docs.expo.dev/linking/ios-universal-links; E on no-redirect and the Apple CDN cache].
- Add `ios.associatedDomains: ["applinks:digi.pink"]` (no `https://`) [V Expo].
- Apple fetches the AASA through its CDN, so changes can take hours to show [E].
- Test on a device by tapping a link in Notes or Messages, not by pasting it into Safari [E].
- Share links that open on the web must show a **Report** button too (1.2).

**Push:**
- `expo-notifications` plus the Push capability. Ask permission after the first digi.
- Use it only for app-related messages (2.5.16), never as a requirement (5.1.2(i)) [V].

**Sign in with Apple:**
- `expo-apple-authentication`.
- Server-side token **revocation** on account deletion via the Sign in with Apple REST API [V account deletion page].

---

## 8. Open risks / things I could not verify today

- **Expedite form URL and exact steps:** not confirmed on an official page. The App Review page links "Learn more about expedite requests" [C].
- **2026 holiday review window:** not announced yet [V negative]. Recheck developer.apple.com/news in the first week of December.
- **Apple FY2027 November fiscal month end (28 Nov):** third-party sources only [C]. Check ASC → Payments.
- **Exact ASC character limits and the Apple Ads Basic budget cap:** from prior knowledge [E].
- **Whether reviewers treat a private friends-only Digi Roll as "social media":** Apple's definition ("feed… visibly spreads content to many users") suggests not [V definition; E interpretation].

## Sources (all fetched 16 Nov 2026)

**Apple developer pages**
- App Review Guidelines (Last Updated 16 Oct 2026): https://developer.apple.com/app-store/review/guidelines/
- App Review overview, timing, expedite and appeals: https://developer.apple.com/distribute/app-review/
- Apple Developer News: https://developer.apple.com/news/
  - 2 Nov 2026 age descriptors; 16 Oct 2026 guidelines and the nonconsensual-imagery item; 13 Oct 2026 DPLA; 5 Oct 2026 creative assets; 16 Sep 2026 ATT in the EU; 9 Jul 2026 social-media questions; 3 Jun 2026 Texas; 3 Feb 2026 SDK minimum; 13 Nov 2025 guidelines (5.1.2(i) third-party AI); 29 Oct 2025 offer codes and custom product pages; 24 Jul 2025 age ratings; 16 Jan 2025 DSA; 2 Dec 2024 holidays.
  - Age requirements for Brazil, Australia, Singapore, Utah and Louisiana: https://developer.apple.com/news/?id=f5zj08ey
- Small Business Program: https://developer.apple.com/app-store/small-business-program/
- Subscriptions: https://developer.apple.com/app-store/subscriptions/
- App Privacy details: https://developer.apple.com/app-store/app-privacy-details/
- TestFlight: https://developer.apple.com/testflight/
- In-App Events: https://developer.apple.com/app-store/in-app-events/
- Product Page Optimization: https://developer.apple.com/app-store/product-page-optimization/
- Custom Product Pages: https://developer.apple.com/app-store/custom-product-pages/
- Getting featured: https://developer.apple.com/app-store/getting-featured/
- Featuring nominations: https://developer.apple.com/help/app-store-connect/manage-featuring-nominations/nominate-your-app-for-featuring
- Agreements: https://developer.apple.com/help/app-store-connect/manage-agreements/sign-and-update-agreements
- Age ratings values: https://developer.apple.com/help/app-store-connect/reference/app-information/age-ratings-values-and-definitions
- Set an age rating: https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating
- Digital Goods and Services questionnaire: https://developer.apple.com/help/app-store-connect/manage-app-information/complete-the-digital-goods-and-services-questionnaire
- Screenshot specifications: https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications
- Export compliance: https://developer.apple.com/help/app-store-connect/manage-app-information/overview-of-export-compliance
- Account deletion: https://developer.apple.com/support/offering-account-deletion-in-your-app/
- Declared Age Range: https://developer.apple.com/documentation/declaredagerange

**Apple Ads**
- https://ads.apple.com/app-store/basic
- https://ads.apple.com/app-store

**Expo, VisionCamera and RevenueCat**
- Submit to the App Store: https://docs.expo.dev/submit/ios/
- Universal links: https://docs.expo.dev/linking/ios-universal-links/
- Apple privacy manifests: https://docs.expo.dev/guides/apple-privacy/
- SDK versions: https://docs.expo.dev/versions/latest/
- App config reference: https://docs.expo.dev/versions/latest/config/app/
- ImagePicker: https://docs.expo.dev/versions/latest/sdk/imagepicker/
- MediaLibrary: https://docs.expo.dev/versions/latest/sdk/media-library/
- Age range: https://docs.expo.dev/versions/latest/sdk/age-range/
- VisionCamera: https://visioncamera.margelo.com/docs
- RevenueCat Expo installation: https://www.revenuecat.com/docs/getting-started/installation/expo

**Third-party corroboration (C)**
- Apple Developer Forums: https://developer.apple.com/forums/thread/816140 , https://developer.apple.com/forums/thread/820209 , https://developer.apple.com/forums/thread/853129
- TechCrunch on the 5.1.2(i) change: https://techcrunch.com/2025/11/13/apples-new-app-review-guidelines-clamp-down-on-apps-sharing-personal-data-with-third-party-ai
- MacRumors on holiday review times: https://www.macrumors.com/2024/12/02/app-store-review-times-holidays/
- 9to5Mac on holiday submissions: https://9to5mac.com/2022/12/01/app-store-submissions-holiday-season/
- Apple fiscal calendar (aso.dev): https://aso.dev/app-store-connect/apple-fiscal-calendar/
- RevenueCat on the App Store fiscal calendar: https://www.revenuecat.com/blog/app-store-fiscal-calendar-and-payment-dates
