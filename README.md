# panpanaqua.com

Official English and Arabic public website for **PanPan Aqua**, the export site of Guangzhou Nansha Zhihui Agricultural Technology Co., Ltd. (广州南沙智汇农业科技有限公司).

The legal company is a wholly-owned subsidiary of Guangzhou Nansha Modern Agriculture Industry Group Co., Ltd. (广州南沙现代农业产业集团有限公司), as reported in September 2026 press. The site presents a visitable recirculating aquaculture (RAS) workshop in Nansha, a fishery management platform, and Qiuhao AI microscopes. It is not a global turnkey RAS EPC contractor site, and it does not describe a large commercial salmon factory.

This folder is the complete GitHub Pages root. Another operator will push it to https://github.com/PanPanTech/panpanaqua.com and bind the custom domain `panpanaqua.com`. Do not mention PanPanTech on public HTML pages.

## Open the site locally

No build step is required. The committed HTML is ready to serve.

- Fastest: open `index.html` in a browser. Relative links and fonts will work for top-level pages. Blog and Arabic pages are more reliable from a local static server, because some paths assume a site root.
- Recommended:

```bash
# from this folder
python3 -m http.server 8080
```

Then visit http://127.0.0.1:8080/ for English and http://127.0.0.1:8080/ar/ for Arabic.

## What is in the folder

- English pages at the site root: `index.html`, `about.html`, `operations.html`, `products.html`, `solutions.html`, `projects.html`, `services.html`, `contact.html`, `404.html`, and `blog/`.
- Arabic pages under `ar/`, with `lang="ar"` and `dir="rtl"`, including a full translation of every public page and all ten blog posts.
- `css/`, `js/`, `assets/fonts/` (Fraunces, Source Sans 3, IBM Plex Sans Arabic, Noto Naskh Arabic), `assets/svg/`, and `assets/images/`.
- `CNAME` (exactly `panpanaqua.com`), `.nojekyll`, `robots.txt`, `sitemap.xml`.
- Operator docs: this file, `读我.md`, `DEPLOY-ALIYUN.md`, and `NOTES.md` (editors only; not linked in the public footer).
- Photo credits: `assets/images/ATTRIBUTION.md`.

Every public page has `hreflang` tags (`en`, `ar`, `x-default`), a canonical URL on https://panpanaqua.com/, and an EN | العربية language switcher that keeps the visitor on the equivalent page.

## Remaining placeholders

- Official telephone and email are shown as “To be confirmed” / “يُؤكَّد لاحقًا”. Do not invent numbers or addresses.
- The contact form does not submit to a server. Visitors can prepare a request and copy it. Add a mailbox or form backend only after official contact details exist.
- Photographs on the pages are licensed stock or Wikimedia images with honest captions. They are not official pictures of the company’s workshop, park, or Qiuhao instruments. Official facility photographs should be added when a reusable licence is available.
- The location graphic is a schematic diagram, not a surveyed map. An official map or a permitted embed is still to be added. Do not invent a Maps API key.
- Later tenders also mention 162 Zhujiang North Road. This site lists the provided address at No. 4, 5 Nanjiang 2nd Road and does not invent which address is headquarters.
- Alibaba Cloud DNS binding and the GitHub Pages domain-verification TXT value are documented in `DEPLOY-ALIYUN.md`. The TXT *value* is generated only after the custom domain is added in the repository’s Pages settings. Do not invent it.

## Deploy

See `DEPLOY-ALIYUN.md` for the GitHub Pages settings and the exact DNS records to enter in Alibaba Cloud for `panpanaqua.com`. After DNS is live, enable “Enforce HTTPS” in the repository’s Pages settings.

## Licence of third-party photographs and fonts

Photographs remain under their original licences (Creative Commons or Pexels). See `assets/images/ATTRIBUTION.md`. Fonts are self-hosted under their respective open-font licences.
