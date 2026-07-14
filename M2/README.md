# M2 Functional Acceptance Documentation

本目录按模块组织 M2 功能验收文档。每个语言版本均以模块为一级索引，模块文档内以 User Story 为二级索引。验收视频链接由统一入口维护，不放入各模块文档。

This directory organizes M2 functional acceptance documentation by module. In every language, modules form the primary index and User Stories form the secondary index within each module. Acceptance video links are maintained in one centralized location rather than inside the module documents.

| Module | User Stories | 简体中文 | 繁體中文 | English |
| --- | ---: | --- | --- | --- |
| Market | 4 | [market.zh-Hans.md](market.zh-Hans.md) | [market.zh-Hant.md](market.zh-Hant.md) | [market.en.md](market.en.md) |
| Portfolio | 5 | [portfolio.zh-Hans.md](portfolio.zh-Hans.md) | [portfolio.zh-Hant.md](portfolio.zh-Hant.md) | [portfolio.en.md](portfolio.en.md) |
| Login / Register | 1 | [login-register.zh-Hans.md](login-register.zh-Hans.md) | [login-register.zh-Hant.md](login-register.zh-Hant.md) | [login-register.en.md](login-register.en.md) |
| Admin | 1 | [admin.zh-Hans.md](admin.zh-Hans.md) | [admin.zh-Hant.md](admin.zh-Hant.md) | [admin.en.md](admin.en.md) |

## Maintenance

- Canonical functional content: `M2/source/*.md`
- Generated module documents: `M2/*.md`
- Markdown generation command: `python3 M2/generate_markdown.py --translate-en`
- UI names, labels, buttons, cards, and states enclosed in backticks remain in their original English in both Chinese versions.
- Screenshot files remain canonical under `M2/source/assets/screenshots/`; generated documents reference those shared files rather than duplicating them.
