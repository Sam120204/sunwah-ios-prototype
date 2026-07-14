# Admin Module

## 模組說明

`Admin Portal` 是客戶端應用背後的運營控制台。本模組的核心不是只瀏覽後台頁面，而是證明後台與移動端使用同一組後端資源：管理員對 `ETF Catalogue` 和 `Model Portfolios` 的變更，在刷新移動端後可以得到驗證；同時管理員可通過 `Dashboard`、`Users` 和 `User Portfolios` 監控平台狀態。

## User Story 索引

| Story | User Story | 核心路徑 |
| --- | --- | --- |
| [US-ADM-01](#us-adm-01) | Admin Functional Acceptance | Dashboard + ETF Catalogue + Model Portfolios + operational visibility |

## 統一術語

| UI 原文 | 文檔含義 |
| --- | --- |
| `Admin Portal` | 面向內部管理員的運營控制台 |
| `Dashboard` | 平台資料與資源概覽頁 |
| `ETF Catalogue` | 管理客戶端可用 ETF universe 的後台頁面 |
| `Add by Ticker` | 通過 ticker lookup 快速添加 ETF 的流程 |
| `Add ETF manually` | 由管理員完整填寫 ETF 字段的添加流程 |
| `Model Portfolios` | 管理客戶端 Model Portfolio templates 的後台頁面 |
| `Users` | 搜尋與查看用戶賬號、驗證、狀態和風險畫像的頁面 |
| `User Portfolios` | 查看用戶所創建 My Portfolio 的運營頁面 |
| `published` / `draft` / `hidden` | Model Portfolio 的發布狀態；僅 `published` 對客戶端可見 |
| `active` / `inactive` | ETF 是否屬於客戶端 active product universe 的狀態 |

---

<a id="us-adm-01"></a>

## User Story 1 - 通過 `Admin Portal` 維護並核驗客戶端內容

**Story ID:** `US-ADM-01`  
**用戶故事：** 作為管理員，我希望維護 ETF 目錄和 Model Portfolio templates，並在移動端驗證變更，同時從統一後台查看用戶和 portfolio 運營信息。  

### Walkthrough

#### A. 查看 `Dashboard`

1. 登入 `Admin Portal` 並打開 `Dashboard`。
2. 展示 total users、ETF catalogue size、user portfolios、structured notes 和 ETF tier distribution 等概覽資料，說明這些資源來自與移動端共享的後端。

**Screenshot** — ADM-US1-01：`Dashboard` 完整概覽，包含主要 counters、ETF tier distribution 和最近活動。

<img src="source/assets/screenshots/admin/adm-us1-01-dashboard.png" alt="Admin Dashboard 概覽" width="900" />

#### B. 添加 ETF，並在移動端驗證

3. 先在 iOS simulator 搜尋一只當前不存在或未啟用的測試 ETF，記錄找不到該 ETF 的基線狀態。
4. 切換到 `Admin Portal > ETF Catalogue`。展示按 symbol/name/issuer 搜尋，以及按 tier 或 asset class 篩選。
5. 展示 catalogue 中的 exchange、currency、asset class、region、sector、issuer、expense ratio 等字段。

**Screenshot** — `ETF Catalogue` 列表、search、tier / asset class filters，以及 ETF 維護字段。

<img src="source/assets/screenshots/admin/adm-us1-extra-etf-catalogue.png" alt="ETF Catalogue 列表與篩選" width="900" />

6. 使用 `Add by Ticker` 或 `Add ETF manually` 添加測試 ETF。若采用手動流程，填寫 symbol、name、exchange、currency、asset class、region、sector、issuer、inception date、expense ratio 和 tier。

**Screenshot** — `Add by Ticker` 對已存在的 `VOO` 顯示重複記錄校驗；此圖只證明校驗行為，不作為成功創建 ETF 的證據。

<img src="source/assets/screenshots/admin/adm-us1-extra-add-by-ticker-validation.png" alt="Add by Ticker 重複記錄校驗" width="900" />

7. 返回 simulator，刷新 ETF search/list，確認相同 ETF 已出現。

#### C. 停用 ETF，並在移動端驗證

8. 在 `ETF Catalogue` 選擇一只當前可在移動端搜尋到的測試 ETF，將其設為 inactive/deactivated。
9. 返回 simulator，刷新 ETF search/list，確認該 ETF 不再作為 active product 出現。

#### D. 修改 `Model Portfolios`，並在移動端驗證

10. 先在 simulator 打開一個已發布的 Model Portfolio，記錄其 title、display order、risk band、summary 和 ETF allocations 基線。
11. 切換到 `Admin Portal > Model Portfolios`。展示 template key、display order、title、risk band、return range、horizon、summary、reference note、status 和 ETF allocations。

**Screenshot** — `Model Portfolios` 管理列表，展示 template、顯示順序、風險、狀態和維護操作入口。

<img src="source/assets/screenshots/admin/adm-us1-extra-model-portfolios-list.png" alt="Model Portfolios 管理列表" width="900" />

12. 編輯一個容易識別且適合演示的字段，例如 title、display order、risk band、summary 或 allocation。若修改 allocation，確認總權重為 100%。保存並保持 template 為 `published`。
13. 返回 simulator，刷新或重新打開 Model Portfolio 頁面，確認客戶端顯示最新配置。

**Screenshot** — ADM-US1-05：`Create Model Portfolio` 表單，顯示主要配置字段、ETF allocations 和 `Total 100.00%`；發布狀態及保存後的客戶端結果仍需在視頻中連續核驗。

<img src="source/assets/screenshots/admin/adm-us1-05-model-portfolio-edit.png" alt="Create Model Portfolio 表單" width="900" />

14. 可選補充發布邊界：將专用測試 template 改為 `draft` 或 `hidden`，刷新客戶端確認不再出現；再恢複測試資料，避免影響後續演示。

#### E. 查看運營頁面

15. 打開 `Users`，展示 search、role/status filters，以及 verification status、account status、risk profile、last login、created date。使用測試用戶或對 PII 打碼。

**Screenshot** — `Users` 運營列表與篩選區域；可識別的 email 已脫敏。

<img src="source/assets/screenshots/admin/adm-us1-extra-users-redacted.png" alt="Users 運營列表" width="900" />

16. 打開 `User Portfolios`，展示 owner、base currency、objective、horizon、holdings count 和 created time。

**Screenshot** — ADM-US1-07：`User Portfolios` 運營列表，包含 search / filters、owner、base currency、objective、horizon、holdings 和 created time。

<img src="source/assets/screenshots/admin/adm-us1-07-user-portfolios.png" alt="User Portfolios 運營列表" width="900" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| ADM-US1-AC01 | `Dashboard` 展示當前後端返回的平台概覽，包括 users、ETF catalogue、user portfolios、structured notes 和 ETF tier distribution 中當前可用的指標。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC02 | `ETF Catalogue` 支持按 symbol、name 或 issuer 搜尋，並支持當前實現提供的 tier / asset class filters。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC03 | ETF 記錄展示 exchange、currency、asset class、region、sector、issuer 和 expense ratio 等維護所需字段。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC04 | 管理員可以通過 `Add by Ticker` 或 `Add ETF manually` 創建一條有效 ETF 記錄。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC05 | 添加前在移動端不存在的測試 ETF，在後台成功添加後可通過刷新移動端 search/list 找到，且 symbol/name 與後台一致。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC06 | 管理員可以停用一只 active ETF；停用後刷新移動端，該 ETF 不再出現在 active product universe。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC07 | ETF 添加或停用請求進行中不可重複提交，完成後不會產生重複記錄或衝突狀態。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC08 | `Model Portfolios` 支持維護 template key、display order、title、risk band、return range、horizon、summary、reference note、status 和 ETF allocations。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC09 | Model Portfolio allocation 只有在總權重為 100% 時才能作為有效 template 保存或發布。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC10 | 後台對已發布 Model Portfolio 的 title、order、risk band、summary 或 allocation 所做修改，在刷新或重新打開移動端後得到反映。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC11 | 只有 `published` Model Portfolio 對客戶端可見；`draft` 或 `hidden` template 不出現在客戶端目錄。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC12 | 客戶端顯示的是當前 Model Portfolio 配置，不使用寫死內容或上一次打開的 template 狀態。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC13 | `Users` 支持 search 和 role/status filters，並展示當前可用的 verification status、account status、risk profile、last login 和 created date。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC14 | `User Portfolios` 展示 owner、base currency、objective、horizon、holdings count 和 created time 等當前可用字段。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC15 | `Users` 和 `User Portfolios` 用於運營可見性與排查，不在本 story 中修改普通用戶持倉。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC16 | 所有會影響客戶端的後台變更都通過 simulator 刷新或重新打開頁面驗證，不能只以後台 Toast 作為成功證據。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC17 | 視頻和截圖使用測試資料，或對 email、owner 等個人信息進行打碼。 | US-ADM-01 | Integration | Must |
