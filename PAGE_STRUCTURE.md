# Feather Theme Demo - 頁面結構

## 概述

Demo 應用已重構為多頁面結構，每個功能模組都有獨立的展示頁面。

## 頁面結構

### 1. 首頁 (Home) - `/`
**路徑**: `src/app/pages/home/`

**內容**:
- 完整的 Color Palette 展示
- 主題色彩 (Primary, Secondary, Accent, Success, Danger, Warning, Info)
- 中性色彩 (White, Gray 50-900, Black)
- 每個顏色都顯示名稱和 HEX 色碼

### 2. 按鈕頁面 (Buttons) - `/buttons`
**路徑**: `src/app/pages/buttons/`

**內容**:
- 顏色變體 (Default, Primary, Secondary, Accent, Success, Danger, Warning)
- 尺寸變化 (Small, Default, Large)
- 玻璃質感效果 (淺色背景和深色背景)
- 禁用狀態
- 按鈕群組對齊方式 (左對齊、置中、右對齊)

### 3. 標籤頁面 (Tags) - `/tags`
**路徑**: `src/app/pages/tags/`

**內容**:
- 標籤變體 (Default, Primary, Accent, Success, Warning, Danger, Info)
- 實際使用範例:
  - 狀態標籤 (Active, Pending, Inactive)
  - 分類標籤 (Angular, TypeScript, SCSS)
  - 優先級標籤 (High, Medium, Low)

### 4. Display 工具頁面 (Display) - `/display`
**路徑**: `src/app/pages/display/`

**內容**:
- Flexbox 工具類別 (d-flex)
- 置中對齊 (d-center)
- 空間分配 (d-space-between)
- Display 類型 (d-block, d-inline, d-inline-block, d-grid, d-none)
- Flex 工具 (flex-1)

## 導航結構

應用包含一個固定在頂部的導航列，提供以下連結：
- **Home** - 首頁 (Color Palette)
- **Buttons** - 按鈕展示
- **Tags** - 標籤展示
- **Display** - Display 工具展示

導航列特性：
- 固定在頂部 (sticky positioning)
- 當前頁面高亮顯示
- Hover 效果
- 響應式設計

## 樣式架構

### 全域樣式 (`src/styles.scss`)
- Feather Theme 樣式匯入
- 頁面標題樣式 (`.page-header`)
- Demo 區塊樣式 (`.demo-section`)
- 子區塊樣式 (`.subsection`)
- 顏色面板樣式 (`.color-grid`, `.color-item`, `.color-swatch`)
- Code 標籤樣式

**注意**: 頁面容器現在使用 Feather Theme 的 `.ft-container` 類別

### 元件樣式

#### App Component (`src/app/app.component.scss`)
- 主內容區域 (`.main-content`)

#### Nav Component (`src/app/components/nav/nav.component.scss`)
- 導航列樣式 (`.main-nav`)
- 導航容器 (`.nav-container`)
- 導航品牌 (`.nav-brand`)
- 導航連結 (`.nav-link`)

## 路由配置

```typescript
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'display', component: DisplayComponent },
  { path: '**', redirectTo: '' }
];
```

## 元件清單

### 頁面元件
1. `HomeComponent` - 首頁 (Color Palette)
   - 路徑: `src/app/pages/home/`
2. `ButtonsComponent` - 按鈕展示頁
   - 路徑: `src/app/pages/buttons/`
3. `TagsComponent` - 標籤展示頁
   - 路徑: `src/app/pages/tags/`
4. `DisplayComponent` - Display 工具展示頁
   - 路徑: `src/app/pages/display/`

### 共用元件
- `NavComponent` - 導航列元件
  - 路徑: `src/app/components/nav/`
  - 包含所有導航功能和樣式

### 主應用元件
- `AppComponent` - 根元件，包含 NavComponent 和路由出口
  - 路徑: `src/app/`

## 開發指南

### 新增頁面

1. 使用 Angular CLI 建立新元件:
```bash
ng generate component pages/your-page --skip-tests
```

2. 在 `app.routes.ts` 中新增路由:
```typescript
import { YourPageComponent } from './pages/your-page/your-page.component';

export const routes: Routes = [
  // ... existing routes
  { path: 'your-page', component: YourPageComponent },
];
```

3. 在導航列中新增連結 (`app.component.html`):
```html
<a routerLink="/your-page" routerLinkActive="active" class="nav-link">Your Page</a>
```

### 頁面模板結構

建議使用以下結構:

```html
<div class="ft-container">
  <header class="page-header">
    <h1>頁面標題</h1>
    <p>頁面描述</p>
  </header>

  <section class="demo-section">
    <div class="subsection">
      <h3>子區塊標題</h3>
      <!-- 內容 -->
    </div>
  </section>
</div>
```

**使用 Feather Theme 工具類別**:
- `.ft-container` - 響應式容器，自動置中和 padding
- `.d-flex`, `.d-center`, `.d-space-between` - Display 工具
- `.button-group` - 按鈕群組布局

## 色彩更新

主題色彩已更新：
- **Primary**: #446192
- **Secondary**: #273854 (已更新)
- **Accent**: #6d5d7e
- **Success**: #4caf50
- **Danger**: #e74c3c
- **Warning**: #ff9800
- **Info**: #116cb1

## 執行應用

```bash
# 啟動開發伺服器
npm start

# 或
ng serve

# 訪問
http://localhost:4200
```

## 建置

```bash
# 建置應用
ng build

# 建置 library
ng build feather-theme
```

## 注意事項

1. 所有頁面元件都是 standalone 元件
2. 共用樣式定義在 `src/styles.scss`
3. 導航列使用 sticky positioning，會固定在頂部
4. 所有頁面都使用相同的容器寬度 (max-width: 1200px)
5. 響應式設計已考慮在內
