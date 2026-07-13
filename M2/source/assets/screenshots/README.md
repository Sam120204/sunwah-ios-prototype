# M2 Screenshots

截图按模块放置：

- `market/`
- `portfolio/`
- `login-register/`
- `admin/`

每张已采用截图的 ID、画面说明和文件名列在对应模块文档的 `本模块截图清单` 中。截图放入相应子目录，并在 walkthrough 的对应步骤后使用以下格式：

```md
**Screenshot** — 说明该截图证明的页面状态或交互结果。

<img src="assets/screenshots/<module>/<filename>.png" alt="简洁说明" width="420" />
```

iPhone 截图使用 `width="420"`；Admin 桌面截图使用 `width="900"`。这里只控制 Markdown 渲染尺寸，不修改原始 PNG。

提交前检查：

- 使用同一台 simulator、同一系统主题和尽量一致的 viewport。
- 保留页面标题、关键控件和状态标签，避免裁切验收所需上下文。
- password、verification code、email、owner 等敏感信息使用测试数据或打码。
- 不把手势过程中的模糊帧、loading 遮挡或 Toast 作为唯一验收截图。
- 写入类操作优先提供刷新/重新打开后的结果图。
- 截图不需要逐项覆盖全部 Acceptance Criteria；短暂 loading、提交、防重复操作和跨端刷新由视频连续展示。
