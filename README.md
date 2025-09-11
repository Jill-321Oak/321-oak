# Digital Obsidian Garden
This is the template to be used together with the [Digital Garden Obsidian Plugin](https://github.com/oleeskild/Obsidian-Digital-Garden). 
See the README in the plugin repo for information on how to set it up.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/oleeskild/digitalgarden)

---
## Docs
Docs are available at [dg-docs.ole.dev](https://dg-docs.ole.dev/)

## Modifications:

### Why these headers exist (Client Hints → Cloudinary)
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

