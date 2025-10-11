# Feather Theme Integration Guide

## 概述

Feather Theme 已成功整合至此 Angular 專案中。本文件說明如何使用主題功能。

## 已完成的整合步驟

### 1. Angular.json 配置
- ✅ 在 `angular.json` 中新增 `feather-theme` library 專案配置
- ✅ 配置了 build 和 test 架構

### 2. TypeScript 路徑映射
- ✅ 在 `tsconfig.json` 中新增 `@feather/theme` 路徑映射
- ✅ 設定 `baseUrl` 為 `./`

### 3. 樣式整合
- ✅ 在 `src/styles.scss` 中匯入 Feather Theme 樣式
- ✅ 套用全域樣式和主題變數

### 4. 服務整合
- ✅ 在 `app.config.ts` 中提供 `ThemeService`
- ✅ 主題服務已可在整個應用中使用

### 5. 範例頁面
- ✅ 建立完整的 demo 頁面展示所有主題功能

## 使用方式

### 在元件中使用按鈕樣式

```html
<!-- 基本按鈕 -->
<button class="btn">Default Button</button>

<!-- 彩色按鈕 -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-secondary">Secondary</button>

<!-- 尺寸變化 -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- 玻璃質感 -->
<button class="btn btn-glass-light">Glass Light</button>
<button class="btn btn-glass">Glass (Dark BG)</button>
```

### 使用標籤 (Tags)

```html
<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-danger">Danger</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-info">Info</span>
```

### 使用 Display 工具類別

```html
<!-- Flexbox -->
<div class="d-flex">Flex container</div>
<div class="d-center">Centered content</div>
<div class="d-space-between">Space between</div>

<!-- Display types -->
<div class="d-block">Block</div>
<div class="d-inline">Inline</div>
<div class="d-none">Hidden</div>
```

### 在 TypeScript 中使用 ThemeService

```typescript
import { Component, inject } from '@angular/core';
import { ThemeService } from '@feather/theme';

@Component({
  selector: 'app-my-component',
  template: `...`
})
export class MyComponent {
  private themeService = inject(ThemeService);

  ngOnInit() {
    // 取得當前主題
    const currentTheme = this.themeService.getCurrentTheme();
    console.log('Current theme:', currentTheme);

    // 訂閱主題變更
    this.themeService.currentTheme$.subscribe(theme => {
      console.log('Theme changed to:', theme);
    });
  }
}
```

### 使用 SCSS 變數

在你的 `.scss` 檔案中：

```scss
@import '../projects/feather-theme/src/lib/styles/variables';

.my-custom-element {
  color: $color-primary;
  background: $color-gray-100;
  padding: $spacing-md;
  border-radius: $border-radius-base;
  transition: $transition-base;
}
```

## 可用的主題變數

### 顏色
- `$color-primary`: #446192
- `$color-accent`: #6d5d7e
- `$color-success`: #4caf50
- `$color-danger`: #e74c3c
- `$color-warning`: #ff9800
- `$color-info`: #116cb1
- `$color-secondary`: #2a3c4b

### 間距
- `$spacing-xs`: 0.25rem
- `$spacing-sm`: 0.5rem
- `$spacing-base`: 1rem
- `$spacing-md`: 1.5rem
- `$spacing-lg`: 2rem
- `$spacing-xl`: 3rem

### 圓角
- `$border-radius-sm`: 4px
- `$border-radius-base`: 8px
- `$border-radius-lg`: 12px
- `$border-radius-xl`: 16px
- `$border-radius-full`: 9999px

### 過渡效果
- `$transition-fast`: 0.15s ease
- `$transition-base`: 0.3s ease
- `$transition-slow`: 0.5s ease

## 執行專案

```bash
# 啟動開發伺服器
npm start

# 或
ng serve

# 建置 library
ng build feather-theme

# 建置主應用
ng build
```

## 查看 Demo

啟動開發伺服器後，訪問 `http://localhost:4200` 即可看到完整的 Feather Theme 功能展示。

## 注意事項

1. **主題模式**: 目前僅支援 light mode，dark mode 功能已保留但未啟用
2. **路徑映射**: 確保 `tsconfig.json` 中的路徑映射正確
3. **樣式匯入**: 全域樣式已在 `src/styles.scss` 中匯入，無需在每個元件中重複匯入

## 專案結構

```
feather-theme-lab/
├── projects/
│   └── feather-theme/          # Feather Theme Library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── styles/     # SCSS 樣式檔案
│       │   │   ├── directives/ # Angular directives
│       │   │   ├── models/     # TypeScript models
│       │   │   ├── theme.module.ts
│       │   │   └── theme.service.ts
│       │   └── public-api.ts
│       └── package.json
├── src/
│   ├── app/
│   │   ├── app.component.html  # Demo 頁面
│   │   └── app.config.ts       # 應用配置 (含 ThemeService)
│   └── styles.scss             # 全域樣式 (匯入 theme)
├── angular.json                # Angular 專案配置
└── tsconfig.json               # TypeScript 配置
```

## 更多資訊

查看 `projects/feather-theme/docs/` 目錄以獲取更多詳細文件。
