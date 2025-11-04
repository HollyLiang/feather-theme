# @feather/theme 使用指南

## 快速開始

### 1. 建置 Library

```bash
npm run build:feather-theme
```

### 2. 在專案中使用

#### 方式一：使用 Path Mapping (已配置)

在 `tsconfig.json` 中已配置路徑映射：

```json
{
  "paths": {
    "@feather/theme": ["projects/feather-theme/src/public-api"]
  }
}
```

#### 方式二：匯入樣式

在 `src/styles.scss` 中：

```scss
// 匯入所有樣式
@import 'projects/feather-theme/src/lib/styles/theme';

// 或只匯入需要的部分
@import 'projects/feather-theme/src/lib/styles/variables';
@import 'projects/feather-theme/src/lib/styles/button';
@import 'projects/feather-theme/src/lib/styles/spacing';
@import 'projects/feather-theme/src/lib/styles/tag';
@import 'projects/feather-theme/src/lib/styles/display';
```

## 樣式使用範例

### 按鈕

```html
<!-- 基礎按鈕 -->
<button class="btn">基礎按鈕</button>
<button class="btn btn-primary">主要按鈕</button>
<button class="btn btn-success">成功</button>
<button class="btn btn-danger">危險</button>

<!-- 玻璃質感 -->
<button class="btn btn-glass-light">玻璃按鈕</button>

<!-- 尺寸 -->
<button class="btn btn-sm btn-primary">小按鈕</button>
<button class="btn btn-lg btn-primary">大按鈕</button>

<!-- 按鈕群組 -->
<div class="ft-button-group">
  <button class="btn btn-primary">儲存</button>
  <button class="btn">取消</button>
</div>
```

### 間距

```html
<!-- Padding -->
<div class="p-4">16px 內距</div>
<div class="py-3 px-6">上下 12px，左右 24px</div>

<!-- Margin -->
<div class="m-4">16px 外距</div>
<div class="mt-6 mb-4">上 24px，下 16px</div>
<div class="mx-auto">水平置中</div>
```

### 標籤

```html
<span class="tag">預設</span>
<span class="tag tag-primary">主要</span>
<span class="tag tag-success">成功</span>
<span class="tag tag-danger">危險</span>
```

### Display

```html
<div class="d-flex">Flex 容器</div>
<div class="d-center">置中對齊</div>
<div class="d-space-between">左右分配</div>
```

## SCSS 變數使用

```scss
@import 'projects/feather-theme/src/lib/styles/variables';

.my-component {
  background: $color-primary;
  padding: $spacing-md;
  border-radius: $border-radius-base;
  box-shadow: $btn-shadow-base;
  
  &:hover {
    background: darken($color-primary, 8%);
  }
}
```

## 發布到 NPM

### 1. 更新版本

編輯 `projects/feather-theme/package.json`：

```json
{
  "name": "@feather/theme",
  "version": "1.0.0",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  }
}
```

### 2. 建置

```bash
npm run build:feather-theme:prod
```

### 3. 發布

```bash
cd dist/feather-theme
npm publish --access public
```

### 4. 在其他專案中安裝

```bash
npm install @feather/theme
```

然後在 `styles.scss` 中：

```scss
@import '@feather/theme/styles/theme';
```

## 可用的 npm 指令

```bash
# 開發建置
npm run build:feather-theme

# 生產建置
npm run build:feather-theme:prod

# 打包成 .tgz
npm run pack:feather-theme

# 測試
ng test feather-theme

# Lint
ng lint feather-theme
```

## 完整範例

```html
<!-- app.component.html -->
<div class="p-6">
  <h1 class="mb-4">@feather/theme 範例</h1>
  
  <!-- 按鈕區 -->
  <div class="ft-button-group mb-6">
    <button class="btn btn-primary">主要操作</button>
    <button class="btn btn-success">確認</button>
    <button class="btn btn-danger">刪除</button>
    <button class="btn">取消</button>
  </div>
  
  <!-- 標籤區 -->
  <div class="mb-6">
    <span class="tag tag-primary">Angular</span>
    <span class="tag tag-success">TypeScript</span>
    <span class="tag tag-info">SCSS</span>
  </div>
  
  <!-- 卡片 -->
  <div class="p-6" style="background: #f5f5f5; border-radius: 8px;">
    <h2 class="mt-0 mb-3">卡片標題</h2>
    <p class="mb-4">這是一個使用間距工具的卡片範例。</p>
    <div class="d-space-between">
      <span>左側內容</span>
      <button class="btn btn-sm btn-primary">操作</button>
    </div>
  </div>
</div>
```

## 注意事項

1. **目前僅支援 light mode**：Dark mode 功能已保留但未啟用
2. **SCSS 變數**：建議使用 SCSS 變數而非硬編碼顏色值
3. **間距一致性**：使用間距工具類別保持整體一致性
4. **響應式**：按鈕群組在小螢幕會自動垂直排列

## 疑難排解

### 樣式沒有生效

確認已在 `styles.scss` 中匯入：

```scss
@import 'projects/feather-theme/src/lib/styles/theme';
```

### TypeScript 錯誤

確認 `tsconfig.json` 中有正確的 path mapping：

```json
{
  "paths": {
    "@feather/theme": ["projects/feather-theme/src/public-api"]
  }
}
```

### 建置失敗

清除快取後重新建置：

```bash
rm -rf .angular/cache
npm run build:feather-theme
```
