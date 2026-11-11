# Editor notes (not linked in the public footer)

Internal notes for people who maintain panpanaqua.com. Do not publish this file in the site navigation or footer. It may remain in the repository for operators.

## What this site is

Public English and Arabic export site for Guangzhou Nansha Zhihui Agricultural Technology Co., Ltd. (广州南沙智汇农业科技有限公司), displayed as PanPan Aqua. Position: a visitable recirculating aquaculture workshop in Nansha, a fishery management platform, and Qiuhao AI microscopes. Not a global turnkey RAS EPC contractor, and not a large commercial salmon factory.

The legal company name must remain in the footer of every public page. Do not mention PanPanTech on public pages. Do not claim that PanPanTech owns, is affiliated with, or is the parent of Zhihui. The only parent named in public copy is Guangzhou Nansha Modern Agriculture Industry Group Co., Ltd. (广州南沙现代农业产业集团有限公司), as a wholly-owned parent, per September 2026 press. Do not invent further corporate structure.

Factual copy is taken from the 9 November 2026 open-source research report already held by the operators. Do not inflate figures, invent overseas contracts, or add certificates that are not in the public record.

## Placeholders still to fill

- Official telephone and email: shown as “To be confirmed” / “يُؤكَّد لاحقًا”. Add only after an official public contact is confirmed. Then update Contact pages (EN and AR), the footer if needed, and README.
- Contact form: client-side only. It does not submit to a server. A mailto: or a form backend may be added only after an official mailbox exists.
- Official photographs of the Nansha workshop, park, and Qiuhao instruments: not yet available under a clear reusable licence. Current photographs are licensed stock or Wikimedia images and must keep honest captions. Do not retitle them as “our workshop” or “our park”.
- Official map or permitted map embed: the current graphic is a schematic location diagram, not a surveyed map. Do not invent a Google Maps API key.
- Second address: later tenders also mention 162 Zhujiang North Road. Do not invent which address is headquarters. If the company later confirms a headquarters, update About and Contact in both languages.
- GitHub Pages domain verification TXT (`_github-pages-challenge-PanPanTech` or the value GitHub displays): leave blank until Settings → Pages generates it. See DEPLOY-ALIYUN.md.
- International certifications, CE marks, export contracts: none were found in the public record. Do not add them.

## Photo policy

Only use images with a clear reusable licence (Unsplash, Pexels, Wikimedia Commons CC0 / CC BY / CC BY-SA / Public Domain, or official photographs whose licence is explicit). Download files into `assets/images/`. Do not hotlink. Record every file in `assets/images/ATTRIBUTION.md` (source page URL, author, licence, date retrieved, where used, any crop or recompression).

Never caption a stock or public photograph as if it were Zhihui’s own workshop, park, or Qiuhao instrument. Use bilingual honest captions. Nansha wetland, highway, and village photographs are district setting only, not “our farm”.

When genuine official photographs of the workshop or instruments become available, replace or add them and update ATTRIBUTION.md and captions.

## Copy rules that must not drift

- Founded July 2020 (per September 2026 press).
- EIA 穗南审批环评[2026]10号 (2026-02-02): experimental / observational fish culture, designed annual experimental volume about 50 tonnes. Never conflate this 50 tonnes with the park investment of about RMB 853.1296 million.
- Qiuhao identification figures (70,000+ images, 140,000+ boxes, 71 parasites/algae, accuracy bands) are company-stated and unverified. Always label them as such.
- WeChat mini-program is a China offering only — not an overseas product promise.
- Mandarin fish (Siniperca / 鳜鱼) appears as a 2024 research-tender context, not as a guaranteed commercial export SKU.
- FAO SOFIA 2026 may be cited carefully (2024 farmed aquatic animals 103 million tonnes; capture about 92 million; trade 184 billion dollars). Do not stitch conflicting RAS equipment market estimates into one growth curve.
- First-batch interest markets (Gulf water-scarce countries, Southeast Asian warm-water markets) may be discussed as interest, not as claimed projects.

## How pages are built

Committed HTML is ready to serve as-is on GitHub Pages. Shared header and footer were generated into each page. If you edit navigation, typography, or legal footer text, update every HTML file (English at the site root and Arabic under `ar/`), or regenerate from the operator build scripts and re-check the output. Keep `hreflang`, canonical URLs, and the EN | العربية switcher in sync for every equivalent page.

Blog word counts for the English bodies should stay roughly 2,200–2,800 words. Arabic pages must remain complete translations of the same substance, not summaries.
