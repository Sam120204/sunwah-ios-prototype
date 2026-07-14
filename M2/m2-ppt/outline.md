# M2 功能验收演示文稿完整大纲

> 本文件是后续 PPT 的页级内容源。英文标题、Walkthrough 和 AC 文案以 `*.en.md` 为准；中文只用于说明排版与制作规则。当前规划为 35 页，覆盖 Login、Market、Portfolio、Admin 全部 11 个 User Stories。
>
> 本大纲已逐条映射全部 248 条 Acceptance Criteria。iOS 截图使用独立的 iPhone 17 Pro 带壳 PNG；Admin 使用宽屏真实页面截图。两组尚缺的 Admin → iOS 前后态已明确标记为待补截图，不用不相关画面代替。

## 内容与截图标准

- 每张 Story 页放 2–3 个独立截图对象；截图不合成为一张大图。两图页左右分布，三图页使用三列布局。
- Walkthrough 使用连续叙述，不拆成机械编号；相关 AC 可以聚合为一个编号组。每个 Evidence 的 AC Mapping 最多 5–6 行，每行使用可在 PPT 中尽量单行展示的短描述。完整 AC 原文仍以英文验收文档为准。
- 每一步选择 walkthrough 经过页面中最有代表性的稳定状态：页面标题、关键控件、数据边界和与 AC 对应的结果尽量同时可见。
- loading、请求防重、拖拽、缩放、scrub、Toast 和跨端刷新等瞬时行为由视频连续证明；静态截图只承担可稳定观察的状态证据。
- iOS 截图不得暴露真实 password、可复用 verification code 或个人资料；Admin 的 email / owner 使用测试数据或打码。

## 目录索引

| 页码 | 模块 | 层级 | 页面标题 | 版式 |
| ---: | --- | --- | --- | --- |
| 01 | Front matter | — | SUNWAH Fintech Phase 2 | Cover |
| 02 | Front matter | — | M2 Acceptance Walkthrough Structure | Combined delivery and module overview |
| 03 | Login | Module overview | 01 Login / Register | Module overview |
| 04 | Login | User Story 1 | User Story 1 — Start from Login and prepare registration | Story — 2 windows |
| 05 | Login | User Story 1 | User Story 1 — Verify the email and enter Markets | Story — 2 windows |
| 06 | Market | Module overview | 02 Market | Module overview |
| 07 | Market | User Story 1 | User Story 1 — Establish research direction from Market Intelligence | Story — 3 columns |
| 08 | Market | User Story 2 | User Story 2 — Understand sector trends and filter ETFs | Story — 3 columns |
| 09 | Market | User Story 3 | User Story 3 — Research and compare individual ETFs | Story — 3 columns |
| 10 | Market | User Story 4 | User Story 4 — Save ETF research results | Story — 3 columns |
| 11 | Portfolio | Module overview | 03 Portfolio | Module overview |
| 12 | Portfolio | User Story 1 | User Story 1 — Discover a Model Portfolio | Story — 3 columns |
| 13 | Portfolio | User Story 1 | User Story 1 — Evaluate the forecast and save for later | Story — 2 windows |
| 14 | Portfolio | User Story 1 | User Story 1 — Edit the configuration before saving | Story — 2 windows |
| 15 | Portfolio | User Story 1 | User Story 1 — Persist or analyze the edited Model Portfolio | Story — 3 columns |
| 16 | Portfolio | User Story 2 | User Story 2 — Create a My Portfolio | Story — 2 windows |
| 17 | Portfolio | User Story 2 | User Story 2 — Inspect and edit saved holdings | Story — 2 windows |
| 18 | Portfolio | User Story 2 | User Story 2 — Maintain baseline history and remove a portfolio | Story — 2 windows |
| 19 | Portfolio | User Story 3 | User Story 3 — Complete the recommendation questionnaire | Story — 3 columns |
| 20 | Portfolio | User Story 3 | User Story 3 — Review the recommendation result and build | Story — 2 windows |
| 21 | Portfolio | User Story 3 | User Story 3 — Inspect explanation, constraints and ETF holdings | Story — 2 windows |
| 22 | Portfolio | User Story 3 | User Story 3 — Save the recommendation | Story — 2 windows |
| 23 | Portfolio | User Story 4 | User Story 4 — Run portfolio analysis | Story — 3 columns |
| 24 | Portfolio | User Story 4 | User Story 4 — Select findings and generate recommendations | Story — 2 windows |
| 25 | Portfolio | User Story 4 | User Story 4 — Review, edit and apply Suggested actions | Story — 2 windows |
| 26 | Portfolio | User Story 5 | User Story 5 — Select a baseline and inspect drift | Story — 2 windows |
| 27 | Portfolio | User Story 5 | User Story 5 — Explain the baseline deviation | Story — 3 columns |
| 28 | Portfolio | User Story 5 | User Story 5 — Adjust and apply the baseline scenario | Story — 2 windows |
| 29 | Admin | Module overview | 04 Admin | Module overview |
| 30 | Admin | User Story 1 | User Story 1 — Monitor the platform and inspect the ETF catalogue | Story — 2 desktop windows |
| 31 | Admin | User Story 1 | User Story 1 — Add or deactivate an ETF and verify it on iOS | Story — 2 windows + capture requirement |
| 32 | Admin | User Story 1 | User Story 1 — Maintain and verify Model Portfolios | Story — 2 desktop windows + capture requirement |
| 33 | Admin | User Story 1 | User Story 1 — Review protected operations data | Story — 2 desktop windows |
| 34 | Back matter | — | Acceptance Traceability Across Modules | Traceability overview |
| 35 | Back matter | — | Acceptance Review and Q&A | Closing |

## 逐页文字与截图规划

### Slide 01 — SUNWAH Fintech Phase 2

- **Module / Story:** Front matter / —
- **Subtitle:** M2 Functional Acceptance Walkthrough
- **Layout:** Template cover. No product screenshot required.
- **On-slide copy:**
  - Documentation, presentation and walkthrough video use one shared evidence chain.
  - Scope: Login, Market, Portfolio and Admin.
  - Environment: live cloud configuration; screenshots use test or redacted data.

### Slide 02 — M2 Acceptance Walkthrough Structure

- **Module / Story:** Front matter / —
- **Subtitle:** Three complementary deliverables · four modules · eleven User Stories
- **Layout:** One combined overview page covering the deliverable hierarchy, deliverable set and module structure.

This page introduces one shared evidence hierarchy across the complete delivery. The package contains three coordinated deliverables — the acceptance documentation, the meeting presentation and the User Story walkthrough videos — organized into Login, Market, Portfolio and Admin. Each Story connects its walkthrough, representative evidence and mapped acceptance summary; the complete authoritative Acceptance Criteria remain in the functional acceptance documents.

### Slide 03 — 01 Login / Register

- **Module / Story:** Login / Module overview
- **Subtitle:** Two accepted authentication paths converge on the same Markets landing
- **Layout:** Representative iPhone screenshot on the left; Mermaid source on the right.

#### Representative screenshot

<img src="assets/device-framed/login-register/auth-us1-02-create-account.png" alt="01 Login / Register representative screenshot" width="300" />

#### Mermaid source

```mermaid
flowchart LR
  A[Open Login] --> B{Choose path}
  B -->|New account| C[Create Account]
  C --> D[Verify Email]
  B -->|Existing user| E[Email / Password]
  D --> F[Markets]
  E --> F
```

### Slide 04 — User Story 1 — Start from Login and prepare registration

- **Module / Story:** Login / User Story 1
- **Subtitle:** The first page proves authentication scope, form gates and the hand-off into registration.
- **Layout:** Two-window layout: screenshots at left and right, walkthrough/AC cards in the centre band.

#### Evidence 01 — 01 · Login and existing-account path

<img src="assets/device-framed/login-register/auth-us1-01-login-page.png" alt="01 · Login and existing-account path" width="300" />

**Walkthrough copy:** Open the app on Login. Show account/email and password fields, toggle password visibility, demonstrate the required-field gate, explain the excluded SSO entries, then submit an existing account and show the in-progress state.

**AC Mapping:**

- `AUTH-US1-AC01–02` — Login is first and requires account/email plus a hidden password.
- `AUTH-US1-AC03–04` — Password visibility and the Sign In gate preserve entered data.
- `AUTH-US1-AC05` — Displayed SSO options remain outside the accepted path.
- `AUTH-US1-AC12–13` — Existing credentials submit once with an in-progress state.
- `AUTH-US1-AC15` — Evidence exposes no reusable secrets or personal data.

#### Evidence 02 — 02 · Create Account

<img src="assets/device-framed/login-register/auth-us1-02-create-account.png" alt="02 · Create Account" width="300" />

**Walkthrough copy:** Tap Register New Account. Enter display name, redacted test email and password; show the disabled state below eight characters, then submit a valid form.

**AC Mapping:**

- `AUTH-US1-AC06` — Register New Account opens a form for display name, email and password.
- `AUTH-US1-AC07` — Create Account stays disabled until all fields and an eight-character password are valid.
- `AUTH-US1-AC08` — A valid submission creates one pending account, sends a six-digit code and opens Verify Email.

### Slide 05 — User Story 1 — Verify the email and enter Markets

- **Module / Story:** Login / User Story 1
- **Subtitle:** The second page proves email verification and the shared successful landing.
- **Layout:** Two-window layout: screenshots at left and right, walkthrough/AC cards in the centre band.

#### Evidence 01 — 03 · Verify Email

<img src="assets/device-framed/login-register/auth-us1-03-verify-email.png" alt="03 · Verify Email" width="300" />

**Walkthrough copy:** Confirm Verify Email opens after registration. Show the disabled state below six digits, enter a complete code, then tap Verify and Continue.

**AC Mapping:**

- `AUTH-US1-AC09` — Verify and Continue stays disabled until all six code digits are entered.
- `AUTH-US1-AC10` — A correct code creates one account and signs the user in automatically.

#### Evidence 02 — 04 · Markets landing

<img src="assets/device-framed/login-register/auth-us1-04-registration-success.png" alt="04 · Markets landing" width="300" />

**Walkthrough copy:** Confirm successful registration opens Markets. Repeat the accepted existing-account path and verify that both paths reach the same default landing.

**AC Mapping:**

- `AUTH-US1-AC11` — Newly registered users will enter the default Markets landing page.
- `AUTH-US1-AC14` — Enter the default Markets landing page after successful user authentication.

### Slide 06 — 02 Market

- **Module / Story:** Market / Module overview
- **Subtitle:** A complete research flow from market direction to ETF comparison and saving
- **Layout:** Representative iPhone screenshot on the left; Mermaid source on the right.

#### Representative screenshot

<img src="assets/device-framed/market/mkt-us1-01-sector-heatmap.png" alt="02 Market representative screenshot" width="300" />

#### Mermaid source

```mermaid
flowchart LR
  A[Market Intelligence] --> B[Heatmap + Signals]
  B --> C[Sector Detail]
  C --> D[ETF Rankings]
  D --> E[ETF Detail]
  E --> F[Compare ETF]
  E --> G[Watchlist]
  E --> H[Add to My Portfolio]
  G --> I[Screener]
  H --> J[My Portfolio]
```

### Slide 07 — User Story 1 — Establish research direction from Market Intelligence

- **Module / Story:** Market / User Story 1
- **Subtitle:** Daily breadth, signals and discovery rails produce the next sector research target.
- **Layout:** Three equal columns; one independent iPhone image and one text card per column.

#### Evidence 01 — 01 · Sector Heatmap

<img src="assets/device-framed/market/mkt-us1-01-sector-heatmap.png" alt="01 · Sector Heatmap" width="300" />

**Walkthrough copy:** Open Market Intelligence, explain its research-only role, then scan sector blocks and the Rising / Flat / Falling breadth summary.

**AC Mapping:**

- `MKT-US1-AC01–03` — Market Intelligence loads all research entries with sector context and matching heatmap breadth totals.
- `MKT-US1-AC10` — Market signals, sector performance and selected ETFs are presented as research, not recommendations.

#### Evidence 02 — 02 · AI signals and indices

<img src="assets/device-framed/market/mkt-us1-02-ai-market-signal.png" alt="02 · AI signals and indices" width="300" />

**Walkthrough copy:** Open an AI Market Signal with date, movement, analysis, related ETFs and sources; keep the delayed-data label visible on major indices.

**AC Mapping:**

- `MKT-US1-AC04` — AI Market Signals shows its date, detected changes, analysis, related ETFs and available sources.
- `MKT-US1-AC05` — Market Indices shows available index changes and clearly marks delayed-data boundaries.

#### Evidence 03 — 03 · Discovery to Sector Detail

<img src="assets/device-framed/market/mkt-us1-03-discovery-recommended.png" alt="03 · Discovery to Sector Detail" width="300" />

**Walkthrough copy:** Switch Default / Hot sectors, inspect Recommended ETFs and View all, then open a sector to continue into Sector Detail.

**AC Mapping:**

- `MKT-US1-AC06–07` — Discovery supports several research routes, and Default or Hot sectors show the selected scope.
- `MKT-US1-AC08` — Recommended ETFs is a curated list with key quote data and a View all entry.
- `MKT-US1-AC09` — Selecting a sector opens the matching Sector Detail page.

### Slide 08 — User Story 2 — Understand sector trends and filter ETFs

- **Module / Story:** Market / User Story 2
- **Subtitle:** Sector context, EOD observations and sortable rankings produce an ETF candidate.
- **Layout:** Three equal columns; one independent iPhone image and one text card per column.

#### Evidence 01 — 01 · Sector banner

<img src="assets/device-framed/market/mkt-us2-01-sector-banner.png" alt="01 · Sector banner" width="300" />

**Walkthrough copy:** Open a selected sector such as Crypto and confirm the banner identity, representative tickers, ETF count, movement and cached snapshot label.

**AC Mapping:**

- `MKT-US2-AC01–02` — Sector Detail matches the selected sector and shows its tickers, ETF count and movement.
- `MKT-US2-AC03` — The page clearly identifies its cached EOD snapshot and avoids implying real-time data.

#### Evidence 02 — 02 · AI Sector Insights

<img src="assets/device-framed/market/mkt-us2-02-ai-sector-insights.png" alt="02 · AI Sector Insights" width="300" />

**Walkthrough copy:** Read Momentum & Breadth, Liquidity Pulse and Trend & Risk in order; explain the EOD basis and non-predictive research wording.

**AC Mapping:**

- `MKT-US2-AC04–05` — AI Sector Insights covers momentum, liquidity and risk, with an explicit state when data is insufficient.
- `MKT-US2-AC11` — Insight wording describes research observations rather than real-time predictions or trading advice.

#### Evidence 03 — 03 · ETF Rankings

<img src="assets/device-framed/market/mkt-us2-03-etf-rankings.png" alt="03 · ETF Rankings" width="300" />

**Walkthrough copy:** Keep the selected sector, switch sorting metrics and return periods, then open one ETF from the sector-only ranking.

**AC Mapping:**

- `MKT-US2-AC06` — ETF Rankings only displays ETFs within the currently selected sector.
- `MKT-US2-AC07–09` — Supported sort metrics and return periods update ranking order without changing the selected sector.
- `MKT-US2-AC10` — Selecting a ranked ETF opens the matching ETF Detail page.

### Slide 09 — User Story 3 — Research and compare individual ETFs

- **Module / Story:** Market / User Story 3
- **Subtitle:** ETF identity, chart controls and normalized comparison support instrument-level research.
- **Layout:** Three equal columns; one independent iPhone image and one text card per column.

#### Evidence 01 — 01 · ETF Detail and chart

<img src="assets/device-framed/market/mkt-us3-01-etf-detail-header.png" alt="01 · ETF Detail and chart" width="300" />

**Walkthrough copy:** Open a candidate ETF, confirm identity and quote context, switch at least two time ranges, then scrub the chart to update OHLC and volume.

**AC Mapping:**

- `MKT-US3-AC01–02` — ETF Detail and its chart display the selected fund's identity, quote context and price series.
- `MKT-US3-AC03–04` — Supported time ranges reload the chart, and scrubbing updates OHLC and volume for the selected point.

#### Evidence 02 — 02 · View, Overview and News

<img src="assets/device-framed/market/mkt-us3-02-chart-view-panel.png" alt="02 · View, Overview and News" width="300" />

**Walkthrough copy:** Change chart type and one moving average, then check available key stats and ETF-related news metadata.

**AC Mapping:**

- `MKT-US3-AC05–06` — View controls change the enabled chart type or moving-average overlays for the current ETF.
- `MKT-US3-AC07–08` — Overview and News show available ETF statistics and related articles, with unavailable values identified clearly.

#### Evidence 03 — 03 · Compare ETF

<img src="assets/device-framed/market/mkt-us3-03-compare-etf.png" alt="03 · Compare ETF" width="300" />

**Walkthrough copy:** Open Compare ETF from More, retain the current ETF as the first object, select a second ETF and inspect the normalized overlay before returning.

**AC Mapping:**

- `MKT-US3-AC09` — Compare ETF retains the current fund and allows a second fund to be selected.
- `MKT-US3-AC10` — The comparison chart normalizes both price series under the same chart settings.
- `MKT-US3-AC11` — Closing Compare ETF returns to the original ETF Detail context.

### Slide 10 — User Story 4 — Save ETF research results

- **Module / Story:** Market / User Story 4
- **Subtitle:** Watchlist, My Portfolio and Screener preserve research without implying execution.
- **Layout:** Three equal columns; one independent iPhone image and one text card per column.

#### Evidence 01 — 01 · Watchlist

<img src="assets/device-framed/market/mkt-us4-01-watchlist-saved.png" alt="01 · Watchlist" width="300" />

**Walkthrough copy:** Star the ETF, verify it appears in Screener > Watchlist, then remove it and confirm the saved range updates.

**AC Mapping:**

- `MKT-US4-AC01–02` — A successful star action adds the ETF to Watchlist, and removal updates both states consistently.
- `MKT-US4-AC03` — Watchlist saves research objects without creating portfolio holdings or transactions.

#### Evidence 02 — 02 · Add to existing portfolio

<img src="assets/device-framed/market/mkt-us4-02-add-existing-portfolio.png" alt="02 · Add to existing portfolio" width="300" />

**Walkthrough copy:** Inspect price, lots and value, reject a duplicate portfolio, save to an eligible portfolio, then reopen it to confirm the holding.

**AC Mapping:**

- `MKT-US4-AC04–06` — The add sheet shows the current ETF's price, lots and value, while blocking duplicate targets.
- `MKT-US4-AC07–08,13` — An eligible target saves a research holding after reopening without placing a trade.

#### Evidence 03 — 03 · Unified Screener

<img src="assets/device-framed/market/mkt-us4-03-screener-controls.png" alt="03 · Unified Screener" width="300" />

**Walkthrough copy:** Move through Recommended, All and Watchlist, then use search, filter and sort while preserving the selected data scope.

**AC Mapping:**

- `MKT-US4-AC09` — Recommended, All and Watchlist share the same Screener controls and result layout.
- `MKT-US4-AC10–11` — Supported search, filter and sort controls update results using the selected criteria.
- `MKT-US4-AC12` — Search, filter and sort preserve the active Recommended, All or Watchlist scope.

### Slide 11 — 03 Portfolio

- **Module / Story:** Portfolio / Module overview
- **Subtitle:** Five research workflows from templates and saved holdings to analysis and baseline review
- **Layout:** Representative iPhone screenshot on the left; Mermaid source on the right.

#### Representative screenshot

<img src="assets/device-framed/portfolio/port-us1-01-model-portfolio-catalogue.png" alt="03 Portfolio representative screenshot" width="300" />

#### Mermaid source

```mermaid
flowchart LR
  A[Recommended] --> B[Model Portfolio]
  B --> C[Watchlist / Add to My Portfolio]
  A --> D[Recommendation Quiz]
  D --> E[AI Portfolio Recommendation]
  F[My Portfolios] --> G[Create / Edit / Baseline]
  B --> H[Analysis Workspace]
  F --> H
  H --> I[Analysis] --> J[Diagnosis] --> K[Suggestions]
  G --> L[Portfolio Review] --> M[Baseline Analysis] --> N[Adjustment]
```

### Slide 12 — User Story 1 — Discover a Model Portfolio

- **Module / Story:** Portfolio / User Story 1
- **Subtitle:** Catalogue identity, portfolio facts and ETF allocation establish the selected template.
- **Layout:** Three equal columns.

#### Evidence 01 — 01 · Recommended catalogue

<img src="assets/device-framed/portfolio/port-us1-01-model-portfolio-catalogue.png" alt="01 · Recommended catalogue" width="300" />

**Walkthrough copy:** Open Portfolio > Recommended, inspect loaded Model Portfolio cards and their Reference descriptions, then open one selected item.

**AC Mapping:**

- `US1-AC01–03` — Recommended shows backend-loaded cards with portfolio facts, allocation and matching References.
- `US1-AC04–05` — View details opens the selected item after its loading state completes.

#### Evidence 02 — 02 · Model Portfolio detail

<img src="assets/device-framed/portfolio/port-us1-02-model-portfolio-detail.png" alt="02 · Model Portfolio detail" width="300" />

**Walkthrough copy:** Confirm title, return, risk, duration, summary, Reference and allocation groups match the selected catalogue card.

**AC Mapping:**

- `US1-AC06–09` — Detail facts, Reference and ETF groups match the selected catalogue card and current backend data.
- `US1-AC11–12` — An ETF row opens the matching detail, and returning preserves the Model Portfolio state.

#### Evidence 03 — 03 · ETF allocation

<img src="assets/device-framed/portfolio/port-us1-extra-etf-allocation.png" alt="03 · ETF allocation" width="300" />

**Walkthrough copy:** Inspect every ETF row, target weight and available metadata; confirm Total 100% and open one matching ETF detail before returning.

**AC Mapping:**

- `US1-AC10` — ETF rows show identifiers, weights and available metadata, with Total fixed at 100%.

### Slide 13 — User Story 1 — Evaluate the forecast and save for later

- **Module / Story:** Portfolio / User Story 1
- **Subtitle:** Projection evidence is paired with the persistent Watchlist result.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 04 · Projected Asset Growth

<img src="assets/device-framed/portfolio/port-us1-03-projection-backtest.png" alt="04 · Projected Asset Growth" width="300" />

**Walkthrough copy:** Wait for Monte Carlo completion, inspect history and percentile bands, drag and pinch the timeline, select a historical point, generate/hide backtest and keep Partial data coverage visible.

**AC Mapping:**

- `US1-AC13–18` — Loading remains until the forecast is ready; chart interaction stays in range and backtesting uses history only.
- `US1-AC19–22` — Backtest preserves the forecast, coverage and research boundaries.

#### Evidence 02 — 05 · Watchlist result

<img src="assets/device-framed/portfolio/port-us1-04-watchlist-saved.png" alt="05 · Watchlist result" width="300" />

**Walkthrough copy:** Save the selected Model Portfolio, reopen it from Watchlist, remove it and verify the count and final star state remain consistent.

**AC Mapping:**

- `US1-AC23–25` — A successful save fills the star, updates Watchlist and reopens with matching facts.
- `US1-AC26–27` — Removal keeps the list, count, empty state and final star consistent across views.

### Slide 14 — User Story 1 — Edit the configuration before saving

- **Module / Story:** Portfolio / User Story 1
- **Subtitle:** Visual and ETF-list editors preserve one evolving allocation state.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 06 · Visual editor

<img src="assets/device-framed/portfolio/port-us1-05-add-to-portfolio-editor.png" alt="06 · Visual editor" width="300" />

**Walkthrough copy:** Open Add to My Portfolio, change modeled total value and allocation boundaries, and keep all weights non-negative with a 100% total.

**AC Mapping:**

- `US1-AC28` — Add to My Portfolio opens with the selected model, context and default amounts.
- `US1-AC29` — Changing total value recalculates ETF amounts and quantities while preserving normalized weights.
- `US1-AC30–31` — Allocation drags update only affected groups, keep values non-negative and preserve a 100% total.

#### Evidence 02 — 07 · ETF list editor

<img src="assets/device-framed/portfolio/port-us1-extra-list-editor.png" alt="07 · ETF list editor" width="300" />

**Walkthrough copy:** Switch to ETF list, edit shares, return to Visual and enter confirmation without losing the latest values, weights or quantities.

**AC Mapping:**

- `US1-AC32–33` — Visual and List modes convert amounts, weights and shares without losing valid edits.
- `US1-AC34–35` — Confirmation uses the latest edit and shows the target, totals and per-ETF results.

### Slide 15 — User Story 1 — Persist or analyze the edited Model Portfolio

- **Module / Story:** Portfolio / User Story 1
- **Subtitle:** The final step branches to Add as new, Add to existing, or a read-only analysis draft.
- **Layout:** Three equal columns; reused screens are explicitly marked as shared workflow states.

#### Evidence 01 — 08 · Add as new

<img src="assets/device-framed/portfolio/port-us1-05-add-to-portfolio-editor.png" alt="08 · Add as new" width="300" />

**Walkthrough copy:** Choose Add as new, confirm the final edited summary, create one research-only My Portfolio, then reopen it to prove persisted holdings and values.

**AC Mapping:**

- `US1-AC36` — Confirm stays disabled while the name is empty or creation is in progress.
- `US1-AC37–38` — One successful creation appears in My portfolios and preserves its holdings after reopening.
- `US1-AC39–40` — Creation is research-only, triggers no trade and cannot be submitted repeatedly.

#### Evidence 02 — 09 · Add to existing

<img src="assets/device-framed/portfolio/port-us1-extra-list-editor.png" alt="09 · Add to existing" width="300" />

**Walkthrough copy:** Choose an existing target, wait for preview, confirm combined and new positions, then reopen the target to verify the merged result.

**AC Mapping:**

- `US1-AC41–43` — Target facts and ETF changes appear in preview before Confirm becomes available.
- `US1-AC44–46` — Confirmation merges and persists positions, while navigation preserves the last confirmed editing draft.

#### Evidence 03 — 10 · Start analysis hand-off

<img src="assets/device-framed/portfolio/port-us4-01-analysis-holdings.png" alt="10 · Start analysis hand-off" width="300" />

**Walkthrough copy:** Start analysis from the Model Portfolio. Confirm the Analysis Workspace receives the edited working copy and does not expose Apply to My Portfolio for this source.

**AC Mapping:**

- `US1-AC47` — Analysis Workspace opens with the selected model's title, holdings, values and normalized weights.
- `US1-AC48` — Draft edits affect only the working copy and expose no Apply to My Portfolio action.
- `US1-AC49` — Analysis uses the current draft and does not reuse results from another source.

### Slide 16 — User Story 2 — Create a My Portfolio

- **Module / Story:** Portfolio / User Story 2
- **Subtitle:** The saved-portfolio list leads into a validated research-only creation draft.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 01 · My portfolios list

<img src="assets/device-framed/portfolio/port-us2-01-my-portfolios-list.png" alt="01 · My portfolios list" width="300" />

**Walkthrough copy:** Open My portfolios, wait for the saved list, enter New Portfolio, then reopen the created result and confirm its card and values.

**AC Mapping:**

- `US2-AC01` — My portfolios shows a loading state before replacing it with the current saved list.
- `US2-AC07–08` — A new portfolio appears with matching facts and reopens with its saved holdings.
- `US2-AC09` — Creation is clearly identified as research-only and does not execute a transaction.

#### Evidence 02 — 02 · Initial holdings

<img src="assets/device-framed/portfolio/port-us2-02-create-initial-holdings.png" alt="02 · Initial holdings" width="300" />

**Walkthrough copy:** Enter name and base currency, add searchable ETF holdings, edit quantities in the draft and create only when all validation gates pass.

**AC Mapping:**

- `US2-AC02–03` — The form supports available currencies and enables creation only with a valid name and holdings.
- `US2-AC04–05` — ETF search, sort and empty results behave consistently and can restore the full list.
- `US2-AC06` — Initial holdings support quantity controls and deletion while rejecting invalid values.

### Slide 17 — User Story 2 — Inspect and edit saved holdings

- **Module / Story:** Portfolio / User Story 2
- **Subtitle:** Current detail context and the editable holdings screen prove persisted, isolated updates.
- **Layout:** Two-window layout; both blocks use the representative editing state at different narrative focus points.

#### Evidence 01 — 03 · Saved portfolio context

<img src="assets/device-framed/portfolio/port-us2-03-edit-holdings.png" alt="03 · Saved portfolio context" width="300" />

**Walkthrough copy:** Open the saved My Portfolio, confirm header, grouping, positions, current value, allocation and forecast boundaries, then save a Baseline Snapshot.

**AC Mapping:**

- `US2-AC10–12` — Header, holdings and forecast match this saved portfolio rather than another source.
- `US2-AC13` — Position rows show current facts and open the matching ETF.
- `US2-AC14–16` — Saving creates one timestamped snapshot whose detail preserves value, quantities and weights.

#### Evidence 02 — 04 · Holdings maintenance

<img src="assets/device-framed/portfolio/port-us2-03-edit-holdings.png" alt="04 · Holdings maintenance" width="300" />

**Walkthrough copy:** Edit quantities, add one valid ETF, reject duplicates, remove only the intended ticker and reopen the portfolio to prove persistence without changing untouched positions.

**AC Mapping:**

- `US2-AC17–22` — The editor validates quantities, blocks duplicates and persists one new holding.
- `US2-AC23–25` — Only intended positions change; closing unchanged leaves holdings untouched.

### Slide 18 — User Story 2 — Maintain baseline history and remove a portfolio

- **Module / Story:** Portfolio / User Story 2
- **Subtitle:** Historical snapshots remain independently searchable, renameable and removable.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 05 · Baseline snapshots

<img src="assets/device-framed/portfolio/port-us2-04-baseline-history.png" alt="05 · Baseline snapshots" width="300" />

**Walkthrough copy:** Open Baseline snapshots, create exactly one snapshot, search, rename and remove a temporary entry, then reopen the history to verify retained state.

**AC Mapping:**

- `US2-AC26–27` — Each action creates one selectable snapshot, and search filters its saved history.
- `US2-AC28–29` — Rename rejects empty tags, while deletion removes only the selected snapshot.
- `US2-AC30–31` — The retained snapshot preserves its pre-edit holdings and remains correct after reopening.

#### Evidence 02 — 06 · Empty and removal boundaries

<img src="assets/device-framed/portfolio/port-us2-01-my-portfolios-list.png" alt="06 · Empty and removal boundaries" width="300" />

**Walkthrough copy:** Demonstrate the explicit empty-holdings state, then cancel and confirm destructive portfolio removal while proving other portfolios are unaffected.

**AC Mapping:**

- `US2-AC32` — A portfolio with no holdings still opens with an explicit empty state.
- `US2-AC33–34` — Removal requires an irreversible-action confirmation and deletes only the selected portfolio.

### Slide 19 — User Story 3 — Complete the recommendation questionnaire

- **Module / Story:** Portfolio / User Story 3
- **Subtitle:** Four validated answers lead into a clean, non-stale generation state.
- **Layout:** Three equal columns.

#### Evidence 01 — 01 · Questionnaire start

<img src="assets/device-framed/portfolio/port-us3-extra-quiz-start.png" alt="01 · Questionnaire start" width="300" />

**Walkthrough copy:** Open Find Your Ideal Portfolio. Show the four-step structure, supporting option context and the disabled Next gate before selection.

**AC Mapping:**

- `US3-AC01–02` — The questionnaire shows four steps, current progress and contextual single-choice options.
- `US3-AC03` — Next or See recommendation stays disabled until the current question is answered.

#### Evidence 02 — 02 · Answer progress

<img src="assets/device-framed/portfolio/port-us3-01-recommendation-quiz.png" alt="02 · Answer progress" width="300" />

**Walkthrough copy:** Select one option, move forward and backward, retain answers, then later adjust one answer and regenerate from the same questionnaire state.

**AC Mapping:**

- `US3-AC04` — Each question retains one selected answer when moving forward or backward.
- `US3-AC05` — Completing all answers produces a result aligned with the selected risk profile.
- `US3-AC17` — Return to the questionnaire and keep the current answers.

#### Evidence 03 — 03 · Generation progress

<img src="assets/device-framed/portfolio/port-us3-02-generation-progress.png" alt="03 · Generation progress" width="300" />

**Walkthrough copy:** Submit all answers and show four generation stages with pending placeholders; confirm saving stays disabled until the new result is ready.

**AC Mapping:**

- `US3-AC06–07` — Submission immediately starts one visible four-stage recommendation flow.
- `US3-AC08–09` — Pending sections are identified clearly, and saving stays disabled until the result is complete.

### Slide 20 — User Story 3 — Review the recommendation result and build

- **Module / Story:** Portfolio / User Story 3
- **Subtitle:** Generated identity, metrics and build context remain consistent with one run.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 04 · Recommendation result

<img src="assets/device-framed/portfolio/port-us3-03-recommendation-result.png" alt="04 · Recommendation result" width="300" />

**Walkthrough copy:** Confirm generated title, risk level, currency, positions, projection and AI-assisted research-only boundary.

**AC Mapping:**

- `US3-AC10–12` — Result identity, metrics and forecast all reflect the same generated weights and modeled amount.
- `US3-AC18` — The recommendation is consistently marked as AI-assisted, research-only and non-executing.

#### Evidence 02 — 05 · Recommendation build

<img src="assets/device-framed/portfolio/port-us3-extra-recommendation-build.png" alt="05 · Recommendation build" width="300" />

**Walkthrough copy:** Inspect returned metrics, asset mix, screening/optimization summary, as-of date, candidate scope, exclusions and warnings.

**AC Mapping:**

- `US3-AC13` — Recommendation Build shows this run's risk profile, metrics, allocation, scope, date and warnings.

### Slide 21 — User Story 3 — Inspect explanation, constraints and ETF holdings

- **Module / Story:** Portfolio / User Story 3
- **Subtitle:** The explanation and final holdings remain traceable to the same Recommendation Build.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 06 · Explanation and constraints

<img src="assets/device-framed/portfolio/port-us3-extra-recommendation-build-holdings.png" alt="06 · Explanation and constraints" width="300" />

**Walkthrough copy:** Read rendered AI explanation, holdings table, portfolio characteristics and constraints without exposing raw Markdown or overstating the result.

**AC Mapping:**

- `US3-AC14` — AI description markup renders readable structure without exposing raw Markdown.
- `US3-AC15` — Explanation, holdings, characteristics and constraints match the current build.

#### Evidence 02 — 07 · ETF holdings

<img src="assets/device-framed/portfolio/port-us3-extra-recommendation-etf-holdings.png" alt="07 · ETF holdings" width="300" />

**Walkthrough copy:** Check ticker, name, asset class, target weight and progress for every generated ETF; confirm weights total 100% within rounding tolerance.

**AC Mapping:**

- `US3-AC16` — Each ETF row shows identity, asset class and target weight, with totals equal to 100% within rounding.

### Slide 22 — User Story 3 — Save the recommendation

- **Module / Story:** Portfolio / User Story 3
- **Subtitle:** The generated configuration is not persisted until target selection and confirmation complete.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 08 · Target selection

<img src="assets/device-framed/portfolio/port-us3-04-save-recommendation.png" alt="08 · Target selection" width="300" />

**Walkthrough copy:** Open Add to My Portfolio, choose Add as new or an eligible existing target, finish confirmation and reopen the saved target.

**AC Mapping:**

- `US3-AC19` — The add page uses the current recommendation, modeled amount, currency and latest prices.
- `US3-AC21–22` — Confirmation creates a new target or merges quantities into the selected existing portfolio.
- `US3-AC23` — Opening or leaving the add page does not save anything before confirmation.

#### Evidence 02 — 09 · Recommendation editor

<img src="assets/device-framed/portfolio/port-us3-extra-add-to-portfolio-editor.png" alt="09 · Recommendation editor" width="300" />

**Walkthrough copy:** Verify the recommendation uses its modeled amount, currency and latest prices while sharing the same Visual/List editing behavior as User Story 1.

**AC Mapping:**

- `US3-AC20` — Visual and List editing, validation and target choices follow the shared portfolio workflow.

### Slide 23 — User Story 4 — Run portfolio analysis

- **Module / Story:** Portfolio / User Story 4
- **Subtitle:** An editable working draft becomes a traceable analysis result without changing saved holdings.
- **Layout:** Three equal columns.

#### Evidence 01 — 01 · Editable Holdings draft

<img src="assets/device-framed/portfolio/port-us4-01-analysis-holdings.png" alt="01 · Editable Holdings draft" width="300" />

**Walkthrough copy:** Start analysis from My Portfolio, edit the working copy, add/remove ETFs and run analysis only when the draft is valid; do not alter the saved source yet.

**AC Mapping:**

- `US4-AC01–05` — Workspace loads selected holdings; draft edits stay isolated, block duplicates and clear stale results.
- `US4-AC06–07` — Analyze validates the draft, shows one progress flow and opens Analysis.

#### Evidence 02 — 02 · Analysis overview

<img src="assets/device-framed/portfolio/port-us4-02-analysis-overview.png" alt="02 · Analysis overview" width="300" />

**Walkthrough copy:** Wait for completion, inspect current-draft value, positions, HHI, Effective N, diagnostics and Data coverage, then prove stale results clear after a draft change.

**AC Mapping:**

- `US4-AC08–09` — The completed overview shows current draft metrics and identifies unavailable indicators explicitly.
- `US4-AC12–13` — Analysis boundaries stay visible, and results belong only to the current draft and run.

#### Evidence 03 — 03 · Holdings and exposure

<img src="assets/device-framed/portfolio/port-us4-extra-analysis-holdings-exposure.png" alt="03 · Holdings and exposure" width="300" />

**Walkthrough copy:** Scroll the read-only holdings table and switch Sector, Region and Currency between Pie and List without changing the underlying analysis.

**AC Mapping:**

- `US4-AC10` — The read-only Holdings table shows each position's quantity, cost, value and weight.
- `US4-AC11` — Sector, Region and Currency exposures remain consistent between Pie and List views.

### Slide 24 — User Story 4 — Select findings and generate recommendations

- **Module / Story:** Portfolio / User Story 4
- **Subtitle:** Only the diagnosis selected at submission enters the AI-assisted recommendation scope.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 04 · Diagnosis selection

<img src="assets/device-framed/portfolio/port-us4-03-diagnosis-selection.png" alt="04 · Diagnosis selection" width="300" />

**Walkthrough copy:** Review severity, metric and selection state, change the selected findings, verify counts, and show the disabled generate action when zero items are selected.

**AC Mapping:**

- `US4-AC14–16` — Diagnosis items show severity, metrics and selection, with counts matching the returned results.
- `US4-AC17–18` — Generation requires completed analysis and at least one selected diagnosis.

#### Evidence 02 — 05 · Generated scope and considerations

<img src="assets/device-framed/portfolio/port-us4-04-suggested-actions.png" alt="05 · Generated scope and considerations" width="300" />

**Walkthrough copy:** Observe the four progress stages, then verify selected diagnosis scope, AI drafted boundary, research consideration content and excluded findings.

**AC Mapping:**

- `US4-AC19–22` — Suggestions shows four-stage generation and limits AI-drafted results to submitted diagnoses.
- `US4-AC23` — Each consideration presents its observation, rationale, expected impact and research boundary.

### Slide 25 — User Story 4 — Review, edit and apply Suggested actions

- **Module / Story:** Portfolio / User Story 4
- **Subtitle:** My Portfolio results can be applied after validation; Model Portfolio results remain read-only.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 06 · Suggested actions

<img src="assets/device-framed/portfolio/port-us4-04-suggested-actions.png" alt="06 · Suggested actions" width="300" />

**Walkthrough copy:** Inspect feasibility and candidate scope, scroll every Held/New row, edit non-negative targets, reset, apply once, then reopen the portfolio to prove refreshed holdings and invalidated old analysis.

**AC Mapping:**

- `US4-AC24–27` — Preview metrics, rows and candidate scope remain mutually consistent.
- `US4-AC28–30` — Non-negative targets recalculate or reset, and Apply requires a complete feasible scenario.
- `US4-AC31–32` — Apply updates holdings; reopening proves results and clears stale analysis.
- `US4-AC33` — Apply cannot repeat and produces only one portfolio update.

#### Evidence 02 — 07 · Model Portfolio read-only boundary

<img src="assets/device-framed/portfolio/port-us4-01-analysis-holdings.png" alt="07 · Model Portfolio read-only boundary" width="300" />

**Walkthrough copy:** Run the same workflow from a Model Portfolio and confirm the final rows are read-only with no Reset or Apply to My Portfolio action and no saved-portfolio mutation.

**AC Mapping:**

- `US4-AC34–35` — A Model Portfolio draft completes the same analysis while preserving its selected diagnosis scope.
- `US4-AC36–37` — Its Suggested actions are read-only and expose neither Reset nor Apply to My Portfolio.

### Slide 26 — User Story 5 — Select a baseline and inspect drift

- **Module / Story:** Portfolio / User Story 5
- **Subtitle:** Only a changed Baseline Snapshot can drive a review; No changes remains inspectable but not selectable.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 01 · Baseline selection

<img src="assets/device-framed/portfolio/port-us5-01-baseline-selection.png" alt="01 · Baseline selection" width="300" />

**Walkthrough copy:** Open Portfolio Review, distinguish No changes from a reviewable snapshot, inspect saved ETF details and select one changed baseline.

**AC Mapping:**

- `US5-AC01–02` — Baseline lists only this portfolio's saved reference configurations.
- `US5-AC03–06` — No changes remains unselectable for Analysis but still allows ETF detail inspection.
- `US5-AC07–08` — A changed snapshot can be selected and expanded to show saved quantities and weights.

#### Evidence 02 — 02 · Holding drift

<img src="assets/device-framed/portfolio/port-us5-02-baseline-deviation.png" alt="02 · Holding drift" width="300" />

**Walkthrough copy:** Review current/baseline summary and the drift table, including added/removed ETFs, signed deviations and the enabled Review allocation changes action.

**AC Mapping:**

- `US5-AC09–10` — The deviation table includes added and removed ETFs with signed, significance-sorted changes.
- `US5-AC11` — The summary identifies the baseline, date and total absolute deviation.

### Slide 27 — User Story 5 — Explain the baseline deviation

- **Module / Story:** Portfolio / User Story 5
- **Subtitle:** Status, allocation and quantity views describe a deterministic snapshot comparison rather than AI advice.
- **Layout:** Three equal columns.

#### Evidence 01 — 03 · Review Analysis

<img src="assets/device-framed/portfolio/port-us5-03-review-analysis.png" alt="03 · Review Analysis" width="300" />

**Walkthrough copy:** Confirm the selected baseline identity, drift status, current/baseline values, largest move and driver summary; keep the comparison explicitly non-AI.

**AC Mapping:**

- `US5-AC12–14` — Analysis identifies the baseline, drift status and largest increase or decrease driving the result.
- `US5-AC18` — Baseline comparison is deterministic and displays no AI-generated or recommendation labels.

#### Evidence 02 — 04 · Allocation movements

<img src="assets/device-framed/portfolio/port-us5-extra-allocation-movements.png" alt="04 · Allocation movements" width="300" />

**Walkthrough copy:** Read Industry allocation changes and ETF movement detail with signed weights and plain-language reasons.

**AC Mapping:**

- `US5-AC15–16` — Industry and ETF movement views compare baseline and current weights with signed changes and reasons.

#### Evidence 03 — 05 · Quantity changes

<img src="assets/device-framed/portfolio/port-us5-extra-quantity-changes.png" alt="05 · Quantity changes" width="300" />

**Walkthrough copy:** Inspect baseline, current and target quantities plus unit and value differences for material ETF rows.

**AC Mapping:**

- `US5-AC17` — Quantity changes shows baseline, current and target quantities with unit and value differences.

### Slide 28 — User Story 5 — Adjust and apply the baseline scenario

- **Module / Story:** Portfolio / User Story 5
- **Subtitle:** A loaded target scenario can be edited, reset and applied once to My Portfolio.
- **Layout:** Two-window left/right layout.

#### Evidence 01 — 06 · Baseline-based suggestions

<img src="assets/device-framed/portfolio/port-us5-04-adjustment-suggestions.png" alt="06 · Baseline-based suggestions" width="300" />

**Walkthrough copy:** Wait for the selected baseline preview, inspect scope and target rows, edit non-negative shares, reset and enable Apply only after the scenario is complete.

**AC Mapping:**

- `US5-AC19–20` — Suggestions waits for the current preview and identifies the selected baseline and row scope.
- `US5-AC21–22` — Each row compares current, baseline and calculated target holdings.
- `US5-AC23–25` — Non-negative edits recalculate or reset, and Apply waits for a complete target.

#### Evidence 02 — 07 · Applied result

<img src="assets/device-framed/portfolio/port-us5-02-baseline-deviation.png" alt="07 · Applied result" width="300" />

**Walkthrough copy:** Apply once, return to refreshed My Portfolio details, reopen the review and confirm the final target quantities and updated comparison persist.

**AC Mapping:**

- `US5-AC26–27` — A successful Apply refreshes target holdings, and reopening confirms shares and comparison.
- `US5-AC28` — Apply cannot be triggered repeatedly while the request is in progress.

### Slide 29 — 04 Admin

- **Module / Story:** Admin / Module overview
- **Subtitle:** Operational visibility plus a Web Admin → shared backend → iOS verification loop
- **Layout:** Representative desktop screenshot on the left; Mermaid source on the right.

#### Representative screenshot

<img src="assets/admin/adm-us1-01-dashboard.png" alt="04 Admin representative screenshot" width="780" />

#### Mermaid source

```mermaid
flowchart LR
  A[Dashboard] --> B[ETF Catalogue]
  B --> C[Add / Deactivate ETF]
  C --> D[Refresh iOS Search]
  A --> E[Model Portfolios]
  E --> F[Edit / Publish Template]
  F --> G[Refresh iOS Portfolio]
  A --> H[Users]
  A --> I[User Portfolios]
```

### Slide 30 — User Story 1 — Monitor the platform and inspect the ETF catalogue

- **Module / Story:** Admin / User Story 1
- **Subtitle:** Dashboard metrics lead into searchable, filterable ETF maintenance data.
- **Layout:** Two wide desktop screenshots with text below each image.

#### Evidence 01 — 01 · Dashboard

<img src="assets/admin/adm-us1-01-dashboard.png" alt="01 · Dashboard" width="780" />

**Walkthrough copy:** Open Dashboard and explain the current users, ETF catalogue, portfolios, structured notes and ETF tier distribution returned by the shared backend.

**AC Mapping:**

- `ADM-US1-AC01` — Dashboard summarizes the current backend's users, ETFs, portfolios, notes and tier distribution.

#### Evidence 02 — 02 · ETF Catalogue

<img src="assets/admin/adm-us1-extra-etf-catalogue.png" alt="02 · ETF Catalogue" width="780" />

**Walkthrough copy:** Search by symbol/name/issuer, apply tier or asset-class filters, and inspect the fields required to maintain an ETF record.

**AC Mapping:**

- `ADM-US1-AC02` — ETF Catalogue supports symbol, name or issuer search plus available tier and asset-class filters.
- `ADM-US1-AC03` — ETF records expose the exchange, currency, classification, issuer and expense fields needed for maintenance.

### Slide 31 — User Story 1 — Add or deactivate an ETF and verify it on iOS

- **Module / Story:** Admin / User Story 1
- **Subtitle:** The acceptance result is the refreshed client state, not the Admin submission toast.
- **Layout:** Admin screenshot on the left; paired before/after iOS screenshots on the right when captured.

#### Evidence 01 — 03 · Add by Ticker validation

<img src="assets/admin/adm-us1-extra-add-by-ticker-validation.png" alt="03 · Add by Ticker validation" width="780" />

**Walkthrough copy:** Use Add by Ticker or Add ETF manually, show duplicate validation and submit only one valid test record; repeat the process for an active/inactive state change.

**AC Mapping:**

- `ADM-US1-AC04` — Administrators can create one valid ETF through Add by Ticker or manual entry.
- `ADM-US1-AC07` — Add or deactivate requests cannot repeat in progress or create duplicates and conflicts.

#### Evidence 02 — 04 · iOS before/after verification

<img src="assets/admin/adm-us1-04-ios-etf-before.png" alt="04 · iOS ETF search before Admin creation — no matching M2EVD714 result" width="360" />

<img src="assets/admin/adm-us1-04-ios-etf-after.png" alt="04 · iOS ETF search after refresh — M2EVD714 appears once" width="360" />

**Walkthrough copy:** Return to the simulator after each Admin mutation, refresh or reopen the ETF search/list and prove the client universe changed exactly once.

**AC Mapping:**

- `ADM-US1-AC05–06` — After refresh, a created ETF appears on iOS and a deactivated ETF leaves the active universe.
- `ADM-US1-AC16` — Client-facing changes require refreshed iOS evidence; an Admin Toast alone is insufficient.

### Slide 32 — User Story 1 — Maintain and verify Model Portfolios

- **Module / Story:** Admin / User Story 1
- **Subtitle:** A published template is edited in Admin and then reloaded from the iOS catalogue.
- **Layout:** Two wide Admin screenshots plus one smaller iOS after-state when captured.

#### Evidence 01 — 05 · Model Portfolios list

<img src="assets/admin/adm-us1-extra-model-portfolios-list.png" alt="05 · Model Portfolios list" width="780" />

**Walkthrough copy:** Inspect template key, display order, title, risk band, return range, horizon, summary, reference, status and allocation entry points.

**AC Mapping:**

- `ADM-US1-AC08` — Model Portfolios maintains template identity, order, facts, status, Reference and ETF allocations.

#### Evidence 02 — 06 · Model Portfolio editor

<img src="assets/admin/adm-us1-05-model-portfolio-edit.png" alt="06 · Model Portfolio editor" width="780" />

**Walkthrough copy:** Edit one recognizable field, keep allocations at Total 100%, save as published, then verify draft/hidden visibility boundaries with a dedicated test template.

**AC Mapping:**

- `ADM-US1-AC09` — A template can be saved or published only when its allocation totals 100%.
- `ADM-US1-AC10–12` — iOS shows the current published configuration after refresh and excludes draft or hidden templates.

#### Evidence 03 — 07 · iOS published-template verification

<img src="assets/admin/adm-us1-07-ios-model-portfolio-published.png" alt="07 · Published M2 Acceptance Balanced Portfolio after iOS refresh" width="420" />

**Walkthrough copy:** Reopen the selected Model Portfolio on iOS and compare the visible data with the saved Admin configuration.

### Slide 33 — User Story 1 — Review protected operations data

- **Module / Story:** Admin / User Story 1
- **Subtitle:** Users and User Portfolios support visibility and troubleshooting without mutating holdings.
- **Layout:** Two wide desktop screenshots with text below each image.

#### Evidence 01 — 08 · Users

<img src="assets/admin/adm-us1-extra-users-redacted.png" alt="08 · Users" width="780" />

**Walkthrough copy:** Use search and role/status filters, inspect verification, account, risk, last-login and created metadata, and keep identifiable data redacted.

**AC Mapping:**

- `ADM-US1-AC13` — Users supports search and role or status filters with current account metadata.
- `ADM-US1-AC17` — Videos and screenshots use test data or redact emails, owners and other personal information.

#### Evidence 02 — 09 · User Portfolios

<img src="assets/admin/adm-us1-07-user-portfolios.png" alt="09 · User Portfolios" width="780" />

**Walkthrough copy:** Inspect owner, currency, objective, horizon, holdings count and created time; explain that this story is read-only for ordinary user holdings.

**AC Mapping:**

- `ADM-US1-AC14` — User Portfolios shows owner, currency, objective, horizon, holdings count and creation time.
- `ADM-US1-AC15` — Operations pages support visibility and troubleshooting without modifying ordinary user holdings.

### Slide 34 — Acceptance Traceability Across Modules

- **Module / Story:** Back matter / —
- **Subtitle:** One index connects documentation, slide evidence and the corresponding User Story video.
- **Layout:** Module-to-deliverable relationship diagram; no additional screenshot required.
- **On-slide copy:**
  - Every Story page follows walkthrough order and uses the exact AC IDs from the English source documents.
  - Each still image proves a representative UI state; dynamic loading, scrubbing, submission and cross-platform refresh remain continuous video evidence.
  - Admin changes flow through the shared backend and are accepted only after the iOS result is refreshed and observed.
  - Research-only, delayed-data, partial-data and privacy boundaries remain visible wherever applicable.

### Slide 35 — Acceptance Review and Q&A

- **Module / Story:** Back matter / —
- **Subtitle:** Four modules · eleven User Stories · three complementary deliverables
- **Layout:** Minimal closing page using the original template.
- **On-slide copy:**
  - Confirm Story-level walkthrough completeness.
  - Confirm AC mapping and any evidence that must remain video-only.
  - Confirm Admin-to-iOS refresh evidence is complete and traceable to dedicated test data.

## 覆盖校验

- Source AC total: **248**
- Mapped AC total: **248**
- Missing AC IDs: **0**
- Planned slides: **35**
- Explicit screenshot gaps: **0**. The ETF before/after and published Model Portfolio iOS states are now included.

## Source of truth

- [Login / Register English document](../login-register.en.md)
- [Market English document](../market.en.md)
- [Portfolio English document](../portfolio.en.md)
- [Admin English document](../admin.en.md)
