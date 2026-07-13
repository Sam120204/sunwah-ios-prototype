# Sunwah Fintech PRD Documentation

> 机构与高净值投资者 iOS 投资智能助手 — 产品需求文档（PRD）

本目录是 PRD 的规范工作区，包含三语（简体中文、繁体中文、英文）源文件，以及通过 Markdown → LaTeX → PDF 流水线自动构建的最终交付文档。

---

## 目录结构

```
docs/prd/
├── Sunwah-Fintech-PRD-en.md       # 英文 Markdown 源文件（规范源）
├── Sunwah-Fintech-PRD-zh-Hans.md # 简体中文 Markdown 源文件（规范源）
├── Sunwah-Fintech-PRD-zh-Hant.md # 繁体中文 Markdown（自动生成，禁止手动编辑）
│
├── m2/                            # M2 功能验收工作区
│   ├── README.md                  # Market / Portfolio / Login-Register / Admin 模块索引
│   ├── generate_markdown.py       # M2 简中源 → 三语 Markdown 模块文档
│   ├── source/                    # M2 简中规范源与验收截图
│   └── <module>.<language>.md     # 每个模块的 zh-Hans / zh-Hant / en 版本
│
├── tools/
│   └── build_latex.py             # Markdown → LaTeX 转换脚本
│
├── latex/
│   ├── prd-common.tex            # 共享样式库（封面、配色、截图宏、表格样式等）
│   └── content/
│       ├── en.tex                # 英文正文 LaTeX（自动生成）
│       ├── zh-Hans.tex          # 简体中文正文 LaTeX（自动生成）
│       └── zh-Hant.tex          # 繁体中文正文 LaTeX（自动生成）
│
├── assets/screenshots/           # 共享图片资源（Markdown 和 LaTeX 共用）
│   ├── mermaid/                  # 架构图、页面树等（Mermaid 导出 PNG）
│   ├── prototype-pages/          # 原型页面截图（31 张）
│   └── userstory-flowcharts/     # User Story 流程图
│
├── build/                        # 编译产物（PDF 及辅助文件）
│   ├── en/Sunwah-Fintech-PRD-en.pdf
│   ├── zh-Hans/Sunwah-Fintech-PRD-zh-Hans.pdf
│   └── zh-Hant/Sunwah-Fintech-PRD-zh-Hant.pdf
│
├── Makefile                      # 构建入口
└── README.md                     # 本文件
```

---

## 文档关系与编辑约定

```
                          build_latex.py
  Sunwah-Fintech-PRD-zh-Hans.md ──────────► latex/content/zh-Hans.tex
          │                                        │
          │ to_hant() 转换                        │ latexmk -xelatex
          ▼                                        ▼
  Sunwah-Fintech-PRD-zh-Hant.md ─────► latex/content/zh-Hant.tex
                                              │
                                              │ latexmk -xelatex
                                              ▼
                                     build/zh-Hans/Sunwah-Fintech-PRD-zh-Hans.pdf
                                     build/zh-Hant/Sunwah-Fintech-PRD-zh-Hant.pdf

  Sunwah-Fintech-PRD-en.md ─────────► latex/content/en.tex
                                              │
                                              │ latexmk -xelatex
                                              ▼
                                     build/en/Sunwah-Fintech-PRD-en.pdf
```

### M2 功能验收文档

M2 验收文档使用独立的模块化结构，入口为 [`m2/README.md`](m2/README.md)：

- 一级索引为 `Market`、`Portfolio`、`Login / Register`、`Admin` 四个模块，每个模块每种语言一份文档。
- 二级索引为模块内的 User Story；每个 User Story 对应一支验收视频，并包含 `Walkthrough` 与 `Acceptance Criteria`。
- `docs/prd/m2/source/*.md` 是简体中文功能内容的规范源；`docs/prd/m2/*.md` 是用于交付的简体中文、繁体中文和英文模块文档。
- 中文版本中的产品名、页面名、标签、按钮、卡片和状态保留 UI 英文原文。

重新同步三语文档：

```sh
python3 m2/generate_markdown.py --translate-en
```

该命令通过公开翻译服务重新生成英文内容，因此源文档发生变更后仍需进行英文编辑校对；不传 `--translate-en` 时只同步简体中文和繁体中文，并保留现有英文文档。

### 编辑规则

| 文件 | 类型 | 说明 |
|------|------|------|
| `Sunwah-Fintech-PRD-en.md` | **规范源** | 手动维护，修改后重新 `make tex` |
| `Sunwah-Fintech-PRD-zh-Hans.md` | **规范源** | 手动维护，修改后重新 `make tex` |
| `Sunwah-Fintech-PRD-zh-Hant.md` | 自动生成 | 每次 `make tex` 由 `to_hant()` 覆盖，**禁止手动编辑** |
| `latex/content/*.tex` | 自动生成 | `build_latex.py` 输出，**禁止手动编辑** |
| `latex/prd-common.tex` | 共享样式 | 可手动编辑（配色、字体、宏定义等） |
| `tools/build_latex.py` | 构建脚本 | 可手动编辑（Markdown 解析逻辑、宏调用规则等） |

---

## 构建流程

### 方式一：使用 Make（推荐）

```sh
make tex       # 仅运行 Markdown → LaTeX 转换，不编译 PDF
make pdf       # 完整构建：三语 PDF
make en        # 仅构建英文 PDF
make zh-Hans   # 仅构建简体中文 PDF
make zh-Hant   # 仅构建繁体中文 PDF
make clean     # 清理所有构建产物（含自动生成的 .tex 和 content/）
```

**首次构建建议：**

```sh
make pdf       # 完整构建约需 15-20 分钟（三语并行或串行）
```

**修改内容后：**

```sh
make tex       # 先重新生成 LaTeX 源码
make pdf       # 再编译 PDF
```

### 方式二：直接调用脚本

```sh
# 生成 LaTeX 源码（+ 自动转换繁体中文）
python3 tools/build_latex.py --version 2026.06.01

# 编译单个语言
latexmk -xelatex -interaction=nonstopmode -halt-on-error \
  -outdir=build/zh-Hans Sunwah-Fintech-PRD-zh-Hans.tex
```

---

## `build_latex.py` 工作原理

### 输入与输出

| 输入 | 输出 |
|------|------|
| `Sunwah-Fintech-PRD-en.md` | `latex/content/en.tex` + `Sunwah-Fintech-PRD-en.tex`（根包装器） |
| `Sunwah-Fintech-PRD-zh-Hans.md` | `latex/content/zh-Hans.tex` + `Sunwah-Fintech-PRD-zh-Hans.tex` |
| `Sunwah-Fintech-PRD-zh-Hans.md`（经 `to_hant()`） | 覆盖 `Sunwah-Fintech-PRD-zh-Hant.md` → `latex/content/zh-Hant.tex` |

### 关键 Markdown → LaTeX 转换规则

| Markdown 语法 | LaTeX 输出 |
|---------------|-----------|
| `# 标题` / `## 子标题` | `\section{...}` / `\subsection{...}` |
| `\| 表头 \| ... \|`（Markdown 表格） | `longtable` + `booktabs` |
| `<table><tr><td><img src="..."><p><strong>标题</strong> — 说明</p>` | 累积为截图卡片，3 张一组 → `\screenshotTriple`，2 张 → `\screenshotpair` |
| `![标题](assets/screenshots/mermaid/...)` | `\smartfigure{path}{标题}`（全宽 95%） |
| `![标题](assets/screenshots/userstory-flowcharts/...)` | `\flowchart{path}{标题}`（60% 宽） |
| `---`（水平分割线） | `\prdhr` |
| `**粗体**` | `\textbf{...}` |
| `` `行内代码` `` | `\texttt{...}` |

### 简体中文 → 繁体中文自动转换

`to_hant()` 函数在每次构建时将简体中文 Markdown 转换为繁体中文：
- **短语映射**（75+ 组）：如 `"产品需求文档"` → `"產品需求文件"`
- **字符映射**（2,400+ 对）：如 `"与"` → `"與"`, `"项"` → `"項"`

---

## 共享样式库 `prd-common.tex`

此文件被所有语言的根 `.tex` 包装器通过 `\input{latex/prd-common.tex}` 引入，定义所有视觉样式：

### 品牌配色

| 名称 | 色值 | 用途 |
|------|------|------|
| `BrandNavy` | `#0B1F3A` | 主标题、一级章节 |
| `BrandBlue` | `#1F5EFF` | 链接、二级章节高亮 |
| `BrandGold` | `#B88A2A` | 装饰元素、重点提示框 |
| `BrandSlate` | `#4B5563` | 说明文字、辅助信息 |
| `BrandLight` | `#F4F7FB` | 背景填充色 |
| `BrandLine` | `#D8DEE9` | 分割线、边框 |

### 截图宏（嵌入在正文中使用）

```latex
% 三列截图（每列 22% 页面宽度）
\screenshotTriple{path1}{标题1}{说明1}{path2}{标题2}{说明2}{path3}{标题3}{说明3}

% 双列截图
\screenshotpair{path1}{标题1}{说明1}{path2}{标题2}{说明2}

% 单列截图
\screenshotsingle{path}{标题}{说明}
```

### 其他宏

| 宏 | 用途 |
|----|------|
| `\smartfigure{path}{caption}` | 全宽图（架构图、页面目录图） |
| `\flowchart{path}{caption}` | 60% 宽流程图（User Story 流程） |
| `\prdhr` | 水平分割线 |
| `\makedeliverytitle` | 封面页（品牌色装饰 + 元数据表格） |
| `\code{...}` | 行内代码 |
| `\term{...}` | 术语（加粗 + BrandNavy 色） |

---

## 图片资源管理

所有图片**只存储一份**于 `assets/screenshots/`，Markdown 和 LaTeX 引用相同的相对路径。

```
assets/screenshots/
├── mermaid/                   # 架构图、流程图（Mermaid 导出）
├── prototype-pages/            # 原型页面截图（31 张 PNG）
└── userstory-flowcharts/       # User Story 流程图
    ├── m-*.png               # Market 模块流程
    ├── p-*.png               # Portfolio 模块流程
    ├── a-*.png               # AI Advisory 模块流程
    ├── s-*.png               # Structured Products 模块流程
    └── Lagecy/               # 历史版本（已废弃）
```

---

## 依赖

- **Python 3.12+**（`build_latex.py`）
- **XeLaTeX**（PDF 编译，字体支持 Unicode）
- **latexmk**（自动多轮编译）
- **xelatex` + `xeCJK` + `fontspec`**（中文/英文混排字体）

### macOS 安装依赖（Homebrew）

```sh
brew install --cask mactex    # 安装 MacTeX（含 XeLaTeX、latexmk）
```

---

## 维护指南

### 新增截图

1. 将 PNG 放入 `assets/screenshots/prototype-pages/`
2. 在 `Sunwah-Fintech-PRD-zh-Hans.md` 中使用 HTML 卡片格式引用：

```html
<table>
  <tr>
    <td><img src="assets/screenshots/prototype-pages/XX-new-page.png"></td>
  </tr>
  <tr>
    <td><p><strong>页面标题</strong> — 页面说明文字。</p></td>
  </tr>
</table>
```

> **注意：** HTML `<table>` 包裹的截图会自动累积，每 3 张生成三列布局，不满 3 张自动降级为双列或单列。

### 新增架构图/流程图

在 Markdown 中直接使用标准图片语法：

```markdown
![图注](assets/screenshots/mermaid/new-diagram.png)
```

自动生成 `\smartfigure`（全宽）或 `\flowchart`（60% 宽，路径含 `userstory-flowcharts` 时）。

### 修改样式

编辑 `latex/prd-common.tex` 后重新 `make pdf` 即可，无需单独触发 `make tex`。

### 更新版本号

```sh
python3 tools/build_latex.py --version 2026.06.01
```

---

## 工作流程总结

```
编辑 Markdown 源文件（zh-Hans.md / en.md）
        │
        │ make tex
        ▼
build_latex.py 生成 LaTeX 源码
  - 转换 Markdown → LaTeX
  - 自动转换简→繁中文
  - 生成根 .tex 包装器
        │
        │ make pdf（仅构建）
        ▼
latexmk XeLaTeX 多轮编译
  → 生成 TOC、交叉引用、书签
        │
        ▼
build/<lang>/Sunwah-Fintech-PRD-<lang>.pdf
```
