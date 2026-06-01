# Sunwah Fintech iOS Prototype — Layered PPT Outline

> Purpose: manual-review outline for a delivery-level PowerPoint.  
> Final PPT language: English only.  
> Source: `docs/prd/Sunwah-Fintech-PRD-en.md`.  
> Principle: keep the structure explicit and layered. Each module follows the same four-part pattern: functional overview, page introduction, user stories, and acceptance criteria.

---

## Layer 0 — Deck Map

```text
Deck
├─ Layer 1 — Opening
│  ├─ 01. Cover
│  └─ 02. Table of Contents
│
├─ Layer 2 — Product Foundation
│  ├─ 03. Product Overview
│  ├─ 04. Overall Architecture
│  └─ 05. Page Structure
│
├─ Layer 3 — Core Modules
│  ├─ 06. Section Divider — Core Modules
│  │
│  ├─ Module 1 — Market Intelligence
│  │  ├─ 07. Functional Overview
│  │  ├─ 08. Page Introduction 1 — Dashboard & System States
│  │  ├─ 09. Page Introduction 2 — Screener & Filter States
│  │  ├─ 10. Page Introduction 3 — ETF Detail & Compare
│  │  ├─ 11. User Stories
│  │  └─ 12. Acceptance Criteria
│  │
│  ├─ Module 2 — Portfolio Intelligence
│  │  ├─ 13. Functional Overview
│  │  ├─ 14. Page Introduction 1 — Input & Analysis
│  │  ├─ 15. Page Introduction 2 — Recommendations & History
│  │  ├─ 16. User Stories
│  │  └─ 17. Acceptance Criteria
│  │
│  ├─ Module 3 — AI Advisory
│  │  ├─ 18. Functional Overview
│  │  ├─ 19. Page Introduction 1 — Chat & Structured Suggestions
│  │  ├─ 20. Page Introduction 2 — Explanation, History & Custom Mode
│  │  ├─ 21. User Stories
│  │  └─ 22. Acceptance Criteria
│  │
│  └─ Module 4 — Structured Products
│     ├─ 23. Functional Overview
│     ├─ 24. Page Introduction 1 — Discovery & Detail
│     ├─ 25. Page Introduction 2 — Scenario, Pricing & Compare
│     ├─ 26. Page Introduction 3 — Admin Upload & Extraction
│     ├─ 27. User Stories
│     └─ 28. Acceptance Criteria
│
├─ Layer 4 — Non-Functional Design
│  ├─ 29. Section Divider — Non-Functional Design
│  ├─ 30. Security, Privacy & Access Control
│  ├─ 31. Performance, Compatibility & Accessibility
│  └─ 32. Compliance & Observability
│
└─ Layer 5 — Closing
   └─ 33. Review Focus / Next Steps
```

**Recommended main deck length:** 33 slides.  
This length is intentional because each of the four modules is expanded into the requested four-part structure. If a shorter executive version is needed later, keep Layer 1, Layer 2, each module’s Functional Overview, each module’s Acceptance Criteria, and Layer 4.

---

# Layer 1 — Opening

## Slide 01 — Cover

**Title**  
Sunwah Fintech iOS Prototype

**Subtitle**  
Product Structure, Core Modules, User Journeys, and Delivery Validation

**Slide role**  
Position the deck as a delivery review document, not a marketing brochure.

**Content**

- Project name
- Prototype delivery review
- Version / date if needed

---

## Slide 02 — Table of Contents

**Title**  
Presentation Structure

**Slide role**  
Make the deck layers clear before entering details.

**Content**

1. **Product Foundation**  
   Product overview, architecture, and page structure.
2. **Core Modules**  
   Market Intelligence, Portfolio Intelligence, AI Advisory, and Structured Products.
3. **Non-Functional Design**  
   Security, access control, performance, compatibility, accessibility, compliance, and observability.
4. **Review Focus**  
   Key points for manual review and next-step confirmation.

---

# Layer 2 — Product Foundation

## Slide 03 — Product Overview

**Title**  
The Product Defines an Investment Intelligence and Data-Maintenance Prototype, Not a Trading Flow

**Slide role**  
Explain the product positioning, prototype loop, User/Admin split, pilot goals, and explicit boundaries.

### 03.1 Product Positioning

An iOS investment intelligence assistant for institutions and high-net-worth investors.

### 03.2 Core Prototype Loop

Market intelligence → product browsing and comparison → portfolio diagnosis → Assistant explanations and suggestions → decision support.

### 03.3 User / Admin Split

**User:** browses markets, builds portfolios, uses AI Advisory, reviews structured product information, and manages profile settings.

**Admin:** maintains ETF and structured product data so platform content remains complete and auditable.

### 03.4 Prototype Deliverable

A single-page interactive web prototype for reviewing:

- Page structure
- Module boundaries
- User journeys
- Interaction states

### 03.5 Pilot Goals

The prototype supports:

- Login
- Browsing across the four core modules
- Simulated User / Admin permissions
- Core loading / error / empty / drawer / sheet states
- Admin ETF configuration and structured product configuration paths

### 03.6 Product Boundaries

- No trading execution
- No buy / sell / order placement flow
- No guaranteed return claims
- No regulated or licensed investment advice
- No Level II / tick-by-tick market data
- No real order placement
- No real PDF OCR services
- No production Web / Android clients

### 03.7 Optional If Space Allows

- Prototype validates module structure, role boundaries, and interaction logic before production implementation.
- Admin upload and extraction flows are prototype states for data maintenance review, not production OCR services.
- The main deliverable is reviewable prototype coverage, not a live trading, regulated advice, or production data platform.

---

## Slide 04 — Overall Architecture

**Title**  
The Architecture Connects User Access, Core Product Modules, AI Support, and Admin Data Maintenance

**Slide role**  
Show the system structure using the PRD architecture as the base, with unified deck styling.

### 04.1 Access Layer

- Login
- User role
- Admin role
- Profile and settings

### 04.2 User-Facing Product Layer

- Market Intelligence
- Portfolio Intelligence
- AI Advisory
- Structured Products

### 04.3 Data / Intelligence Layer

- ETF and market data
- Portfolio holdings and exposure metrics
- Structured product terms and payoff rules
- AI-generated explanation and simulated extraction

### 04.4 Admin Maintenance Layer

- Add ETF by ID
- Upload structured product PDF
- Review extracted fields
- Publish maintained data to the platform

### 04.5 Guardrail Layer

- Delayed-data disclosure
- Non-investment-advice disclaimer
- No trading execution boundary
- Admin-only access for data maintenance

---

## Slide 05 — Page Structure

**Title**  
The Page Structure Shows Entry Points, Page Tree, and Module Directory

**Slide role**  
Summarize PRD Chapter 3: entry points, page tree, and page directory. Keep this page structural only; detailed screen explanations are handled inside each module section.

### 05.1 Entry Points and Page Tree

- Login
- Auth Error
- Network Error
- Page Navigator Left Panel
- Page Node Diagram

### 05.2 Page Directory as Tree Structure

```text
Login
├─ Market Intelligence
│  ├─ Market Dashboard
│  │  ├─ Daily Overview
│  │  ├─ Sector Themes
│  │  ├─ All ETFs
│  │  └─ Watchlist
│  ├─ ETF Detail
│  └─ ETF Compare
├─ Portfolio Builder
│  ├─ Input Holdings
│  ├─ Draft Portfolio
│  ├─ Portfolio Analysis
│  └─ AI Suggestions
├─ AI Advisory
│  ├─ Chat Interface
│  ├─ Structured Suggestions / Explanation Drawer
│  └─ Conversations
├─ Structured Products
│  ├─ Product Discovery
│  ├─ Product Detail
│  │  ├─ Overview
│  │  ├─ Performance
│  │  ├─ Note Events
│  │  └─ Documents
│  ├─ Product Compare
│  └─ Admin Panel
└─ Profile & Settings
   ├─ Profile
   ├─ Language / Legal
   ├─ Admin Tools
   └─ Sign Out
```

### 05.3 Short Explanation

This page should only help reviewers understand where each prototype state sits in the page tree. It should not duplicate the module-level page introduction slides.

---

# Layer 3 — Core Modules

## Slide 06 — Section Divider: Core Modules

**Title**  
Core Modules

**Subtitle**  
Each module is reviewed through functional scope, page coverage, user stories, and acceptance criteria.

**Modules**

1. Market Intelligence
2. Portfolio Intelligence
3. AI Advisory
4. Structured Products

---

# Module 1 — Market Intelligence

## Slide 07 — Market Intelligence: Functional Overview

**Title**  
Market Intelligence Supports ETF Discovery, Research Detail, Watchlist, and Comparison

**Slide role**  
Summarize all functional capabilities listed in the PRD for this module.

### 07.1 ETF Market Overview

- Uses ETF / index delayed quotes
- Shows market breadth, volume, Rising / Flat / Falling, return distribution, and ETF rankings
- Boundary: no real-time trading flow

### 07.2 Sector Themes

- Uses ETF basket and sector mapping
- Shows default sectors, daily hot sectors, and sector detail
- Boundary: research entry only, not a recommendation

### 07.3 Market Indices

- Covers Hang Seng, HS Tech, S&P 500, and other index data
- Shows index cards and percentage changes
- Boundary: prototype uses simulated or delayed data

### 07.4 ETF Screener

- Supports search term, category, region, sector, issuer, currency, and sorting
- Outputs ETF list, active filter badges, and empty state
- Boundary: no Level II data

### 07.5 My Watchlist

- Uses user-starred ETFs
- Shows watchlist list or empty state
- Boundary: research watch only, no trading alert

### 07.6 ETF Detail

- Uses ETF symbol
- Shows price chart, risk metrics, classification, news, and AI analysis entry
- Boundary: HKEX delayed disclosure

### 07.7 ETF Compare

- Compares two ETFs
- Shows normalized price curve and metric comparison
- Boundary: prototype limits comparison to two ETFs

### 07.8 Admin ETF Maintenance

- Admin enters ticker ID
- System fetches preview and adds ETF to platform
- Boundary: Admin only

---

## Slide 08 — Market Intelligence: Page Introduction 1 — Dashboard & System States

**Title**  
Market Dashboard Establishes the ETF Research Starting Point and Handles Loading / Error States

**Slide role**  
Introduce the dashboard and core system states.

### 08.1 Market Dashboard

**Screen:** `04-market-dashboard.png`

Title: Market Intelligence / ETF intelligence & insights.

Includes:

- ETF Market Overview
- Sectors
- Daily Hot
- Market Indices
- Watchlist Preview
- All ETFs entry

### 08.2 Loading Skeleton

**Screen:** `05-market-dashboard-skeleton.png`

Shows skeleton placeholders for:

- Cards
- Lists
- Quote regions
- Dashboard data areas

### 08.3 Load Error

**Screen:** `06-market-dashboard-load-error.png`

Shows:

- Recoverable error message
- Retry action
- Clear indication that data loading failed

---

## Slide 09 — Market Intelligence: Page Introduction 2 — Screener & Filter States

**Title**  
The ETF Screener Helps Users Move from Broad Interest to a Specific ETF Candidate

**Slide role**  
Introduce search, filtering, sorting, and empty states.

### 09.1 All ETFs Screener

**Screen:** `07-all-etfs-screener.png`

Includes:

- Search box
- ETF count
- Filter button
- ETF list
- Symbol, name, theme tags, price / change, watchlist star
- Admin-only Add ETF entry when logged in as Admin

### 09.2 Filter & Sort Bottom Sheet

**Screen:** `08-all-etfs-filter-sort-sheet.png`

Supports:

- Sort
- Asset Class
- Region
- Sector
- Issuer
- Currency
- Active filter count badge

### 09.3 Screener Empty State

**Screen:** `09-all-etfs-empty-state.png`

Shows:

- No matching ETFs message
- Clear filters action

---

## Slide 10 — Market Intelligence: Page Introduction 3 — ETF Detail & Compare

**Title**  
ETF Detail and Compare Pages Support Focused Research Before Decision Support

**Slide role**  
Introduce detail, picker, and comparison pages.

### 10.1 ETF Detail

**Screen:** `10-etf-detail-overview.png`

Includes:

- ETF header
- Price and percentage change
- Time-range chart
- Watchlist toggle
- Quick Compare
- Overview / News tabs
- Risk metrics
- Classification
- News summaries

### 10.2 Compare Picker

**Screen:** `11-etf-detail-compare-picker.png`

Supports:

- Search for second ETF
- Select comparison target
- Continue into ETF Compare

### 10.3 ETF Compare

**Screen:** `12-etf-compare.png`

Includes:

- Dual ETF header cards
- Normalized price curve
- Metric comparison across return, risk, fee, and related attributes

---

## Slide 11 — Market Intelligence: User Stories

**Title**  
Market User Stories Cover ETF Browsing, Filtering, Comparison, and Admin Maintenance

**Slide role**  
List the market stories one by one with User / Admin distinction.

### 11.1 M-1 — Browse ETF Detail

**Persona:** User  
**Need:** Enter ETF detail from Watchlist Preview, sector themes, or watchlist entries; view candlestick chart, risk metrics, AI score, and add to watchlist.  
**Value:** Quickly obtain complete research context for an ETF of interest.

### 11.2 M-2 — Search and Filter ETFs

**Persona:** User  
**Need:** Use keyword matching and filters to find a target ETF and open detail.  
**Value:** Convert a fuzzy research need into a concrete ETF candidate.

### 11.3 M-3 — Compare ETFs

**Persona:** User  
**Need:** Tap Compare on ETF detail, choose a second ETF, and compare performance, fees, risk, and other metrics.  
**Value:** Support product selection decisions.

### 11.4 M-4 — Maintain ETF List

**Persona:** Admin  
**Need:** Use Add ETF by ID to add a new ETF by ticker and maintain the product universe searchable from Screener.  
**Value:** Keep user-facing ETF coverage complete and traceable.

---

## Slide 12 — Market Intelligence: Acceptance Criteria

**Title**  
Market Acceptance Criteria Validate ETF Discovery, Detail, Compare, Admin Access, and Data Disclosure

**Slide role**  
Summarize major acceptance items for the module.

### 12.1 UI Acceptance

- Dashboard shows ETF market overview, sectors, daily hot themes, market indices, watchlist preview, and All ETFs entry.
- Dashboard shows skeleton loading and retryable error state.
- Empty filter results show No matching ETFs and Clear filters.
- ETF detail shows chart, Overview / News tabs, watchlist toggle, and Quick Compare.

### 12.2 Flow Acceptance

- User can enter ETF detail from watchlist preview, sector cards, or daily hot items.
- User can open Compare from ETF detail, select a second ETF, and enter ETF Compare.
- Admin can access Add ETF by ID; normal users cannot see or access this entry.

### 12.3 Data Acceptance

- ETF filters update results and count statistics in real time.
- ETF Compare shows normalized price curve and aligned metric comparison.

### 12.4 Compliance Acceptance

- Market pages show delayed-data disclaimer, such as HKEX data delayed 15 minutes.

---

# Module 2 — Portfolio Intelligence

## Slide 13 — Portfolio Intelligence: Functional Overview

**Title**  
Portfolio Intelligence Converts Holdings Input into Diagnosis and Explainable Recommendations

**Slide role**  
Summarize all portfolio stages and diagnosis logic.

### 13.1 Input

User can:

- Upload photos
- Upload documents
- Paste text
- Add ETF
- Add structured product
- Apply template

System outputs Draft Portfolio with:

- Symbol
- Quantity
- Cost
- Market value
- Weight
- P&L
- Currency

### 13.2 Review

User taps Review holdings.  
System shows readable draft holdings list, total market value, weight, and P&L summary.

### 13.3 Analyze

User taps Analyze draft portfolio.  
System shows:

- Four-step checklist
- Score cards
- HHI
- Effective N
- Exposure charts
- Diagnosis Issues

### 13.4 Recommend

User taps Generate Recommendations.  
System shows:

- AI Portfolio Recommendations
- Selected diagnosis scope
- Before / After optimisation
- Concrete actions
- Rationale
- Impact

### 13.5 History

User opens Portfolio History Drawer.  
System shows saved snapshots with date, total value, and holdings summary.

### 13.6 Diagnosis Trigger Rules

- HHI > 0.25 → high concentration risk
- 0.15 < HHI <= 0.25 → moderate concentration
- Effective N < 3 → insufficient diversification
- HK / China > 70% → geographic concentration
- HKD > 70% → FX concentration
- Tech > 35% → technology sector overweight
- Fixed Income < 15% → insufficient defensive allocation

---

## Slide 14 — Portfolio Intelligence: Page Introduction 1 — Input & Analysis

**Title**  
Portfolio Input and Analysis Turn Mixed Holdings into Structured Risk Signals

**Slide role**  
Introduce holdings input and analysis pages.

### 14.1 Start with What You Have

**Screen:** `13-portfolio-input-holdings.png`

Includes:

- Photos / Document upload entry
- Add ETF
- Add Structured Product
- Text paste area
- Template examples
- Draft Portfolio
- Review holdings button
- Analyze draft portfolio button

### 14.2 Portfolio Analysis

**Screen:** `14-portfolio-analysis.png`

Includes:

- Four-step checklist
- Score cards
- HHI / Effective N
- Exposures
- Diagnosis Issues

---

## Slide 15 — Portfolio Intelligence: Page Introduction 2 — Recommendations & History

**Title**  
Recommendation and History Pages Keep Portfolio Advice Explainable and Reviewable

**Slide role**  
Introduce recommendation output and historical review.

### 15.1 AI Portfolio Recommendations

**Screen:** `15-portfolio-ai-recommendations.png`

Includes:

- Selected diagnosis scope
- Before / After Optimisation
- Concrete actions
- Rationale
- Impact
- Compliance disclaimer

### 15.2 Portfolio History / Saved Snapshots

**Screen:** `16-portfolio-history.png`

Includes:

- Left drawer
- Historical analysis snapshots
- Restore / compare past portfolio states

---

## Slide 16 — Portfolio Intelligence: User Stories

**Title**  
Portfolio User Stories Cover Diagnosis, Recommendation Scope, and Historical Review

**Slide role**  
List the portfolio stories one by one.

### 16.1 P-1 — Input Holdings → Run Portfolio Diagnosis → Get Rebalancing Suggestions

**Persona:** User  
**Need:** Input holdings either by selecting ETFs / structured products or by uploading text / files / images for AI parsing; run analysis, review scores and Diagnosis Issues, choose which diagnoses to accept or exclude, and receive AI rebalancing suggestions with Before / After comparison.  
**Value:** Create explainable portfolio risk context and receive personalized rebalancing suggestions.

### 16.2 P-2 — Review Historical Portfolio Analyses

**Persona:** User  
**Need:** Open History Drawer, browse historical analysis snapshots, and restore a snapshot to the current Draft Portfolio.  
**Value:** Support review and comparison across portfolio states over time.

---

## Slide 17 — Portfolio Intelligence: Acceptance Criteria

**Title**  
Portfolio Acceptance Criteria Validate Input Methods, Diagnosis Metrics, Recommendation Output, and Disclaimers

**Slide role**  
Summarize major acceptance items for the module.

### 17.1 Flow Acceptance

- Portfolio input provides photo upload, document upload, text paste, and manual ETF / structured product add.
- User can trigger analysis after entering holdings.
- Analysis process shows a multi-step checklist with progress.
- User can toggle individual diagnosis issues before generating recommendations.
- User can open history drawer, browse snapshots, and restore a previous analysis.

### 17.2 Data Acceptance

- Draft Portfolio shows each holding's symbol, quantity, cost, market value, weight, P&L, and currency.
- Analysis results show HHI, Effective N, sector / currency / region exposures, and selectable diagnosis issues with severity.
- AI recommendations show before / after comparison plus each action's symbol, target weight, rationale, and expected impact.

### 17.3 Compliance Acceptance

- Portfolio analysis and recommendation pages show non-investment-advice disclaimer.

---

# Module 3 — AI Advisory

## Slide 18 — AI Advisory: Functional Overview

**Title**  
AI Advisory Provides Mode-Based Research Support with Context Control and Explanation Traceability

**Slide role**  
Summarize all AI Advisory capabilities listed in the PRD.

### 18.1 Mode-Based Chat

- Inputs: Value focus / Income focus plus user question
- Outputs: Text answer or structured suggestion card
- Trigger examples: value, income, HHI

### 18.2 Portfolio Context

- User can turn Portfolio Context on or off
- Current portfolio context is used in relevant answers
- Toggle is highlighted and affects portfolio-related questions

### 18.3 Attachment Analysis

- Inputs: image, PDF, or report
- Outputs: attachment preview chip plus simulated file summary / Q&A
- Boundary: prototype simulates file reading

### 18.4 Explainability Drawer

Shows:

- Why this suggestion appeared
- What prompted this
- Data considered
- Assistant interpretation
- Limits to this explanation

### 18.5 Conversations

- Conversation list
- Restore conversation
- Delete conversation
- New conversation

### 18.6 Custom Mode

- Create from prompt or guided survey
- New mode appears as a mode pill
- Supports custom investment goals, constraints, and risk preferences

---

## Slide 19 — AI Advisory: Page Introduction 1 — Chat & Structured Suggestions

**Title**  
The Assistant Chat Combines Advisory Modes, Portfolio Context, Attachments, and Structured Outputs

**Slide role**  
Introduce the main chat page and structured suggestion result.

### 19.1 Advisory Assistant Chat

**Screen:** `17-ai-advisory-chat.png`

Includes:

- History button
- New conversation button
- Value focus / Income focus modes
- Custom mode entry
- Sample questions
- Portfolio Context
- Attachments
- Input box

### 19.2 Structured Suggestions

**Screen:** `18-ai-advisory-suggestions.png`

Appears after value / income / HHI keywords are triggered.

Includes:

- Structured rebalancing analysis
- Suggested actions

---

## Slide 20 — AI Advisory: Page Introduction 2 — Explanation, History & Custom Mode

**Title**  
Explanation, History, and Custom Mode Pages Make AI Interaction Traceable and Personalizable

**Slide role**  
Introduce assistant support surfaces beyond the main chat.

### 20.1 Explanation Drawer

**Screen:** `19-ai-explanation-drawer.png`

Includes:

- Why this suggestion appeared
- What prompted this
- Data considered
- Assistant interpretation
- Limits to this explanation

### 20.2 Conversations Drawer

**Screen:** `20-ai-history-drawer.png`

Includes:

- Historical conversations
- Restore conversation
- Delete conversation
- New conversation

### 20.3 Create Custom Mode

**Screen:** `21-ai-create-custom-mode.png`

Supports:

- Prompt-based custom mode
- Guided survey-based custom mode
- Saved custom mode pill

---

## Slide 21 — AI Advisory: User Stories

**Title**  
AI Advisory User Stories Cover Asking, Restoring Context, and Personalizing Modes

**Slide role**  
List the AI Advisory stories one by one.

### 21.1 A-1 — Ask Questions through Chat

**Persona:** User  
**Need:** Choose Value / Income / Custom mode, configure Portfolio Context or attachment tools, enter a question, and receive structured suggestions plus detailed explanations.  
**Value:** Obtain traceable research support under different investment preferences, with follow-up questions and context continuity.

### 21.2 A-2 — Review Conversation History

**Persona:** User  
**Need:** Open History Drawer, browse past conversations, and restore a conversation into the current chat.  
**Value:** Support review and continuation of prior advisory context.

### 21.3 A-3 — Create Custom Mode

**Persona:** User  
**Need:** Tap + to create a custom mode by writing a prompt or completing a guided survey covering horizon, risk preference, and return objective; save it to the Mode list.  
**Value:** Let users tailor AI adviser behavior to personal investment needs.

---

## Slide 22 — AI Advisory: Acceptance Criteria

**Title**  
AI Advisory Acceptance Criteria Validate Chat Behavior, Context Control, Explainability, History, and Guardrails

**Slide role**  
Summarize major acceptance items for the module.

### 22.1 UI Acceptance

- Chat empty state shows sample questions.
- Sample questions are hidden after the first message is sent.
- User message bubble appears immediately after sending.
- Typing indicator appears before assistant response.
- Explanation drawer shows why the suggestion appeared, trigger factors, referenced data, assistant interpretation, and explanation limits.

### 22.2 Flow Acceptance

- User can switch between value focus, income focus, and custom modes.
- Active mode is highlighted and switching provides feedback.
- User can toggle portfolio context.
- User can open history drawer, restore / delete conversations, and start a new conversation.
- User can create a custom mode by prompt or guided survey.

### 22.3 Integration Acceptance

- When Portfolio Context is enabled, AI answers reference current portfolio metrics for relevant questions.
- New custom mode appears in the list and becomes active.

### 22.4 Compliance Acceptance

- AI suggestions must not include execution language such as buy, sell, place order, or execute.
- AI suggestions must not include guaranteed-return claims.

---

# Module 4 — Structured Products

## Slide 23 — Structured Products: Functional Overview

**Title**  
Structured Products Separates Research Discovery from Admin Publishing

**Slide role**  
Summarize all structured product capabilities listed in the PRD.

### 23.1 Product Catalog

- Inputs: issuer list, smart filters, advanced search
- Outputs: product card list, risk / tenor / status summary, screening-only notice
- Boundary: research discovery only, no trading

### 23.2 Advanced Search

- Inputs: product type, structure, underlying, barrier, dates, tenor, currency, status, and more
- Output: precisely filtered product list
- Boundary: prototype uses simulated data

### 23.3 Product Detail

- Input: product ID
- Outputs: Overview, Performance, Note Events, Documents
- Boundary: risk-first presentation

### 23.4 Note Events

- Inputs: Bull / Base / Bear scenario
- Outputs: Payoff Story, Outcome selector, Payoff map, Rule quick check
- Boundary: preset scenarios, no return promise

### 23.5 Current Performance

- Input: product ID
- Outputs: indicative price, implied yield, barrier watch, source, date
- Boundary: non-firm quote

### 23.6 Compare Products

- Inputs: current product plus same-issuer product
- Output: tabular factsheet matrix with side-by-side term comparison
- Boundary: no cross-issuer comparison

### 23.7 Admin Panel

- Input: PDF Term Sheet
- Flow: Upload Structured Product Sheet → Select PDF product sheet → Extraction complete → Publish
- Boundary: Admin only

### 23.8 Admin ETF Maintenance

- Input: ticker ID
- Flow: Add ETF by ID → Fetch preview → Add to Platform
- Boundary: Admin only

---

## Slide 24 — Structured Products: Page Introduction 1 — Discovery & Detail

**Title**  
Discovery and Detail Pages Present Structured Products with Risk-First Context

**Slide role**  
Introduce product list and detail overview pages.

### 24.1 Structured Products List

**Screen:** `22-structured-products-list.png`

Includes:

- Screening-only risk notice
- Issuer list
- Smart filters
- Advanced search
- Product cards
- Payoff type
- Principal treatment
- Barrier / buffer
- Status
- Risk and suitability cues
- Admin Panel entry when logged in as Admin

### 24.2 Product Detail Overview

**Screen:** `23-structured-product-detail-overview.png`

Includes:

- Product name
- Issuer
- Status
- Overview / Performance / Note Events / Documents tabs
- Underlying
- Terms
- Illustrative outcomes
- Risk Disclosure
- Compare entry

---

## Slide 25 — Structured Products: Page Introduction 2 — Scenario, Pricing & Compare

**Title**  
Scenario, Pricing, and Compare Pages Help Users Understand Product Terms Before Selection

**Slide role**  
Introduce note events, performance, and compare pages.

### 25.1 Note Events

**Screen:** `24-structured-product-scenario.png`

Includes:

- Payoff Story
- Outcome selector
- Payoff map
- Rule quick check
- Coupon / barrier / settlement rules

### 25.2 Performance

**Screen:** `25-structured-product-pricing.png`

Includes:

- Indicative price
- Implied yield
- Barrier watch
- Same-issuer product reference
- Pricing disclaimer

### 25.3 Compare Products

**Screen:** `26-structured-product-compare.png`

Includes:

- Same-issuer product selector
- Tabular Factsheet Matrix
- Side-by-side term comparison
- Restriction against invalid cross-issuer comparison

---

## Slide 26 — Structured Products: Page Introduction 3 — Admin Upload & Extraction

**Title**  
Admin Upload and Extraction Pages Support Controlled Product Data Maintenance

**Slide role**  
Introduce Admin-only structured product maintenance pages.

### 26.1 Admin Panel

**Screen:** `27-admin-upload-panel.png`

Includes:

- Upload Structured Product Sheet
- Select PDF product sheet
- Add ETF by ID maintenance entry
- Admin-only access

### 26.2 Extracted Review

**Screen:** `28-admin-extracted-review.png`

Includes:

- AI-extracted fields
- Review and edit fields
- Discard action
- Publish action
- ETF maintenance success path

---

## Slide 27 — Structured Products: User Stories

**Title**  
Structured Product User Stories Cover Research, Filtering, Same-Issuer Comparison, and Admin PDF Publishing

**Slide role**  
List the structured product stories one by one with User / Admin distinction.

### 27.1 S-1 — Browse Structured Product Detail

**Persona:** User  
**Need:** Browse product list through Issuer / Strategy / Risk filters, open product detail, review Overview / Performance / Note Events / Documents, and add to watchlist.  
**Value:** Build structured product research context and understand terms, status, and key metrics.

### 27.2 S-2 — Search and Filter Structured Products

**Persona:** User  
**Need:** Use Smart Filters or Advanced Search with product type, underlying, barrier, tenor, currency, and related conditions to find a target product and open detail.  
**Value:** Turn a fuzzy need into a concrete product candidate.

### 27.3 S-3 — Compare Structured Products

**Persona:** User  
**Need:** Tap Compare from product detail, select a second product from the same issuer, and compare payoff structure, coupon, barrier, risk, and other terms.  
**Value:** Support product selection while avoiding invalid cross-issuer comparison.

### 27.4 S-4 — Upload Structured Product PDF

**Persona:** Admin  
**Need:** Upload a structured product term sheet PDF, let AI extract fields, review and edit extracted fields, then publish to the platform.  
**Value:** Standardize product data maintenance and keep the catalog current.

---

## Slide 28 — Structured Products: Acceptance Criteria

**Title**  
Structured Product Acceptance Criteria Validate Discovery, Detail, Comparison, Admin Publishing, and Suitability Boundaries

**Slide role**  
Summarize major acceptance items for the module.

### 28.1 UI Acceptance

- Product discovery page shows screening-only banner, issuer list, smart filters, and advanced search entry.
- Product card shows payoff type, principal treatment, barrier / buffer, issuer, status, risk level, and suitability cues.
- Product detail renders Overview, Performance, Note Events, and Documents tabs.
- Note Events tab shows payoff story, scenario selector, payoff map, rule quick check, and bull / neutral / bear explanations.

### 28.2 Flow Acceptance

- User can filter products through smart filters or advanced search.
- No-result state shows empty state and clear action.
- User can compare with a second product limited to the same issuer.
- Admin can upload a PDF, see extraction progress, and open field review.
- Admin can edit extracted fields and choose Discard or Publish.
- Publish success shows confirmation feedback.

### 28.3 Access Acceptance

- Admin Panel entry and Upload / Add ETF features are visible and accessible only to Admin role users.

### 28.4 Compliance Acceptance

- Product pages show no-trading-execution disclaimer.
- Product pages show non-firm quote disclaimer.
- Product pages show suitability assessment notice.

---

# Layer 4 — Non-Functional Design

## Slide 29 — Section Divider: Non-Functional Design

**Title**  
Non-Functional Design

**Subtitle**  
The prototype requirements define the controls needed for a financial research product.

**Sections**

1. Security, Privacy & Access Control
2. Performance, Compatibility & Accessibility
3. Compliance & Observability

---

## Slide 30 — Security, Privacy & Access Control

**Title**  
Security and Access Design Protect Login, Sensitive Data, and Admin Operations

**Slide role**  
Summarize authentication, data protection, and role-control requirements.

### 30.1 Authentication

- Email/password login
- Google / Microsoft OAuth 2.0 SSO
- Inline login error messages
- Recoverable network error message
- Re-authentication after 30 minutes in background
- Repeated failed login protection
- TOTP or enterprise SSO 2FA support

### 30.2 Token and Data Protection

- Access token stored in iOS Keychain
- Expired tokens refresh silently
- Sign-out revokes local and server tokens
- TLS 1.2+ for API calls
- Production client enables certificate pinning
- Tokens, sensitive configuration, and holding cache stored in Keychain or encrypted storage

### 30.3 Privacy Controls

- Holding data is not written to plaintext logs
- Email, name, and other PII are masked or minimized before logging and AI requests
- Third-party AI calls do not include identifiable personal information
- App does not request unrelated permissions such as location, contacts, or microphone

### 30.4 Access Control

- Server returns account role
- Frontend role control is display-only and not the security boundary
- Admin APIs must be authorized on the server
- Upload Product, Add ETF, and Admin Tools are invisible and inaccessible to normal users
- Upload, publish, delete, and field-edit actions record actor, time, source, and content ID

---

## Slide 31 — Performance, Compatibility & Accessibility

**Title**  
Experience Requirements Define Speed, iOS Behavior, and Inclusive Access Baselines

**Slide role**  
Summarize performance, resilience, device compatibility, and accessibility requirements.

### 31.1 Performance

- Market Dashboard first screen loads within 2 seconds on Wi-Fi cold start
- Page interactions respond within 300ms from tap to visual feedback
- ETF data API p95 latency is within 800ms under normal network conditions
- Assistant first response appears within 3 seconds after typing indicator
- File parsing for PDF / CSV / image within 5MB completes within 10 seconds
- Normal use on iPhone 13 keeps memory below 150MB RSS

### 31.2 Resilience

- All network requests show Skeleton / Spinner / Error states
- App never white-screens during network loading
- Offline mode shows cached data and offline notice
- Write operations are disabled offline with explanation

### 31.3 iOS Compatibility

- Follows Apple Human Interface Guidelines
- Tab Bar, Bottom Sheet, Drawer, Toast, Segmented Control, and iOS Switch use native or behavior-equivalent components
- Minimum touch target of 44×44pt
- Supports Dynamic Island, Home Indicator, and Safe Area Insets
- Page transition, Drawer, Toast, and Sheet animations complete within 200–350ms
- Supports iOS 16.0+
- Primary tests cover iPhone 13 / 14 / 15 series
- Portrait is primary orientation; chart regions can be enhanced in landscape

### 31.4 Accessibility

- Core buttons, inputs, and chart summaries provide accessibilityLabel / Hint support for VoiceOver
- Supports English and Traditional Chinese
- Key business copy is placed in i18n resources
- Body text and backgrounds meet WCAG AA contrast ratio
- Core content does not truncate under Accessibility Large Text

---

## Slide 32 — Compliance & Observability

**Title**  
Compliance and Observability Requirements Keep AI, Market Data, and Publishing Flows Auditable

**Slide role**  
Summarize product boundary, regulatory copy, monitoring, and configuration requirements.

### 32.1 Compliance Boundaries

- Assistant, Portfolio, and Product suggestions state that they are not formal investment advice
- App does not show Execute / Order / Place Trade or similar trading execution UI or copy
- ETF quotes are marked delayed
- Product pricing is marked indicative / non-firm quote
- Structured product pages state Private Placement and Suitability assessment required
- No return promise
- Historical performance does not indicate future results
- App provides Privacy Policy and follows Hong Kong PDPO
- User data processing and storage region are clearly disclosed

### 32.2 Observability

- Crash monitoring includes device, OS version, and page context
- API errors, file parsing failures, and Assistant timeouts record request ID
- ETF data, Assistant reasoning, and product publishing pipelines monitor p95 latency and error rates

### 32.3 Configuration and Release Controls

- ETF data sources are configurable
- AI prompts are configurable
- Scoring thresholds are configurable
- Compliance copy is configurable
- New features are released gradually through feature flags
- Backend APIs use versioned routes such as `/v1/`

---

# Layer 5 — Closing

## Slide 33 — Review Focus / Next Steps

**Title**  
Next Review Should Confirm Scope, Page Coverage, Journeys, and Validation Standards

**Slide role**  
End with a practical review checklist.

### 33.1 Scope Confirmation

- Product positioning is correct
- Core loop is accepted
- Out-of-scope boundaries are accepted
- User and Admin roles are clearly separated

### 33.2 Page Coverage Review

- Page tree matches the prototype
- Core module screens are complete enough for review
- Loading, error, empty, drawer, and sheet states are covered
- Screenshot pages use actual prototype screens, not generated replacement UI

### 33.3 Journey Review

- User stories match actual prototype behavior
- Investor flows and Admin flows are both represented
- User-story pages describe real story paths rather than abstract persona diagrams

### 33.4 Acceptance Review

- Must / Should / Could priorities are reasonable
- Ownership is clear across Frontend, Backend, and Integration
- Compliance and NFR requirements are concrete enough for implementation planning

---

# Optional Compression Notes

If the deck must be shortened, use this priority order:

1. Keep all Layer 1 and Layer 2 slides.
2. For each module, keep Functional Overview and Acceptance Criteria.
3. Merge Page Introduction slides into one screenshot summary slide per module.
4. Move detailed User Stories to appendix.
5. Keep at least one Non-Functional Design slide covering security, compliance, and access control.
