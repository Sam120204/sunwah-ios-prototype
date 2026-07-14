# M2 Functional Acceptance Documentation

本目录按产品模块组织第二阶段（M2）功能验收文档。一级索引为模块；每个模块一份文档。模块文档的二级索引为 User Story。验收视频链接由统一入口维护，不放入各模块文档。

## 模块索引

| 模块 | 文档 | User Story 数 | 状态 |
| --- | --- | ---: | --- |
| Market | [Market Module](market.md) | 4 | 12 张截图已归档 |
| Portfolio | [Portfolio Module](portfolio.md) | 5 | 31 张截图已归档 |
| Login / Register | [Login / Register Module](login-register.md) | 1 | 4 张关键页面截图已归档 |
| Admin | [Admin Module](admin.md) | 1 | 7 张关键页面与校验截图已归档 |

## 统一文档约定

- 正文使用简体中文；产品名、页面名、标签、按钮、卡片和状态等 UI 专有名词保留界面中的英文原文。
- 每个 User Story 固定包含 `Walkthrough` 和 `Acceptance Criteria` 两部分；视频链接由统一入口维护。
- `Walkthrough` 按视频中的连续操作顺序编写，并在关键步骤旁预留截图位置。
- `Acceptance Criteria` 使用 PRD 风格的 Markdown 表格，列为 `ID`、`Requirement`、`Reference`、`Ownership` 和 `Priority`。
- 截图用于展示关键页面和稳定状态，不要求逐项覆盖全部 AC；loading、提交、防重复操作及跨端刷新等动态行为由视频连续展示。
- 截图采用 `<模块>-us<story>-<序号>-<内容>.png` 的小写文件名，统一放在 `assets/screenshots/<模块>/`。
- iPhone 截图在 Markdown 中限制为 420px 宽；Admin 桌面截图限制为 900px 宽，原始图片文件不缩放。
- 写入类操作不能只以 Toast 作为验收证据；需要刷新或重新打开目标页面，确认状态已经持久化。
- Portfolio 与 ETF 相关能力仅供研究，不代表或触发下单、交易或执行。
