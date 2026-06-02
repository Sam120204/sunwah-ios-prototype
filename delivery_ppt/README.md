# Sunwah Fintech Delivery PPT Handoff

This folder contains the working materials for the Sunwah Fintech iOS Prototype delivery-review deck. The current output is an image/PDF review deck, not an editable PPTX. The user prefers reviewing generated slide images first, then converting the final approved version to PDF.

## Current Status

- Current review artifacts are kept only in `delivery_ppt/current_review/`.
- The renderer is `delivery_ppt/scripts/render_current_review.mjs`.
- The latest rendered deck covers opening, product foundation, and Market Intelligence.
- The latest Market Intelligence page-introduction slides use one primary raw prototype screenshot per slide, consistent rounded screenshot sizing, numbered pins, UI-style flow chips, and lightweight annotation notes so the PPT complements the HTML prototype instead of repeating README-style documentation.
- The renderer also captures three prototype states directly from `prototype.html` into `delivery_ppt/current_review/assets/`: ETF Market Overview, Sector Detail, and My Watchlist.
- The current deck has 18 slides:
  1. Cover
  2. Structure
  3. Product Foundation
  4. Architecture & Control Layers
  5. Page Structure & Module Directory
  6. Core Modules divider
  7. Market Intelligence Scope
  8. Dashboard Entry
  9. ETF Market Overview
  10. Sector Detail
  11. My Watchlist
  12. All ETFs Screener
  13. Filter Sheet
  14. ETF Detail
  15. ETF Compare
  16. Market User Stories
  17. Market User Stories
  18. Market Acceptance Criteria

Latest outputs:

- `delivery_ppt/current_review/sunwah-opening-foundation-market.pdf`
- `delivery_ppt/current_review/png/slide-01.png` through `slide-18.png`
- `delivery_ppt/current_review/assets/market-overview-detail.png`
- `delivery_ppt/current_review/assets/sector-detail-ai-technology.png`
- `delivery_ppt/current_review/assets/watchlist.png`

The render script cleans and replaces `delivery_ppt/current_review/` on each run. Keep this behavior: the user wants only the latest review version and does not want old bad drafts left in the repo.

## Latest Iteration Summary

What worked well this time:

- The deck improved when it stopped behaving like a README converted into slides. The strongest slides now use the screenshot as the proof object and explain what each UI region does, why it exists, and what interaction it leads to.
- One real screenshot per walkthrough slide works better than three small screenshots. It gives enough room for pins, readable annotations, and presenter explanation.
- Rounded-corner screen crops with subtle shadows fixed the earlier rectangular / cut-off screenshot problem without adding a second phone shell.
- UI-style flow chips work better than written transition sentences. They should describe the product interaction, such as `Filter button` -> `Refine ETF fields` -> `Apply`, not say `from slide 11 / 12`.
- Lightweight annotation notes work better than heavy rectangle callout boxes. Use a gold side marker, large number, short heading, compact caption, and a thin divider. Avoid crowded bordered cards.
- Slide 03 became stronger after removing the center-dot orbit diagram and replacing long paragraphs / empty icon cards with module explanation strips and icon-supported design rules.
- Inline SVG icons are a useful direction. They make the deck feel more like a designed product explanation and less like text blocks placed beside screenshots.

What changed in this iteration:

- Rebuilt the cover phone as a purely abstract UI visual. It no longer repeats `Markets / Portfolio / Assistant / Products` or embeds real walkthrough screenshots on the opening page.
- Rebuilt Slide 03 Product Foundation as an infographic: short thesis, icon-led `Intent / Evidence / Explain` path, module explanation strips, and design rules with enough detail to support presentation narration.
- Replaced paragraph-style screen connection strips with UI flow chips that show trigger, current screen, and next UI action.
- Replaced dense bordered explanation boxes with lighter annotation notes across Market Intelligence walkthrough slides.
- Standardized screenshot handling so raw prototype screenshots keep one consistent phone-screen ratio, rounded corners, and no extra outer phone layer.
- Added generated Market Intelligence states from `prototype.html` for ETF Market Overview, Sector Detail, and My Watchlist, so the walkthrough shows the actual result pages.
- Updated Market copy to clarify Default Sector versus Daily Hot, ETF Market Overview return distribution / rankings, Sector Detail filtered-by-sector behavior, Filter Sheet field logic, ETF Detail overview/news context, and ETF Compare as research support rather than execution.

Next AI should preserve these decisions:

- Do not bring back orbit/dot diagrams, crosshair connector lines, generic feature-card grids, empty icon cards, or long explanatory paragraphs.
- Do not label transitions by slide number in visible slide UI. Use UI action labels and product destinations.
- Do not add a second iPhone frame around prototype screenshots.
- Do not show skeleton, error, or empty states in the main walkthrough unless the user explicitly asks for supporting states.
- Continue expanding the remaining modules with an infographic-first pattern: icon or screenshot first, short copy second.

## Must-Read Sources

Read these before continuing the remaining deck:

- `delivery_ppt/outline_compressed.md`
- `docs/prd/Sunwah-Fintech-PRD-en.md`
- `docs/prd/assets/screenshots/prototype-pages/`
- `docs/prd/assets/screenshots/mermaid/`

Important diagram assets:

- Architecture: `docs/prd/assets/screenshots/mermaid/Architecture-Diagram.png`
- Page tree: `docs/prd/assets/screenshots/mermaid/page-tree-diagram.png`

Important prototype screenshots already used for Market Intelligence:

- `04-market-dashboard.png`
- `07-all-etfs-screener.png`
- `08-all-etfs-filter-sort-sheet.png`
- `10-etf-detail-overview.png`
- `12-etf-compare.png`

Additional Market Intelligence screenshots generated during render:

- `delivery_ppt/current_review/assets/market-overview-detail.png`
- `delivery_ppt/current_review/assets/sector-detail-ai-technology.png`
- `delivery_ppt/current_review/assets/watchlist.png`

Screenshots still needed for remaining modules:

- Portfolio Intelligence: `13-portfolio-input-holdings.png` to `16-portfolio-history.png`
- AI Advisory: `17-ai-advisory-chat.png` to `21-ai-create-custom-mode.png`
- Structured Products: `22-structured-products-list.png` to `28-admin-extracted-review.png`
- Profile / shared states if needed: `29-profile-settings.png` to `31-page-tree-nodes-only.png`

## Regeneration Command

Run from repo root:

```powershell
& 'C:\Users\zhong\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'delivery_ppt/scripts/render_current_review.mjs'
```

The script uses Playwright and local Chrome:

- Node runtime: `C:\Users\zhong\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe`
- Chrome: `C:/Program Files/Google/Chrome/Application/chrome.exe`

After regenerating, visually inspect:

- The slide PNGs in `delivery_ppt/current_review/png/`
- The PDF in `delivery_ppt/current_review/`

## Approved Design Direction

Keep the restrained professional visual system, but do not let the deck feel like a generic template or a slide version of the README. Treat the PPT as presenter support for the HTML prototype: each module should explain what the reviewer is seeing, why the UI block exists, and where the user clicks next.

Core visual rules:

- Use a fixed left-side navigation bar.
- Theme should be restrained and professional.
- Do not make the theme color too strong.
- Use light content panels with subtle borders, muted gold accents, and module colors sparingly.
- Avoid large dark-blue or dark content blocks. The dark left navigation is acceptable, but dark content cards were rejected.
- Avoid excessive whitespace. Increase font size or rebalance layouts when slides feel empty.
- Use clear PPT-like layouts, not random rectangles.
- Treat each slide as an infographic: pair short copy with icons, screenshot evidence, small diagrams, or UI-like controls. Avoid pages that rely on text boxes alone.
- Prefer icon-led labels and compact captions over paragraph explanations. When a paragraph is unavoidable, keep it short enough to read at presentation speed.
- Keep page titles shorter than the raw outline titles. Convert long PRD titles into concise slide titles.
- Remove source labels or visible source notes from slide images.
- Keep the deck as delivery-review material, not a marketing brochure.
- Prototype screenshots in `docs/prd/assets/screenshots/prototype-pages/` already include the iPhone UI / status bar / bottom nav. Do not add another phone shell, notch, or outer device wrapper around these screenshots.
- For page-introduction slides, lead with one real prototype screenshot per slide. Show it as a rounded-corner screen crop with a subtle shadow only, then use numbered pins and lightweight annotation notes to point at exact UI regions.
- Explain design reasoning at component level: what the block does, why it belongs there, how it changes the user journey, and what boundary it enforces.
- Show screen connections through light UI flow chips, for example Dashboard `All ETFs` -> Screener -> ETF Detail -> Compare. Do not write the interaction as a paragraph and do not use a dark bottom banner.
- Avoid feature-card grids and long explanatory text when a screenshot, icon, or small diagram can carry the explanation. The slide should feel like someone is walking through the HTML prototype with annotations.

Specific feedback already incorporated:

- Slide 01 cover: do not use a real Market Intelligence screenshot. Use a simplified made-up product phone visual with abstract UI shapes only; do not show module names or bottom tab labels inside the cover phone.
- Slide 02: title should be `Structure`, not `Presentation Structure`.
- Slide 03 product foundation: keep this as an infographic, not a PRD text summary. Use short thesis copy, icon paths, module explanation strips, and concise but understandable design-rule captions; do not use a center-dot orbit layout or empty 2x2 icon cards.
- Slide 04 architecture: use `Architecture-Diagram.png` as the main architecture visual. Avoid hand-drawn boxes with crossing lines.
- Slide 05 page structure: use `page-tree-diagram.png` as the main tree visual. The user disliked imperfect custom tree connectors. Do not add bottom boxes such as `Page Navigator Left Panel`, `Page Node Diagram`, `Loading/Error/Empty States`, or `Drawer/Sheet States`.
- Acceptance Criteria pages should not use dark-blue headers. Keep them light, rigorous, and aligned with the rest of the UI.
- Slides 08-15 now form a connected Market Intelligence walkthrough:
  - Slide 08 Dashboard Entry explains the clickable dashboard regions.
  - Slide 09 ETF Market Overview shows the result of tapping the overview card: return distribution and ETF rankings.
  - Slide 10 Sector Detail shows the result of tapping a default sector or Daily Hot tile: related ETFs filtered by sector, sortable by return or volume.
  - Slide 11 My Watchlist shows the result of tapping Watchlist Preview / View all.
  - Slide 12 All ETFs Screener shows the result of tapping All ETFs or View more ETFs.
  - Slide 13 Filter Sheet explains sort, asset class, region, sector, and issuer filtering.
  - Slide 14 ETF Detail explains identity/actions, price horizon, candlestick/volume chart, and Overview / News tabs. The news item is not labeled as a compare path.
  - Slide 15 ETF Compare is explained through proof objects: context cards, normalized curve, aligned metrics, and execution boundary.

## Slide Pattern For Remaining Modules

For each remaining core module, continue the Market Intelligence structure:

1. Functional overview page
2. Page introduction slides
3. User story slides
4. Acceptance Criteria page

Functional overview:

- Use one slide per module.
- Show capabilities as clear functional blocks.
- Blocks can be grouped by type, workflow, or interaction relationship.
- Overview slides can be moderately dense, but the reading path must stay obvious.
- Do not over-explain each block; each function should say one clear thing.

Page introductions:

- Use the raw prototype screenshot assets directly; they already include the phone frame. Do not add a second outer phone frame.
- Prefer one large annotated screenshot when the presenter needs to explain multiple UI regions in the same screen.
- Use numbered pins for dense screens such as dashboards, screeners, detail pages, or Admin review pages.
- Pair screenshots with concise text that explains reading path, design intent, and next interaction.
- A good pattern is one large annotated screenshot plus a readable explanation panel. Avoid three screenshots on one slide.
- Avoid clutter and avoid large blank regions.
- Explanation slides should be easy to present: the audience should know exactly which UI region is being discussed.

User Stories:

- Split across multiple slides if needed.
- Page count should roughly equal `number of user stories / stories per page`.
- List each story one by one.
- Visually distinguish personas, especially User vs Admin, using icons or badges.
- Do not make every story card identical. Alternating left/right or staggered layouts are preferred.
- The slide can be list-based, but should still feel visual and designed.

Acceptance Criteria:

- Use one slide per module.
- List the major acceptance items only.
- The page should look professional, rigorous, and considered.
- Keep information density similar to surrounding slides.
- Use light panels, subtle grouping, and clear labels such as UI, Flow, Data, Access, Compliance, or Integration.

## Remaining Deck Work

Continue from `delivery_ppt/outline_compressed.md` after Market Intelligence.

Remaining sections:

- Portfolio Intelligence
  - Functional overview
  - Input and analysis page introduction
  - Recommendations and history page introduction
  - User stories
  - Acceptance criteria
- AI Advisory
  - Functional overview
  - Chat and structured suggestions page introduction
  - Explanation, history, and custom mode page introduction
  - User stories
  - Acceptance criteria
- Structured Products
  - Functional overview
  - Discovery and detail page introduction
  - Scenario, pricing, and compare page introduction
  - Admin upload and extraction page introduction
  - User stories
  - Acceptance criteria
- Non-Functional Design
  - Section divider
  - Security, Privacy & Access Control
  - Performance, Compatibility & Accessibility
  - Compliance & Observability
- Closing
  - Review Focus / Next Steps

The outline currently maps to 33 slides, but slide count can change if a module needs more or fewer page-introduction or user-story slides for readability. Keep the narrative clear and the review experience polished.

## Clean Repo Expectations

- Keep the latest review output under `delivery_ppt/current_review/`.
- Keep reusable generation code under `delivery_ppt/scripts/`.
- Do not recreate old draft folders such as `delivery_ppt/review_preview`, `delivery_ppt/image_deck`, or `outputs/manual-20260601-sunwah-preview`.
- Avoid unusual scratch files in the repo.
- If a bad version is replaced, delete or overwrite the previous bad artifacts so the user can review only the current version.

## Working Style For Future Sessions

The user gives iterative visual feedback in mixed English and Chinese. They prefer direct implementation over long planning. For each iteration:

- Make the requested changes directly.
- Regenerate the current review deck.
- Show or reference the updated relevant slide PNGs/PDF.
- Keep explanations short and specific.
- Preserve the approved design system unless the user explicitly asks for a new direction.
