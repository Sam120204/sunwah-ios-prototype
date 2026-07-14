# Market Module

## 模块说明

Market 模块提供从市场结构发现到单只 ETF 研究、比较和保存的完整路径。用户先在 `Market Intelligence` 建立市场方向，再进入 `Sector Detail` 比较板块内 ETF，随后在 `ETF Detail` 深入研究，并将结果保存到 `Watchlist` 或 `My Portfolio`。

> 数据边界：页面展示延迟行情、缓存快照或 EOD（end-of-day）数据时，必须保留相应标签。Market 模块用于研究发现，不构成交易建议。

## User Story 索引

| Story | User Story | 核心路径 |
| --- | --- | --- |
| [US-MKT-01](#us-mkt-01) | Market Intelligence Home | `Market Intelligence` -> `Sector Detail` |
| [US-MKT-02](#us-mkt-02) | Sector Detail | `Sector Detail` -> `ETF Rankings` |
| [US-MKT-03](#us-mkt-03) | ETF Detail and Compare ETF | `ETF Detail` -> `Compare ETF` |
| [US-MKT-04](#us-mkt-04) | Save ETF Research | `Watchlist` / `Add to My Portfolio` / `Screener` |

## 统一术语

| UI 原文 | 文档含义 |
| --- | --- |
| `Market Intelligence` | Market 模块首页，也是 ETF 研究起点 |
| `Sector Heatmap` | 按板块或主题聚合 ETF 表现的热力图 |
| `AI Market Signals` | 将市场变动整理为可阅读研究信号的卡片区域 |
| `Market Discovery Rail` | 从板块、ETF movers、新 ETF、活跃 ETF 等维度继续发现的横向入口 |
| `Sector Detail` | 所选板块的详情页面 |
| `AI Sector Insights` | 基于 EOD 缓存数据生成的板块研究观察 |
| `ETF Rankings` | 所选板块内的 ETF 排名列表 |
| `ETF Detail` | 单只 ETF 的详情与图表研究页面 |
| `Compare ETF` | 两只 ETF 的归一化叠加比较功能 |
| `Screener` | ETF 搜索、筛选和排序页面，包含 `Recommended`、`All`、`Watchlist` 三个范围 |

---

<a id="us-mkt-01"></a>

## User Story 1 - 从 `Market Intelligence` 建立研究方向

**Story ID:** `US-MKT-01`  
**用户故事：** 作为尚未确定具体 ETF 的用户，我希望先了解当天的市场广度、板块变动和主要指数背景，从而选择下一步值得研究的板块。  

### Walkthrough

1. 打开 `Market Intelligence`。先展示页面整体结构，说明它是 ETF 研究起点，而不是完整 ETF 目录或交易推荐页。
2. 浏览 `Sector Heatmap`。说明每个色块代表一个板块或主题篮子，显示等权变动、ETF 数量和小型趋势线；同时展示 `Rising`、`Flat`、`Falling` 汇总。

**Screenshot** — MKT-US1-01：`Market Intelligence` 顶部与完整 `Sector Heatmap`，包含 `Rising / Flat / Falling` 市场广度汇总。

<img src="source/assets/screenshots/market/mkt-us1-01-sector-heatmap.png" alt="Market Intelligence 顶部与 Sector Heatmap" width="420" />

3. 向下浏览 `AI Market Signals`。选择至少一张信号卡，展示信号日期、市场变动、AI analysis 摘要、相关 ETF，以及存在时的外部来源。

**Screenshot** — MKT-US1-02：完整的 `AI Market Signals` 卡，包含 signal date、AI analysis、sources、related ETFs，以及带 delayed 标签的 `Market Indices`。

<img src="source/assets/screenshots/market/mkt-us1-02-ai-market-signal.png" alt="AI Market Signals 与 Market Indices" width="420" />

4. 展示 `Market Indices`，包括 Hang Seng Index、Hang Seng Tech 和 S&P 500 Index，并让 delayed data 标签保持可见。
5. 浏览 `Market Discovery Rail`。在 `Sectors` 范围展示 `Default` 与 `Hot`，说明它们分别提供稳定入口和当日变动较大的板块入口。
6. 展示 `Recommended ETFs` 的 symbol、name、price、daily move 和 `View all`。

**Screenshot** — MKT-US1-03：`Market Discovery Rail` 的 `Default / Hot` sector baskets，以及 `Recommended ETFs` 和 `View all`。

<img src="source/assets/screenshots/market/mkt-us1-03-discovery-recommended.png" alt="Market Discovery Rail 与 Recommended ETFs" width="420" />

7. 点击一个板块（建议使用 `Crypto`），进入 `Sector Detail`，完成当前 story 并衔接下一个 story。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US1-AC01 | `Market Intelligence` 成功加载，并以 `Sector Heatmap`、`AI Market Signals`、`Market Indices`、`Market Discovery Rail` 和 `Recommended ETFs` 组织研究入口。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC02 | `Sector Heatmap` 的每个可见色块展示板块/主题名称、变动、ETF 数量和趋势线，并通过颜色区分上涨、接近平盘和下跌。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC03 | `Rising`、`Flat`、`Falling` 汇总与当前热力图数据对应。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC04 | `AI Market Signals` 卡展示信号日期、检测到的变动、AI analysis 摘要和 contributing/related ETFs；有外部来源时显示 source reference。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC05 | `Market Indices` 展示主要指数及当前可用的变动数据，并清楚显示 delayed data 边界。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC06 | `Market Discovery Rail` 支持从板块、ETF movers、新 ETF 或活跃 ETF 等范围继续研究。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC07 | `Sectors` 中的 `Default` 与 `Hot` 作用域可以切换，且展示内容与当前选择一致。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC08 | `Recommended ETFs` 是精选池而非完整 ETF universe；每行展示 symbol、name、price 和 daily move，并提供 `View all`。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC09 | 点击一个板块后，打开与所选板块匹配的 `Sector Detail`。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC10 | 页面没有把市场信号、板块表现或精选 ETF 表述为交易建议。 | US-MKT-01 | Integration | Must |

---

<a id="us-mkt-02"></a>

## User Story 2 - 理解板块走势并筛选 ETF

**Story ID:** `US-MKT-02`  
**用户故事：** 作为从市场首页进入某个板块的用户，我希望理解该板块变动的广度、流动性与风险背景，并在板块内比较 ETF，选出下一步研究对象。  

### Walkthrough

1. 从 `Sector Heatmap` 或 `Market Discovery Rail` 打开一个板块。建议使用数据完整的 `Crypto`。
2. 展示顶部 sector banner：板块名称、代表性 tickers、篮子内 ETF 数量、最新板块变动，以及 cached sector snapshot 标签。

**Screenshot** — MKT-US2-01：`Crypto Sector Detail` banner，包含 representative tickers、ETF count、sector move 和 cached sector snapshot 标签。

<img src="source/assets/screenshots/market/mkt-us2-01-sector-banner.png" alt="Crypto Sector Detail banner" width="420" />

3. 浏览 `AI Sector Insights`。依次展示 `Momentum & Breadth`、`Liquidity Pulse`、`Trend & Risk`，说明这些内容基于 EOD cached ETF data，不是实时预测。

**Screenshot** — MKT-US2-02：Consumer sector 的 `AI Sector Insights`，同时展示 `Momentum & Breadth`、`Liquidity Pulse` 和 EOD data boundary。

<img src="source/assets/screenshots/market/mkt-us2-02-ai-sector-insights.png" alt="Consumer AI Sector Insights" width="420" />

4. 进入 `ETF Rankings`。确认列表只包含所选板块内的 ETF。
5. 依次切换 1 至 2 个排序指标，例如 `Change`、`Volume` 或 `Expense Ratio`；再切换一次 return period，例如 `1D` 到 `1M`。

**Screenshot** — MKT-US2-03：Crypto `ETF Rankings`，显示 `Change` sort、`1D` return period 和完整 ETF ranking rows。

<img src="source/assets/screenshots/market/mkt-us2-03-etf-rankings.png" alt="Crypto ETF Rankings" width="420" />

6. 选择一只 ETF 进入 `ETF Detail`，完成从板块发现到产品研究的过渡。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US2-AC01 | `Sector Detail` 展示与用户所选板块一致的名称和数据，不沿用之前打开的板块内容。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC02 | sector banner 展示代表性 tickers、ETF 数量和最新板块变动。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC03 | 页面明确标注 sector snapshot / EOD cached data 边界，不将其描述为实时数据。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC04 | `AI Sector Insights` 至少覆盖 `Momentum & Breadth`、`Liquidity Pulse`、`Trend & Risk` 三类研究角度。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC05 | 当某项数据不足时，对应 insight 显示 unavailable/data boundary，不虚构结论。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC06 | `ETF Rankings` 仅显示当前所选板块内的 ETF。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC07 | 排序支持当前实现提供的指标，包括 `Change`、`Volume`、`Turnover`、`Price`、`Expense Ratio`、`Beta`、`Drawdown`、`Sharpe ratio`、`Name` 或 `Symbol`。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC08 | return period 支持在当前实现提供的 `1D`、`1W`、`1M`、`3M` 之间切换，列表结果与当前周期一致。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC09 | 切换排序指标或周期时，当前板块范围保持不变。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC10 | 点击排名中的 ETF 后，打开与该行 symbol 匹配的 `ETF Detail`。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC11 | `AI Sector Insights` 采用研究观察措辞，不预测收益，也不推荐交易。 | US-MKT-02 | Integration | Must |

---

<a id="us-mkt-03"></a>

## User Story 3 - 研究并比较单只 ETF

**Story ID:** `US-MKT-03`  
**用户故事：** 作为已选定候选 ETF 的用户，我希望查看报价、K 线、关键统计和新闻，并与另一只 ETF 比较相对走势。  

### Walkthrough

1. 从 `ETF Rankings`、`Recommended ETFs`、`All`、`Watchlist` 或 ETF movers 打开一只数据完整的 ETF。
2. 展示详情头部：fund name、symbol、exchange、latest price、currency、daily change 和 market/close status。

**Screenshot** — MKT-US3-01：ChinaAMC Ether ETF 的 `ETF Detail`，包含 identity、quote、close status、K-line chart、moving averages、Overview 和 key stats。

<img src="source/assets/screenshots/market/mkt-us3-01-etf-detail-header.png" alt="ChinaAMC Ether ETF Detail" width="420" />

3. 在 K-line chart 上切换 `1D`、`1W`、`1M`、`3M` 中至少两个 time ranges。
4. 在图表上 scrub，展示所选时间点的 open、high、low、close 和 volume 更新。
5. 打开 `View` panel，切换一次 chart type，并开启或关闭至少一条 moving average（`MA5`、`MA10` 或 `MA30`）。

**Screenshot** — MKT-US3-02：展开的 `View` panel，展示 K-line types、当前 `OHLC bar` 选择和 `MA5 / MA10 / MA30` controls。

<img src="source/assets/screenshots/market/mkt-us3-02-chart-view-panel.png" alt="ETF Detail View panel" width="420" />

6. 切换 `Overview` 与 `News`。在 `Overview` 核对 key stats；在 `News` 展示 headline、source 和 timestamp。
7. 打开 `More`，进入 `Compare ETF`，选择第二只 ETF，并查看同一 chart option 下的 normalized overlay。

**Screenshot** — MKT-US3-03：`ETF Comparison` 完成态，包含 3046.HK 与 3189.HK、normalized price performance、图例及 factsheet matrix。

<img src="source/assets/screenshots/market/mkt-us3-03-compare-etf.png" alt="ETF Comparison completed state" width="420" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US3-AC01 | `ETF Detail` 展示与所选 ETF 一致的 fund name、symbol、exchange、latest price、currency、daily change 和 market status。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC02 | K-line chart 使用当前 ETF 的价格序列，不显示先前 ETF 的残留数据。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC03 | 用户可在当前实现提供的 `1D`、`1W`、`1M`、`3M` time ranges 间切换，图表随选择更新。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC04 | scrub 图表时，open、high、low、close 和 volume 与当前选中数据点同步更新。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC05 | `View` panel 支持 `solid candlestick`、`hollow candlestick`、`OHLC bar`、`line` 和 `area` 中当前已启用的 chart types。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC06 | `MA5`、`MA10`、`MA30` 开关只改变当前图表叠加层，不改变 ETF 或 time range。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC07 | `Overview` 展示当前可用 key stats；不可用值以明确的 unavailable 状态显示。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC08 | `News` 展示与当前 ETF 研究流相关的 headline、source 和 timestamp。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC09 | `More` 中的 `Compare ETF` 使用当前 ETF 作为第一只比较对象，并允许选择第二只 ETF。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC10 | 比较图使用相同 chart option 加载两组价格序列，并以 normalized overlay 展示相对表现。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC11 | 退出 `Compare ETF` 后仍回到原 ETF 的详情上下文。 | US-MKT-03 | Integration | Must |

---

<a id="us-mkt-04"></a>

## User Story 4 - 保存 ETF 研究结果

**Story ID:** `US-MKT-04`  
**用户故事：** 作为完成初步研究的用户，我希望将 ETF 保存到 `Watchlist` 继续跟踪，或加入已有 `My Portfolio` 做进一步组合分析，并可通过统一 `Screener` 继续筛选。  

### Walkthrough

1. 在 `ETF Detail` 点击 star icon，将 ETF 加入 `Watchlist`。
2. 打开 `Screener` 的 `Watchlist` 标签，确认该 ETF 出现；随后移除并确认列表同步更新。

**Screenshot** — MKT-US4-01：`Watchlist ETFs` 保存结果，显示已选 `Watchlist` 标签、保存数量及 ETF symbol/name。

<img src="source/assets/screenshots/market/mkt-us4-01-watchlist-saved.png" alt="Watchlist ETFs saved state" width="420" />

3. 回到 `ETF Detail`，点击 plus button，打开 `Add to existing portfolio` sheet。
4. 展示 selected ETF、latest price、lots 和 estimated market value。说明 1 lot 按 100 shares 计算。
5. 展示 duplicate holding 状态：已含该 ETF 的 portfolio 显示重复提示且不可选择；再选择另一个 eligible portfolio 保存。

**Screenshot** — MKT-US4-02：`Add to existing` sheet，包含 selected ETF、lots、estimated value、duplicate/disabled portfolio 和 eligible portfolio。

<img src="source/assets/screenshots/market/mkt-us4-02-add-existing-portfolio.png" alt="Add ETF to existing portfolio" width="420" />

6. 重新打开目标 `My Portfolio`，确认 ETF 已作为 holding record 保存。强调该流程不下单、不执行交易。
7. 返回 `Screener`，依次展示 `Recommended`、`All`、`Watchlist` 三个数据范围，并操作一次 search、filter 和 sort。

**Screenshot** — MKT-US4-03：统一 `Screener` 的 `All / Recommended / Watchlist` scopes、search、filter、sort metric 和 return period controls。

<img src="source/assets/screenshots/market/mkt-us4-03-screener-controls.png" alt="Screener tabs and controls" width="420" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US4-AC01 | 点击 `ETF Detail` 的 star icon 后，成功状态与 `Watchlist` 中的实际保存状态一致。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC02 | 已保存 ETF 出现在 `Screener > Watchlist`；移除后从该列表消失。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC03 | `Watchlist` 用于保存研究对象，不会创建 portfolio holding 或交易订单。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC04 | plus button 为当前 ETF 打开 `Add to existing portfolio` sheet。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC05 | sheet 展示 selected ETF、latest price、lots 和 estimated market value，并按 1 lot = 100 shares 计算。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC06 | 已包含该 ETF 的 `My Portfolio` 显示 duplicate holding 信息且不可再次选择。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC07 | 用户可以选择另一个 eligible `My Portfolio` 并完成保存。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC08 | 保存完成后，重新打开目标 `My Portfolio` 可看到对应 ETF holding；未选择并确认前不会写入。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC09 | `Recommended`、`All`、`Watchlist` 共用同一 `Screener` 交互，但分别限定为精选池、完整可用范围和用户已保存范围。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC10 | search 支持 symbol、name 或 issuer；filter 支持当前实现提供的 issuer、asset class、sector、currency 或 region。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC11 | sort 支持当前实现提供的 change、volume、turnover、price、expense ratio、beta、drawdown、Sharpe ratio、name 或 symbol。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC12 | search、filter 和 sort 不会意外切换当前 `Recommended`、`All` 或 `Watchlist` 数据范围。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC13 | `Add to My Portfolio` 只保存研究型 holding record，页面不声称已经下单或执行交易。 | US-MKT-04 | Integration | Must |
