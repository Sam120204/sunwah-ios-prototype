import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire("C:/Users/zhong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.59.1/node_modules/playwright/package.json");
const { chromium } = require("playwright");

const repo = "D:/sunwah-ios-prototype";
const outDir = path.join(repo, "delivery_ppt", "current_review");
const pngDir = path.join(outDir, "png");
const assetDir = path.join(outDir, "assets");
const htmlPath = path.join(outDir, "sunwah-opening-foundation-market.html");
const pdfPath = path.join(outDir, "sunwah-opening-foundation-market.pdf");
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const A = (...parts) => path.join(repo, ...parts).replaceAll("\\", "/");
const file = (p) => `file:///${p.replaceAll("\\", "/").replace(/^([A-Za-z]):/, "$1:")}`;

const img = {
  architectureDiagram: A("docs", "prd", "assets", "screenshots", "mermaid", "Architecture-Diagram.png"),
  pageTreeDiagram: A("docs", "prd", "assets", "screenshots", "mermaid", "page-tree-diagram.png"),
  marketDashboard: A("docs", "prd", "assets", "screenshots", "prototype-pages", "04-market-dashboard.png"),
  etfScreener: A("docs", "prd", "assets", "screenshots", "prototype-pages", "07-all-etfs-screener.png"),
  etfFilter: A("docs", "prd", "assets", "screenshots", "prototype-pages", "08-all-etfs-filter-sort-sheet.png"),
  etfDetail: A("docs", "prd", "assets", "screenshots", "prototype-pages", "10-etf-detail-overview.png"),
  etfCompare: A("docs", "prd", "assets", "screenshots", "prototype-pages", "12-etf-compare.png"),
  marketOverviewDetail: path.join(assetDir, "market-overview-detail.png"),
  sectorDetail: path.join(assetDir, "sector-detail-ai-technology.png"),
  watchlist: path.join(assetDir, "watchlist.png"),
};

const nav = [
  ["01", "Opening"],
  ["02", "Product Foundation"],
  ["03", "Core Modules"],
  ["04", "Market Intelligence"],
  ["05", "Portfolio Intelligence"],
  ["06", "AI Advisory"],
  ["07", "Structured Products"],
  ["08", "Non-Functional Design"],
];

const slides = [
  { n: "01", section: "Opening", nav: 0, type: "cover", title: "Sunwah Fintech iOS Prototype" },
  { n: "02", section: "Opening", nav: 0, type: "toc", title: "Structure" },
  { n: "03", section: "Product Foundation", nav: 1, type: "product", title: "Investment Intelligence Prototype" },
  { n: "04", section: "Product Foundation", nav: 1, type: "architecture", title: "Architecture & Control Layers" },
  { n: "05", section: "Product Foundation", nav: 1, type: "pageTree", title: "Page Structure & Module Directory" },
  { n: "06", section: "Core Modules", nav: 2, type: "divider", title: "Core Modules" },
  { n: "07", section: "Market Intelligence", nav: 3, type: "marketOverview", title: "Market Intelligence Scope" },
  {
    n: "08", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "Dashboard Entry",
    narrative: "The dashboard is the entry map. Each major block is clickable and opens a more focused browsing or discovery page.",
    src: img.marketDashboard,
    connectors: false,
    flow: [
      ["Overview card", "ETF Market Overview"],
      ["Sector tile", "Sector Detail"],
      ["Watchlist", "My Watchlist"],
      ["All ETFs", "All ETFs Screener"],
    ],
    callouts: [
      { num: "01", head: "ETF Market Overview", text: "The daily market entry. It opens return distribution and ETF rankings before a user chooses a single product.", x: 45, y: 22, pos: "top-left" },
      { num: "02", head: "Default sectors", text: "Stable research categories. They keep recurring market browsing predictable across review sessions.", x: 37, y: 51, pos: "bottom-left" },
      { num: "03", head: "Daily Hot", text: "Dynamic top themes for the day. Tapping one opens its related ETFs, ordered by return or volume.", x: 50, y: 62, pos: "bottom-right" },
      { num: "04", head: "Watchlist preview", text: "Saved-interest shortcut. View all opens the full watchlist page without forcing a new search.", x: 54, y: 90, pos: "low-left" },
      { num: "05", head: "All ETFs", text: "The top-right workbench entry for searching and filtering the full ETF universe.", x: 88, y: 8, pos: "top-right" },
    ],
  },
  {
    n: "09", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "ETF Market Overview",
    narrative: "This is what opens after tapping the overview card: a broader daily market read before the user chooses a specific ETF.",
    src: img.marketOverviewDetail,
    flow: [["Dashboard overview card", "Tap"], ["ETF Market Overview", "Current"], ["View more ETFs", "All ETFs Screener"]],
    callouts: [
      { num: "01", head: "Return distribution", text: "Shows how the ETF universe is spread across return buckets today.", x: 50, y: 22 },
      { num: "02", head: "ETF rankings", text: "Daily winners and laggards are listed below the chart for fast browsing.", x: 44, y: 42 },
      { num: "03", head: "Return / volume sort", text: "Users can switch between performance-led and liquidity-led discovery.", x: 77, y: 37 },
      { num: "04", head: "View more ETFs", text: "Continues the same browsing path into the full All ETFs screener.", x: 50, y: 92 },
    ],
  },
  {
    n: "10", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "Sector Detail",
    narrative: "This is what opens after tapping a Default Sector or Daily Hot tile: all related ETFs are collected into a focused sector list.",
    src: img.sectorDetail,
    flow: [["Default / Daily Hot tile", "Tap"], ["Filtered sector list", "Current"], ["ETF row", "ETF Detail"]],
    callouts: [
      { num: "01", head: "Sector context", text: "The title and subtitle explain the category behind the filtered ETF list.", x: 39, y: 10 },
      { num: "02", head: "Return sort", text: "Default sort surfaces the strongest ETF moves first.", x: 15, y: 18 },
      { num: "03", head: "Volume sort", text: "Volume sort changes the same list into liquidity-first browsing.", x: 41, y: 18 },
      { num: "04", head: "Related ETFs", text: "Rows are scoped to the selected sector and include volume plus daily return.", x: 45, y: 37 },
    ],
  },
  {
    n: "11", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "My Watchlist",
    narrative: "This is what opens after tapping Watchlist Preview: a short saved list that lets users return to familiar ETFs quickly.",
    src: img.watchlist,
    flow: [["Watchlist preview", "Tap"], ["Saved ETF list", "Current"], ["ETF row", "ETF Detail"]],
    callouts: [
      { num: "01", head: "Saved count", text: "The header confirms how many ETFs are being tracked.", x: 85, y: 8 },
      { num: "02", head: "ETF identity", text: "Ticker, theme tag, fund name, issuer, and region make each saved item recognizable.", x: 34, y: 17 },
      { num: "03", head: "Performance cue", text: "Price and 1Y return keep the watchlist useful without becoming a trading alert.", x: 82, y: 17 },
      { num: "04", head: "Detail path", text: "A row tap returns the user to the ETF Detail research surface.", x: 50, y: 28 },
    ],
  },
  {
    n: "12", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "All ETFs Screener",
    narrative: "After the dashboard entry, the user arrives at the ETF workbench: search, scan, sort intent, and row-level selection all happen on one page.",
    src: img.etfScreener,
    flow: [["All ETFs / View more", "Tap"], ["Searchable ETF universe", "Current"], ["ETF row", "ETF Detail"]],
    callouts: [
      { num: "01", head: "Search bar", text: "The search field supports symbol, product name, and issuer queries, because institutional users may start from a ticker, a fund family, or a rough product memory.", x: 45, y: 7 },
      { num: "02", head: "Filter entry and result count", text: "The count confirms scope before the list is scanned, while the filter button keeps deeper refinement one tap away without hiding the current results.", x: 82, y: 14 },
      { num: "03", head: "ETF row information", text: "Each row combines ticker, name, exposure category, volume, and daily performance. This lets users scan both identity and market movement before opening detail.", x: 52, y: 38 },
      { num: "04", head: "Performance badges", text: "Green and red change badges make the list readable at a glance, but they remain descriptive signals rather than recommendation labels.", x: 83, y: 55 },
    ],
  },
  {
    n: "13", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "Filter Sheet",
    narrative: "The filter sheet explains the product taxonomy behind the screener: it narrows the ETF universe by attributes that investment reviewers naturally compare.",
    src: img.etfFilter,
    flow: [["Filter button", "Open sheet"], ["Refine ETF fields", "Current"], ["Apply", "Updated list"]],
    callouts: [
      { num: "01", head: "Sort logic", text: "Sorting by symbol or return lets the reviewer switch between operational lookup and performance-led exploration.", x: 54, y: 34 },
      { num: "02", head: "Asset class", text: "Equity, fixed income, commodity, and mixed-asset filters separate products by investment role before sector or region is considered.", x: 47, y: 47 },
      { num: "03", head: "Region", text: "Region filters such as Global, Hong Kong, Asia Pacific, and China A reflect how ETF mandates are normally grouped in portfolio review.", x: 43, y: 59 },
      { num: "04", head: "Sector and issuer", text: "Sector filters support thematic research, while issuer filters help users compare fund families and product providers.", x: 44, y: 75 },
    ],
  },
  {
    n: "14", section: "Market Intelligence", nav: 3, type: "screenWalkthrough", title: "ETF Detail",
    narrative: "The ETF Detail page is the main research surface: identity, price movement, chart evidence, overview tabs, and news context are all visible before comparison.",
    src: img.etfDetail,
    flow: [["Watchlist / Screener row", "Tap"], ["ETF Detail", "Current"], ["Compare action", "ETF Compare"]],
    callouts: [
      { num: "01", head: "ETF identity and actions", text: "The header confirms the fund name, ticker, exchange, menu, and saved state. This keeps every downstream metric tied to a clear research object.", x: 55, y: 8 },
      { num: "02", head: "Price and selected horizon", text: "The price block and selected time range show the current move and the review period before the user interprets the chart.", x: 25, y: 16 },
      { num: "03", head: "Candlestick and volume chart", text: "The chart is the visual proof object. It combines price direction, volatility, volume, and the selected horizon in one place.", x: 46, y: 41 },
      { num: "04", head: "Overview and News tabs", text: "The Overview tab keeps the first read focused, while the News tab and the visible '3h ago' Reuters item show where market context enters the detail page.", x: 26, y: 82 },
    ],
  },
  {
    n: "15", section: "Market Intelligence", nav: 3, type: "compareWalkthrough", title: "ETF Compare",
    src: img.etfCompare,
    points: [
      ["Context first", "Two ETF header cards confirm which products are being compared before the user reads metrics."],
      ["Normalized proof", "The price curve creates a shared visual baseline, because raw prices are not directly comparable."],
      ["Aligned metrics", "Return, risk, fee, and attribute rows turn product differences into a reviewable decision-support table."],
      ["Boundary", "The comparison still stops at research; there is no buy, sell, order, or execution path."]
    ],
  },
  { n: "16", section: "Market Intelligence", nav: 3, type: "storiesA", title: "Market User Stories" },
  { n: "17", section: "Market Intelligence", nav: 3, type: "storiesB", title: "Market User Stories" },
  { n: "18", section: "Market Intelligence", nav: 3, type: "criteria", title: "Market Acceptance Criteria" },
];

function renderNav(active) {
  return `<aside class="nav">
    <div class="brand">SUNWAH<br>FINTECH</div>
    <div class="nav-list">${nav.map((item, i) => `<div class="nav-item ${i === active ? "active" : ""}">
      <span>${item[0]}</span><b>${item[1]}</b>
    </div>`).join("")}</div>
    <div class="nav-note">Delivery review<br>No trading execution</div>
  </aside>`;
}

function slideHtml(s) {
  return `<section class="slide" id="slide-${s.n}">
    ${renderNav(s.nav)}
    <main class="main">
      <div class="topline"><span>${s.section}</span><span>Slide ${s.n}</span></div>
      ${body(s)}
      <div class="pager">${s.n}</div>
    </main>
  </section>`;
}

function body(s) {
  if (s.type === "cover") return `<div class="cover">
    <div class="cover-copy">
      <div class="kicker">Prototype delivery review</div>
      <h1>Sunwah Fintech<br>iOS Prototype</h1>
      <p>Product Structure, Core Modules, User Journeys, and Delivery Validation</p>
    </div>
    <div class="cover-visual">
      ${conceptPhone()}
    </div>
  </div>`;

  if (s.type === "toc") return `${title(s)}
    <div class="toc-grid">
      ${[
        ["01", "Product Foundation", "Product overview, architecture, and page structure."],
        ["02", "Core Modules", "Market, Portfolio, AI Advisory, and Structured Products."],
        ["03", "Non-Functional Design", "Security, access control, performance, compatibility, accessibility, compliance, and observability."],
        ["04", "Review Focus", "Scope, page coverage, journey validation, and next-step confirmation."],
      ].map(([num, head, text]) => `<div class="toc-card"><strong>${num}</strong><h2>${head}</h2><p>${text}</p></div>`).join("")}
    </div>`;

  if (s.type === "product") return `${title(s)}
    <div class="foundation-board">
      <section class="foundation-thesis2">
        <label>Product foundation</label>
        <h2>Review first.<br>Execution out.</h2>
        <div class="thesis-meter">
          ${[
            ["Intent", "target"],
            ["Evidence", "shield"],
            ["Explain", "chat"],
          ].map(([head, icon]) => `<div>${foundationIcon(icon)}<b>${head}</b></div>`).join("")}
        </div>
        <p>From broad question to reviewable object, with no order path inside the prototype.</p>
      </section>
      <section class="foundation-flow" aria-label="Product foundation flow">
        ${[
          ["Market", "Discovery layer", "ETF breadth, sector themes, Daily Hot, and rankings help users decide what deserves attention first.", "chart"],
          ["Portfolio", "Context layer", "Holdings and risk views connect market movement to the user's own exposure.", "pie"],
          ["Assistant", "Explanation layer", "AI turns screen evidence into a readable rationale without replacing reviewer judgment.", "spark"],
          ["Products", "Comparison layer", "Structured-product and ETF comparison pages organize terms, metrics, and trade-offs.", "layers"],
        ].map(([head, label, text, icon], i) => `<article class="flow-step">
          <div class="flow-icon">${foundationIcon(icon)}</div>
          <span>${String(i + 1).padStart(2, "0")}</span>
          <b>${head}</b>
          <em>${label}</em>
          <p>${text}</p>
        </article>`).join("")}
      </section>
      <section class="foundation-rules2">
        <label>Design rules</label>
        ${[
          ["Evidence first", "A page should show the data, chart, list, or context before asking the user to interpret it.", "shield"],
          ["Progressive depth", "Start broad on dashboard, then let cards open focused pages with more detail.", "depth"],
          ["Role clarity", "Separate user and admin paths.", "user"],
          ["Clear boundary", "The prototype supports review and explanation, not buy/sell execution or guaranteed advice.", "lock"],
        ].map(([head, text, icon]) => `<div><span>${foundationIcon(icon)}</span><b>${head}</b><p>${text}</p></div>`).join("")}
      </section>
    </div>`;

  if (s.type === "architecture") return `${title(s)}
    <p class="subtitle">The PRD architecture connects the iOS client, security module, four intelligence modules, shared data foundation, Admin configuration, and external data sources.</p>
    <div class="architecture-image-page">
      <figure><img src="${file(img.architectureDiagram)}" alt="Architecture diagram"></figure>
      <div class="arch-callouts">
        ${[
          ["Client", "iOS Client built with SwiftUI communicates through HTTPS / JSON."],
          ["Core Modules", "Market, Portfolio, AI Advisory, and Structured Products share a unified data layer."],
          ["Control", "Security, Admin configuration, public APIs, and uploaded documents define the operating boundary."],
        ].map(([head, text]) => `<div><b>${head}</b><p>${text}</p></div>`).join("")}
      </div>
    </div>`;

  if (s.type === "pageTree") return `${title(s)}
    <p class="subtitle">The page tree shows where each prototype state sits; the directory keeps module ownership and review scope visible on one slide.</p>
    <div class="page-structure-board">
      <figure class="tree-image"><img src="${file(img.pageTreeDiagram)}" alt="Page tree diagram"></figure>
      <div class="module-directory">
        <label>Module Directory</label>
        ${[
          ["Market Intelligence", "Dashboard / Screener / Detail / Compare", "blue"],
          ["Portfolio Builder", "Input / Draft / Analysis / AI Suggestions", "green"],
          ["AI Advisory", "Chat / Structured Suggestions / Conversations", "purple"],
          ["Structured Products", "Discovery / Detail / Compare / Admin Panel", "red"],
          ["Profile & Settings", "Profile / Legal / Admin Tools / Sign Out", "violet"],
        ].map(([head, path, cls]) => `<div class="directory-row ${cls}"><b>${head}</b><p>${path}</p></div>`).join("")}
        <div class="directory-note"><b>Review path</b><p>Use this map to locate screenshots, user stories, and acceptance criteria inside the prototype scope.</p></div>
      </div>
    </div>`;

  if (s.type === "divider") return `<div class="divider">
      <div><div class="kicker">Layer 3</div><h1>Core Modules</h1><p>Each module is reviewed through functional scope, page coverage, user stories, and acceptance criteria.</p></div>
      <div class="module-stack">${["Market Intelligence", "Portfolio Intelligence", "AI Advisory", "Structured Products"].map((x, i) => `<div><span>0${i + 1}</span><b>${x}</b></div>`).join("")}</div>
    </div>`;

  if (s.type === "marketOverview") return `${title(s)}
    <p class="subtitle">Market Intelligence is designed as a browsing and discovery layer, not a trading terminal.</p>
    <div class="market-map">
      ${marketNode("Dashboard", "Starting map", "Overview, sectors, Daily Hot, indices, watchlist, and All ETFs entry.", "01")}
      ${marketNode("Daily Overview", "Market read", "Return distribution plus ETF rankings by return or volume.", "02")}
      ${marketNode("Sector Detail", "Focused discovery", "Related ETFs grouped by sector, sortable by return or volume.", "03")}
      ${marketNode("All ETFs", "Universe scan", "Search, count, filters, ETF rows, performance badges.", "04")}
      ${marketNode("ETF Detail", "Product inspection", "Identity, price horizon, chart, overview, news, and compare entry.", "05")}
      ${marketNode("ETF Compare", "Decision support", "Two-product context, normalized curve, and aligned metrics.", "06")}
      <div class="market-boundary">
        <b>Boundary</b><span>No execution path, no order placement, no recommendation label.</span>
      </div>
    </div>`;

  if (s.type === "screenWalkthrough") return `${title(s)}
    <p class="subtitle walkthrough-subtitle">${s.narrative}</p>
    ${flowRail(s.flow, s.n)}
    ${singleScreenWalkthrough(s)}`;

  if (s.type === "compareWalkthrough") return `${title(s)}
    <p class="subtitle walkthrough-subtitle">Comparison is presented as a final research step, with proof objects that support judgment without implying execution.</p>
    ${compareWalkthrough(s)}`;

  if (s.type === "pageIntro") return `${title(s)}${pageIntroPair(s.items)}`;

  if (s.type === "pageIntroSingle") return `${title(s)}${pageIntroSingle(s.item)}`;

  if (s.type === "storiesA") return `${title(s)}${storySpread([
    {
      id: "M-1",
      name: "Start from market context and open ETF detail",
      persona: "User",
      icon: "person",
      trigger: "The user wants to understand what is moving in the ETF universe before choosing a product to inspect.",
      steps: ["Review breadth, sectors, Daily Hot, and indices on Dashboard Entry.", "Use All ETFs or a sector card to move into the ETF list.", "Open an ETF row and read price, chart, overview, and news context."],
      outcome: "The user reaches a detailed research page with enough context to discuss the ETF, without seeing any execution or order flow.",
      evidence: ["Dashboard Entry", "All ETFs", "ETF Detail", "News context"]
    },
    {
      id: "M-2",
      name: "Narrow the ETF universe with search and filters",
      persona: "User",
      icon: "person",
      trigger: "The user already has a partial idea, such as an issuer, region, sector, or asset class, but does not know the exact target ETF.",
      steps: ["Search by symbol, product name, or issuer.", "Open the filter sheet and refine by asset class, region, sector, issuer, currency, or sort rule.", "Return to the ETF list and scan rows by exposure, volume, and performance badge."],
      outcome: "A broad research intent becomes a short, reviewable candidate list that can be opened into detail.",
      evidence: ["Keyword search", "Filter taxonomy", "Result count", "ETF rows"]
    },
  ])}`;

  if (s.type === "storiesB") return `${title(s)}${storySpread([
    {
      id: "M-3",
      name: "Compare two ETFs before making a decision",
      persona: "User",
      icon: "person",
      trigger: "After reviewing one ETF, the user needs to compare it with another product that has similar exposure or a competing issuer.",
      steps: ["Use the compare entry from ETF Detail.", "Select a second ETF in the picker.", "Read normalized performance, return, fee, risk, and factsheet rows side by side."],
      outcome: "The user can explain relative differences between two ETFs while the product remains strictly in research mode.",
      evidence: ["Compare picker", "Normalized curve", "Fee rows", "No execution"]
    },
    {
      id: "M-4",
      name: "Maintain ETF coverage as an Admin",
      persona: "Admin",
      icon: "admin",
      trigger: "A required ETF is missing from the searchable universe, or a product list needs to be expanded for review coverage.",
      steps: ["Enter Admin mode and use the Add ETF by ID path.", "Fetch the ticker preview before adding it to the platform.", "Confirm that the ETF becomes available for user-facing search and detail review."],
      outcome: "Market Intelligence remains complete and auditable while normal users never see the maintenance action.",
      evidence: ["Admin-only action", "Ticker preview", "Platform add", "Role boundary"]
    },
  ])}`;

  if (s.type === "criteria") return `${title(s)}
    <div class="criteria-board">
      <div class="criteria-head">
        <b>Acceptance standard</b>
        <p>Market Intelligence is accepted when discovery, detail research, comparison, Admin access, and disclosure states can be reviewed end to end.</p>
      </div>
      <div class="criteria-grid">
        ${[
          ["UI Coverage", "Dashboard, screener, filter sheet, ETF detail, and compare are represented as the main review path for Market Intelligence."],
          ["User Flow", "Users can enter ETF detail from dashboard / watchlist / sector context and continue into compare."],
          ["Search Logic", "Keyword, category, region, sector, issuer, currency, sorting, active badges, and result count update together."],
          ["Comparison", "Two selected ETFs show normalized curve plus aligned return, risk, fee, and attribute metrics."],
          ["Admin Control", "Add ETF by ID is visible and accessible only to Admin role, not normal User role."],
          ["Disclosure", "Market pages show delayed-data and non-execution boundaries, including HKEX 15-minute delayed-data disclosure."],
        ].map(([head, text], i) => `<div class="criteria-card"><span>${String(i + 1).padStart(2, "0")}</span><h2>${head}</h2><p>${text}</p><b>Must pass</b></div>`).join("")}
      </div>
      <div class="criteria-footer"><strong>Review conclusion</strong><p>The module is rigorous enough for prototype delivery review when the reviewer can verify screen coverage, role isolation, state handling, and compliance boundaries without relying on unstated behavior.</p></div>
    </div>`;

  return "";
}

function title(s) {
  return `<h1>${s.title}</h1>`;
}

function boundaryStrip(items) {
  return `<div class="boundary-strip">${items.map((x) => `<span>${x}</span>`).join("")}</div>`;
}

function foundationPill(num, head, text, cls) {
  return `<div class="foundation-pill ${cls}"><span>${num}</span><div><b>${head}</b><p>${text}</p></div></div>`;
}

function outcomeRow(text) {
  return `<div class="outcome-row"><span></span><p>${text}</p></div>`;
}

function archLayer(num, head, items, cls) {
  return `<div class="arch-layer ${cls}">
    <div class="arch-num">${num}</div>
    <div class="arch-head">${head}</div>
    <div class="arch-items">${items.map((x) => `<span>${x}</span>`).join("")}</div>
  </div>`;
}

function conceptBox(title, text, cls) {
  return `<div class="concept-box ${cls}"><div class="box-icon">${iconSvg(cls)}</div><h2>${title}</h2><p>${text}</p></div>`;
}

function marketNode(head, label, text, num) {
  return `<article class="market-node">
    <span>${num}</span>
    <div>
      <label>${label}</label>
      <h2>${head}</h2>
      <p>${text}</p>
    </div>
  </article>`;
}

function foundationIcon(name) {
  const icons = {
    chart: `<svg viewBox="0 0 48 48"><path d="M8 35h32"/><path d="M12 31l8-8 7 5 10-15"/><circle cx="12" cy="31" r="2"/><circle cx="20" cy="23" r="2"/><circle cx="27" cy="28" r="2"/><circle cx="37" cy="13" r="2"/></svg>`,
    pie: `<svg viewBox="0 0 48 48"><path d="M24 7v17h17"/><path d="M39 28A16 16 0 1 1 20 9"/><path d="M28 7a17 17 0 0 1 13 13H28z"/></svg>`,
    chat: `<svg viewBox="0 0 48 48"><path d="M10 12h28v20H20l-8 7v-7h-2z"/><path d="M17 20h14M17 26h9"/></svg>`,
    layers: `<svg viewBox="0 0 48 48"><path d="M24 7l17 9-17 9-17-9z"/><path d="M9 24l15 8 15-8"/><path d="M9 32l15 8 15-8"/></svg>`,
    target: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="2"/><path d="M36 12l6-6M36 6h6v6"/></svg>`,
    spark: `<svg viewBox="0 0 48 48"><path d="M24 6l3.5 11.5L39 21l-11.5 3.5L24 42l-3.5-17.5L9 21l11.5-3.5z"/><path d="M38 7l1.5 5L44 14l-4.5 2L38 21l-1.5-5L32 14l4.5-2z"/></svg>`,
    depth: `<svg viewBox="0 0 48 48"><path d="M10 34h10V24h10V14h8"/><path d="M10 40h28"/><circle cx="20" cy="24" r="2"/><circle cx="30" cy="14" r="2"/><circle cx="38" cy="14" r="2"/></svg>`,
    shield: `<svg viewBox="0 0 48 48"><path d="M24 6l15 7v11c0 9-5.8 15-15 19-9.2-4-15-10-15-19V13z"/><path d="M17 24l5 5 10-11"/></svg>`,
    route: `<svg viewBox="0 0 48 48"><circle cx="13" cy="13" r="5"/><circle cx="35" cy="35" r="5"/><path d="M18 13h8c6 0 8 4 8 8s-3 8-8 8h-4"/></svg>`,
    user: `<svg viewBox="0 0 48 48"><circle cx="19" cy="17" r="7"/><path d="M7 39c2.3-7 7-11 12-11s9.7 4 12 11"/><path d="M34 15v12M28 21h12"/></svg>`,
    lock: `<svg viewBox="0 0 48 48"><rect x="10" y="21" width="28" height="20" rx="4"/><path d="M17 21v-6a7 7 0 0 1 14 0v6"/><path d="M24 29v6"/></svg>`,
  };
  return icons[name] || icons.chart;
}

function flowRail(items = [], currentSlide = "") {
  if (!items.length) return "";
  return `<div class="flow-rail" aria-label="Screen flow">
    ${items.map(([label, target]) => `<div class="flow-chip ${target === "Current" ? "current" : ""}">
      <span>${label}</span><b>${target}</b>
    </div>`).join("")}
  </div>`;
}

function conceptPhone() {
  const bars = [42, 76, 58, 95, 68, 118, 84, 132, 101, 146, 116, 154];
  return `<div class="concept-phone">
    <div class="concept-notch"><i></i><b></b></div>
    <div class="visual-status"><i></i><i></i></div>
    <div class="concept-pulse">
      <svg viewBox="0 0 220 82"><path d="M8 58 C42 44,58 56,82 37 S132 42,158 25 S192 20,214 14"/><path class="muted" d="M8 68 H214"/></svg>
    </div>
    <div class="visual-meter">
      <div class="meter-ring"><span></span></div>
      <div class="meter-lines"><i></i><i></i><i></i></div>
    </div>
    <div class="visual-bars">${bars.map((h, i) => `<i class="${i % 4 === 0 ? "gold" : i % 3 === 0 ? "green" : ""}" style="height:${h}px"></i>`).join("")}</div>
    <div class="concept-grid">${["green", "gold", "blue", "violet"].map((cls, i) => `<section class="${cls}"><i></i><em></em><small></small></section>`).join("")}</div>
    <div class="visual-tabs">${Array.from({ length: 4 }, (_, i) => `<span class="${i === 0 ? "active" : ""}"></span>`).join("")}</div>
  </div>`;
}

function iconSvg(cls) {
  const color = cls === "soft-green" ? "#5E8C63" : cls === "soft-gold" ? "#B98548" : "#637FA1";
  if (cls === "soft-green") {
    return `<svg viewBox="0 0 42 42"><circle cx="21" cy="21" r="14"/><path d="M21 10v22M10 21h22"/></svg>`;
  }
  if (cls === "soft-gold") {
    return `<svg viewBox="0 0 42 42"><path d="M9 30h24M13 30V17m8 13V10m8 20V21"/></svg>`;
  }
  return `<svg viewBox="0 0 42 42"><rect x="9" y="11" width="24" height="20" rx="3"/><path d="M14 17h14M14 23h9"/></svg>`.replaceAll("<svg", `<svg style="--ic:${color}"`);
}

function phoneFrame(src, label, cls = "") {
  return `<figure class="device ${cls}">
    <div class="device-shell">
      <div class="device-notch"></div>
      <img src="${file(src)}" alt="${label}">
    </div>
    <figcaption>${label}</figcaption>
  </figure>`;
}

function singleScreenWalkthrough(s) {
  const positions = ["top-left", "top-right", "bottom-left", "bottom-right", "low-center"];
  const resolved = s.callouts.map((c, i) => ({ ...c, pos: c.pos || positions[i] || "bottom-right" }));
  return `<div class="infographic-screen">
    <figure class="raw-screen">
      <img src="${file(s.src)}" alt="${s.title}">
      ${resolved.map((c) => `<span class="pin" style="left:${c.x}%;top:${c.y}%">${c.num}</span>`).join("")}
    </figure>
    <svg class="annotation-lines" viewBox="0 0 1160 590" preserveAspectRatio="none">
      ${s.connectors === false ? "" : resolved.map((c) => annotationLine(c, c.pos, resolved.length)).join("")}
    </svg>
    ${resolved.map((c) => `<article class="info-card ${c.pos}">
      <span>${c.num}</span><div><h2>${c.head}</h2><p>${c.text}</p></div>
    </article>`).join("")}
  </div>`;
}

function annotationLine(c, pos, count) {
  const screen = { x: 448, y: 0, w: 263, h: 570 };
  const anchors = {
    "top-left": [302, 70],
    "top-right": [804, 70],
    "bottom-left": [302, 336],
    "bottom-right": [804, 336],
    "low-left": [302, 492],
    "low-center": [804, 492],
  };
  const x1 = screen.x + (c.x / 100) * screen.w;
  const y1 = screen.y + (c.y / 100) * screen.h;
  const [x2, y2] = anchors[pos] || anchors["bottom-right"];
  if (count <= 4 && pos === "low-center") return "";
  return `<path d="M${x1.toFixed(1)} ${y1.toFixed(1)} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" />`;
}

function compareWalkthrough(s) {
  return `<div class="compare-board">
    <figure class="compare-phone">
      <img src="${file(s.src)}" alt="ETF Compare">
    </figure>
    <div class="compare-proof">
      ${s.points.map(([head, text], i) => `<article>
        <span>${String(i + 1).padStart(2, "0")}</span>
        <h2>${head}</h2>
        <p>${text}</p>
      </article>`).join("")}
    </div>
  </div>`;
}

function pageIntroPair(items) {
  return `<div class="page-intro-pair">
    ${phoneFrame(items[0].src, items[0].label, "left-device")}
    <div class="intro-path">
      ${items.map((item, i) => `<section>
        <div class="intro-index">0${i + 1}</div>
        <h2>${item.label}</h2>
        ${item.points.map((p) => `<p>${p}</p>`).join("")}
      </section>`).join("")}
    </div>
    ${phoneFrame(items[1].src, items[1].label, "right-device")}
  </div>`;
}

function pageIntroSingle(item) {
  return `<div class="page-intro-single">
    ${phoneFrame(item.src, item.label, "hero-device")}
    <div class="single-copy">
      <div class="single-label">Reading path</div>
      <h2>${item.label}</h2>
      ${item.points.map((p, i) => `<div class="single-point"><span>${String(i + 1).padStart(2, "0")}</span><p>${p}</p></div>`).join("")}
    </div>
  </div>`;
}

function screenRows(items) {
  return `<div class="screen-layout">${items.map(([src, title, bullets]) => `<div class="screen-panel">
    <figure><img src="${file(src)}"></figure>
    <div class="screen-copy"><h2>${title}</h2><ul>${bullets.map((b) => `<li>${b}</li>`).join("")}</ul></div>
  </div>`).join("")}</div>`;
}

function personaIcon(kind) {
  if (kind === "admin") {
    return `<svg viewBox="0 0 48 48"><path d="M24 6l14 6v10c0 9-5.6 16-14 20-8.4-4-14-11-14-20V12l14-6z"/><path d="M18 24l4 4 8-9"/></svg>`;
  }
  return `<svg viewBox="0 0 48 48"><circle cx="24" cy="17" r="8"/><path d="M10 40c2.8-8.5 8-13 14-13s11.2 4.5 14 13"/></svg>`;
}

function storySpread(stories) {
  return `<div class="story-spread">
    ${stories.map((story) => `<article class="story-card ${story.icon === "admin" ? "admin" : "user"}">
      <div class="story-top">
        <div class="persona-badge ${story.icon === "admin" ? "admin" : "user"}">${personaIcon(story.icon)}<span>${story.persona}</span></div>
        <div>
          <div class="story-id">${story.id}</div>
          <h2>${story.name}</h2>
        </div>
      </div>
      <div class="story-body">
        <section class="story-trigger"><label>Trigger</label><p>${story.trigger}</p></section>
        <section class="story-steps"><label>Screen Journey</label>${story.steps.map((x, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><p>${x}</p></div>`).join("")}</section>
        <section class="story-outcome"><label>Outcome</label><p>${story.outcome}</p></section>
        <div class="evidence-strip">${story.evidence.map((x) => `<span>${x}</span>`).join("")}</div>
      </div>
    </article>`).join("")}
  </div>`;
}

function phoneMock() {
  return `<div class="phone">
    <div class="notch"></div><div class="phone-title">Market Intelligence</div>
    <div class="ticker green"></div><div class="ticker gold"></div><div class="ticker red"></div>
    <div class="chart">${Array.from({ length: 18 }, (_, i) => `<i style="height:${28 + ((i * 17) % 78)}px"></i>`).join("")}</div>
    <div class="tabs"><span></span><span></span><span></span><span></span></div>
  </div>`;
}

function signalPanel() {
  return `<div class="signal-panel">
    <div class="line-chart"><svg viewBox="0 0 420 150"><path d="M8 120 C60 112,80 88,124 94 S190 130,230 74 S315 36,408 48" /><path class="muted" d="M8 96 C74 104,118 54,164 68 S248 105,296 56 S350 52,408 28" /></svg></div>
    <div class="signal-grid">${["Markets", "Portfolio", "Assistant", "Products"].map((x) => `<span>${x}</span>`).join("")}</div>
  </div>`;
}

function css() {
  return `<style>
    @page{size:1600px 900px;margin:0}
    *{box-sizing:border-box}
    body{margin:0;background:#eceef1;font-family:Aptos,Inter,Arial,sans-serif;color:#17202b}
    .slide{width:1600px;height:900px;display:flex;background:#f6f7f8;overflow:hidden;page-break-after:always}
    .nav{width:245px;background:#101923;color:#ecede8;padding:38px 24px;display:flex;flex-direction:column}
    .brand{font-family:Georgia,serif;font-size:23px;font-weight:700;line-height:1.02;margin-bottom:36px}
    .nav-list{display:flex;flex-direction:column;gap:5px}.nav-item{min-height:43px;border-left:3px solid #394554;padding:5px 0 0 13px;color:#8d98a8}.nav-item span{display:block;font-size:9.5px;font-weight:700;letter-spacing:.12em}.nav-item b{font-size:10.8px;line-height:1.12;font-weight:650}.nav-item.active{background:#182431;border-color:#b9a46d;color:#f3f0e9}
    .nav-note{margin-top:auto;border-top:1px solid #2f3a47;padding-top:15px;font-size:10.5px;line-height:1.45;color:#8d98a8}
    .main{width:1355px;padding:40px 62px 34px 62px;position:relative}.topline{display:flex;justify-content:space-between;text-transform:uppercase;letter-spacing:.16em;font-size:10px;font-weight:800;color:#858e9b}
    h1{font-family:Georgia,serif;font-size:44px;line-height:1.03;letter-spacing:0;margin:28px 0 18px;color:#121923;max-width:1080px}.pager{position:absolute;right:64px;bottom:34px;font-family:Georgia,serif;font-size:24px;color:#c7cdd4}
    .kicker,label{display:block;text-transform:uppercase;letter-spacing:.13em;font-size:10px;font-weight:800;color:#7e6f48;margin-bottom:9px}p,li{font-size:13px;line-height:1.38;color:#5a6573}
    .subtitle{font-size:21px;line-height:1.38;max-width:1110px;margin:0 0 24px;color:#606b79}
    .cover{height:780px;display:grid;grid-template-columns:560px 1fr;gap:70px;align-items:center}.cover h1{font-size:62px;margin:22px 0 18px}.cover p{font-size:20px;max-width:500px}.cover-visual{height:650px;position:relative;display:flex;align-items:center;justify-content:center}.concept-phone{width:330px;height:640px;background:#fff;border-radius:38px;box-shadow:0 34px 76px rgba(17,25,35,.24);padding:32px 24px 20px;position:relative;overflow:hidden}.concept-phone:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(247,249,250,.86),rgba(255,255,255,0) 36%);pointer-events:none}.concept-notch{position:absolute;z-index:3;top:16px;left:50%;transform:translateX(-50%);width:108px;height:27px;background:#101923;border-radius:18px;display:flex;align-items:center;gap:22px;padding:0 18px}.concept-notch i{width:9px;height:9px;border-radius:50%;background:#1b2b46}.concept-notch b{display:block;width:36px;height:4px;border-radius:3px;background:#1b2b46}.visual-status{position:relative;z-index:2;display:flex;justify-content:space-between;margin:18px 4px 36px}.visual-status i:first-child{width:42px;height:11px;border-radius:8px;background:#17202b}.visual-status i:last-child{width:34px;height:11px;border-radius:8px;background:#d7dce3}.concept-pulse{position:relative;z-index:2;border:1px solid #e2e6eb;border-radius:22px;padding:17px 16px;background:#fbfcfd}.concept-pulse svg{width:100%;height:96px}.concept-pulse path{fill:none;stroke:#0F8F7E;stroke-width:5;stroke-linecap:round}.concept-pulse path.muted{stroke:#e1e5ea;stroke-width:2}.visual-meter{position:relative;z-index:2;display:grid;grid-template-columns:92px 1fr;gap:18px;align-items:center;margin:16px 0}.meter-ring{width:92px;height:92px;border-radius:50%;background:conic-gradient(#b9a46d 0 68%,#e8edf2 68%);display:flex;align-items:center;justify-content:center}.meter-ring span{width:62px;height:62px;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 1px #e2e6eb}.meter-lines{display:grid;gap:10px}.meter-lines i{height:12px;border-radius:8px;background:#e1e6eb}.meter-lines i:nth-child(1){width:94%}.meter-lines i:nth-child(2){width:72%;background:#d9e7dd}.meter-lines i:nth-child(3){width:84%;background:#efe3cc}.visual-bars{position:relative;z-index:2;height:160px;border:1px solid #e2e6eb;border-radius:22px;background:#fff;display:flex;align-items:end;gap:9px;padding:18px 16px}.visual-bars i{flex:1;border-radius:8px 8px 3px 3px;background:#d9e2ea}.visual-bars i.green{background:#93B18E}.visual-bars i.gold{background:#D4AA7A}.concept-grid{position:relative;z-index:2;display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}.concept-grid section{border:1px solid #e1e5ea;border-left:4px solid #91A3B8;background:#fff;padding:14px 13px;min-height:82px}.concept-grid section.green{border-left-color:#93B18E}.concept-grid section.gold{border-left-color:#D4AA7A}.concept-grid section.blue{border-left-color:#91A3B8}.concept-grid section.violet{border-left-color:#A88BC7}.concept-grid i,.concept-grid em,.concept-grid small{display:block;border-radius:8px;background:#e4e8ed}.concept-grid i{width:35px;height:26px;margin-bottom:13px}.concept-grid em{width:80%;height:10px;margin-bottom:8px}.concept-grid small{width:56%;height:9px}.visual-tabs{position:absolute;z-index:2;left:0;right:0;bottom:0;height:66px;border-top:1px solid #edf0f3;display:grid;grid-template-columns:repeat(4,1fr);align-items:center;justify-items:center;background:#fff}.visual-tabs span{width:24px;height:24px;border-radius:10px;background:#d8dee6}.visual-tabs span.active{background:#91A3B8}.phone,.notch,.signal-panel{display:none}
    .toc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:52px}.toc-card{background:#fff;border:1px solid #d7dce3;min-height:355px;padding:34px 30px}.toc-card strong{font-family:Georgia,serif;font-size:54px;color:#b9a46d}.toc-card h2{font-size:24px;margin:34px 0 18px}.toc-card p{font-size:16px;line-height:1.42}
    .foundation-board{width:1160px;height:610px;display:grid;grid-template-columns:300px 1fr 360px;gap:22px;align-items:stretch}.foundation-thesis2{background:#fff;border:1px solid #d7dce3;border-left:6px solid #91A3B8;padding:28px 28px 26px;display:flex;flex-direction:column}.foundation-thesis2 h2{font-size:40px;line-height:1.04;margin:28px 0 18px;color:#121923}.foundation-thesis2 p{font-size:18px;line-height:1.34;margin:22px 0 0;color:#455260}.thesis-meter{margin-top:auto;border-top:1px solid #e2e6eb;border-bottom:1px solid #e2e6eb;padding:20px 0;display:grid;grid-template-columns:1fr;gap:13px}.thesis-meter div{display:grid;grid-template-columns:46px 1fr;gap:14px;align-items:center}.thesis-meter svg{width:26px;height:26px;fill:none;stroke:#7e6f48;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.thesis-meter div:before{content:"";width:46px;height:46px;border-radius:16px;background:#f8f8f5;border:1px solid #ded8c8;grid-column:1;grid-row:1}.thesis-meter div svg{grid-column:1;grid-row:1;margin:auto;z-index:1}.thesis-meter b{font-size:16px;text-transform:uppercase;letter-spacing:.08em;color:#2f3a47}.foundation-flow{background:#fbfcfd;border:1px solid #d7dce3;padding:26px 28px;display:grid;grid-template-columns:1fr;gap:14px}.foundation-flow:before,.foundation-flow:after{display:none}.flow-step{position:relative;background:#fff;border:1px solid #d7dce3;border-left:5px solid #b9a46d;padding:18px 18px 16px;min-height:128px;display:grid;grid-template-columns:64px 1fr 44px;grid-template-rows:auto auto auto;column-gap:14px;z-index:1}.flow-step:nth-child(2){border-left-color:#93B18E}.flow-step:nth-child(3){border-left-color:#91A3B8}.flow-step:nth-child(4){border-left-color:#A88BC7}.flow-icon,.foundation-rules2 span{width:54px;height:54px;border-radius:18px;background:#f8f8f5;border:1px solid #ded8c8;display:flex;align-items:center;justify-content:center;color:#7e6f48}.flow-icon{grid-row:1 / span 3}.flow-icon svg,.foundation-rules2 svg{width:29px;height:29px;fill:none;stroke:currentColor;stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round}.flow-step span{grid-column:3;grid-row:1;font-family:Georgia,serif;font-size:28px;color:#b9a46d;text-align:right}.flow-step b{grid-column:2;grid-row:1;font-size:24px;color:#121923}.flow-step em{grid-column:2;grid-row:2;font-style:normal;text-transform:uppercase;letter-spacing:.08em;font-size:10.5px;font-weight:900;color:#7e6f48;margin-top:4px}.flow-step p{grid-column:2 / span 2;grid-row:3;font-size:14.2px;line-height:1.28;margin:9px 0 0;color:#566170}.foundation-rules2{background:#fff;border:1px solid #d7dce3;padding:26px 26px;display:flex;flex-direction:column;gap:12px}.foundation-rules2 label{margin-bottom:5px}.foundation-rules2 div{display:grid;grid-template-columns:52px 1fr;grid-template-rows:auto auto;column-gap:14px;align-items:start;background:#fbfaf7;border:1px solid #e4dfd2;border-left:4px solid #b9a46d;padding:14px 14px 14px 13px;min-height:112px}.foundation-rules2 div:nth-of-type(2){border-left-color:#93B18E}.foundation-rules2 div:nth-of-type(3){border-left-color:#91A3B8}.foundation-rules2 div:nth-of-type(4){border-left-color:#A88BC7}.foundation-rules2 span{grid-row:1 / span 2;width:44px;height:44px;border-radius:15px;background:#fff}.foundation-rules2 b{font-size:19px;line-height:1.08;color:#17202b;margin-top:1px}.foundation-rules2 p{font-size:13.8px;line-height:1.28;margin:6px 0 0;color:#566170}.product-foundation,.pilot-scope,.foundation-hero,.foundation-orbit,.foundation-rules{display:none}
    .concept{background:#fff;border:1px solid #d7dce3;padding:26px 30px 30px;max-width:1135px}.concept-row{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.concept-box{min-height:150px;border:1px dashed #cdbfb7;border-radius:14px;padding:18px 20px;background:linear-gradient(180deg,#fff,#fbfaf8)}.concept-box h2{font-size:18px;margin:6px 0 9px;color:#17202b}.concept-box p{font-size:13.5px;margin:0}.soft-blue{border-color:#91A3B8;background:linear-gradient(180deg,#F7FAFD,#fff)}.soft-green{border-color:#93B18E;background:linear-gradient(180deg,#F7FBF5,#fff)}.soft-gold{border-color:#D4AA7A;background:linear-gradient(180deg,#FFF8F1,#fff)}.box-icon{width:40px;height:40px}.box-icon svg{width:40px;height:40px;stroke:#637FA1;fill:none;stroke-width:2}.soft-green .box-icon svg{stroke:#5E8C63}.soft-gold .box-icon svg{stroke:#B98548}
    .bridge{margin:26px auto;min-height:104px;border:4px solid #8972A8;border-radius:48px;background:#fbfaff;display:grid;grid-template-columns:190px 1fr 420px;align-items:center;padding:18px 28px;gap:20px;box-shadow:0 12px 26px rgba(78,60,112,.12)}.bridge-side{font-size:12px;color:#697585;font-weight:800;text-transform:uppercase;letter-spacing:.12em}.bridge-core{font-family:Georgia,serif;font-size:28px;font-weight:700;color:#151D2A}.bridge-note{font-size:14px;color:#4f5b68;line-height:1.35}.outputs .concept-box{min-height:140px}.boundary-full{margin-top:20px;background:#111923;color:#e9edf2;padding:16px 22px;font-weight:750;text-align:center;font-size:15px}
    .product-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:16px}.hero-card,.role-card,.support-card,.prototype-loop{background:#fff;border:1px solid #d7dce3;padding:20px}.hero-card p{font-size:18px;margin:0}.prototype-loop{grid-column:span 2;display:grid;grid-template-columns:repeat(5,1fr);gap:9px}.prototype-loop span{background:#f5f4ef;border:1px solid #ddd8c8;min-height:70px;display:flex;align-items:center;justify-content:center;text-align:center;padding:8px;font-size:12.5px;font-weight:800}.role-card b{font-size:21px;color:#7e6f48}.role-card p,.support-card p{font-size:13.5px}.support-card ul{margin:0;padding-left:18px}.boundary-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:9px;margin-top:16px}.boundary-strip span{background:#fff;border:1px solid #d7dce3;padding:14px 8px;text-align:center;font-size:11px;font-weight:800;color:#4f5b68}
    .architecture-image-page{width:1160px;display:grid;grid-template-columns:1fr 280px;gap:18px;align-items:stretch}.architecture-image-page figure{margin:0;background:#fff;border:1px solid #d7dce3;padding:12px;height:570px;display:flex;align-items:center;justify-content:center}.architecture-image-page img{width:100%;height:100%;object-fit:contain}.arch-callouts{display:grid;grid-template-rows:repeat(3,1fr);gap:14px}.arch-callouts div{background:#fff;border:1px solid #d7dce3;border-left:5px solid #b9a46d;padding:20px}.arch-callouts b{font-size:19px;color:#17202b}.arch-callouts p{font-size:15px;line-height:1.36;margin:10px 0 0;color:#4f5b68}
    .page-structure-board{width:1160px;display:grid;grid-template-columns:850px 290px;gap:20px;align-items:stretch}.tree-image{margin:0;background:#fff;border:1px solid #d7dce3;padding:10px;height:586px;display:flex;align-items:center;justify-content:center;overflow:hidden}.tree-image img{width:100%;height:100%;object-fit:contain}.module-directory{background:#fff;border:1px solid #d7dce3;padding:18px}.module-directory label{font-size:11px}.directory-row{border-left:5px solid #91A3B8;background:#f8fafc;padding:12px 14px;margin-bottom:10px}.directory-row.green{border-color:#93B18E;background:#f7fbf6}.directory-row.purple{border-color:#A88BC7;background:#fbf8ff}.directory-row.red{border-color:#D88985;background:#fff8f7}.directory-row.violet{border-color:#B08AD3;background:#fbf8ff}.directory-row b{font-size:15px;color:#17202b}.directory-row p{font-size:12.3px;line-height:1.22;margin:5px 0 0;color:#5a6573}.directory-note{margin-top:14px;background:#f8f8f5;border:1px solid #d7dce3;border-left:5px solid #b9a46d;color:#17202b;padding:17px}.directory-note b{font-size:18px}.directory-note p{font-size:13.2px;line-height:1.33;color:#4f5b68;margin:8px 0 0}
    .divider{height:780px;display:grid;grid-template-columns:520px 1fr;gap:70px;align-items:center}.divider h1{font-size:72px}.divider p{font-size:21px}.module-stack{display:grid;grid-template-columns:1fr 1fr;gap:18px}.module-stack div{height:170px;background:#fff;border:1px solid #d7dce3;padding:28px}.module-stack span{font-family:Georgia,serif;font-size:46px;color:#b9a46d}.module-stack b{display:block;margin-top:24px;font-size:22px}
    .market-map{width:1160px;height:585px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr) 82px;gap:18px;position:relative}.market-node{background:#fff;border:1px solid #d7dce3;border-top:5px solid #b9a46d;padding:22px;display:grid;grid-template-columns:58px 1fr;gap:16px;align-items:start}.market-node span{font-family:Georgia,serif;font-size:36px;line-height:1;color:#b9a46d}.market-node label{font-size:9.5px;margin:0 0 8px;color:#7e6f48}.market-node h2{font-size:25px;line-height:1.08;margin:0 0 12px;color:#121923}.market-node p{font-size:15px;line-height:1.32;margin:0;color:#4f5b68}.market-boundary{grid-column:1 / span 3;background:#fbfaf7;border:1px solid #ded8c8;border-left:6px solid #b9a46d;display:grid;grid-template-columns:160px 1fr;align-items:center;padding:0 26px}.market-boundary b{font-family:Georgia,serif;font-size:27px;color:#17202b}.market-boundary span{font-size:17px;color:#4f5b68;font-weight:650}
    .walkthrough-subtitle{font-size:18px;line-height:1.35;max-width:1160px;margin-bottom:10px}
    .flow-rail{width:1160px;margin:0 0 12px;display:flex;align-items:center;gap:10px}.flow-chip{position:relative;min-height:42px;background:#fff;border:1px solid #d7dce3;border-radius:22px;padding:8px 12px 8px 16px;display:flex;align-items:center;gap:12px;box-shadow:0 8px 20px rgba(17,25,35,.035)}.flow-chip:after{content:"";position:absolute;right:-10px;top:50%;width:10px;border-top:1.6px solid #b7c0ca}.flow-chip:last-child:after{display:none}.flow-chip span{font-size:12.5px;font-weight:850;color:#2f3a47;white-space:nowrap}.flow-chip b{min-height:26px;border-radius:15px;background:#fbfaf7;border:1px solid #ded8c8;color:#7e6f48;display:flex;align-items:center;justify-content:center;font-size:10.5px;line-height:1.05;padding:0 10px;white-space:nowrap}.flow-chip.current{border-color:#c9b879;background:#fffdf7}.flow-chip.current b{background:#b9a46d;color:#fff;border-color:#b9a46d}
    .interaction-strip{display:none}
    .infographic-screen{width:1160px;height:570px;position:relative}
    .raw-screen{position:absolute;left:448px;top:0;width:263px;height:570px;margin:0;overflow:hidden;border-radius:34px;filter:drop-shadow(0 22px 40px rgba(17,25,35,.18));background:#fff;z-index:2}.raw-screen img{width:100%;height:100%;object-fit:contain;display:block;border-radius:34px}
    .pin{position:absolute;z-index:4;width:31px;height:31px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#b9a46d;color:#fff;border:3px solid #fff;font-size:12px;font-weight:900;box-shadow:0 8px 18px rgba(17,25,35,.18);transform:translate(-50%,-50%)}
    .annotation-lines{position:absolute;left:0;top:0;width:1160px;height:570px;z-index:1}.annotation-lines path{fill:none;stroke:#98a5b4;stroke-width:1.6;stroke-dasharray:5 7}
    .info-card{position:absolute;width:314px;min-height:118px;background:transparent;border:0;border-left:3px solid #b9a46d;padding:10px 8px 14px 18px;display:grid;grid-template-columns:45px 1fr;gap:12px;box-shadow:none;z-index:3}.info-card:after{content:"";position:absolute;left:18px;right:34px;bottom:0;border-bottom:1px solid #dbe1e7}.info-card.top-left{left:0;top:18px}.info-card.top-right{right:0;top:18px}.info-card.bottom-left{left:0;top:284px}.info-card.bottom-right{right:0;top:284px}.info-card.low-center{right:0;top:430px}.info-card.low-left{left:0;top:430px}
    .info-card span{font-family:Georgia,serif;font-size:29px;line-height:1;color:#b9a46d}.info-card h2{font-size:18.5px;line-height:1.1;margin:0 0 8px;color:#121923}.info-card p{font-size:14px;line-height:1.34;margin:0;color:#4e5967}
    .compare-board{width:1160px;height:604px;display:grid;grid-template-columns:430px 1fr;gap:34px;align-items:center}.compare-phone{position:relative;margin:0 auto;width:263px;height:570px;background:#fff;border-radius:34px;filter:drop-shadow(0 22px 40px rgba(17,25,35,.18));overflow:hidden}.compare-phone img{width:100%;height:100%;object-fit:contain;background:#fff;border-radius:34px}.compare-proof{display:grid;grid-template-columns:1fr 1fr;gap:16px}.compare-proof article{min-height:188px;background:#fff;border:1px solid #d7dce3;border-top:5px solid #b9a46d;padding:22px}.compare-proof span{font-family:Georgia,serif;font-size:32px;color:#b9a46d}.compare-proof h2{font-size:25px;margin:10px 0 13px;color:#17202b}.compare-proof p{font-size:16px;line-height:1.34;margin:0;color:#4e5967}
    .page-intro-pair{height:640px;display:grid;grid-template-columns:310px 1fr 310px;gap:34px;align-items:center}.device{margin:0;text-align:center}.device-shell{position:relative;width:292px;height:592px;margin:0 auto;border:13px solid #101923;border-radius:40px;background:#101923;box-shadow:0 22px 44px rgba(17,25,35,.22);overflow:hidden}.device-notch{position:absolute;z-index:2;top:9px;left:50%;transform:translateX(-50%);width:90px;height:19px;background:#101923;border-radius:0 0 14px 14px}.device img{width:100%;height:100%;object-fit:cover;background:#fff}.device figcaption{margin-top:12px;font-size:14px;font-weight:850;color:#4f5b68}.intro-path{height:560px;display:grid;grid-template-rows:1fr 1fr;gap:26px;align-content:center}.intro-path section{position:relative;background:#fff;border:1px solid #d7dce3;padding:30px 34px 28px}.intro-path section:first-child:before,.intro-path section:last-child:after{content:"";position:absolute;top:50%;width:34px;border-top:2px solid #a8b2bf}.intro-path section:first-child:before{left:-34px}.intro-path section:last-child:after{right:-34px}.intro-index{font-family:Georgia,serif;font-size:38px;color:#b9a46d}.intro-path h2{font-size:30px;margin:4px 0 16px;color:#121923}.intro-path p{font-size:18px;line-height:1.38;margin:0 0 12px;color:#4e5967}.intro-path p:last-child{font-weight:760;color:#17202b}
    .page-intro-single{height:640px;display:grid;grid-template-columns:420px 1fr;gap:72px;align-items:center}.hero-device .device-shell{width:326px;height:650px}.hero-device figcaption{font-size:15px}.single-copy{background:#fff;border:1px solid #d7dce3;padding:44px 48px}.single-label{text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:850;color:#7e6f48}.single-copy h2{font-size:38px;margin:12px 0 24px}.single-point{display:grid;grid-template-columns:54px 1fr;gap:18px;border-top:1px solid #e4e8ed;padding:20px 0}.single-point span{font-family:Georgia,serif;font-size:32px;color:#b9a46d}.single-point p{font-size:19px;line-height:1.36;margin:0;color:#3d4856}
    .screen-layout{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.screen-panel{background:#fff;border:1px solid #d7dce3;display:grid;grid-template-columns:190px 1fr;gap:16px;padding:18px;min-height:560px}.screen-panel figure{margin:0;display:flex;align-items:center;justify-content:center}.screen-panel img{max-width:100%;max-height:500px;object-fit:contain}.screen-copy h2{font-size:19px;margin:12px 0}.screen-copy ul{padding-left:18px;margin:0}.screen-copy li{font-size:12.5px;margin:6px 0}
    .story-spread{height:640px;display:grid;grid-template-columns:1fr 1fr;gap:22px}.story-card{background:#fff;border:1px solid #d7dce3;border-top:6px solid #93B18E;padding:24px 26px;display:flex;flex-direction:column;min-height:0}.story-card.admin{border-top-color:#D4AA7A}.story-top{display:grid;grid-template-columns:94px 1fr;gap:18px;align-items:center;margin-bottom:18px}.persona-badge{height:86px;width:86px;border-radius:50%;background:#f6faf5;border:2px solid #93B18E;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;color:#5E8C63}.persona-badge.admin{background:#fff8f1;border-color:#D4AA7A;color:#B98548}.persona-badge svg{width:31px;height:31px;fill:none;stroke:currentColor;stroke-width:2.7;stroke-linecap:round;stroke-linejoin:round}.persona-badge span{font-weight:850;font-size:12px}.story-id{font-family:Georgia,serif;font-size:32px;color:#b9a46d;line-height:1}.story-top h2{font-size:27px;line-height:1.12;margin:8px 0 0;color:#121923}.story-body{display:flex;flex-direction:column;gap:14px;min-height:0}.story-body label{font-size:10.5px;margin-bottom:6px}.story-trigger,.story-outcome{background:#fbfcfd;border:1px solid #e1e5ea;padding:13px 15px}.story-trigger p,.story-outcome p{font-size:14.8px;line-height:1.34;margin:0;color:#445160}.story-steps{background:#f8f8f5;border:1px solid #ded8c8;padding:14px 15px}.story-steps div{display:grid;grid-template-columns:36px 1fr;gap:12px;align-items:start;border-top:1px solid #e5dfd0;padding-top:10px;margin-top:10px}.story-steps div:first-of-type{border-top:0;padding-top:0}.story-steps span{font-family:Georgia,serif;font-size:20px;color:#b9a46d;line-height:1.1}.story-steps p{font-size:14.3px;line-height:1.28;margin:0;color:#394655}.evidence-strip{display:flex;gap:8px;margin-top:auto;flex-wrap:wrap}.evidence-strip span{background:#fff;border:1px solid #ded8c8;padding:7px 10px;font-size:11.5px;font-weight:800;color:#4e5967}
    .criteria-board{width:1160px}.criteria-head{display:grid;grid-template-columns:310px 1fr;gap:28px;background:#fff;border:1px solid #d7dce3;border-left:7px solid #b9a46d;color:#17202b;padding:24px 30px;align-items:center}.criteria-head b{font-family:Georgia,serif;font-size:34px;line-height:1.04}.criteria-head p{font-size:18px;line-height:1.36;color:#4f5b68;margin:0}.criteria-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px}.criteria-card{background:#fff;border:1px solid #d7dce3;border-top:5px solid #b9a46d;min-height:170px;padding:20px}.criteria-card span{font-family:Georgia,serif;font-size:30px;color:#b9a46d}.criteria-card h2{font-size:21px;margin:6px 0 10px;color:#17202b}.criteria-card p{font-size:14.5px;line-height:1.35;margin:0;color:#4f5b68}.criteria-card b{display:inline-block;margin-top:14px;background:#fbfaf7;border:1px solid #d7ceb7;padding:7px 12px;font-size:11.5px;text-transform:uppercase;letter-spacing:.08em;color:#7e6f48}.criteria-footer{display:grid;grid-template-columns:230px 1fr;gap:24px;margin-top:18px;background:#f8f8f5;border:1px solid #d7dce3;padding:20px 24px}.criteria-footer strong{font-family:Georgia,serif;font-size:25px}.criteria-footer p{font-size:16.5px;line-height:1.36;margin:0}
  </style>`;
}

async function cleanOutput() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(pngDir, { recursive: true });
  await fs.mkdir(assetDir, { recursive: true });
}

async function capturePrototypeAssets() {
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1280, height: 980 }, deviceScaleFactor: 2 });
  await page.goto(file(A("prototype.html")), { waitUntil: "networkidle" });
  await page.evaluate(() => {
    window.directNavigate?.("market-dashboard");
    window.renderTrendingThemes?.();
    window.renderMarketPulse?.();
  });
  const viewport = page.locator("#iphone-viewport");
  await viewport.waitFor({ state: "visible" });

  const shots = [
    {
      path: img.marketOverviewDetail,
      action: () => {
        window.directNavigate?.("market-overview");
        window.renderMarketOverviewPage?.();
      },
    },
    {
      path: img.sectorDetail,
      action: () => {
        window.openSectorPage?.("ai_tech");
      },
    },
    {
      path: img.watchlist,
      action: () => {
        window.directNavigate?.("watchlist");
        window.renderWatchlistList?.();
      },
    },
  ];

  for (const shot of shots) {
    await page.evaluate(shot.action);
    await page.evaluate(() => {
      const replacements = [
        [/路/g, "·"],
        [/鈫\?/g, "↕"],
        [/鈥\?/g, "—"],
        [/鈮\?/g, "≤"],
      ];
      const walker = document.createTreeWalker(document.getElementById("iphone-viewport"), NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        let text = node.nodeValue;
        for (const [from, to] of replacements) text = text.replace(from, to);
        node.nodeValue = text;
      }
    });
    await page.waitForTimeout(250);
    await viewport.screenshot({ path: shot.path });
  }
  await browser.close();
}

async function writeHtml() {
  const html = `<!doctype html><html><head><meta charset="utf-8">${css()}</head><body>${slides.map(slideHtml).join("\n")}</body></html>`;
  await fs.writeFile(htmlPath, html, "utf8");
}

async function renderPngs() {
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 });
  await page.goto(file(htmlPath), { waitUntil: "networkidle" });
  const paths = [];
  for (const s of slides) {
    const out = path.join(pngDir, `slide-${s.n}.png`);
    await page.locator(`#slide-${s.n}`).screenshot({ path: out });
    paths.push(out);
  }
  await browser.close();
  return paths;
}

async function makePdf(paths) {
  const pdfHtml = path.join(outDir, "review-pdf.html");
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>@page{size:1600px 900px;margin:0}body{margin:0}.page{width:1600px;height:900px;page-break-after:always}img{display:block;width:1600px;height:900px}</style></head><body>${paths.map((p) => `<div class="page"><img src="${file(p)}"></div>`).join("")}</body></html>`;
  await fs.writeFile(pdfHtml, html, "utf8");
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto(file(pdfHtml), { waitUntil: "networkidle" });
  await page.pdf({ path: pdfPath, width: "1600px", height: "900px", printBackground: true, preferCSSPageSize: true });
  await browser.close();
}

async function removeScratchHtml() {
  await fs.rm(htmlPath, { force: true });
  await fs.rm(path.join(outDir, "review-pdf.html"), { force: true });
}

await cleanOutput();
await capturePrototypeAssets();
await writeHtml();
const pngs = await renderPngs();
await makePdf(pngs);
await removeScratchHtml();
console.log(JSON.stringify({ slideCount: slides.length, pngDir, pdfPath }, null, 2));

