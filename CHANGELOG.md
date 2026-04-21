# Changelog

> 项目变更记录文档 - 用于追踪每次功能优化和bug修复

---

## [未发布] v0.x.x

### ✨ 功能优化

#### 🎨 Loading 加载区域深度优化
- **文件**: `src/components/Loading.tsx`
- **描述**: 全面升级 Loading 组件，采用苹果风格毛玻璃设计，保留红→橙→黄品牌配色

##### 1. 苹果风格毛玻璃 + 光泽质感
```diff
+ // 毛玻璃背景 + 光泽高光效果
+ bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500
+ backdrop-blur-md border border-white/30
+ // 顶部光泽反射
+ bg-gradient-to-tr from-white/40 via-transparent to-transparent
+ // 玻璃高光点
+ absolute top-3 left-4 w-8 h-3 rounded-full bg-white/30 blur-sm
```

##### 2. Hero 区背景无缝衔接
```diff
+ // 复用 Hero 区的浮动代码块效果
+ FloatingCodeBlocks 组件
+ // 匹配 Hero 区的渐变光晕
+ bg-gradient-to-br from-red-400/20 to-orange-400/20 blur-[100px]
+ bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-[80px]
```

##### 3. 进度条功能
```diff
+ // 毛玻璃进度条背景
+ bg-gray-200/80 backdrop-blur-sm
+ // 红→橙→黄渐变填充
+ bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500
+ // 实时百分比显示
+ Math.round(progress)}%
```

##### 4. 先快后慢的加载节奏
```diff
+ // 进度比例计算增量
+ const progressRatio = currentProgress / 100;
+ const baseIncrement = 10 - progressRatio * 7;
+ const increment = Math.random() * 3 + Math.max(baseIncrement, 2);
+ // 前期快 (每步 ~12%) → 后期慢 (每步 ~3-5%)
```

##### 5. 丝滑的过渡动画
```diff
+ // App.tsx 新增 showContent 状态
+ const [showContent, setShowContent] = useState(false);
+
+ // Loading 组件新增 onStartExit 回调
+ // 进度100%后150ms触发，Loading开始淡出的同时页面内容开始淡入
+ onStartExit: () => setShowContent(true)
+
+ // 两边动画同步进行，时长匹配
+ Loading 淡出: 500ms easeOut
+ 内容淡入: 700ms (略长于Loading，确保覆盖)
+ // 实现无缝丝滑过渡
```

##### 6. 与 App.tsx 状态同步
```diff
+ // 删除 App.tsx 中独立的 2500ms 定时器
+ // Loading 完成时通过 onComplete 回调通知 App
+ // 解决之前 Loading 结束但页面内容还在等待的问题
+ // 消除空白页面
```

##### 7. 修复的已知问题
- useRef 缺少初始值导致的进度累加异常
- 进度条无法跑满 100% 的 bug

- **影响范围**: 全局加载体验
- **破坏性变更**: 否

#### 🖱️ 鼠标光效增强
- **文件**: `src/components/CursorGlow.tsx` (新增)
- **描述**: 新增优雅的鼠标跟随光效，提升网站互动体验

##### 1. 新增 CursorGlow 光效组件
```diff
+ // 双层结构：快速核心点 + 慢速外层圆环
+ // 灵感来源: Alchemy Studio / wildeburg.nl
+
+ const cursorRef = useRef<HTMLDivElement>(null);  // 快速跟随核心
+ const followerRef = useRef<HTMLDivElement>(null); // 慢速跟随圆环
+
+ // 动画参数:
+ // 核心点: 0.5 跟随速度
+ // 外层圆环: 0.1 跟随速度 (产生弹性层次)
```

##### 2. 核心小点 (6px)
- 渐变填充: `from-red-500 to-orange-500`
- 快速精准跟随鼠标

##### 3. 外层圆环 (40px)
- 半透明边框: `border-orange-400/30`
- 慢速优雅跟随，产生层次感
- 不遮挡原生光标

##### 4. 引入组件
```diff
+ import CursorGlow from './components/CursorGlow';

+ <CursorGlow />
```

##### 5. CSS 调整
- `index.css`: 保持原生光标 (`cursor: none` 已移除)
- 用户偏好保留原生光标体验

- **影响范围**: 全局鼠标交互体验
- **破坏性变更**: 否

#### Hero 区域科技感增强
- **文件**: `src/components/Hero.tsx`
- **描述**: 为 Hero 区域增加浮动代码块效果，提升未来科技感

##### 1. 新增浮动代码块背景
```diff
+ const codeSnippets = [
+   { code: 'const developer = () => {}', x: '8%', y: '15%', delay: 0, duration: 20 },
+   { code: 'import AI from "brain"', x: '82%', y: '12%', delay: 2, duration: 25 },
+   { code: 'useState<any>()', x: '78%', y: '55%', delay: 4, duration: 22 },
+   { code: 'function render() {', x: '3%', y: '60%', delay: 1, duration: 18 },
+   { code: 'return <Hero />', x: '65%', y: '85%', delay: 3, duration: 24 },
+   { code: 'async function fetch() {', x: '15%', y: '75%', delay: 5, duration: 28 },
+   { code: 'export default App', x: '88%', y: '40%', delay: 1.5, duration: 23 },
+   { code: 'const [data, setData]', x: '50%', y: '10%', delay: 3.5, duration: 21 },
+   { code: '.map(item => <>)', x: '25%', y: '85%', delay: 2.5, duration: 26 },
+   { code: 'if (user.isActive)', x: '70%', y: '70%', delay: 4.5, duration: 19 },
+ ];

+ function FloatingCodeBlocks() {
+   // 10个半透明代码块，随机漂移动画
+ }
```

##### 2. 移除底部透视网格
- **原因**: 视觉表现不佳，影响整体美观
- **文件变更**: 删除 `GridBackground` 组件及相关使用

##### 3. 保留现有设计风格
- 背景渐变: `from-red-50 via-orange-50 to-yellow-50`
- 红橙暖色调不变
- 代码块样式: `bg-white/10 backdrop-blur-sm border border-red-200/30`

- **影响范围**: Hero 区域视觉效果
- **破坏性变更**: 否

#### 🔥 移除 RAG 系统架构板块
- **文件**: `src/components/About.tsx`
- **描述**: 移除"关于"页面中的 RAG 系统架构板块，该区域实用价值不高
- **变更内容**:
  - 删除整个 `<motion.div className="mb-20">` 区块 (约65行代码)
  - 包含：数据源、处理引擎、嵌入模型、向量存储、语义检索、LLM生成 6个数据卡片
  - 包含：用户查询→向量化→相似度匹配→上下文构建→LLM生成→返回答案 流程图
- **影响范围**: About 页面内容结构
- **破坏性变更**: 否

---

### 🐛 问题修复

#### 移动端AI技术区布局优化
- **文件**: `src/components/About.tsx`
- **问题**: 手机端AI技术区显示排版错误，流程图横向溢出，视觉体验差
- **修复内容**:

##### 1. AI技术卡片网格响应式
```diff
- grid md:grid-cols-3 gap-8
+ grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6
```

##### 2. TechCard组件尺寸响应式
- 圆角: `rounded-2xl` → `rounded-xl sm:rounded-2xl`
- 内边距: `p-6` → `p-4 sm:p-5 md:p-6`
- 图标: `w-16 h-16` → `w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16`
- 文字: 全部添加 `sm:` 响应式断点

##### 3. 技术工具栈
- 网格: `grid-cols-2 md:grid-cols-4` → `grid-cols-2 sm:grid-cols-4`
- 文字添加 `truncate` 防止溢出

##### 4. 底部功能卡片
- 网格: `grid md:grid-cols-3` → `grid sm:grid-cols-2 lg:grid-cols-3`
- 间距: `gap-6` → `gap-4 sm:gap-6`

- **影响范围**: 移动端(手机)用户体验
- **破坏性变更**: 否

---

### ⚠️ 已知问题

| 优先级 | 文件 | 问题描述 |
|--------|------|---------|
| 中 | `Loading.tsx:131` | `useRef<number>()` 缺少初始值参数 |
| 低 | `Hero.tsx` | 4个组件声明但未使用 (TS6133) |

---

## [历史版本]

> 暂无

---

## 模板

### 标准格式

```markdown
### [版本号] YYYY-MM-DD

#### 功能新增
- **文件**: `src/xxx.tsx`
- **描述**: 功能说明

#### 🐛 问题修复
- **文件**: `src/xxx.tsx`
- **问题**: 问题描述
- **修复**: 修复内容

#### ⚠️ 破坏性变更
- **文件**: `src/xxx.tsx`
- **描述**: 变更说明
```

---

## 贡献指南

1. 每次提交代码后，在此文档记录变更
2. 使用上述标准格式
3. 问题修复需要说明影响范围
4. 破坏性变更需要标注并说明迁移方式
