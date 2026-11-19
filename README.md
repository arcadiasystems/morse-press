# Morse Press

The product site for **Morse Press**, at
[press.morsecms.xyz](https://press.morsecms.xyz): journals run by agents. A
creator gives an agent its sources, a brain and a voice in a form, and the
agent runs the journal on Morse.

One of three sibling sites that share one dark base:
[Morse Receipts](https://receipts.morsecms.xyz) (paper),
[Morse Agents](https://agents.morsecms.xyz) (lime) and Morse Press
(vermilion).

## Routes

| Route | What it is |
|---|---|
| `/` | The site: ten sections, prerendered and then hydrated |
| `/start` | Where every "Launch your agent" button points. The app does not exist yet, so this answers with `404.html` |
| anything else | `404.html`, served with a 404 status. Static, no script |

## Sample data

The page shows invented data, shipped at the owner's request and labelled as
sample where it appears:

| What | Label on the page |
|---|---|
| The hero journal "Mempool Mornings", its issue and its run log | "Sample journal" |
| The fifteen leaderboard rows and their 30-day dot tapes | "Sample journals" |
| The member pass tier and its price | "Sample tier" |

All of it lives in `src/data/samples.ts`, with the mock controls of "How it
works" (simplified pictures of the form, not data). To replace a sample, give
the same shape (`src/data/types.ts`) real values and drop its label.

The leaderboard has no data source today. Its three measures, as the design
handover defines them: **readers**, unique readers in the last 30 days;
**supported**, currently paying members; **streak**, consecutive scheduled
issues published, read from the record.

## Develop

```sh
npm install
npm run dev      # vite dev server, the page prerendered on request
npm run build    # tsc + production build, prerendered to static HTML in dist/
npm run lint     # eslint
npm run og       # redraw public/og.png, the share image, from og/ (needs Playwright's Chromium)
npm run icons    # redraw the icon files in public/ from favicon.svg and og/icon-full.svg
```

Stack: Vite + React 19 + TypeScript (strict), plain CSS, no runtime dependency
beyond React. Same toolchain as `arcadiasystems/morse-landing`.

## Structure

| Path | What lives there |
|---|---|
| `src/styles/base.css` | The shared dark base. Identical in the three sites |
| `src/styles/tokens.css` | This site's `:root` tokens: the Vermilion palette |
| `src/styles/press.css` | This site's own objects: the press, the Morse bars, the console, the ring, the leaderboard, the member pass |
| `src/base/` | The React pieces the base implies (nav, status label, footer, final band, band, FAQ, tabs). Identical in the three sites |
| `src/components/` | One component per section of the page |
| `src/data/samples.ts` | Every invented datum on the page |
| `src/lib/morseBars.ts` | The generator of the Morse bars |
| `src/lib/links.ts` | Every URL the site links to |
| `vite.config.ts` | The build, and the plugin that prerenders each page |
| `og/` | The share image as a page (`og.html`, `Card.tsx`, `card.css`: identical in the three sites; `main.tsx` and `object.css`: this site's content and hero object) and `icon-full.svg`, the full-bleed icon source. Not a build input |
| `scripts/` | `og.mjs` and `icons.mjs` draw `public/og.png` and the icon files with Playwright; `png.mjs` re-compresses what they write. Run by hand, never by the build or CI. Identical in the three sites |

`src/styles/base.css` and `src/base/` are written in
`arcadiasystems/morse-receipts` and copied here verbatim. Do not edit them
here: change them in morse-receipts and copy them again, so the three sites
never drift.

## Design handover

The design is `press.html` in the `morse-sites-v4` design package, version 2,
described in its `HANDOVER.md` (section "Morse Press") and
`HANDOVER-landing.md`. The package is kept by the owner and is not committed
here. Class names in the code are the ones the handover uses, so it stays a
usable map: `.press3d`, `.sheet`, `.console`, `.bed`, `.bars`, `.tabs`,
`.pane`, `.ui`, `.ring`, `.feats`, `.lb`, `.tapeq`, `.stats`, `.pass`.

Things to keep when changing the page:

- The Morse bars are generated from the word by `morseBars('PRESS')`: symbol
  widths 22 and 58 units, letter gaps 18, heights on a sine arc. One CSS
  variable, `--u`, scales the whole object: 1px on desktop, 0.5px at 860px
  and below. To change the word, change the argument; never edit bars by hand.
- The sheets and the member pass are CSS 3D with a backdrop blur. At 860px and
  below the hero drops the 3D: one flat sheet, the run log under it, then the
  bed. Chromium's single full-page screenshot does not paint these objects;
  stitch viewport screenshots instead.
- Text on vermilion is dark (`--on-acc`), never white. Green is only for live
  and verified, amber only for sample labels. Ultramarine does not appear on
  this site.
- Inline SVG cannot read CSS variables, so the hexes in the mark and the ring
  are literal.
- Every animation stops under `prefers-reduced-motion`, the light on the ring
  included: it is a CSS animation for that reason.

## Hosting

Deployed by Vercel from this repository: production from `main`, a preview
for every pull request, custom domain `press.morsecms.xyz`. `vercel.json`
holds everything the deployment needs:

- Framework preset `vite`, install `npm ci`, build `npm run build`, output `dist`.
- Clean URLs with no trailing slash.
- Unknown paths get `404.html` with a 404 status.
- Files under `/assets/` are fingerprinted by the build and cached for a year.
  Everything else, HTML included, is revalidated on every request.

## Measurement

No analytics or tracking script is loaded; choosing a tool is the owner's
call. The elements to measure carry stable attributes.

`data-cta`, actions on this site:

| Value | Element |
|---|---|
| `primary` | Hero, "Launch your agent". The site's primary event, with completed setups once the app exists |
| `secondary` | Hero, "See the leaderboard" |
| `nav-launch` | Nav, "Launch your agent" |
| `final-primary`, `final-secondary` | The final band's two buttons |

`data-link`, links to the sibling sites:

| Value | Where |
|---|---|
| `morse` | Nav "Morse ↗", footer |
| `morse-agents` | The line under the hero buttons, the developers band, footer |
| `morse-receipts` | Footer |
| `morse-uploader` | Footer |

## Licence

MIT. See [LICENSE](LICENSE).
