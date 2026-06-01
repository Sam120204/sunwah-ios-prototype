# 交付级 PPT 制作要求

> 团队内部规范。用于统一团队交付级 PPT 的制作流程、素材标准和验收口径。
> 
> 

### Comment 样例【可展开，参考一下过往版本需要修改的slides的建议】

首先第一个问题在于配图的风格，PPT的模板风太浓了，也不要使用图3这种3d的结构，没什么实际意义

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=OWE5Y2RlZmNjOTk4NDc2MDc0ZjM2M2FkMTNjNDMxZTRfYjk1Y2MwOWJjZDkzNGM3MTkyYzJjYTU3NjZmMzJiOTRfSUQ6NzY0NjMzNjg2NTk3MjU1NTI4N18xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=MzE4YzllZDE3NzU3ODU3ZmYzYmMxOGFjMDk4OTM4MWRfMWFiNmRjMTM5YzcwM2I0ZTM3MGVkM2FjYWE0OTE1ODZfSUQ6NzY0NjMzNjg2ODM2NzI1NzExMl8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=ZTRmY2RmNGU1MTk4YzEyYWJkYzU0Mzk2MjE5ZWRiMDNfYWEyNzNhYWRiZDY2NzUzMWZmNTc5OWZlNzE0OGJmOTNfSUQ6NzY0NjMzNjg2ODM2NzI3MzQ5Nl8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

第二个问题再续叙事很像广告，定位有点像宣传册了，但这部分核心的功能还是讲清楚架构，后端的分层、模块拆分这些。目前图标太多、蓝色徽章太多、圆角卡片太多，导致像咨询公司售前材料，slogan也得减少一点，先做好后端的部分，因为前端的内容是herbit和sam在做

“完整客户投资服务链”

“可读、可比、可操作”

“产品清晰、架构完整、AI 有边界、扩展有空间”

第三个问题是每页都像总览页（每一页都是大标题副标题卡遍一堆图标），没有主次，视觉语言太相似有点像是听了很多个proposal，也没有体现出我们具体做出来的东西的截图，还是得穿插类似于第五页长得比较像或者就是用我们实际产出（比如repo的截图，swagger的截图）。还有比如说讲调研的部分（例如llm供应商和金融数据提供商，应该是非常具体的内容，而不是这种流程图的形式

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=MzQ3ZmY5OGZjMWVmZjFhODgyMjI0ZjQ3Yzc3NGRjYzRfMWIxNmY3ODQ4MGI2MGViMWQ2MzE5ZjkzYjY2NzQ1ZTZfSUQ6NzY0NjMzNjg2Njk1MzkyNDEyMl8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

第四个问题是不要罗列画饼式的能力，要讲一些具体的，你在第十页列举了：HTTPS、JWT、RBAC、PII、Prompt Injection，但没有具体的 ai guardrail什么能送给模型，什么不能送，log会记录什么信息以满足金融合规的什么要求。如果我们在架构交付的时候还没有具体的东西就太虚浮了。。把我们调研出来的一些结果挑选出来

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=NTY3ZjM5MzAwNGQ0NjEyYmRjN2JmMzYwNTg2MzY0MjBfYjU4YzFlZWQ4ODJkYTU3ODI4ZTY0ZTMwMDg0NDBlODNfSUQ6NzY0NjMzNjg2NzQ5OTEwMTcyMF8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

## 1\. 目标

交付级 PPT 不是把文字搬进幻灯片，而是把一个复杂项目压缩成客户能快速理解、团队能复用修改、后续能继续打磨的视觉叙事。

每一份交付级 PPT 必须同时满足三件事：

- **讲得清楚**：每页只有一个核心结论，结构层级一眼能看懂。

- **看起来可信**：有统一视觉风格、清晰模块、真实产品效果图或高质量示意图。

- **改得动**：最终版本必须尽量还原成可编辑 PPT，而不是只留一张无法维护的图片。

交付物至少包含：

|交付物|要求|
|---|---|
|可编辑 PPTX|最终客户/团队维护源文件，文字、图标、模块尽量可编辑|
|PDF|用于稳定预览和对外发送，避免字体和版式漂移|
|素材文件夹|存放效果图、透明底人物/设备图、图标、截图等|
|Prompt / 版本记录|记录 LLM 大纲、GPT Image 2 生成提示词、关键修改点|

## 2\. 参考样式

> 以下三张图作为团队制作交付级 PPT 的参考样式。图1和图2用于定义目标信息结构，图3用于说明从 image base 到可编辑 PPT 的复原方法。
> 
> 

### 图1：结构化概念页

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=NzQyZTJjODQwNjQwNmVhNWFhMGRmNTY2MWQwOWQ5YmNfNzVhMDFkZGQyZWU5YzRiZWEwOTVmOTZjN2U0NWMwZjhfSUQ6NzY0NjEyNjI3MzMxMTI5NzA0OF8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

图1适合作为“为什么需要某个技术/方法”的概念说明页。它的特点是：

- 顶部用大标题和一句副标题明确问题：金融投顾不是单点问答，而是关系推理问题。

- 页面分成“输入视角 \-\> 中央方法 \-\> 输出能力”的结构，上方三个输入模块、中央一条方法桥、下方三个结果模块。

- 每个模块都有颜色编码、虚线边界、图标和一句解释，方便观众扫读。

- 中央模块承担整页的逻辑转折，告诉观众为什么从碎片信息走向知识图谱增强推理。

- 信息密度中等偏高，但块状结构清楚，适合内部技术汇报或客户解释复杂概念。

制作时不需要完全追求图1这么高的信息密度。更推荐保留它的“分区清晰、箭头关系明确、每块只讲一个点”的优点，减少小字和重复解释。

### 图2：高密度总览页

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=ODIwYjcwMDNlMWU2ZmNjOTY5YmRmZGRhYWY0OTgxMjFfNjMzZjA1OTI3M2JmNDJmNTM1YzViOTI5MzA4Y2RkZDJfSUQ6NzY0NjEzMDc2OTE5NDE5MjQwN18xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

图2适合作为“机制 \+ 案例 \+ 产品落地”的总览页。它的特点是：

- 一页内同时展示传统 RAG、GraphRAG、客户案例、推荐结果和产品功能支柱。

- 左侧是机制对比，右侧是案例演示，下方是应用模块，信息完整但非常密集。

- 用大色条标题、卡片边界、编号步骤和图标区分层级，降低密集内容造成的阅读压力。

- 适合客户已经有背景、需要一次性看到系统全貌时使用。

- 缺点是后期打磨工作量很大：文字多、模块多、图标多，AI 自动转 PPT 后容易错位。

团队使用图2风格时要克制：只有在“必须一页讲完整链路”时使用高密度总览页。普通页面应拆成更少模块，避免每页都变成总览海报。

### 图3：从 Image Base 到可编辑 PPT 的复原示例

![Image](https://internal-api-drive-stream-jp.larksuite.com/space/api/box/stream/download/authcode/?code=ZDk2MjlkNWFmNDE2YjNlNGQ0ZmM5YmVlNTc4NDk5NGVfMDllZjI5YjZkZTE0YjVmZGEwMzkwMGI5ZmVlYmY1YzFfSUQ6NzY0NjEzMTAzNjQ1OTM3MjA1OF8xNzgwMzMxMzY0OjE3ODA0MTc3NjRfVjM)

图3说明了当前推荐的打磨方式：

- 右侧是 GPT Image 2 生成的 image base 版本，整体构图和氛围较好。

- 左侧是人工复原后的可编辑 PPT，文字框、图标、流程线、模块边框都被重新拼出来。

- AI 转 PPT 可以提供初始结构，但复杂图形、人物、图标和文字很容易变形或错位。

- 变形图标应从 [Flaticon](https://www.flaticon.com/) 等图标库重新找，不直接沿用 AI 生成的脏图标。

- 变形人物、设备、产品图可以截取原图后，用 GPT Image 2 重新生成无背景图片，再放回 PPT。

图3的重点不是“AI 一键完成”，而是“AI 先给构图，人再复原为交付级源文件”。

## 3\. 推荐制作流程

### Step 1：先让 LLM 写大纲

先让 LLM 根据项目材料生成完整大纲，但不要直接照搬。LLM 通常会写得过长、过全、过像报告，需要人工压缩。

建议提示词：

```text
请根据以下项目材料，为一份客户交付级 PPT 写大纲。
要求：
1. 受众是客户/项目负责人，不是开发同学。
2. 每页只表达一个核心结论。
3. 每页给出标题、核心信息、建议图形、需要的素材。
4. 先完整展开，不要担心篇幅。

项目材料：
...
```

### Step 2：人工压缩大纲

压缩目标是减少页数和每页信息密度，也减少后期打磨工作量。

建议标准：

|项目|建议|
|---|---|
|总页数|常规交付 8\-12 页；复杂方案最多 15 页左右|
|每页核心结论|1 个|
|每页一级模块|2\-4 个|
|每页文字量|客户页尽量控制在 80\-150 中文字；总览页可放宽|
|图表数量|每页 1 个主视觉，不堆多个小图|
|打磨优先级|客户必看的页优先，内部备份页可以朴素一些|

压缩时优先删除：

- 重复解释项目背景的页面。

- 只有概念没有证据的页面。

- 与客户决策无关的实现细节。

- 不能配图、不能形成视觉结构的长段落。

### Step 3：写 Slide Brief

每页在生成图片前，先写成简短 brief。

|字段|要求|
|---|---|
|Page Goal|这页要让观众记住什么|
|Page Title|直接写结论，不写空泛标题|
|Layout|是对比、流程、架构、案例、时间线还是 dashboard|
|Key Blocks|2\-4 个主要模块|
|Visual Assets|需要产品截图、人物、图标、设备框、数据图还是流程图|
|Must Keep Editable|哪些文字/图形最终必须人工复原|

### Step 4：用 GPT Image 2 生成 Image Base 版本

Image base 版本的作用是快速得到构图、配色、氛围和视觉方向。它不是最终可交付源文件。

生成要求：

- 使用 16:9 横版比例。

- 提示词里明确页面结构，例如“三列输入 \+ 中央方法 \+ 三列输出”。

- 要求风格统一：企业级、金融科技、清晰模块、浅色背景、精致图标。

- 图中英文/中文文字只作为占位，最终必须人工复原。

- 需要产品效果图时，优先使用我们自己的 app 截图、原型图或效果图作为参考。

建议提示词结构：

```text
Create a 16:9 consulting-style presentation slide for a fintech product.
Topic: ...
Audience: client executives and product stakeholders.
Layout: ...
Visual style: clean enterprise fintech, clear modules, subtle borders, soft shadows, consistent icon style.
Must include: ...
Avoid: clutter, tiny unreadable text, random icons, excessive decorative elements.
Text can be approximate because final text will be manually rebuilt in PowerPoint.
```

### Step 5：先制作 Image Based PDF

先把生成图按顺序排成一版 image based PDF，用来检查整体叙事。

检查重点：

- 顺序是否顺。

- 每页是否有明确结论。

- 是否有重复页。

- 是否有明显看不懂的图。

- 是否需要补充我们自己的效果图、app 截图或数据图。

这个版本只用于内部确认方向，不作为最终交付版本。

### Step 6：转成可编辑 PPT 并人工复原

如果模块边界比较清晰，可以先用 GPT 网页版把图片 PDF 转成可编辑 PPT。这个步骤可以节省一点初始排版时间，但不要期待它完美。

常见问题：

- 文本框会错位或拆成很多碎片。

- 复杂图形无法复原。

- 图标会变形。

- 线条、箭头、圆角框会漂移。

- 原本统一的字体和颜色会变乱。

因此最终必须人工处理：

- 手工重打所有关键文字，保证准确、可编辑。

- 用 PPT 原生形状复原模块框、流程线、箭头、分隔线。

- 从 [Flaticon](https://www.flaticon.com/) 重新寻找变形图标，保持风格一致。

- 变形图片用 GPT Image 2 重新生成无背景图片，再导入 PPT。

- 产品截图、app 界面和关键数据图优先使用真实素材，不用 AI 猜。

### Step 7：最终质量检查

交付前至少过三轮：

|检查轮次|关注点|
|---|---|
|内容检查|逻辑、结论、数据、术语、客户可理解性|
|视觉检查|对齐、间距、字体、颜色、图标、图片质量|
|文件检查|PPT 可编辑性、PDF 导出效果、素材是否齐全|

## 4\. 单页制作要求

每一页都按以下标准制作。

|维度|要求|
|---|---|
|标题|尽量写结论，例如“GraphRAG turns relationship evidence into explainable recommendations”|
|副标题|用一句话解释业务意义，不写第二个标题|
|结构|页面分区清楚，观众不用听讲也能看懂阅读顺序|
|文字|不使用大段落；优先短句、标签、编号和表格|
|图形|图形必须服务论点，不为装饰而放图|
|图标|同页图标风格一致，线性/填充/3D 不混用|
|截图|截图要清晰、边界统一、不要糊、不要随意裁掉关键 UI|
|颜色|用颜色表示分组或状态，不随意堆渐变|
|可编辑性|关键文本、图表、流程框必须可编辑|

## 5\. 页面类型建议

### 5\.1 概念解释页

适合参考图1。

结构建议：

- 上方：问题和背景。

- 中间：核心方法或系统能力。

- 下方：带来的 2\-3 个结果。

适合内容：

- 为什么需要 Knowledge Graph / GraphRAG / Portfolio Intelligence。

- 为什么只做单点查询不够。

- 为什么需要把客户、组合、产品、市场关系连起来。

### 5\.2 机制对比页

适合参考图2左侧。

结构建议：

- 左右对比：传统方式 vs 新方式。

- 每侧 3\-4 个步骤。

- 下方给出差异总结。

适合内容：

- RAG vs GraphRAG。

- Manual analysis vs AI\-assisted analysis。

- Static report vs interactive advisory workflow。

### 5\.3 案例演示页

适合参考图2右侧。

结构建议：

- 客户输入。

- 系统发现。

- 证据路径。

- 推荐动作。

- 预期影响。

适合内容：

- Client A portfolio case。

- ETF exposure analysis。

- Structured note suitability check。

### 5\.4 产品能力页

结构建议：

- 3\-4 个能力柱。

- 每个能力柱配真实截图或效果图。

- 每个能力柱只写功能、价值和当前状态。

适合内容：

- Market Intelligence。

- Portfolio Intelligence。

- AI Advisory。

- Structured Product Module。

### 5\.5 流程/方法页

结构建议：

- 横向流程或泳道图。

- 每步包含输入、动作、输出。

- 关键检查点用颜色标出。

适合内容：

- 数据处理流程。

- 用户从输入持仓到获得建议的路径。

- AI 生成、验证、解释、落库链路。

## 6\. 素材规范

### 6\.1 产品效果图

- 优先使用团队自己的 app 截图、Figma / 原型图、真实效果图。

- 截图必须统一设备框、阴影、圆角和尺寸。

- 如果截图信息太多，可以裁成局部或用 callout 标注重点。

- 不要让 AI 重新发明产品 UI，除非这页只是概念示意。

### 6\.2 图标

- 图标优先从 [Flaticon](https://www.flaticon.com/) 等图标库找。

- 同一页只使用同一种图标风格。

- 下载后保留来源，方便后续替换或授权检查。

- AI 生成图里的变形图标不能直接用于最终 PPT。

### 6\.3 人物/设备/装饰图

- 人物或设备图如果在 AI 原图中效果好，可以截取后用 GPT Image 2 重新生成透明背景版本。

- 透明底图片导入 PPT 后，要检查边缘是否干净。

- 人物图不要抢主信息的注意力，通常作为辅助叙事元素。

### 6\.4 数据和图表

- 客户级页面中的数字必须有来源。

- 示意数字必须标注 illustrative / 示例。

- 重要图表不要只用图片，最终应尽量用 PPT 图表或可编辑形状复原。

## 7\. 交付前 Checklist

### 内容

* [ ] 整份 PPT 有一个清晰主线，不是资料堆叠。

* [ ] 每页只有一个核心结论。

* [ ] 所有客户会看到的术语都统一。

* [ ] 所有数字、结论、案例都经过检查。

* [ ] 示例数据已标注为示例，不会被误认为真实承诺。

### 视觉

* [ ] 标题、模块标题、正文的字号层级统一。

* [ ] 所有模块边界、间距、对齐一致。

* [ ] 图标风格一致，没有 AI 变形图标。

* [ ] 图片清晰，没有糊图、拉伸、低分辨率截图。

* [ ] 颜色用于分组或强调，不造成视觉混乱。

### 可编辑性

* [ ] 关键文字可编辑。

* [ ] 流程框、箭头、模块边界可编辑。

* [ ] 关键图标可替换。

* [ ] PDF 导出后排版没有变化。

* [ ] 素材文件夹和 prompt 记录完整。

## 8\. 常见问题

### 问题 1：LLM 大纲太长

处理方式：先完整展开，再压缩。不要因为 LLM 写了 25 页就真的做 25 页。页数越多，后期越难统一风格，也越难保证每页都交付级。

### 问题 2：单页信息太密

处理方式：先判断这页是“总览页”还是“解释页”。只有总览页允许高密度。解释页应减少模块数量，把重点放在阅读路径和结论上。

### 问题 3：AI 图很好看但文字不准

处理方式：AI 图只当构图参考。最终文字必须手工复原，尤其是产品名、金融术语、数值、模块名。

### 问题 4：图片转 PPT 后格式混乱

处理方式：只把转换结果当作底稿。复杂图形用 PPT 原生形状重搭，图标和人物重新找素材或生成透明底。

### 问题 5：看起来像海报，不像交付材料

处理方式：减少装饰图和大面积氛围背景，增加清晰模块、编号、证据、结果和产品截图。交付级 PPT 的重点是可信和可解释，不是单张图的炫技。

## 9\. 最低交付标准

如果时间很紧，至少做到：

1. 完成 8\-12 页以内的压缩版大纲。

2. 每页生成一张 image base 图，排成 PDF。

3. 选出客户必看的 5\-8 页做可编辑 PPT 复原。

4. 手工修正所有关键文字。

5. 替换所有变形图标和低质量图片。

6. 导出 PDF，并检查一遍全屏播放效果。

## 10\. 推荐文件组织

```text
delivery_ppt/
  01_outline/
    outline_raw_llm.md
    outline_compressed.md
  02_prompts/
    image_prompts.md
  03_image_base/
    page_01.png
    page_02.png
    image_base_review.pdf
  04_assets/
    icons/
    transparent_images/
    product_screenshots/
  05_editable_ppt/
    delivery_ppt_v1.pptx
    delivery_ppt_v2_reviewed.pptx
  06_export/
    delivery_ppt_final.pdf
```

## 11\. 结论

交付级 PPT 的核心方法是：

**LLM 负责展开，人工负责压缩；GPT Image 2 负责构图，人工负责复原；PDF 负责预览，PPTX 负责交付。**

最终判断标准不是“AI 图有多漂亮”，而是客户能不能看懂、团队能不能继续改、文件能不能稳定交付。

> (注：内容由 AI 生成，请谨慎参考）
