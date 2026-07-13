# Portfolio Module

## 模組說明

Portfolio 模組提供僅供研究的工作流：發現 `Model Portfolio`、維護 `My Portfolio`、生成 `AI Portfolio Recommendation`、分析 portfolio 草稿，以及根據歷史 `Baseline Snapshot` 審閱已保存的 `My Portfolio`。

模組由三個入口標簽組織：`Recommended` 用於瀏覽管理員維護的 Model Portfolio 並開始 recommendation quiz；`My portfolios` 用於創建、查看、編輯、刪除、分析和審閱用戶保存的 portfolio；`Watchlist` 用於查看與移除用戶保存供日後參考的 Model Portfolio。

> 範圍說明：本模組中的預測、分析、Recommendation 和 `Suggested actions` 僅供研究，不代表收益保證，也不會觸發券商訂單或交易執行。

## User Story / Video 索引

| Story | 視頻主題 | 核心路徑 | Video |
| --- | --- | --- | --- |
| [US-PORT-01](#us-port-01) | 探索並保存 Model Portfolio | `Recommended` -> `Model Portfolio` -> `Watchlist` / `My Portfolio` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/SjhpwcDNLirUxpkHh1vjUbgqphY) |
| [US-PORT-02](#us-port-02) | 創建、編輯和維護 My Portfolio | `My portfolios` -> `Edit` / `Baseline snapshots` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/I9gxw6Uugiw5RxkSJ91jVHKipMf) |
| [US-PORT-03](#us-port-03) | 生成 AI Portfolio Recommendation | `Find Your Ideal Portfolio` -> `Portfolio recommendation` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/NSZ1wCHloiD8QAkYSDsj9CNtpje) |
| [US-PORT-04](#us-port-04) | 分析 Portfolio 並審閱 AI 建議 | `Draft Portfolio` -> `Analysis` -> `Suggestions` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/Ey4Bw3xDxiPeETk3yBBjhxOHpdf) |
| [US-PORT-05](#us-port-05) | 根據 Baseline Snapshot 審閱 | `Portfolio Review` -> `Baseline` -> `Analysis` -> `Suggestions` | [視頻](https://jjpvro70sief.jp.larksuite.com/wiki/H1ULwBLKeiaEIKkEbQDjhRiepue) |

## 統一術語

| UI 原文 | 文檔含義 |
| --- | --- |
| `Model Portfolio` | 由管理員維護並發布的 portfolio template，不是用戶持久化配置 |
| `My Portfolio` / `My portfolios` | 用戶創建並保存的研究型 portfolio，以及其列表標簽 |
| `Watchlist` | 用戶保存供日後參考的 Model Portfolio 列表 |
| `Add to My Portfolio` | 將 Model Portfolio 或 Recommendation 轉為新的或合並到已有 My Portfolio |
| `Baseline Snapshot` | 某個 My Portfolio 在特定時間保存的持倉、數量、價值和權重參考配置 |
| `Baseline History` / `Baseline snapshots` | 管理 Baseline Snapshot 的歷史抽屜/頁面 |
| `Analysis Workspace` | 對 portfolio 工作草稿執行 Holdings、Analysis、Diagnosis、Suggestions 流程的工作區 |
| `Suggested actions` | 算法生成的量化調整預覽；是否可編輯/應用取決於來源 |
| `Portfolio Review` | 將當前 My Portfolio 與所選 Baseline Snapshot 比較的工作流 |
| `Recommendation Build` | 展示 Recommendation 的風險畫像、篩選、優化、候選範圍和警告 |
| `Data coverage` / `Unavailable` / `Partial` | 資料不完整或指標不可用時的明確邊界狀態 |

---

<a id="us-port-01"></a>

## User Story 1 - 探索並保存 Model Portfolio

**Story ID:** `US-PORT-01`  
**用戶故事：** 作為用戶，我希望檢查精選的 Model Portfolio，了解其配置和示意性預測，將其保存以便稍後參考，並使用 Add to My Portfolio。  
**Video:** [US-PORT-01 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/SjhpwcDNLirUxpkHh1vjUbgqphY)

### Walkthrough

1. 打開 `Portfolio > Recommended`，瀏覽 Model Portfolio 卡片及其 `Reference` 說明。

**Screenshot** — PORT-US1-01：`Recommended` 目錄、recommendation quiz 入口、Model Portfolio cards、allocation mix 和 `Reference`。

<img src="source/assets/screenshots/portfolio/port-us1-01-model-portfolio-catalogue.png" alt="Recommended Model Portfolio catalogue" width="420" />

2. 打開一個 Model Portfolio，查看回報、風險、期限、配置和 ETF allocations。

**Screenshot** — PORT-US1-02：`Anchor Income` Model Portfolio 詳情，包含 return/risk/horizon、`Reference`、allocation map 和 projection 入口。

<img src="source/assets/screenshots/portfolio/port-us1-02-model-portfolio-detail.png" alt="Anchor Income Model Portfolio detail" width="420" />

**Screenshot** — `Anchor Income` 的 `ETF allocation` 列表、ETF metadata、target weights 和 `Total 100%`。

<img src="source/assets/screenshots/portfolio/port-us1-extra-etf-allocation.png" alt="Model Portfolio ETF allocation" width="420" />

3. 瀏覽 `Projected Asset Growth`，操作時間範圍和歷史資料點，並查看可用的 backtest 與 data coverage。

**Screenshot** — PORT-US1-03：`Projected Asset Growth` 完成態，包含 history、P50、P25-P75、P2.5-P97.5、Today crosshair、summary 和 `Partial` data warning。

<img src="source/assets/screenshots/portfolio/port-us1-03-projection-backtest.png" alt="Projected Asset Growth completed state" width="420" />

4. 將 Model Portfolio 保存到 `Watchlist`，確認可以從 Watchlist 重新打開或移除。

**Screenshot** — PORT-US1-04：`Watchlist` 中已保存的 `Anchor Income` Model Portfolio，包含 saved count、事實信息、allocation 和 `Reference`。

<img src="source/assets/screenshots/portfolio/port-us1-04-watchlist-saved.png" alt="Saved Model Portfolio in Watchlist" width="420" />

5. 選擇 `Add to My Portfolio`，在 `Visual` 和 `ETF list` 模式中審閱或調整金額、權重和份額。

**Screenshot** — PORT-US1-05：`Add to My Portfolio` 的 Visual editor，包含 allocation overview、total portfolio value、sector weights 和兩個保存目標。

<img src="source/assets/screenshots/portfolio/port-us1-05-add-to-portfolio-editor.png" alt="Add to My Portfolio visual editor" width="420" />

**Screenshot** — 同一配置切換到 `ETF list` 後的 direct-share editor，展示 industry groups、ETF rows 和 share steppers。

<img src="source/assets/screenshots/portfolio/port-us1-extra-list-editor.png" alt="Add to My Portfolio ETF list editor" width="420" />

6. 使用 `Add as new` 創建新的 My Portfolio，並從 `My portfolios` 打開確認。
7. 使用 `Add to existing` 將配置加入已有 My Portfolio，並確認持倉結果更新。
8. 從 Model Portfolio 選擇 `Start analysis`，瀏覽只讀的分析與建議流程。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US1-AC01 | 可見 Portfolio 標題和三個標簽——Recommended、My portfolios、Watchlist，且已選中 Recommended。 | US-PORT-01 | Integration | Must |
| US1-AC02 | 每張已載入的 Model Portfolio 卡片均使用後端資料展示標題、回報範圍、風險等級標簽、期限、資產類別數量和資產配置可視化。 | US-PORT-01 | Integration | Must |
| US1-AC03 | 每張 Model Portfolio 卡片顯示與該 Model Portfolio 對應的 Reference 說明。 | US-PORT-01 | Integration | Must |
| US1-AC04 | View details 打開所選 Model Portfolio，而非其他目錄項目。 | US-PORT-01 | Integration | Must |
| US1-AC05 | 首次打開或刷新 Model Portfolio 目錄時顯示載入狀態；完成後以當前返回的 Model Portfolio 替換占位。 | US-PORT-01 | Integration | Must |
| US1-AC06 | 詳情頭部展示所選 Model Portfolio 的標題、回報、風險、期限和摘要。 | US-PORT-01 | Integration | Must |
| US1-AC07 | 詳情事實值與目錄卡片及當前 Model Portfolio 資料一致，不沿用先前打開的 Model Portfolio 內容。 | US-PORT-01 | Integration | Must |
| US1-AC08 | 參考說明以专用的來源/參考樣式顯示，並與目錄卡片上的說明一致。 | US-PORT-01 | Integration | Must |
| US1-AC09 | 配置卡展示資產類別分組及其 ETF 代碼；顯示的 ETF 數量和資產類別數量與返回的詳情一致。 | US-PORT-01 | Integration | Must |
| US1-AC10 | ETF 配置區顯示 Total 100%，每行展示代碼、名稱、資產類別標簽、目標權重，以及可用的發行方/最新價格/1 年回報元資料。 | US-PORT-01 | Integration | Must |
| US1-AC11 | 選擇 ETF 行會打開匹配的 ETF 詳情；返回僅關閉該浮層，不丟失 Model Portfolio 詳情狀態。 | US-PORT-01 | Integration | Must |
| US1-AC12 | 從 ETF 詳情返回後仍停留在當前 Model Portfolio 詳情，配置內容和已載入狀態保持不變。 | US-PORT-01 | Integration | Must |
| US1-AC13 | 載入狀態明確說明蒙特卡洛模擬正在運行；資料可用前，不得以編造的點顯示圖表。 | US-PORT-01 | Integration | Must |
| US1-AC14 | 圖表區分歷史、P50 預測、P25–P75 和 P2.5–P97.5 區間、Today、初始價值、軸標簽及預測標註。 | US-PORT-01 | Integration | Must |
| US1-AC15 | 圖表下方摘要值與圖表的起始價值、配置期限、P50 終點及 P2.5–P97.5 範圍一致。 | US-PORT-01 | Integration | Must |
| US1-AC16 | 水平拖動會改變可見時間線，同時使視圖保持在可用的歷史/預測範圍內。 | US-PORT-01 | Integration | Must |
| US1-AC17 | 捏合會改變可見時間窗口；縮放至邊界後不會顯示可用日期範圍外的資料，軸標簽和繪制值不越出圖表區域。 | US-PORT-01 | Integration | Must |
| US1-AC18 | 選擇有效歷史點顯示對應時間和值的十字準線。僅歷史偏移點可提供回測操作，未來預測點不可提供。 | US-PORT-01 | Integration | Must |
| US1-AC19 | Generate backtest 顯示載入狀態，隨後添加含更新圖例的回測百分位區間/中位數和實際序列。 | US-PORT-01 | Integration | Must |
| US1-AC20 | Hide backtest 移除生成的回測，但不移除原始歷史或預測。 | US-PORT-01 | Integration | Must |
| US1-AC21 | 預測標記為 Partial 時顯示對應的 Data coverage，並繼續使用當前 Model Portfolio 的可用資料，不沿用其他 Model Portfolio 的圖表結果。 | US-PORT-01 | Integration | Must |
| US1-AC22 | 預測明確描述為示意性/僅供研究，不得表述為保證的預測。 | US-PORT-01 | Integration | Must |
| US1-AC23 | 保存請求成功後，詳情控件才從空心星標變為實心星標。 | US-PORT-01 | Integration | Must |
| US1-AC24 | Watchlist 計數增加，且 Model Portfolio 以相同標題、事實信息、配置和 Reference 出現在 Watchlist 中。 | US-PORT-01 | Integration | Must |
| US1-AC25 | 可從 Watchlist 打開已保存的 Model Portfolio。 | US-PORT-01 | Integration | Must |
| US1-AC26 | 移除已保存的 Model Portfolio 會使其從 Watchlist 消失並减少計數；當不再有已保存的 Model Portfolio 時，顯示明確的 No portfolios saved 狀態。 | US-PORT-01 | Integration | Must |
| US1-AC27 | 返回 Recommended 後再次打開同一 Model Portfolio，其星標狀態與 Watchlist 中的最終保存狀態一致。 | US-PORT-01 | Integration | Must |
| US1-AC28 | Add to My Portfolio 頁面為所選 Model Portfolio 打開，並展示配置概覽、Model Portfolio 標題、風險/回報背景及默認建模金額。 | US-PORT-01 | Integration | Must |
| US1-AC29 | 修改總價值會在保持當前歸一化配置權重的前提下，重新計算 ETF 金額和數量。 | US-PORT-01 | Integration | Must |
| US1-AC30 | 拖動行業邊界僅改變相鄰兩個分組；到達可拖動邊界後繼續拖動不再降低該分組，且各分組不出現負權重、總和保持 100%。 | US-PORT-01 | Integration | Must |
| US1-AC31 | 拖動 ETF 拆分會改變該分組內 ETF，保持分組總和不變，並更新組內及總體配置百分比。 | US-PORT-01 | Integration | Must |
| US1-AC32 | 從 Visual 切換至 List 模式時，當前金額和權重會按界面顯示的最新價格轉換為 ETF 份額；修改份額會重新計算總價值、分組權重、ETF 權重及配置可視化。 | US-PORT-01 | Integration | Must |
| US1-AC33 | 從 List 切回 Visual 模式時，當前份額會轉換為對應的總金額和歸一化權重；反複切換不會丟失最新編輯，且兩種模式均不允許負份額或負權重。 | US-PORT-01 | Integration | Must |
| US1-AC34 | 進入確認步驟時，摘要使用最後一次 Visual/List 編輯後的金額、權重和份額，不恢複為初始配置。 | US-PORT-01 | Integration | Must |
| US1-AC35 | 確認步驟展示目標名稱、添加總額、ETF 數量、每只 ETF 的權重/金額/添加數量以及結果數量。 | US-PORT-01 | Integration | Must |
| US1-AC36 | 當 My Portfolio 名稱為空或創建請求進行中時，Confirm 被禁用。 | US-PORT-01 | Integration | Must |
| US1-AC37 | 創建成功後，新名稱出現在 My portfolios 中；持倉數與確認摘要一致，基礎貨幣與創建時選擇一致。 | US-PORT-01 | Integration | Must |
| US1-AC38 | 重新打開或刷新後，持倉、數量、配置和價值仍與確認結果一致。 | US-PORT-01 | Integration | Must |
| US1-AC39 | UI 說明已創建研究型 My Portfolio，未發生下單、交易或執行。 | US-PORT-01 | Integration | Must |
| US1-AC40 | 創建請求進行中時 Confirm 不可重複觸發；完成後列表只出現一個對應的新 My Portfolio。 | US-PORT-01 | Integration | Must |
| US1-AC41 | 目標選擇器列出當前 My Portfolio，並顯示各項的名稱、價值、持倉數和配置摘要。 | US-PORT-01 | Integration | Must |
| US1-AC42 | 預覽載入完成前 Confirm 不可用。 | US-PORT-01 | Integration | Must |
| US1-AC43 | 預覽展示已有價值、待添加 ETF 行、Model Portfolio 權重、金額、最新價格、添加數量和結果數量。 | US-PORT-01 | Integration | Must |
| US1-AC44 | 確認後更新所選已有 My Portfolio；列表和詳情刷新後顯示新的持倉結果。 | US-PORT-01 | Integration | Must |
| US1-AC45 | 重新打開目標後，預覽中的已有代碼顯示合並後的數量，預覽中的新增代碼顯示為新持倉。 | US-PORT-01 | Integration | Must |
| US1-AC46 | 從目標選擇或確認頁返回時，當前編輯配置保持不變；最終添加結果與最後確認的預覽一致。 | US-PORT-01 | Integration | Must |
| US1-AC47 | Analysis Workspace 在 Holdings 打開，來源標題與所選 Model Portfolio 一致，並按 Model Portfolio ETF 配置預載入代碼、份額、價值和歸一化權重。 | US-PORT-01 | Integration | Must |
| US1-AC48 | 對 Model Portfolio 草稿的編輯僅作用於工作副本，不會創建或修改 My Portfolio；由於來源不是 My Portfolio，建議結果不顯示 Apply to My Portfolio 控件。 | US-PORT-01 | Integration | Must |
| US1-AC49 | `Analyze draft portfolio` 使用當前編輯後的 Model Portfolio 草稿；分析、診斷和建議的共同行為符合用戶故事 4，且不會複用其他來源的舊結果。 | US-PORT-01 | Integration | Must |
---

<a id="us-port-02"></a>

## User Story 2 - 創建、編輯和維護 My Portfolio

**Story ID:** `US-PORT-02`  
**用戶故事：** 作為用戶，我希望創建和維護已保存的 ETF My Portfolio，包括其持倉和 Baseline Snapshot 歷史記錄。  
**Video:** [US-PORT-02 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/I9gxw6Uugiw5RxkSJ91jVHKipMf)

### Walkthrough

1. 打開 `Portfolio > My portfolios`，查看已保存的 portfolios，並進入 `New Portfolio`。

**Screenshot** — PORT-US2-01：`My portfolios` 列表、`New` 入口、saved portfolios、value、holdings count、asset mix 和 drift。

<img src="source/assets/screenshots/portfolio/port-us2-01-my-portfolios-list.png" alt="My portfolios list" width="420" />

**Screenshot** — PORT-US2-02：`New Portfolio` 初始狀態，包含 name、base currency、`Initial holdings`、Add ETF 入口和 research-only 邊界。

<img src="source/assets/screenshots/portfolio/port-us2-02-create-initial-holdings.png" alt="New Portfolio initial holdings state" width="420" />

2. 輸入名稱和 base currency，添加初始 ETF holdings，然後創建並打開新的 My Portfolio。
3. 查看 My Portfolio 的概覽、配置、預測和持倉，並保存一個 `Baseline Snapshot`。
4. 進入 `Edit`，調整持倉數量，並使用 `Add ETF` 或移除操作更新 portfolio。

**Screenshot** — PORT-US2-03：My Portfolio `Editing` 頁面，包含 value/holdings/status、weights、share steppers、remove controls 和 `Add ETF`。

<img src="source/assets/screenshots/portfolio/port-us2-03-edit-holdings.png" alt="My Portfolio holdings editor" width="420" />

5. 返回 `Baseline snapshots`，查看和管理編輯前後的歷史快照。

**Screenshot** — PORT-US2-04：`Baseline snapshots` history、保存入口、search、兩個 saved snapshots 和所選 snapshot 的 ETF details。

<img src="source/assets/screenshots/portfolio/port-us2-04-baseline-history.png" alt="Baseline snapshots history" width="420" />

6. 從列表移除一個不再需要的 My Portfolio，並確認其他 portfolios 不受影響。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US2-AC01 | 首次打開或刷新時顯示載入狀態；完成後列表反映當前保存的 My Portfolio。 | US-PORT-02 | Integration | Must |
| US2-AC02 | 新建 My Portfolio 表單提供 HKD、USD、CNY、EUR 和 GBP 作為基礎貨幣。 | US-PORT-02 | Integration | Must |
| US2-AC03 | 名稱為空、存在非正數量的初始持倉或創建請求進行中時，右上角創建勾選按鈕不可用。 | US-PORT-02 | Integration | Must |
| US2-AC04 | ETF 選擇器支持代碼/名稱/發行方搜尋、排序指標、適用周期/維度、方向和重置；有效 ETF 以界面提供的默認值加入，已暫存 ETF 顯示 Added 且不可重複選擇。 | US-PORT-02 | Integration | Must |
| US2-AC05 | 無匹配搜尋顯示無結果狀態；清除搜尋後恢複 ETF 排行列表和結果數量。 | US-PORT-02 | Integration | Must |
| US2-AC06 | Initial holdings 支持 +、−、直接輸入和刪除；這些操作只修改創建草稿，最終有效數量反映在創建結果中。 | US-PORT-02 | Integration | Must |
| US2-AC07 | 創建後，My Portfolio 出現在列表中，顯示名稱、總價值、持倉數、資產配置、可用時的前一日回報，以及可用時基於 Baseline Snapshot 的偏離。 | US-PORT-02 | Integration | Must |
| US2-AC08 | 從列表打開新建 My Portfolio 後，名稱、基礎貨幣、初始持倉數量和價值與創建草稿一致。 | US-PORT-02 | Integration | Must |
| US2-AC09 | 創建流程清楚說明它創建的是研究型 My Portfolio，不會下單。 | US-PORT-02 | Integration | Must |
| US2-AC10 | 頭部展示所選 My Portfolio 的名稱、持倉數、總價值和類型；估值資料不完整時顯示對應的 Partial 或 Unavailable 狀態。 | US-PORT-02 | Integration | Must |
| US2-AC11 | 配置分組、ETF 數量和持倉權重與當前已保存持倉一致。 | US-PORT-02 | Integration | Must |
| US2-AC12 | 共享預測行為符合用戶故事 1，且使用該 My Portfolio 的已保存價值，而非此前打開的 Model Portfolio。 | US-PORT-02 | Integration | Must |
| US2-AC13 | 持倉行展示代碼、名稱、權重、份額、市值、成本和可用 ETF 元資料；選擇某行會打開匹配的 ETF 浮層。 | US-PORT-02 | Integration | Must |
| US2-AC14 | 保存會創建當前持倉、數量、價值和權重的 Baseline Snapshot。 | US-PORT-02 | Integration | Must |
| US2-AC15 | 顯示成功 Toast，UAT Before Edit 被加入 Baseline History，並帶有時間戳、價值和最高權重背景信息。 | US-PORT-02 | Integration | Must |
| US2-AC16 | 打開已保存的 Baseline Snapshot 詳情會顯示持倉數、總額、狀態以及保存的 ETF 數量和權重。 | US-PORT-02 | Integration | Must |
| US2-AC17 | Edit 頁面標明所選 My Portfolio，並顯示當前價值、持倉數、狀態和可編輯的持倉行。 | US-PORT-02 | Integration | Must |
| US2-AC18 | +、−、有效的正數量輸入及勾選提交會更新並持久化所選 ETF 數量；嘗試產生非正數量時不會提交該值。 | US-PORT-02 | Integration | Must |
| US2-AC19 | 提交成功後，刷新或重新打開仍顯示更新後的數量、價值、權重和配置。 | US-PORT-02 | Integration | Must |
| US2-AC20 | Add ETF 可按代碼、名稱或發行方搜尋，並可調整排序指標、適用維度和方向；結果數量和無結果狀態均可見。 | US-PORT-02 | Integration | Must |
| US2-AC21 | 已持有的 ETF 標記為 Added、被禁用，且無法通過選擇器重複添加。 | US-PORT-02 | Integration | Must |
| US2-AC22 | 選擇有效 ETF 後，選擇器關閉，該 ETF 以默認值加入 Edit 列表；重新打開詳情後仍存在。 | US-PORT-02 | Integration | Must |
| US2-AC23 | 移除 ETF 僅刪除該代碼，並刷新列表、價值、權重和配置。 | US-PORT-02 | Integration | Must |
| US2-AC24 | 數量編輯、添加和移除只影響對應 ETF；未操作的持倉保持原數量和成本信息。 | US-PORT-02 | Integration | Must |
| US2-AC25 | Edit 在沒有待提交修改時可以直接關閉，且不會額外改變已保存持倉。 | US-PORT-02 | Integration | Must |
| US2-AC26 | 每次創建僅添加一個 Baseline Snapshot，選中並載入其詳情，同時更新保存計數。 | US-PORT-02 | Integration | Must |
| US2-AC27 | 搜尋可按 Baseline Snapshot 標簽、日期或最高權重 ETF 代碼篩選，並可清除。 | US-PORT-02 | Integration | Must |
| US2-AC28 | 重命名拒絕空名稱，持久化有效的新標簽，並更新歷史和所選詳情。 | US-PORT-02 | Integration | Must |
| US2-AC29 | 刪除僅移除所選 Baseline Snapshot 並减少計數；若刪除當前選中項，頁面不再顯示其詳情，並選中剩餘有效項或顯示空狀態。 | US-PORT-02 | Integration | Must |
| US2-AC30 | UAT Before Edit 保留操作 2.4 前的持倉，而 UAT Current State 與操作 2.4 後的當前 My Portfolio 一致。 | US-PORT-02 | Integration | Must |
| US2-AC31 | 重新打開 Baseline snapshots 後，保留的 Baseline Snapshot 及重命名結果仍存在，被刪除的臨時 Baseline Snapshot 不再出現。 | US-PORT-02 | Integration | Must |
| US2-AC32 | 無持倉 My Portfolio 可正常打開；詳情明確顯示無持倉、配置不可用和預測不可用狀態，不以零值或示例配置冒充有效結果。 | US-PORT-02 | Integration | Must |
| US2-AC33 | 移除需要點名 My Portfolio 並說明不可撤銷的破壞性確認；取消後 My Portfolio 保持不變。 | US-PORT-02 | Integration | Must |
| US2-AC34 | 確認後從列表移除該 My Portfolio，且不刪除其他 My Portfolio。 | US-PORT-02 | Integration | Must |
---

<a id="us-port-03"></a>

## User Story 3 - 生成 AI Portfolio Recommendation

**Story ID:** `US-PORT-03`  
**用戶故事：** 作為用戶，我希望回答適配度問卷，獲得可解釋的 ETF 建議，檢查生成的結果並保存到 My portfolios。  
**Video:** [US-PORT-03 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/NSZ1wCHloiD8QAkYSDsj9CNtpje)

### Walkthrough

1. 從 `Portfolio > Recommended` 打開 `Find Your Ideal Portfolio`，完成四題問卷並查看回答進度。

**Screenshot** — `Find my portfolio` 問卷起始狀態，展示四步結構、`0/4 answered`、Goal options 和尚未啟用的 `Next`。

<img src="source/assets/screenshots/portfolio/port-us3-extra-quiz-start.png" alt="Recommendation quiz initial state" width="420" />

**Screenshot** — PORT-US3-01：問卷進入 Question 2 後的進度狀態，顯示已完成 Goal、當前 Time step、`1/4 answered` 和 horizon options。

<img src="source/assets/screenshots/portfolio/port-us3-01-recommendation-quiz.png" alt="Recommendation quiz progress" width="420" />

2. 提交答案，觀察 Recommendation 的生成進度和 pending states。

**Screenshot** — PORT-US3-02：Recommendation 正在生成的 Step 4，顯示 progress、pending header/holdings、loading projection 和 pending metrics。

<img src="source/assets/screenshots/portfolio/port-us3-02-generation-progress.png" alt="Recommendation generation progress" width="420" />

3. 查看生成結果的風險畫像、projection、portfolio metrics、Recommendation build 和 ETF holdings。

**Screenshot** — PORT-US3-03：生成完成的 `Growth Focus ETF Portfolio`，包含 AI-assisted/risk/currency/holdings 頭部、projection 和 `Add to My Portfolio`。

<img src="source/assets/screenshots/portfolio/port-us3-03-recommendation-result.png" alt="Generated Portfolio recommendation" width="420" />

**Screenshot** — Recommendation 的 expected return、volatility、Sharpe、asset mix、generated weights 和 `Recommendation build`。

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-build.png" alt="Recommendation metrics and build" width="420" />

**Screenshot** — `How this was built` 的 screening process、holdings table、portfolio characteristics 和 constraint note。

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-build-holdings.png" alt="Recommendation build holdings table" width="420" />

**Screenshot** — 生成結果的完整 `ETF holdings`、target weights、deterministic-engine disclosure 和 `Back to adjust answers`。

<img src="source/assets/screenshots/portfolio/port-us3-extra-recommendation-etf-holdings.png" alt="Recommendation ETF holdings" width="420" />

4. 返回問卷調整一個答案，重新生成並確認結果隨新答案更新。
5. 選擇 `Add to My Portfolio`，審閱配置，並選擇 `Add as new` 或 `Add to existing`。

**Screenshot** — PORT-US3-04：Recommendation 的 `Add to existing` 目標選擇頁，展示可選 My Portfolio、value、holdings count、asset mix 和 drift。

<img src="source/assets/screenshots/portfolio/port-us3-04-save-recommendation.png" alt="Recommendation Add to existing target selection" width="420" />

**Screenshot** — Recommendation 進入 `Add to My Portfolio` 後的 Visual editor，下一步可選擇 `Add to existing` 或 `Add as new`。

<img src="source/assets/screenshots/portfolio/port-us3-extra-add-to-portfolio-editor.png" alt="Recommendation Add to My Portfolio editor" width="420" />

6. 從 `My portfolios` 打開目標 portfolio，確認 Recommendation 已按所選方式保存。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US3-AC01 | 問卷恰好顯示四個進度步驟及當前問題/已回答數量。 | US-PORT-03 | Integration | Must |
| US3-AC02 | 每個問題均展示輔助文本和可選擇的選項卡，含標簽、詳情、徽標及風險/強度背景。 | US-PORT-03 | Integration | Must |
| US3-AC03 | 在當前問題已有答案前，Next/See recommendation 始終禁用。 | US-PORT-03 | Integration | Must |
| US3-AC04 | 每個問題僅可選擇一個選項，且 Back/Next 導航保留所有先前答案。 | US-PORT-03 | Integration | Must |
| US3-AC05 | 完成問卷後，結果頁顯示由答案組合得出的風險等級——Conservative、Moderate、Growth 或 Opportunistic——並進入該等級對應的建議生成狀態。 | US-PORT-03 | Integration | Must |
| US3-AC06 | 頁面立即進入可見的生成狀態；不得短暫顯示上一次運行留下的過期建議。 | US-PORT-03 | Integration | Must |
| US3-AC07 | 進度傳達四個階段：Screen ETF universe、Optimize allocation、Draft AI explanation、Check wording。 | US-PORT-03 | Integration | Must |
| US3-AC08 | 待定的頭部、預測、構建、說明和 ETF 行均清楚標記為生成中/待定，而非填入虛構的最終數值。 | US-PORT-03 | Integration | Must |
| US3-AC09 | 在存在明確 Recommendation 結果前，保存操作不可用。 | US-PORT-03 | Integration | Must |
| US3-AC10 | 頭部展示生成結果的標題、風險等級、基礎貨幣、持倉數和 AI 輔助/僅供研究摘要。 | US-PORT-03 | Integration | Must |
| US3-AC11 | 預期年化回報、波動率、夏普比率、資產類別配置、ETF 數量和生成權重均來自返回的建議。 | US-PORT-03 | Integration | Must |
| US3-AC12 | 預測基於生成的 ETF 權重和建模金額計算，並滿足用戶故事 1 中確立的交互標準。 | US-PORT-03 | Integration | Must |
| US3-AC13 | Recommendation Build 展示本次構建的風險畫像、篩選與優化摘要、截至日期、候選範圍、刪除原因和警告，並與最終 ETF 持倉對應。 | US-PORT-03 | Integration | Must |
| US3-AC14 | AI 生成時，說明標記為 AI-generated，並能渲染段落、強調、項目符號、引用和表格，且不顯示原始 Markdown 標記。 | US-PORT-03 | Integration | Must |
| US3-AC15 | 說明內容與本次 Recommendation Build 和生成持倉一致，並清楚說明歷史資料、研究用途和非收益保證邊界。 | US-PORT-03 | Integration | Must |
| US3-AC16 | ETF 行展示代碼、名稱、資產類別、生成的目標權重和進度；顯示權重在舍入容差內合計 100%。 | US-PORT-03 | Integration | Must |
| US3-AC17 | 返回問卷保留當前答案。重新生成會清除先前建議，並在新結果前顯示生成狀態。 | US-PORT-03 | Integration | Must |
| US3-AC18 | Recommendation 全程標明 AI 輔助和僅供研究；在用戶明確選擇 Add to My Portfolio 並完成確認前，不會保存到 My portfolios。 | US-PORT-03 | Integration | Must |
| US3-AC19 | 添加頁面使用生成的建議、建模金額、基礎貨幣和可用的最新 ETF 價格。 | US-PORT-03 | Integration | Must |
| US3-AC20 | Visual/List 編輯以及兩種目標選項均符合操作 1.5–1.7 的標準。 | US-PORT-03 | Integration | Must |
| US3-AC21 | 使用 Add as new 時顯示確認，且新 My Portfolio 以預期的名稱、基礎貨幣和持倉數出現在 My portfolios 中。 | US-PORT-03 | Integration | Must |
| US3-AC22 | 使用 Add to existing 會合並數量：新代碼被添加，已有代碼獲得相加後的數量和加權成本。 | US-PORT-03 | Integration | Must |
| US3-AC23 | 僅打開添加頁或返回 Recommendation 不會寫入 My portfolios；只有完成目標選擇和確認後才產生對應保存結果。 | US-PORT-03 | Integration | Must |
---

<a id="us-port-04"></a>

## User Story 4 - 分析 Portfolio 並審閱 AI 建議

**Story ID:** `US-PORT-04`  
**用戶故事：** 作為用戶，我希望分析 My Portfolio 或 Model Portfolio 的工作草稿，選擇重要的診斷問題，並審閱 AI 輔助的考慮因素和量化 `Suggested actions`；當來源是 My Portfolio 時，我還可以編輯並應用這些操作。  
**Video:** [US-PORT-04 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/Ey4Bw3xDxiPeETk3yBBjhxOHpdf)

### Walkthrough

1. 從一個 My Portfolio 選擇 `Start analysis`，查看並按需要調整草稿持倉。

**Screenshot** — PORT-US4-01：`Draft Portfolio > Holdings` 的 analysis 前可編輯草稿，包含 shares 輸入與步進控件、刪除操作、`Add ETF`、尚未解鎖的 `Analysis / Suggestions`，以及 `Analyze draft portfolio`。

<img src="source/assets/screenshots/portfolio/port-us4-01-analysis-holdings.png" alt="Draft Portfolio editable holdings" width="420" />

2. 選擇 `Analyze draft portfolio`，查看 Analysis overview、Holdings、Exposure breakdown 和 Data coverage。

**Screenshot** — PORT-US4-02：`Draft Portfolio > Analysis`，包含 `Data coverage`、`Analysis overview`、score、value/positions、HHI、Effective N 和多維 diagnostics。

<img src="source/assets/screenshots/portfolio/port-us4-02-analysis-overview.png" alt="Draft Portfolio Analysis overview" width="420" />

**Screenshot** — Analysis 結果中的 read-only Holdings table 和 `Exposure breakdown`；該表不是運行分析前的 editable Holdings 草稿。

<img src="source/assets/screenshots/portfolio/port-us4-extra-analysis-holdings-exposure.png" alt="Analysis holdings table and exposure breakdown" width="420" />

3. 查看並選擇希望建議覆蓋的 Diagnosis，然後生成 recommendations。

**Screenshot** — PORT-US4-03：`Exposure breakdown` 的 Sector/Region/Currency，以及 `Diagnosis` 的 Found/Selected/Hidden counts、selected finding 和 generate action。

<img src="source/assets/screenshots/portfolio/port-us4-03-diagnosis-selection.png" alt="Exposure breakdown and Diagnosis selection" width="420" />

4. 審閱所選診斷範圍、AI considerations、candidate pool 和量化 `Suggested actions`。

**Screenshot** — PORT-US4-04：`Suggestions` 中的 selected diagnosis scope、`AI drafted` boundary、research consideration、candidate pool 和量化 `Suggested actions` preview。

<img src="source/assets/screenshots/portfolio/port-us4-04-suggested-actions.png" alt="AI considerations and Suggested actions" width="420" />

5. 對 My Portfolio 來源審閱或調整目標份額，應用方案並確認 portfolio 更新。
6. 從 Model Portfolio 再次啟動 Analysis Workflow，確認 `Suggested actions` 為只讀結果。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US4-AC01 | Analysis Workspace 在 Holdings 中打開，標明來源 My Portfolio，並預載入其已保存的 ETF 持倉、數量、成本、價值和權重。 | US-PORT-04 | Integration | Must |
| US4-AC02 | 在存在分析前，Analysis 保持鎖定；在存在建議前，Suggestions 保持鎖定。 | US-PORT-04 | Integration | Must |
| US4-AC03 | +/− 會立即更新草稿；直接輸入僅在數值變化時顯示勾選確認。確認後重算價值和權重、清除舊分析/建議，且不修改已保存的 My Portfolio。 | US-PORT-04 | Integration | Must |
| US4-AC04 | Add ETF 支持目錄搜尋和排序控件；重複項標記為 Added 且無法再次添加，有效的新 ETF 可加入當前草稿。 | US-PORT-04 | Integration | Must |
| US4-AC05 | 移除 ETF 或 Clear all 僅影響工作草稿，直至顯式執行 Apply to My Portfolio。 | US-PORT-04 | Integration | Must |
| US4-AC06 | 草稿為空時 `Analyze draft portfolio` 被禁用；分析運行期間只顯示進度，不提供第二個分析操作。 | US-PORT-04 | Integration | Must |
| US4-AC07 | `Analyze draft portfolio` 切換至 `Analysis` 標簽，並持續顯示進度，直至當前草稿的分析完成或失敗。 | US-PORT-04 | Integration | Must |
| US4-AC08 | 完成後的概覽展示當前草稿可用的總價值/基礎貨幣、頭寸數、HHI、Effective N、分散化、集中度、地域、外匯、費用效率和流動性信息。 | US-PORT-04 | Integration | Must |
| US4-AC09 | 不可用指標顯示為 Unavailable/—；若可用資料不足以形成總體評分，該評分同樣顯示為不可用，不得以零值代替。 | US-PORT-04 | Integration | Must |
| US4-AC10 | Holdings 表顯示 Symbol、QTY、COST/UNIT、MKT VALUE、WEIGHT 和 CCY，並可橫向滚動；不可用值顯示為 —，不顯示占位收益。 | US-PORT-04 | Integration | Must |
| US4-AC11 | `Exposure breakdown` 顯示 Sector、Region 和 Currency，並使用同一資料在 `Pie` 和 `List` 間一致切換。 | US-PORT-04 | Integration | Must |
| US4-AC12 | 分析免責聲明始終可見；響應包含部分/不可用指標或 warning 時，頁面顯示藍色 Data coverage，說明受影響的資料範圍，而不將其稱為 AI fallback。 | US-PORT-04 | Integration | Must |
| US4-AC13 | 當前結果只對應本次草稿；後續返回 Holdings 修改數量時，舊 Analysis 和 Suggestions 會被清除並重新鎖定。 | US-PORT-04 | Integration | Must |
| US4-AC14 | 診斷項展示嚴重性、標題、指標/閾值和選擇狀態，返回項默認全選。 | US-PORT-04 | Integration | Must |
| US4-AC15 | 當前分析返回的診斷項數量、嚴重程度和選中狀態與頁面計數一致。 | US-PORT-04 | Integration | Must |
| US4-AC16 | 切換診斷項後，Found/Selected/Hidden 計數立即更新；生成結果列出的診斷範圍僅包含提交時選中的項目。 | US-PORT-04 | Integration | Must |
| US4-AC17 | 選擇零項時，UI 指示用戶至少選擇一項，且 `Generate Recommendations from <n> Selected` 被禁用。 | US-PORT-04 | Integration | Must |
| US4-AC18 | 分析尚未完成時生成 recommendation 的操作不可用；建議生成期間只顯示生成進度，不提供可再次觸發的生成操作。 | US-PORT-04 | Integration | Must |
| US4-AC19 | 生成切換至 Suggestions，並顯示四個進度階段：Read selected diagnosis、Draft considerations、Apply safety guard、Prepare preview。 | US-PORT-04 | Integration | Must |
| US4-AC20 | 結果標明用於生成建議的診斷項。 | US-PORT-04 | Integration | Must |
| US4-AC21 | AI 生成的考慮因素顯示 AI drafted，並帶有研究用途和 AI 可能出錯的提示。 | US-PORT-04 | Integration | Must |
| US4-AC22 | 考慮因素只覆蓋提交時選中的診斷項；未選中的診斷不會出現在本次建議範圍和對應考慮因素中。 | US-PORT-04 | Integration | Must |
| US4-AC23 | 每項考慮因素展示觀察、理由、預期影響、置信度、相關問題和僅供研究措辭，不含訂單執行語言。 | US-PORT-04 | Integration | Must |
| US4-AC24 | `Suggested actions` 展示可行性、行數、換手率、新增候選數量/代碼及風險等級。 | US-PORT-04 | Integration | Must |
| US4-AC25 | 每個 Suggested Action 行展示代碼/名稱、Held/New 狀態、當前份額/權重、目標份額/權重、數量和價值差額，以及 Model target 比較。 | US-PORT-04 | Integration | Must |
| US4-AC26 | `Suggested actions` 支持滚動查看全部 Held/New 行，並在編輯目標後立即更新對應的數量和價值差額。 | US-PORT-04 | Integration | Must |
| US4-AC27 | Recommendation candidate pool 僅展示當前建議流程允許考慮的 ETF 代碼，並與 `Suggested actions` 中的新增候選對應。 | US-PORT-04 | Integration | Must |
| US4-AC28 | 目標份額僅接受非負值，並重新計算目標權重、份額差、權重差和價值差。 | US-PORT-04 | Integration | Must |
| US4-AC29 | Reset 清除用戶覆蓋值，並恢複預覽最初給出的目標方案。 | US-PORT-04 | Integration | Must |
| US4-AC30 | Apply to My Portfolio 僅在來源為 My Portfolio、方案可行、存在可顯示操作行、價格查詢完成且所有正目標都有可用價格時啟用；不滿足條件時保持禁用。 | US-PORT-04 | Integration | Must |
| US4-AC31 | 應用會以編輯後的正目標更新已保存持倉，保留未受影響的有效持倉，關閉工作區並刷新詳情。 | US-PORT-04 | Integration | Must |
| US4-AC32 | 重新打開可證明數量和權重/價值已更新；先前分析/建議不再被視為對修改後的持倉有效。 | US-PORT-04 | Integration | Must |
| US4-AC33 | Apply to My Portfolio 請求進行中時不可重複觸發；成功後只產生一次持倉更新並返回刷新後的詳情。 | US-PORT-04 | Integration | Must |
| US4-AC34 | Model Portfolio 可以作為草稿來源完成 Holdings、Analysis、Diagnosis 和 Suggestions 的同一套 Analysis Workflow。 | US-PORT-04 | Integration | Must |
| US4-AC35 | `Suggestions` 展示本次選定的診斷範圍、AI 考慮因素和量化 `Suggested actions`，不會僅因來源為 Model Portfolio 而跳過結果。 | US-PORT-04 | Integration | Must |
| US4-AC36 | Model Portfolio 的 `Suggested actions` 以只讀列表展示，每行可查看 Current、Target、Change 和價值差額，但不提供 Target shares 輸入或步進控件。 | US-PORT-04 | Integration | Must |
| US4-AC37 | Model Portfolio 結果不顯示 Reset 或 Apply to My Portfolio；關閉工作區不會修改該 Model Portfolio，也不會創建或更新 My Portfolio。 | US-PORT-04 | Integration | Must |
---

<a id="us-port-05"></a>

## User Story 5 - 根據 Baseline Snapshot 審閱

**Story ID:** `US-PORT-05`  
**用戶故事：** 作為用戶，我希望將今天的 My Portfolio 與有效的歷史 Baseline Snapshot 比較，了解配置偏離，編輯基於 Baseline Snapshot 的調整方案並應用。  
**Video:** [US-PORT-05 驗收視頻](https://jjpvro70sief.jp.larksuite.com/wiki/H1ULwBLKeiaEIKkEbQDjhRiepue)

### Walkthrough

1. 從一個 My Portfolio 打開 `Portfolio Review`，瀏覽可用的 Baseline Snapshots，並區分 `No changes` 與可審閱狀態。

**Screenshot** — PORT-US5-01：`Portfolio Review > Baseline`，同時顯示 `No changes` snapshot、selected snapshot、ETF summary 和 `Review allocation changes`。

<img src="source/assets/screenshots/portfolio/port-us5-01-baseline-selection.png" alt="Portfolio Review baseline selection" width="420" />

2. 選擇一個有變化的 Baseline Snapshot，查看 portfolio 摘要和 holdings drift。

**Screenshot** — PORT-US5-02：所選 Baseline Snapshot 的 current/baseline value、absolute drift 和 `Holding drift` table，逐行比較 Now、Baseline 和 Drift。

<img src="source/assets/screenshots/portfolio/port-us5-02-baseline-deviation.png" alt="Baseline Snapshot holding drift" width="420" />

3. 進入 `Analysis`，閱讀 drift status、driver summary、allocation changes 和 ETF quantity changes。

**Screenshot** — PORT-US5-03：Baseline comparison 的 `Analysis`，包含 status、allocation drift、current/baseline values、largest move 和 driver summary。

<img src="source/assets/screenshots/portfolio/port-us5-03-review-analysis.png" alt="Baseline review analysis" width="420" />

**Screenshot** — `Industry allocation changes`、`ETF movement detail` 和 quantity-difference summary。

<img src="source/assets/screenshots/portfolio/port-us5-extra-allocation-movements.png" alt="Baseline allocation and ETF movements" width="420" />

**Screenshot** — `Quantity changes` 中各 ETF 的 baseline/current/target quantities 和 value differences。

<img src="source/assets/screenshots/portfolio/port-us5-extra-quantity-changes.png" alt="Baseline quantity changes" width="420" />

4. 打開 `Suggestions`，審閱並按需要調整 Baseline-based target shares。

**Screenshot** — PORT-US5-04：可編輯的 baseline-based `Recommended ETF changes`，包含 target-share controls、`Reset suggestion` 和 `Apply to My Portfolio`。

<img src="source/assets/screenshots/portfolio/port-us5-04-adjustment-suggestions.png" alt="Editable baseline adjustment suggestions" width="420" />

5. 選擇 `Apply to My Portfolio`，返回 portfolio 並確認調整結果已更新。

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| US5-AC01 | Portfolio Review 在 Baseline 標簽打開，且僅列出該 My Portfolio 保存的快照。 | US-PORT-05 | Integration | Must |
| US5-AC02 | UI 說明 Baseline Snapshot 是已保存的參考配置，而不是手動配置的目標。 | US-PORT-05 | Integration | Must |
| US5-AC03 | UAT Current State 明顯禁用/變暗，標記為 No changes，並說明當前持倉與 Baseline Snapshot 相同。 | US-PORT-05 | Integration | Must |
| US5-AC04 | 先選中 UAT Before Edit 再點擊無變化的 Baseline Snapshot 時，UAT Current State 不會被選中，原選擇保持不變。 | US-PORT-05 | Integration | Must |
| US5-AC05 | 標記為 No changes 的 Baseline Snapshot 不會提供進入 Analysis 的操作，且頁面說明其持倉與當前狀態一致。 | US-PORT-05 | Integration | Must |
| US5-AC06 | 即使 Baseline Snapshot 無法選中以供審閱，Show ETF details 仍可用於檢查。 | US-PORT-05 | Integration | Must |
| US5-AC07 | 有變化的 Baseline Snapshot 變為 Selected，並獲得選中樣式。 | US-PORT-05 | Integration | Must |
| US5-AC08 | 展開的詳情展示保存的 ETF 數量和權重；折疊僅隱藏詳情面板。 | US-PORT-05 | Integration | Must |
| US5-AC09 | 偏離結果同時列出新增和已移除的 ETF，不得因某代碼只存在於當前持倉或 Baseline Snapshot 中而遺漏。 | US-PORT-05 | Integration | Must |
| US5-AC10 | 偏離表按重大變動排序，展示每個代碼的 Baseline Snapshot 權重、當前權重、數量差和帶符號的權重偏離。 | US-PORT-05 | Integration | Must |
| US5-AC11 | 摘要標明所選 Baseline Snapshot 的名稱、日期及總絕對偏離；Review allocation changes 現已啟用。 | US-PORT-05 | Integration | Must |
| US5-AC12 | Analysis 清楚標明正在比較當前持倉與所選 Baseline Snapshot。 | US-PORT-05 | Integration | Must |
| US5-AC13 | Analysis 顯示 Within range、Monitor drift 或 Review recommended 狀態，並展示當前價值、Baseline Snapshot 價值、最大變動和百分點偏離。 | US-PORT-05 | Integration | Must |
| US5-AC14 | `Driver summary` 標識最大增加/减少的敞口，並說明價格變動和/或數量變動是否有貢獻。 | US-PORT-05 | Integration | Must |
| US5-AC15 | `Industry allocation changes` 按 ETF 資產類別匯總 Baseline Snapshot 權重和當前權重，並展示帶符號的偏離。 | US-PORT-05 | Integration | Must |
| US5-AC16 | `ETF movement detail` 展示 Baseline Snapshot 權重、當前權重和數量，以及每項重大變動的通俗原因。 | US-PORT-05 | Integration | Must |
| US5-AC17 | `Quantity changes` 為關鍵行展示 Baseline Snapshot 數量、當前數量、目標數量、單位差和價值差。 | US-PORT-05 | Integration | Must |
| US5-AC18 | Baseline Snapshot 比較不得顯示 AI-generated、AI drafted 等 AI 標記，並明確呈現為基於所選快照的配置比較。 | US-PORT-05 | Integration | Must |
| US5-AC19 | Suggestions 僅在所選 Baseline Snapshot 的預覽載入完成後顯示目標方案；載入或切換範圍時不顯示上一份過期預覽。 | US-PORT-05 | Integration | Must |
| US5-AC20 | 範圍卡點名 Baseline Snapshot，並報告變更行數和總行數。 | US-PORT-05 | Integration | Must |
| US5-AC21 | 目標行展示當前份額/權重、Baseline Snapshot 權重、計算出的目標份額/權重、帶符號的變動、價值差和 Hold/Adjust 狀態。 | US-PORT-05 | Integration | Must |
| US5-AC22 | 默認方案按所選 Baseline Snapshot 生成可審閱的目標份額；Baseline Snapshot 中不存在的 ETF 可顯示為零目標。 | US-PORT-05 | Integration | Must |
| US5-AC23 | 目標值可編輯、非負，並立即重新計算顯示的權重和差額。 | US-PORT-05 | Integration | Must |
| US5-AC24 | Reset suggestion 移除覆蓋值，並重新設定計算出的默認目標。 | US-PORT-05 | Integration | Must |
| US5-AC25 | 在目標計算完成前 Apply to My Portfolio 被禁用；目標方案可用後才允許提交。 | US-PORT-05 | Integration | Must |
| US5-AC26 | Apply to My Portfolio 成功後關閉審閱並刷新 My Portfolio 詳情，詳情顯示已更新的保存持倉。 | US-PORT-05 | Integration | Must |
| US5-AC27 | 重新打開可證明已應用目標份額，且此前選中的 Baseline Snapshot 顯示更新後的比較結果。 | US-PORT-05 | Integration | Must |
| US5-AC28 | Apply to My Portfolio 請求進行中時不可重複觸發；完成後只產生一次持倉更新，重新打開詳情和 Portfolio Review 均顯示同一最終狀態。 | US-PORT-05 | Integration | Must |
