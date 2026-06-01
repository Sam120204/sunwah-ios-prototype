# Sunwah Fintech Delivery PPT Handoff

This folder contains the working materials for the Sunwah Fintech iOS Prototype delivery-review deck. The current output is an image/PDF review deck, not an editable PPTX. The user prefers reviewing generated slide images first, then converting the final approved version to PDF.

## Current Status

- Current review artifacts are kept only in `delivery_ppt/current_review/`.
- The renderer is `delivery_ppt/scripts/render_current_review.mjs`.
- The latest rendered deck covers opening, product foundation, and Market Intelligence.
- The current deck has 15 slides:
  1. Cover
  2. Structure
  3. Product Overview
  4. Architecture & Control Layers
  5. Page Structure & Module Directory
  6. Core Modules divider
  7. Market Intelligence Scope
  8. Dashboard Entry
  9. Failure & Recovery
  10. Search Refinement
  11. Detail Research
  12. ETF Compare
  13. Market User Stories
  14. Market User Stories
  15. Market Acceptance Criteria

Latest outputs:

- `delivery_ppt/current_review/sunwah-opening-foundation-market.pdf`
- `delivery_ppt/current_review/png/slide-01.png` through `slide-15.png`

The render script cleans and replaces `delivery_ppt/current_review/` on each run. Keep this behavior: the user wants only the latest review version and does not want old bad drafts left in the repo.

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
- `05-market-dashboard-skeleton.png`
- `06-market-dashboard-load-error.png`
- `07-all-etfs-screener.png`
- `08-all-etfs-filter-sort-sheet.png`
- `09-all-etfs-empty-state.png`
- `10-etf-detail-overview.png`
- `11-etf-detail-compare-picker.png`
- `12-etf-compare.png`

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

The user likes the current overall style. Continue it rather than starting over.

Core visual rules:

- Use a fixed left-side navigation bar.
- Theme should be restrained and professional.
- Do not make the theme color too strong.
- Use light content panels with subtle borders, muted gold accents, and module colors sparingly.
- Avoid large dark-blue or dark content blocks. The dark left navigation is acceptable, but dark content cards were rejected.
- Avoid excessive whitespace. Increase font size or rebalance layouts when slides feel empty.
- Use clear PPT-like layouts, not random rectangles.
- Keep page titles shorter than the raw outline titles. Convert long PRD titles into concise slide titles.
- Remove source labels or visible source notes from slide images.
- Keep the deck as delivery-review material, not a marketing brochure.

Specific feedback already incorporated:

- Slide 01 cover: user liked the iOS screenshot/phone visual. Do not use confusing callouts like `Delayed data`, `No execution`, `Admin review`, or `AI explanation` on the cover. Current cover callouts should stay module-oriented: `Markets`, `Portfolio`, `Assistant`, `Products`.
- Slide 02: title should be `Structure`, not `Presentation Structure`.
- Slide 03 product overview: do not use confusing terms like `Product research`. The product loop should reflect the real modules: Market Intelligence, Portfolio Builder, AI Advisory, Structured Products, and Admin Maintenance.
- Slide 04 architecture: use `Architecture-Diagram.png` as the main architecture visual. Avoid hand-drawn boxes with crossing lines.
- Slide 05 page structure: use `page-tree-diagram.png` as the main tree visual. The user disliked imperfect custom tree connectors. Do not add bottom boxes such as `Page Navigator Left Panel`, `Page Node Diagram`, `Loading/Error/Empty States`, or `Drawer/Sheet States`.
- Acceptance Criteria pages should not use dark-blue headers. Keep them light, rigorous, and aligned with the rest of the UI.

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

- Use screenshots inside phone frames, not raw pasted screenshots.
- Usually place 1 to 2 phone-framed screenshots per slide.
- Pair screenshots with concise text that explains reading path and conclusion.
- A good pattern is one screenshot on the left, one on the right, with explanation text between or beside them.
- Avoid clutter and avoid large blank regions.
- Explanation slides should be easy to understand, not high-density just for density.

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
