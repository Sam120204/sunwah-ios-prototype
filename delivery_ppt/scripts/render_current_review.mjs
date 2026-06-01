import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire("C:/Users/zhong/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/.pnpm/playwright@1.59.1/node_modules/playwright/package.json");
const { chromium } = require("playwright");

const repo = "D:/sunwah-ios-prototype";
const outDir = path.join(repo, "delivery_ppt", "current_review");
const pngDir = path.join(outDir, "png");
const htmlPath = path.join(outDir, "sunwah-opening-foundation-market.html");
const pdfPath = path.join(outDir, "sunwah-opening-foundation-market.pdf");
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const A = (...parts) => path.join(repo, ...parts).replaceAll("\\", "/");
const file = (p) => `file:///${p.replaceAll("\\", "/").replace(/^([A-Za-z]):/, "$1:")}`;

const img = {
  architectureDiagram: A("docs", "prd", "assets", "screenshots", "mermaid", "Architecture-Diagram.png"),
  pageTreeDiagram: A("docs", "prd", "assets", "screenshots", "mermaid", "page-tree-diagram.png"),
  marketDashboard: A("docs", "prd", "assets", "screenshots", "prototype-pages", "04-market-dashboard.png"),
  marketSkeleton: A("docs", "prd", "assets", "screenshots", "prototype-pages", "05-market-dashboard-skeleton.png"),
  marketError: A("docs", "prd", "assets", "screenshots", "prototype-pages", "06-market-dashboard-load-error.png"),
  etfScreener: A("docs", "prd", "assets", "screenshots", "prototype-pages", "07-all-etfs-screener.png"),
  etfFilter: A("docs", "prd", "assets", "screenshots", "prototype-pages", "08-all-etfs-filter-sort-sheet.png"),
  etfEmpty: A("docs", "prd", "assets", "screenshots", "prototype-pages", "09-all-etfs-empty-state.png"),
  etfDetail: A("docs", "prd", "assets", "screenshots", "prototype-pages", "10-etf-detail-overview.png"),
  etfPicker: A("docs", "prd", "assets", "screenshots", "prototype-pages", "11-etf-detail-compare-picker.png"),
  etfCompare: A("docs", "prd", "assets", "screenshots", "prototype-pages", "12-etf-compare.png"),
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
    n: "08", section: "Market Intelligence", nav: 3, type: "pageIntro", title: "Dashboard Entry",
    items: [
      { src: img.marketDashboard, label: "Market Dashboard", points: ["Research starts from market breadth, sectors, indices, watchlist preview, and All ETFs entry.", "Conclusion: the dashboard is the module landing page, not a transaction page."] },
      { src: img.marketSkeleton, label: "Loading Skeleton", points: ["Cards, lists, quote areas, and dashboard regions keep layout stable while data loads.", "Conclusion: loading is explicit and reviewable instead of showing empty content."] },
    ],
  },
  {
    n: "09", section: "Market Intelligence", nav: 3, type: "pageIntro", title: "Failure & Recovery",
    items: [
      { src: img.marketError, label: "Load Error", points: ["A clear failure message and retry action keep the state recoverable.", "Conclusion: users can distinguish network failure from no-data results."] },
      { src: img.etfScreener, label: "All ETFs Screener", points: ["Search, count, filter entry, ETF list, watchlist star, and Admin-only Add ETF appear together.", "Conclusion: broad market interest becomes a concrete ETF candidate."] },
    ],
  },
  {
    n: "10", section: "Market Intelligence", nav: 3, type: "pageIntro", title: "Search Refinement",
    items: [
      { src: img.etfFilter, label: "Filter & Sort Sheet", points: ["Sort, asset class, region, sector, issuer, currency, and active filter count are handled in one sheet.", "Conclusion: the screener supports narrowing without leaving the ETF list."] },
      { src: img.etfEmpty, label: "Empty State", points: ["No matching ETFs is separated from system error and offers Clear filters as recovery.", "Conclusion: empty results are actionable and low-friction."] },
    ],
  },
  {
    n: "11", section: "Market Intelligence", nav: 3, type: "pageIntro", title: "Detail Research",
    items: [
      { src: img.etfDetail, label: "ETF Detail", points: ["Header, price change, time-range chart, watchlist toggle, Quick Compare, metrics, classification, and news sit in one research view.", "Conclusion: detail supports focused research before any decision support."] },
      { src: img.etfPicker, label: "Compare Picker", points: ["The second ETF is selected through search before entering comparison.", "Conclusion: comparison is intentional and limited to a clear two-ETF path."] },
    ],
  },
  {
    n: "12", section: "Market Intelligence", nav: 3, type: "pageIntroSingle", title: "ETF Compare",
    item: { src: img.etfCompare, label: "ETF Compare", points: ["Two ETF header cards establish context before metrics.", "Normalized price curve makes performance visually comparable.", "Aligned return, risk, fee, and attribute rows support product selection.", "Boundary remains research and decision support, not execution."] },
  },
  { n: "13", section: "Market Intelligence", nav: 3, type: "storiesA", title: "Market User Stories" },
  { n: "14", section: "Market Intelligence", nav: 3, type: "storiesB", title: "Market User Stories" },
  { n: "15", section: "Market Intelligence", nav: 3, type: "criteria", title: "Market Acceptance Criteria" },
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
    <div class="cover-visual">${phoneMock()}${signalPanel()}</div>
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
    <p class="subtitle">The prototype is a reviewable investment-intelligence and data-maintenance system, not a trading workflow.</p>
    <div class="foundation-map">
      <div class="foundation-inputs">
        <div class="zone-label">Input views</div>
        ${foundationPill("01", "Positioning", "Institutional and HNW investment-intelligence assistant.", "blue")}
        ${foundationPill("02", "User View", "Markets, portfolios, AI Advisory, structured products, profile.", "green")}
        ${foundationPill("03", "Admin View", "ETF and structured-product data maintenance with auditability.", "gold")}
      </div>
      <div class="foundation-center">
        <div class="center-label">Review method</div>
        <div class="loop-orb">
          <b>Prototype<br>Review Loop</b>
          <span>Module structure before production build</span>
        </div>
        <div class="loop-steps">
          ${["Market Intelligence", "Portfolio Builder", "AI Advisory", "Structured Products", "Admin Maintenance"].map((x) => `<i>${x}</i>`).join("")}
        </div>
      </div>
      <div class="foundation-outcomes">
        <div class="zone-label">Review outputs</div>
        ${outcomeRow("Page tree, module boundaries, and role split")}
        ${outcomeRow("Loading, error, empty, drawer, and sheet states")}
        ${outcomeRow("Simulated User / Admin permission paths")}
        ${outcomeRow("No execution, guaranteed return, regulated advice, or real OCR")}
      </div>
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
    <p class="subtitle">Market Intelligence turns broad market context into ETF candidates, detail review, and two-ETF comparison while keeping Admin maintenance separate.</p>
    <div class="market-concept">
      <div class="concept-row inputs">
        ${conceptBox("Market Context", "ETF/index delayed quotes, market breadth, volume, indices, sector themes.", "soft-blue")}
        ${conceptBox("User Intent", "Search term, filters, watchlist entries, sector cards, and daily hot themes.", "soft-green")}
        ${conceptBox("Admin Input", "Ticker ID maintenance for expanding the searchable ETF universe.", "soft-gold")}
      </div>
      <div class="bridge market-bridge">
        <div class="bridge-side">Research inputs</div>
        <div class="bridge-core">ETF discovery and research workflow</div>
        <div class="bridge-note">Dashboard -> Screener -> ETF Detail -> Compare, with loading / error / empty states covered.</div>
      </div>
      <div class="concept-row outputs">
        ${conceptBox("Discovery Output", "ETF list, active filter badges, watchlist state, and empty-state recovery.", "soft-blue")}
        ${conceptBox("Research Output", "Chart, risk metrics, classification, news summaries, and AI analysis entry.", "soft-green")}
        ${conceptBox("Decision Support", "Normalized price curve and aligned return, risk, fee, and attribute comparison.", "soft-gold")}
      </div>
      <div class="boundary-full">Boundary: no real-time trading flow, no Level II data, HKEX delayed disclosure, and Admin-only ETF maintenance.</div>
    </div>`;

  if (s.type === "pageIntro") return `${title(s)}${pageIntroPair(s.items)}`;

  if (s.type === "pageIntroSingle") return `${title(s)}${pageIntroSingle(s.item)}`;

  if (s.type === "storiesA") return `${title(s)}${storySpread([
    { id: "M-1", name: "Browse ETF Detail", persona: "User", side: "left", icon: "person", need: "Enter ETF detail from Watchlist Preview, sector themes, or watchlist entries.", value: "Quickly obtain complete research context for an ETF of interest.", evidence: ["Candlestick chart", "Risk metrics", "AI score", "Watchlist action"] },
    { id: "M-2", name: "Search and Filter ETFs", persona: "User", side: "right", icon: "person", need: "Use keyword matching and filters to find a target ETF and open detail.", value: "Convert a fuzzy research need into a concrete ETF candidate.", evidence: ["Keyword search", "Filter sheet", "Result count", "Empty-state recovery"] },
  ])}`;

  if (s.type === "storiesB") return `${title(s)}${storySpread([
    { id: "M-3", name: "Compare ETFs", persona: "User", side: "left", icon: "person", need: "Tap Compare on ETF detail, choose a second ETF, and review aligned metrics.", value: "Support product selection decisions before any execution boundary.", evidence: ["Second ETF picker", "Normalized curve", "Fee and risk rows", "Two-ETF limit"] },
    { id: "M-4", name: "Maintain ETF List", persona: "Admin", side: "right", icon: "admin", need: "Use Add ETF by ID to add a new ticker and maintain the searchable universe.", value: "Keep user-facing ETF coverage complete and traceable.", evidence: ["Admin-only entry", "Ticker preview", "Add to platform", "Audit boundary"] },
  ])}`;

  if (s.type === "criteria") return `${title(s)}
    <div class="criteria-board">
      <div class="criteria-head">
        <b>Acceptance standard</b>
        <p>Market Intelligence is accepted when discovery, detail research, comparison, Admin access, and disclosure states can be reviewed end to end.</p>
      </div>
      <div class="criteria-grid">
        ${[
          ["UI Coverage", "Dashboard, screener, ETF detail, compare, loading, retryable error, and empty state are all represented."],
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
    ${stories.map((story) => `<article class="story-row ${story.side}">
      <div class="persona-badge ${story.icon === "admin" ? "admin" : "user"}">${personaIcon(story.icon)}<span>${story.persona}</span></div>
      <div class="story-body">
        <div class="story-id">${story.id}</div>
        <h2>${story.name}</h2>
        <div class="story-columns">
          <div><label>Need</label><p>${story.need}</p></div>
          <div><label>Value</label><p>${story.value}</p></div>
        </div>
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
    .cover{height:780px;display:grid;grid-template-columns:560px 1fr;gap:54px;align-items:center}.cover h1{font-size:62px;margin:22px 0 18px}.cover p{font-size:20px;max-width:500px}.cover-meta{display:flex;gap:14px;margin-top:42px}.cover-meta span,.signal-grid span{border:1px solid #d6dbe2;background:#fff;padding:11px 16px;font-size:12px;font-weight:800;color:#4d5968}.cover-visual{height:540px;position:relative}.phone{position:absolute;right:260px;top:20px;width:270px;height:520px;border:12px solid #111923;border-radius:38px;background:#fff;box-shadow:0 24px 50px rgba(17,25,35,.24);padding:36px 22px}.notch{position:absolute;top:12px;left:78px;width:95px;height:18px;background:#111923;border-radius:14px}.phone-title{font-weight:800;margin-bottom:18px}.ticker{height:46px;border-radius:8px;margin:10px 0;background:#eef2f5}.ticker.green{border-left:6px solid #7aa784}.ticker.gold{border-left:6px solid #b9a46d}.ticker.red{border-left:6px solid #b77b75}.chart{height:160px;display:flex;gap:7px;align-items:end;margin-top:26px}.chart i{display:block;width:8px;background:#b9a46d;border-radius:4px}.tabs{display:flex;gap:18px;margin-top:36px}.tabs span{width:32px;height:5px;border-radius:3px;background:#d5dae1}.signal-panel{position:absolute;right:0;top:92px;width:440px;background:#fff;border:1px solid #d6dbe2;padding:24px;box-shadow:0 18px 40px rgba(17,25,35,.14)}.line-chart svg{width:100%;height:150px}.line-chart path{fill:none;stroke:#b9a46d;stroke-width:5}.line-chart .muted{stroke:#8794a4;stroke-width:3}.signal-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .toc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:52px}.toc-card{background:#fff;border:1px solid #d7dce3;min-height:355px;padding:34px 30px}.toc-card strong{font-family:Georgia,serif;font-size:54px;color:#b9a46d}.toc-card h2{font-size:24px;margin:34px 0 18px}.toc-card p{font-size:16px;line-height:1.42}
    .foundation-map{width:1160px;min-height:600px;background:#fff;border:1px solid #d7dce3;padding:34px 36px;display:grid;grid-template-columns:325px 1fr 365px;gap:30px;align-items:stretch}.zone-label,.center-label{font-size:12px;text-transform:uppercase;letter-spacing:.15em;font-weight:850;color:#7e6f48;margin-bottom:18px}.foundation-inputs,.foundation-outcomes{display:flex;flex-direction:column}.foundation-pill{position:relative;display:grid;grid-template-columns:54px 1fr;gap:16px;border-left:6px solid #91A3B8;background:linear-gradient(90deg,#f6f9fc,#fff);padding:20px 20px;margin-bottom:20px;min-height:126px}.foundation-pill span{font-family:Georgia,serif;font-size:34px;color:#91A3B8}.foundation-pill b{font-size:22px;color:#17202b}.foundation-pill p{font-size:16px;line-height:1.32;margin:9px 0 0}.foundation-pill.green{border-color:#93B18E;background:linear-gradient(90deg,#f5faf4,#fff)}.foundation-pill.green span{color:#79a374}.foundation-pill.gold{border-color:#D4AA7A;background:linear-gradient(90deg,#fff8f1,#fff)}.foundation-pill.gold span{color:#b98548}.foundation-center{position:relative;border-inline:1px solid #e1e5ea;padding:0 28px;text-align:center}.loop-orb{width:280px;height:280px;border-radius:50%;border:8px solid #8972A8;margin:38px auto 24px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(circle at 50% 38%,#fff,#fbfaff);box-shadow:0 18px 38px rgba(78,60,112,.14)}.loop-orb b{font-family:Georgia,serif;font-size:38px;line-height:1;color:#151d2a}.loop-orb span{display:block;width:190px;margin-top:16px;font-size:14px;line-height:1.3;color:#687483}.loop-steps{display:grid;grid-template-columns:1fr;gap:9px}.loop-steps i{font-style:normal;background:#f5f4f8;border:1px solid #ddd5e8;padding:10px 12px;font-size:13.5px;font-weight:750;color:#4f5b68}.outcome-row{display:grid;grid-template-columns:24px 1fr;gap:14px;border-bottom:1px solid #e7ebef;padding:22px 0;align-items:start}.outcome-row span{width:15px;height:15px;border-radius:50%;background:#b9a46d;margin-top:4px}.outcome-row p{margin:0;font-size:17px;line-height:1.34;color:#3e4956}
    .concept{background:#fff;border:1px solid #d7dce3;padding:26px 30px 30px;max-width:1135px}.concept-row{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.concept-box{min-height:150px;border:1px dashed #cdbfb7;border-radius:14px;padding:18px 20px;background:linear-gradient(180deg,#fff,#fbfaf8)}.concept-box h2{font-size:18px;margin:6px 0 9px;color:#17202b}.concept-box p{font-size:13.5px;margin:0}.soft-blue{border-color:#91A3B8;background:linear-gradient(180deg,#F7FAFD,#fff)}.soft-green{border-color:#93B18E;background:linear-gradient(180deg,#F7FBF5,#fff)}.soft-gold{border-color:#D4AA7A;background:linear-gradient(180deg,#FFF8F1,#fff)}.box-icon{width:40px;height:40px}.box-icon svg{width:40px;height:40px;stroke:#637FA1;fill:none;stroke-width:2}.soft-green .box-icon svg{stroke:#5E8C63}.soft-gold .box-icon svg{stroke:#B98548}
    .bridge{margin:26px auto;min-height:104px;border:4px solid #8972A8;border-radius:48px;background:#fbfaff;display:grid;grid-template-columns:190px 1fr 420px;align-items:center;padding:18px 28px;gap:20px;box-shadow:0 12px 26px rgba(78,60,112,.12)}.bridge-side{font-size:12px;color:#697585;font-weight:800;text-transform:uppercase;letter-spacing:.12em}.bridge-core{font-family:Georgia,serif;font-size:28px;font-weight:700;color:#151D2A}.bridge-note{font-size:14px;color:#4f5b68;line-height:1.35}.outputs .concept-box{min-height:140px}.boundary-full{margin-top:20px;background:#111923;color:#e9edf2;padding:16px 22px;font-weight:750;text-align:center;font-size:15px}
    .product-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:16px}.hero-card,.role-card,.support-card,.prototype-loop{background:#fff;border:1px solid #d7dce3;padding:20px}.hero-card p{font-size:18px;margin:0}.prototype-loop{grid-column:span 2;display:grid;grid-template-columns:repeat(5,1fr);gap:9px}.prototype-loop span{background:#f5f4ef;border:1px solid #ddd8c8;min-height:70px;display:flex;align-items:center;justify-content:center;text-align:center;padding:8px;font-size:12.5px;font-weight:800}.role-card b{font-size:21px;color:#7e6f48}.role-card p,.support-card p{font-size:13.5px}.support-card ul{margin:0;padding-left:18px}.boundary-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:9px;margin-top:16px}.boundary-strip span{background:#fff;border:1px solid #d7dce3;padding:14px 8px;text-align:center;font-size:11px;font-weight:800;color:#4f5b68}
    .architecture-image-page{width:1160px;display:grid;grid-template-columns:1fr 280px;gap:18px;align-items:stretch}.architecture-image-page figure{margin:0;background:#fff;border:1px solid #d7dce3;padding:12px;height:570px;display:flex;align-items:center;justify-content:center}.architecture-image-page img{width:100%;height:100%;object-fit:contain}.arch-callouts{display:grid;grid-template-rows:repeat(3,1fr);gap:14px}.arch-callouts div{background:#fff;border:1px solid #d7dce3;border-left:5px solid #b9a46d;padding:20px}.arch-callouts b{font-size:19px;color:#17202b}.arch-callouts p{font-size:15px;line-height:1.36;margin:10px 0 0;color:#4f5b68}
    .page-structure-board{width:1160px;display:grid;grid-template-columns:850px 290px;gap:20px;align-items:stretch}.tree-image{margin:0;background:#fff;border:1px solid #d7dce3;padding:10px;height:586px;display:flex;align-items:center;justify-content:center;overflow:hidden}.tree-image img{width:100%;height:100%;object-fit:contain}.module-directory{background:#fff;border:1px solid #d7dce3;padding:18px}.module-directory label{font-size:11px}.directory-row{border-left:5px solid #91A3B8;background:#f8fafc;padding:12px 14px;margin-bottom:10px}.directory-row.green{border-color:#93B18E;background:#f7fbf6}.directory-row.purple{border-color:#A88BC7;background:#fbf8ff}.directory-row.red{border-color:#D88985;background:#fff8f7}.directory-row.violet{border-color:#B08AD3;background:#fbf8ff}.directory-row b{font-size:15px;color:#17202b}.directory-row p{font-size:12.3px;line-height:1.22;margin:5px 0 0;color:#5a6573}.directory-note{margin-top:14px;background:#f8f8f5;border:1px solid #d7dce3;border-left:5px solid #b9a46d;color:#17202b;padding:17px}.directory-note b{font-size:18px}.directory-note p{font-size:13.2px;line-height:1.33;color:#4f5b68;margin:8px 0 0}
    .divider{height:780px;display:grid;grid-template-columns:520px 1fr;gap:70px;align-items:center}.divider h1{font-size:72px}.divider p{font-size:21px}.module-stack{display:grid;grid-template-columns:1fr 1fr;gap:18px}.module-stack div{height:170px;background:#fff;border:1px solid #d7dce3;padding:28px}.module-stack span{font-family:Georgia,serif;font-size:46px;color:#b9a46d}.module-stack b{display:block;margin-top:24px;font-size:22px}
    .market-concept{background:#fff;border:1px solid #d7dce3;padding:26px 30px 28px;max-width:1160px}.market-bridge{border-color:#6F8097;background:#f8fbff}.market-bridge .bridge-core{font-size:27px}
    .page-intro-pair{height:640px;display:grid;grid-template-columns:310px 1fr 310px;gap:34px;align-items:center}.device{margin:0;text-align:center}.device-shell{position:relative;width:292px;height:592px;margin:0 auto;border:13px solid #101923;border-radius:40px;background:#101923;box-shadow:0 22px 44px rgba(17,25,35,.22);overflow:hidden}.device-notch{position:absolute;z-index:2;top:9px;left:50%;transform:translateX(-50%);width:90px;height:19px;background:#101923;border-radius:0 0 14px 14px}.device img{width:100%;height:100%;object-fit:cover;background:#fff}.device figcaption{margin-top:12px;font-size:14px;font-weight:850;color:#4f5b68}.intro-path{height:560px;display:grid;grid-template-rows:1fr 1fr;gap:26px;align-content:center}.intro-path section{position:relative;background:#fff;border:1px solid #d7dce3;padding:30px 34px 28px}.intro-path section:first-child:before,.intro-path section:last-child:after{content:"";position:absolute;top:50%;width:34px;border-top:2px solid #a8b2bf}.intro-path section:first-child:before{left:-34px}.intro-path section:last-child:after{right:-34px}.intro-index{font-family:Georgia,serif;font-size:38px;color:#b9a46d}.intro-path h2{font-size:30px;margin:4px 0 16px;color:#121923}.intro-path p{font-size:18px;line-height:1.38;margin:0 0 12px;color:#4e5967}.intro-path p:last-child{font-weight:760;color:#17202b}
    .page-intro-single{height:640px;display:grid;grid-template-columns:420px 1fr;gap:72px;align-items:center}.hero-device .device-shell{width:326px;height:650px}.hero-device figcaption{font-size:15px}.single-copy{background:#fff;border:1px solid #d7dce3;padding:44px 48px}.single-label{text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:850;color:#7e6f48}.single-copy h2{font-size:38px;margin:12px 0 24px}.single-point{display:grid;grid-template-columns:54px 1fr;gap:18px;border-top:1px solid #e4e8ed;padding:20px 0}.single-point span{font-family:Georgia,serif;font-size:32px;color:#b9a46d}.single-point p{font-size:19px;line-height:1.36;margin:0;color:#3d4856}
    .screen-layout{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.screen-panel{background:#fff;border:1px solid #d7dce3;display:grid;grid-template-columns:190px 1fr;gap:16px;padding:18px;min-height:560px}.screen-panel figure{margin:0;display:flex;align-items:center;justify-content:center}.screen-panel img{max-width:100%;max-height:500px;object-fit:contain}.screen-copy h2{font-size:19px;margin:12px 0}.screen-copy ul{padding-left:18px;margin:0}.screen-copy li{font-size:12.5px;margin:6px 0}
    .story-spread{height:640px;display:grid;grid-template-rows:1fr 1fr;gap:28px}.story-row{display:grid;grid-template-columns:150px 1fr;gap:24px;align-items:center;width:1040px}.story-row.right{grid-template-columns:1fr 150px;margin-left:auto}.story-row.right .persona-badge{grid-column:2}.story-row.right .story-body{grid-column:1;grid-row:1}.persona-badge{height:150px;border-radius:75px;background:#f6faf5;border:2px solid #93B18E;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;color:#5E8C63}.persona-badge.admin{background:#fff8f1;border-color:#D4AA7A;color:#B98548}.persona-badge svg{width:46px;height:46px;fill:none;stroke:currentColor;stroke-width:2.7;stroke-linecap:round;stroke-linejoin:round}.persona-badge span{font-weight:850;font-size:15px}.story-body{background:#fff;border:1px solid #d7dce3;padding:26px 30px;border-left:6px solid #93B18E}.story-row.right .story-body{border-left:1px solid #d7dce3;border-right:6px solid #D4AA7A}.story-id{font-family:Georgia,serif;font-size:34px;color:#b9a46d}.story-body h2{font-size:31px;margin:0 0 16px}.story-columns{display:grid;grid-template-columns:1fr 1fr;gap:26px}.story-columns label{font-size:11px}.story-columns p{font-size:16.5px;line-height:1.35;margin:0}.evidence-strip{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}.evidence-strip span{background:#f8f8f5;border:1px solid #ded8c8;padding:9px 12px;font-size:12.5px;font-weight:800;color:#4e5967}
    .criteria-board{width:1160px}.criteria-head{display:grid;grid-template-columns:310px 1fr;gap:28px;background:#fff;border:1px solid #d7dce3;border-left:7px solid #b9a46d;color:#17202b;padding:24px 30px;align-items:center}.criteria-head b{font-family:Georgia,serif;font-size:34px;line-height:1.04}.criteria-head p{font-size:18px;line-height:1.36;color:#4f5b68;margin:0}.criteria-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:18px}.criteria-card{background:#fff;border:1px solid #d7dce3;border-top:5px solid #b9a46d;min-height:170px;padding:20px}.criteria-card span{font-family:Georgia,serif;font-size:30px;color:#b9a46d}.criteria-card h2{font-size:21px;margin:6px 0 10px;color:#17202b}.criteria-card p{font-size:14.5px;line-height:1.35;margin:0;color:#4f5b68}.criteria-card b{display:inline-block;margin-top:14px;background:#fbfaf7;border:1px solid #d7ceb7;padding:7px 12px;font-size:11.5px;text-transform:uppercase;letter-spacing:.08em;color:#7e6f48}.criteria-footer{display:grid;grid-template-columns:230px 1fr;gap:24px;margin-top:18px;background:#f8f8f5;border:1px solid #d7dce3;padding:20px 24px}.criteria-footer strong{font-family:Georgia,serif;font-size:25px}.criteria-footer p{font-size:16.5px;line-height:1.36;margin:0}
  </style>`;
}

async function cleanOutput() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(pngDir, { recursive: true });
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
await writeHtml();
const pngs = await renderPngs();
await makePdf(pngs);
await removeScratchHtml();
console.log(JSON.stringify({ slideCount: slides.length, pngDir, pdfPath }, null, 2));

