# Admin Module

## 模块说明

`Admin Portal` 是客户端应用背后的运营控制台。本模块的核心不是只浏览后台页面，而是证明后台与移动端使用同一组后端资源：管理员对 `ETF Catalogue` 和 `Model Portfolios` 的变更，在刷新移动端后可以得到验证；同时管理员可通过 `Dashboard`、`Users` 和 `User Portfolios` 监控平台状态。

## User Story 索引

| Story | User Story | 核心路径 |
| --- | --- | --- |
| [US-ADM-01](#user-story-1---通过-admin-portal-维护并核验客户端内容) | Admin Functional Acceptance | Dashboard + ETF Catalogue + Model Portfolios + operational visibility |

## 统一术语

| UI 原文 | 文档含义 |
| --- | --- |
| `Admin Portal` | 面向内部管理员的运营控制台 |
| `Dashboard` | 平台数据与资源概览页 |
| `ETF Catalogue` | 管理客户端可用 ETF universe 的后台页面 |
| `Add by Ticker` | 通过 ticker lookup 快速添加 ETF 的流程 |
| `Add ETF manually` | 由管理员完整填写 ETF 字段的添加流程 |
| `Model Portfolios` | 管理客户端 Model Portfolio templates 的后台页面 |
| `Users` | 搜索与查看用户账号、验证、状态和风险画像的页面 |
| `User Portfolios` | 查看用户所创建 My Portfolio 的运营页面 |
| `published` / `draft` / `hidden` | Model Portfolio 的发布状态；仅 `published` 对客户端可见 |
| `active` / `inactive` | ETF 是否属于客户端 active product universe 的状态 |

---

## User Story 1 - 通过 `Admin Portal` 维护并核验客户端内容

**Story ID:** `US-ADM-01`  
**用户故事：** 作为管理员，我希望维护 ETF 目录和 Model Portfolio templates，并在移动端验证变更，同时从统一后台查看用户和 portfolio 运营信息。  

### Walkthrough

#### A. 查看 `Dashboard`

1. 登录 `Admin Portal` 并打开 `Dashboard`。
2. 展示 total users、ETF catalogue size、user portfolios、structured notes 和 ETF tier distribution 等概览数据，说明这些资源来自与移动端共享的后端。

**Screenshot** — ADM-US1-01：`Dashboard` 完整概览，包含主要 counters、ETF tier distribution 和最近活动。

<img src="assets/screenshots/admin/adm-us1-01-dashboard.png" alt="Admin Dashboard 概览" width="900" />

#### B. 添加 ETF，并在移动端验证

3. 先在 iOS simulator 搜索一只当前不存在或未启用的测试 ETF，记录找不到该 ETF 的基线状态。
4. 切换到 `Admin Portal > ETF Catalogue`。展示按 symbol/name/issuer 搜索，以及按 tier 或 asset class 筛选。
5. 展示 catalogue 中的 exchange、currency、asset class、region、sector、issuer、expense ratio 等字段。

**Screenshot** — `ETF Catalogue` 列表、search、tier / asset class filters，以及 ETF 维护字段。

<img src="assets/screenshots/admin/adm-us1-extra-etf-catalogue.png" alt="ETF Catalogue 列表与筛选" width="900" />

6. 使用 `Add by Ticker` 或 `Add ETF manually` 添加测试 ETF。若采用手动流程，填写 symbol、name、exchange、currency、asset class、region、sector、issuer、inception date、expense ratio 和 tier。

**Screenshot** — `Add by Ticker` 对已存在的 `VOO` 显示重复记录校验；此图只证明校验行为，不作为成功创建 ETF 的证据。

<img src="assets/screenshots/admin/adm-us1-extra-add-by-ticker-validation.png" alt="Add by Ticker 重复记录校验" width="900" />

7. 返回 simulator，刷新 ETF search/list，确认相同 ETF 已出现。

#### C. 停用 ETF，并在移动端验证

8. 在 `ETF Catalogue` 选择一只当前可在移动端搜索到的测试 ETF，将其设为 inactive/deactivated。
9. 返回 simulator，刷新 ETF search/list，确认该 ETF 不再作为 active product 出现。

#### D. 修改 `Model Portfolios`，并在移动端验证

10. 先在 simulator 打开一个已发布的 Model Portfolio，记录其 title、display order、risk band、summary 和 ETF allocations 基线。
11. 切换到 `Admin Portal > Model Portfolios`。展示 template key、display order、title、risk band、return range、horizon、summary、reference note、status 和 ETF allocations。

**Screenshot** — `Model Portfolios` 管理列表，展示 template、显示顺序、风险、状态和维护操作入口。

<img src="assets/screenshots/admin/adm-us1-extra-model-portfolios-list.png" alt="Model Portfolios 管理列表" width="900" />

12. 编辑一个容易识别且适合演示的字段，例如 title、display order、risk band、summary 或 allocation。若修改 allocation，确认总权重为 100%。保存并保持 template 为 `published`。
13. 返回 simulator，刷新或重新打开 Model Portfolio 页面，确认客户端显示最新配置。

**Screenshot** — ADM-US1-05：`Create Model Portfolio` 表单，显示主要配置字段、ETF allocations 和 `Total 100.00%`；发布状态及保存后的客户端结果仍需在视频中连续核验。

<img src="assets/screenshots/admin/adm-us1-05-model-portfolio-edit.png" alt="Create Model Portfolio 表单" width="900" />

14. 可选补充发布边界：将专用测试 template 改为 `draft` 或 `hidden`，刷新客户端确认不再出现；再恢复测试数据，避免影响后续演示。

#### E. 查看运营页面

15. 打开 `Users`，展示 search、role/status filters，以及 verification status、account status、risk profile、last login、created date。使用测试用户或对 PII 打码。

**Screenshot** — `Users` 运营列表与筛选区域；可识别的 email 已脱敏。

<img src="assets/screenshots/admin/adm-us1-extra-users-redacted.png" alt="Users 运营列表" width="900" />

16. 打开 `User Portfolios`，展示 owner、base currency、objective、horizon、holdings count 和 created time。

**Screenshot** — ADM-US1-07：`User Portfolios` 运营列表，包含 search / filters、owner、base currency、objective、horizon、holdings 和 created time。

<img src="assets/screenshots/admin/adm-us1-07-user-portfolios.png" alt="User Portfolios 运营列表" width="900" />

### Acceptance Criteria

| ID | Requirement | Reference | Ownership | Priority |
| --- | --- | --- | --- | --- |
| ADM-US1-AC01 | `Dashboard` 展示当前后端返回的平台概览，包括 users、ETF catalogue、user portfolios、structured notes 和 ETF tier distribution 中当前可用的指标。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC02 | `ETF Catalogue` 支持按 symbol、name 或 issuer 搜索，并支持当前实现提供的 tier / asset class filters。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC03 | ETF 记录展示 exchange、currency、asset class、region、sector、issuer 和 expense ratio 等维护所需字段。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC04 | 管理员可以通过 `Add by Ticker` 或 `Add ETF manually` 创建一条有效 ETF 记录。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC05 | 添加前在移动端不存在的测试 ETF，在后台成功添加后可通过刷新移动端 search/list 找到，且 symbol/name 与后台一致。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC06 | 管理员可以停用一只 active ETF；停用后刷新移动端，该 ETF 不再出现在 active product universe。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC07 | ETF 添加或停用请求进行中不可重复提交，完成后不会产生重复记录或冲突状态。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC08 | `Model Portfolios` 支持维护 template key、display order、title、risk band、return range、horizon、summary、reference note、status 和 ETF allocations。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC09 | Model Portfolio allocation 只有在总权重为 100% 时才能作为有效 template 保存或发布。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC10 | 后台对已发布 Model Portfolio 的 title、order、risk band、summary 或 allocation 所做修改，在刷新或重新打开移动端后得到反映。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC11 | 只有 `published` Model Portfolio 对客户端可见；`draft` 或 `hidden` template 不出现在客户端目录。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC12 | 客户端显示的是当前 Model Portfolio 配置，不使用写死内容或上一次打开的 template 状态。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC13 | `Users` 支持 search 和 role/status filters，并展示当前可用的 verification status、account status、risk profile、last login 和 created date。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC14 | `User Portfolios` 展示 owner、base currency、objective、horizon、holdings count 和 created time 等当前可用字段。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC15 | `Users` 和 `User Portfolios` 用于运营可见性与排查，不在本 story 中修改普通用户持仓。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC16 | 所有会影响客户端的后台变更都通过 simulator 刷新或重新打开页面验证，不能只以后台 Toast 作为成功证据。 | US-ADM-01 | Integration | Must |
| ADM-US1-AC17 | 视频和截图使用测试数据，或对 email、owner 等个人信息进行打码。 | US-ADM-01 | Integration | Must |
