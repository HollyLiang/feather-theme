# @feather/theme

Angular 工具樣式庫，提供 button、display、spacing、tag 等通用樣式。

## 特色功能

- 🎨 **按鈕樣式**: 多種按鈕樣式 (primary, success, danger, warning, accent, secondary, glass)
- 📐 **間距工具**: 完整的 padding 和 margin 工具類別 (p-*, m-*, py-*, px-*, 等)
- 🏷️ **標籤樣式**: 彩色標籤元件
- 📱 **Display 工具**: Flexbox 和 Grid 快速工具類別
- 🎯 **輕量級**: 純 SCSS，無額外 JavaScript 依賴
- 🔧 **TypeScript**: 完整 TypeScript 支援
- 📦 **易於整合**: 簡單匯入即可使用

> **注意**: 目前僅支援亮色主題 (light mode)，dark mode 功能已保留但未啟用。

## 安裝

```bash
npm install @feather/theme
```

## 使用方式
### 1. 匯入樣式

在你的 `styles.scss` 中匯入：

**完整匯入 (推薦)**

```scss
@import 'node_modules/@feather/theme';
```

這會自動匯入所有 Feather Theme 的樣式和變數。

**按需匯入**

如果只需要特定模組：

```scss
@import 'node_modules/@feather/theme/src/styles/variables';
@import 'node_modules/@feather/theme/src/styles/button';
@import 'node_modules/@feather/theme/src/styles/spacing';
@import 'node_modules/@feather/theme/src/styles/tag';
@import 'node_modules/@feather/theme/src/styles/card';
```

**注意**: 如果你使用 `ng add @feather/theme`，會自動添加完整匯入。

### 2. 匯入 Module (可選)

如果需要使用 ThemeService 或 ThemeDirective：

```typescript
import { ThemeModule } from '@feather/theme';

@NgModule({
  imports: [ThemeModule]
})
export class AppModule { }
```

## 按鈕樣式

### 基礎按鈕

```html
<button class="btn">基礎按鈕</button>
<button class="btn btn-primary">主要按鈕</button>
<button class="btn btn-success">成功按鈕</button>
<button class="btn btn-danger">危險按鈕</button>
<button class="btn btn-warning">警告按鈕</button>
<button class="btn btn-accent">強調按鈕</button>
<button class="btn btn-secondary">次要按鈕</button>
```

### 玻璃質感按鈕

```html
<!-- 深色背景適用 -->
<button class="btn btn-glass">玻璃按鈕</button>
<button class="btn btn-glass-secondary">玻璃次要按鈕</button>

<!-- 淺色背景適用 -->
<button class="btn btn-glass-light">淺色玻璃按鈕</button>
<button class="btn btn-glass-light-secondary">淺色玻璃次要</button>
<button class="btn btn-glass-dark">暗色玻璃按鈕</button>
```

### 按鈕尺寸

```html
<button class="btn btn-sm btn-primary">小按鈕</button>
<button class="btn btn-primary">一般按鈕</button>
<button class="btn btn-lg btn-primary">大按鈕</button>
```

### 按鈕群組

```html
<div class="ft-button-group">
  <button class="btn btn-primary">按鈕 1</button>
  <button class="btn btn-secondary">按鈕 2</button>
  <button class="btn btn-success">按鈕 3</button>
</div>

<!-- 對齊方式 -->
<div class="ft-button-group justify-center">置中對齊</div>
<div class="ft-button-group justify-end">靠右對齊</div>
```

## 間距工具

### Padding (內距)

```html
<!-- 全方向 -->
<div class="p-0">無內距</div>
<div class="p-4">16px 內距</div>

<!-- 垂直方向 (上下) -->
<div class="py-3">上下 12px 內距</div>

<!-- 水平方向 (左右) -->
<div class="px-5">左右 20px 內距</div>

<!-- 單邊 -->
<div class="pt-2">上 8px 內距</div>
<div class="pb-4">下 16px 內距</div>
<div class="pl-3">左 12px 內距</div>
<div class="pr-6">右 24px 內距</div>
```

### Margin (外距)

```html
<!-- 全方向 -->
<div class="m-0">無外距</div>
<div class="m-4">16px 外距</div>

<!-- 垂直方向 (上下) -->
<div class="my-3">上下 12px 外距</div>

<!-- 水平方向 (左右) -->
<div class="mx-5">左右 20px 外距</div>
<div class="mx-auto">水平置中</div>

<!-- 單邊 -->
<div class="mt-2">上 8px 外距</div>
<div class="mb-4">下 16px 外距</div>
<div class="ml-3">左 12px 外距</div>
<div class="mr-6">右 24px 外距</div>
```

### 間距對照表

| 類別   | rem 值  | 像素值 |
| ------ | ------- | ------ |
| `*-0`  | 0       | 0px    |
| `*-1`  | 0.25rem | 4px    |
| `*-2`  | 0.5rem  | 8px    |
| `*-3`  | 0.75rem | 12px   |
| `*-4`  | 1rem    | 16px   |
| `*-5`  | 1.25rem | 20px   |
| `*-6`  | 1.5rem  | 24px   |
| `*-7`  | 2rem    | 32px   |
| `*-8`  | 2.5rem  | 40px   |
| `*-9`  | 3rem    | 48px   |
| `*-10` | 4rem    | 64px   |

## 標籤樣式

```html
<span class="tag">預設標籤</span>
<span class="tag tag-primary">主要標籤</span>
<span class="tag tag-success">成功標籤</span>
<span class="tag tag-danger">危險標籤</span>
<span class="tag tag-warning">警告標籤</span>
<span class="tag tag-accent">強調標籤</span>
<span class="tag tag-info">資訊標籤</span>
```

## Display 工具

```html
<!-- Display 類型 -->
<div class="d-none">隱藏</div>
<div class="d-block">區塊</div>
<div class="d-inline">行內</div>
<div class="d-inline-block">行內區塊</div>
<div class="d-flex">Flex</div>
<div class="d-grid">Grid</div>

<!-- Flex 快速工具 -->
<div class="d-center">置中對齊</div>
<div class="d-space-between">左右分配</div>
<div class="flex-1">填滿剩餘空間</div>
```

## SCSS 變數

### 顏色

```scss
$color-primary: #4a6594;
$color-accent: #6d5d7e;
$color-success: #4caf50;
$color-danger: #e74c3c;
$color-warning: #ff9800;
$color-info: #116cb1;
$color-secondary: #2a3c4b;

// 中性色
$color-gray-50 到 $color-gray-900
```

### 間距

```scss
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-base: 1rem;
$spacing-md: 1.5rem;
$spacing-lg: 2rem;
$spacing-xl: 3rem;
```

### 圓角

```scss
$border-radius-sm: 4px;
$border-radius-base: 8px;
$border-radius-lg: 12px;
$border-radius-xl: 16px;
$border-radius-full: 9999px;
```

### 陰影

```scss
$btn-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
$btn-shadow-base: 0 2px 4px rgba(0, 0, 0, 0.1);
$btn-shadow-md: 0 4px 8px rgba(0, 0, 0, 0.2);
$btn-shadow-lg: 0 2px 8px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
$btn-shadow-xl: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12);
```

### 過渡效果

```scss
$transition-fast: 0.15s ease;
$transition-base: 0.3s ease;
$transition-slow: 0.5s ease;
```

## 在 SCSS 中使用變數

```scss
@import '@feather/theme/styles/variables';

.my-component {
  background: $color-primary;
  padding: $spacing-md;
  border-radius: $border-radius-base;
  box-shadow: $btn-shadow-base;
  transition: $transition-base;
}
```

## 覆蓋預設變數

所有變數都使用 `!default` 標記，可以在匯入前覆蓋：

```scss
// 在匯入 theme 之前定義自己的變數
$color-primary: #your-color;
$color-success: #your-success-color;
$spacing-base: 1.2rem;

// 然後匯入 theme
@import '@feather/theme/styles/theme';
```

或者只覆蓋部分變數：

```scss
// 覆蓋主題色
$color-primary: #3498db;
$color-accent: #9b59b6;

// 匯入變數（會使用你的覆蓋值）
@import '@feather/theme/styles/variables';

// 匯入其他樣式
@import '@feather/theme/styles/button';
@import '@feather/theme/styles/spacing';
```

## ThemeService (可選)

雖然目前僅支援 light mode，但仍可使用 ThemeService：

```typescript
import { Component } from '@angular/core';
import { ThemeService } from '@feather/theme';

@Component({
  selector: 'app-root',
  template: `<p>當前主題: {{ currentTheme }}</p>`
})
export class AppComponent {
  currentTheme: string;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme(); // 'light'
  }
}
```

## License

MIT

## 貢獻

歡迎提交 Pull Request！
