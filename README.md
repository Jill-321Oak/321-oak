# Digital Obsidian Garden
This is the template to be used together with the [Digital Garden Obsidian Plugin](https://github.com/oleeskild/Obsidian-Digital-Garden). 
See the README in the plugin repo for information on how to set it up.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/oleeskild/digitalgarden)

---
## Docs
Docs are available at [dg-docs.ole.dev](https://dg-docs.ole.dev/)

## Modifications:
### SEO & Structured Data changes (templates in src/site/_includes/_layouts/)

Files touched
index.* (home/collection pages)
note.* (individual article/note pages)

What the <head> now does
Reads dg-metatags frontmatter (when present) and emits canonical SEO tags:
<title> + meta name="description">
  Open Graph: og:title, og:description, og:type, og:url, og:site_name, og:image, og:image:width, og:image:height
  Twitter Card: twitter:card, twitter:site, twitter:image, twitter:image:alt
  If dg-metatags is missing, we fall back to sensible defaults (page title, excerpt/description, site default image).
Outputs JSON-LD structured data (schema.org) with absolute URLs:
  On index pages: WebSite (and a minimal Organization block using “321 Oak”).
  On article/note pages: Article/BlogPosting with headline, description, author (“Jill Stapleton”), datePublished, dateModified, image, and mainEntityOfPage.
  Images use your 1200×630 hero (Cloudinary) when available.
Canonical & robots
  Adds <link rel="canonical" href="https://321oak.com/..."> built from site.url + page.url.
  Sets robots to noindex,nofollow when a page is unpublished/draft (e.g., dg-publish: false or draft: true), otherwise index,follow.
Performance niceties
  Adds preconnect/dns-prefetch for https://res.cloudinary.com to speed up first image paints.
  Keeps meta charset/viewport at the top of

### Enable Client Hints → Cloudinary
feat(vercel): enable Client Hints + delegation for Cloudinary responsive images
- Add top-level headers in vercel.json:
  - Accept-CH, Critical-CH (DPR, Width, Viewport-Width)
  - Permissions-Policy to delegate hints to https://res.cloudinary.com
- Enables w_auto + dpr_auto to serve right-sized images on first load
- Fix vercel.json syntax (missing comma after "routes")

Follow-up:
- If we switch to images.321oak.com, update the origin in Permissions-Policy
- Verify in DevTools: HTML response has headers; image requests send sec-ch-* hints

We send `Accept-CH` and `Critical-CH` so browsers provide DPR/Width/Viewport-Width on the **first load**.  
`Permissions-Policy` delegates those hints to the image origin (`https://res.cloudinary.com`), enabling Cloudinary’s `w_auto` + `dpr_auto` to return right-sized images per device.  
If we switch to a custom media hostname (e.g., `https://images.321oak.com`), update that origin in `Permissions-Policy`.  
If we stop using Client Hints, remove these and fall back to `srcset` + fixed widths.

