# Market Module

## 模組說明

Market 模組提供從市場結構發現到單只 ETF 研究、比較和保存的完整路徑。用戶先在 `Market Intelligence` 建立市場方向，再進入 `Sector Detail` 比較板塊內 ETF，隨後在 `ETF Detail` 深入研究，並將結果保存到 `Watchlist` 或 `My Portfolio`。

> 資料邊界：頁面展示延遲行情、緩存快照或 EOD（end-of-day）資料時，必須保留相應標簽。Market 模組用於研究發現，不構成交易建議。

## User Story 索引

| Story | User Story | 核心路徑 |
| --- | --- | --- |
| [US-MKT-01](#us-mkt-01) | Market Intelligence Home | `Market Intelligence` -> `Sector Detail` |
| [US-MKT-02](#us-mkt-02) | Sector Detail | `Sector Detail` -> `ETF Rankings` |
| [US-MKT-03](#us-mkt-03) | ETF Detail and Compare ETF | `ETF Detail` -> `Compare ETF` |
| [US-MKT-04](#us-mkt-04) | Save ETF Research | `Watchlist` / `Add to My Portfolio` / `Screener` |

## 統一術語

| UI 原文 | 文檔含義 |
| --- | --- |
| `Market Intelligence` | Market 模組首頁，也是 ETF 研究起點 |
| `Sector Heatmap` | 按板塊或主題聚合 ETF 表現的熱力圖 |
| `AI Market Signals` | 將市場變動整理為可閱讀研究信號的卡片區域 |
| `Market Discovery Rail` | 從板塊、ETF movers、新 ETF、活躍 ETF 等維度繼續發現的橫向入口 |
| `Sector Detail` | 所選板塊的詳情頁面 |
| `AI Sector Insights` | 基於 EOD 緩存資料生成的板塊研究觀察 |
| `ETF Rankings` | 所選板塊內的 ETF 排名列表 |
| `ETF Detail` | 單只 ETF 的詳情與圖表研究頁面 |
| `Compare ETF` | 兩只 ETF 的歸一化疊加比較功能 |
| `Screener` | ETF 搜尋、篩選和排序頁面，包含 `Recommended`、`All`、`Watchlist` 三個範圍 |

---

<a id="us-mkt-01"></a>

## User Story 1 - 從 `Market Intelligence` 建立研究方向

**Story ID:** `US-MKT-01`  
**用戶故事：** 作為尚未確定具體 ETF 的用戶，我希望先了解當天的市場廣度、板塊變動和主要指數背景，從而選擇下一步值得研究的板塊。  

### Walkthrough

1. 打開 `Market Intelligence`。先展示頁面整體結構，說明它是 ETF 研究起點，而不是完整 ETF 目錄或交易推薦頁。
2. 瀏覽 `Sector Heatmap`。說明每個色塊代表一個板塊或主題籃子，顯示等權變動、ETF 數量和小型趨勢線；同時展示 `Rising`、`Flat`、`Falling` 匯總。

**Screenshot** — MKT-US1-01：`Market Intelligence` 頂部與完整 `Sector Heatmap`，包含 `Rising / Flat / Falling` 市場廣度匯總。

<img src="source/assets/screenshots/market/mkt-us1-01-sector-heatmap.png" alt="Market Intelligence 頂部與 Sector Heatmap" width="420" />

3. 向下瀏覽 `AI Market Signals`。選擇至少一張信號卡，展示信號日期、市場變動、AI analysis 摘要、相關 ETF，以及存在時的外部來源。

**Screenshot** — MKT-US1-02：完整的 `AI Market Signals` 卡，包含 signal date、AI analysis、sources、related ETFs，以及帶 delayed 標簽的 `Market Indices`。

<img src="source/assets/screenshots/market/mkt-us1-02-ai-market-signal.png" alt="AI Market Signals 與 Market Indices" width="420" />

4. 展示 `Market Indices`，包括 Hang Seng Index、Hang Seng Tech 和 S&P 500 Index，並讓 delayed data 標簽保持可見。
5. 瀏覽 `Market Discovery Rail`。在 `Sectors` 範圍展示 `Default` 與 `Hot`，說明它們分別提供穩定入口和當日變動較大的板塊入口。
6. 展示 `Recommended ETFs` 的 symbol、name、price、daily move 和 `View all`。

**Screenshot** — MKT-US1-03：`Market Discovery Rail` 的 `Default / Hot` sector baskets，以及 `Recommended ETFs` 和 `View all`。

<img src="source/assets/screenshots/market/mkt-us1-03-discovery-recommended.png" alt="Market Discovery Rail 與 Recommended ETFs" width="420" />

7. 點擊一個板塊（建議使用 `Crypto`），進入 `Sector Detail`，完成當前 story 並銜接下一個 story。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US1-AC01 | `Market Intelligence` 成功載入，並以 `Sector Heatmap`、`AI Market Signals`、`Market Indices`、`Market Discovery Rail` 和 `Recommended ETFs` 組織研究入口。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC02 | `Sector Heatmap` 的每個可見色塊展示板塊/主題名稱、變動、ETF 數量和趨勢線，並通過顏色區分上漲、接近平盤和下跌。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC03 | `Rising`、`Flat`、`Falling` 匯總與當前熱力圖資料對應。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC04 | `AI Market Signals` 卡展示信號日期、檢測到的變動、AI analysis 摘要和 contributing/related ETFs；有外部來源時顯示 source reference。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC05 | `Market Indices` 展示主要指數及當前可用的變動資料，並清楚顯示 delayed data 邊界。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC06 | `Market Discovery Rail` 支持從板塊、ETF movers、新 ETF 或活躍 ETF 等範圍繼續研究。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC07 | `Sectors` 中的 `Default` 與 `Hot` 作用域可以切換，且展示內容與當前選擇一致。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC08 | `Recommended ETFs` 是精選池而非完整 ETF universe；每行展示 symbol、name、price 和 daily move，並提供 `View all`。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC09 | 點擊一個板塊後，打開與所選板塊匹配的 `Sector Detail`。 | US-MKT-01 | Integration | Must |
| MKT-US1-AC10 | 頁面沒有把市場信號、板塊表現或精選 ETF 表述為交易建議。 | US-MKT-01 | Integration | Must |

---

<a id="us-mkt-02"></a>

## User Story 2 - 理解板塊走勢並篩選 ETF

**Story ID:** `US-MKT-02`  
**用戶故事：** 作為從市場首頁進入某個板塊的用戶，我希望理解該板塊變動的廣度、流動性與風險背景，並在板塊內比較 ETF，選出下一步研究對象。  

### Walkthrough

1. 從 `Sector Heatmap` 或 `Market Discovery Rail` 打開一個板塊。建議使用資料完整的 `Crypto`。
2. 展示頂部 sector banner：板塊名稱、代表性 tickers、籃子內 ETF 數量、最新板塊變動，以及 cached sector snapshot 標簽。

**Screenshot** — MKT-US2-01：`Crypto Sector Detail` banner，包含 representative tickers、ETF count、sector move 和 cached sector snapshot 標簽。

<img src="source/assets/screenshots/market/mkt-us2-01-sector-banner.png" alt="Crypto Sector Detail banner" width="420" />

3. 瀏覽 `AI Sector Insights`。依次展示 `Momentum & Breadth`、`Liquidity Pulse`、`Trend & Risk`，說明這些內容基於 EOD cached ETF data，不是即時預測。

**Screenshot** — MKT-US2-02：Consumer sector 的 `AI Sector Insights`，同時展示 `Momentum & Breadth`、`Liquidity Pulse` 和 EOD data boundary。

<img src="source/assets/screenshots/market/mkt-us2-02-ai-sector-insights.png" alt="Consumer AI Sector Insights" width="420" />

4. 進入 `ETF Rankings`。確認列表只包含所選板塊內的 ETF。
5. 依次切換 1 至 2 個排序指標，例如 `Change`、`Volume` 或 `Expense Ratio`；再切換一次 return period，例如 `1D` 到 `1M`。

**Screenshot** — MKT-US2-03：Crypto `ETF Rankings`，顯示 `Change` sort、`1D` return period 和完整 ETF ranking rows。

<img src="source/assets/screenshots/market/mkt-us2-03-etf-rankings.png" alt="Crypto ETF Rankings" width="420" />

6. 選擇一只 ETF 進入 `ETF Detail`，完成從板塊發現到產品研究的過渡。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US2-AC01 | `Sector Detail` 展示與用戶所選板塊一致的名稱和資料，不沿用之前打開的板塊內容。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC02 | sector banner 展示代表性 tickers、ETF 數量和最新板塊變動。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC03 | 頁面明確標註 sector snapshot / EOD cached data 邊界，不將其描述為即時資料。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC04 | `AI Sector Insights` 至少覆蓋 `Momentum & Breadth`、`Liquidity Pulse`、`Trend & Risk` 三類研究角度。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC05 | 當某項資料不足時，對應 insight 顯示 unavailable/data boundary，不虛構結論。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC06 | `ETF Rankings` 僅顯示當前所選板塊內的 ETF。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC07 | 排序支持當前實現提供的指標，包括 `Change`、`Volume`、`Turnover`、`Price`、`Expense Ratio`、`Beta`、`Drawdown`、`Sharpe ratio`、`Name` 或 `Symbol`。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC08 | return period 支持在當前實現提供的 `1D`、`1W`、`1M`、`3M` 之間切換，列表結果與當前周期一致。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC09 | 切換排序指標或周期時，當前板塊範圍保持不變。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC10 | 點擊排名中的 ETF 後，打開與該行 symbol 匹配的 `ETF Detail`。 | US-MKT-02 | Integration | Must |
| MKT-US2-AC11 | `AI Sector Insights` 采用研究觀察措辭，不預測收益，也不推薦交易。 | US-MKT-02 | Integration | Must |

---

<a id="us-mkt-03"></a>

## User Story 3 - 研究並比較單只 ETF

**Story ID:** `US-MKT-03`  
**用戶故事：** 作為已選定候選 ETF 的用戶，我希望查看報價、K 線、關鍵統計和新聞，並與另一只 ETF 比較相對走勢。  

### Walkthrough

1. 從 `ETF Rankings`、`Recommended ETFs`、`All`、`Watchlist` 或 ETF movers 打開一只資料完整的 ETF。
2. 展示詳情頭部：fund name、symbol、exchange、latest price、currency、daily change 和 market/close status。

**Screenshot** — MKT-US3-01：ChinaAMC Ether ETF 的 `ETF Detail`，包含 identity、quote、close status、K-line chart、moving averages、Overview 和 key stats。

<img src="source/assets/screenshots/market/mkt-us3-01-etf-detail-header.png" alt="ChinaAMC Ether ETF Detail" width="420" />

3. 在 K-line chart 上切換 `1D`、`1W`、`1M`、`3M` 中至少兩個 time ranges。
4. 在圖表上 scrub，展示所選時間點的 open、high、low、close 和 volume 更新。
5. 打開 `View` panel，切換一次 chart type，並開啟或關閉至少一條 moving average（`MA5`、`MA10` 或 `MA30`）。

**Screenshot** — MKT-US3-02：展開的 `View` panel，展示 K-line types、當前 `OHLC bar` 選擇和 `MA5 / MA10 / MA30` controls。

<img src="source/assets/screenshots/market/mkt-us3-02-chart-view-panel.png" alt="ETF Detail View panel" width="420" />

6. 切換 `Overview` 與 `News`。在 `Overview` 核對 key stats；在 `News` 展示 headline、source 和 timestamp。
7. 打開 `More`，進入 `Compare ETF`，選擇第二只 ETF，並查看同一 chart option 下的 normalized overlay。

**Screenshot** — MKT-US3-03：`ETF Comparison` 完成態，包含 3046.HK 與 3189.HK、normalized price performance、圖例及 factsheet matrix。

<img src="source/assets/screenshots/market/mkt-us3-03-compare-etf.png" alt="ETF Comparison completed state" width="420" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US3-AC01 | `ETF Detail` 展示與所選 ETF 一致的 fund name、symbol、exchange、latest price、currency、daily change 和 market status。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC02 | K-line chart 使用當前 ETF 的價格序列，不顯示先前 ETF 的殘留資料。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC03 | 用戶可在當前實現提供的 `1D`、`1W`、`1M`、`3M` time ranges 間切換，圖表隨選擇更新。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC04 | scrub 圖表時，open、high、low、close 和 volume 與當前選中資料點同步更新。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC05 | `View` panel 支持 `solid candlestick`、`hollow candlestick`、`OHLC bar`、`line` 和 `area` 中當前已啟用的 chart types。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC06 | `MA5`、`MA10`、`MA30` 開關只改變當前圖表疊加層，不改變 ETF 或 time range。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC07 | `Overview` 展示當前可用 key stats；不可用值以明確的 unavailable 狀態顯示。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC08 | `News` 展示與當前 ETF 研究流相關的 headline、source 和 timestamp。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC09 | `More` 中的 `Compare ETF` 使用當前 ETF 作為第一只比較對象，並允許選擇第二只 ETF。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC10 | 比較圖使用相同 chart option 載入兩組價格序列，並以 normalized overlay 展示相對表現。 | US-MKT-03 | Integration | Must |
| MKT-US3-AC11 | 退出 `Compare ETF` 後仍回到原 ETF 的詳情上下文。 | US-MKT-03 | Integration | Must |

---

<a id="us-mkt-04"></a>

## User Story 4 - 保存 ETF 研究結果

**Story ID:** `US-MKT-04`  
**用戶故事：** 作為完成初步研究的用戶，我希望將 ETF 保存到 `Watchlist` 繼續跟蹤，或加入已有 `My Portfolio` 做進一步組合分析，並可通過統一 `Screener` 繼續篩選。  

### Walkthrough

1. 在 `ETF Detail` 點擊 star icon，將 ETF 加入 `Watchlist`。
2. 打開 `Screener` 的 `Watchlist` 標簽，確認該 ETF 出現；隨後移除並確認列表同步更新。

**Screenshot** — MKT-US4-01：`Watchlist ETFs` 保存結果，顯示已選 `Watchlist` 標簽、保存數量及 ETF symbol/name。

<img src="source/assets/screenshots/market/mkt-us4-01-watchlist-saved.png" alt="Watchlist ETFs saved state" width="420" />

3. 回到 `ETF Detail`，點擊 plus button，打開 `Add to existing portfolio` sheet。
4. 展示 selected ETF、latest price、lots 和 estimated market value。說明 1 lot 按 100 shares 計算。
5. 展示 duplicate holding 狀態：已含該 ETF 的 portfolio 顯示重複提示且不可選擇；再選擇另一個 eligible portfolio 保存。

**Screenshot** — MKT-US4-02：`Add to existing` sheet，包含 selected ETF、lots、estimated value、duplicate/disabled portfolio 和 eligible portfolio。

<img src="source/assets/screenshots/market/mkt-us4-02-add-existing-portfolio.png" alt="Add ETF to existing portfolio" width="420" />

6. 重新打開目標 `My Portfolio`，確認 ETF 已作為 holding record 保存。強調該流程不下單、不執行交易。
7. 返回 `Screener`，依次展示 `Recommended`、`All`、`Watchlist` 三個資料範圍，並操作一次 search、filter 和 sort。

**Screenshot** — MKT-US4-03：統一 `Screener` 的 `All / Recommended / Watchlist` scopes、search、filter、sort metric 和 return period controls。

<img src="source/assets/screenshots/market/mkt-us4-03-screener-controls.png" alt="Screener tabs and controls" width="420" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| MKT-US4-AC01 | 點擊 `ETF Detail` 的 star icon 後，成功狀態與 `Watchlist` 中的實際保存狀態一致。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC02 | 已保存 ETF 出現在 `Screener > Watchlist`；移除後從該列表消失。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC03 | `Watchlist` 用於保存研究對象，不會創建 portfolio holding 或交易訂單。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC04 | plus button 為當前 ETF 打開 `Add to existing portfolio` sheet。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC05 | sheet 展示 selected ETF、latest price、lots 和 estimated market value，並按 1 lot = 100 shares 計算。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC06 | 已包含該 ETF 的 `My Portfolio` 顯示 duplicate holding 信息且不可再次選擇。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC07 | 用戶可以選擇另一個 eligible `My Portfolio` 並完成保存。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC08 | 保存完成後，重新打開目標 `My Portfolio` 可看到對應 ETF holding；未選擇並確認前不會寫入。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC09 | `Recommended`、`All`、`Watchlist` 共用同一 `Screener` 交互，但分別限定為精選池、完整可用範圍和用戶已保存範圍。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC10 | search 支持 symbol、name 或 issuer；filter 支持當前實現提供的 issuer、asset class、sector、currency 或 region。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC11 | sort 支持當前實現提供的 change、volume、turnover、price、expense ratio、beta、drawdown、Sharpe ratio、name 或 symbol。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC12 | search、filter 和 sort 不會意外切換當前 `Recommended`、`All` 或 `Watchlist` 資料範圍。 | US-MKT-04 | Integration | Must |
| MKT-US4-AC13 | `Add to My Portfolio` 只保存研究型 holding record，頁面不聲稱已經下單或執行交易。 | US-MKT-04 | Integration | Must |
