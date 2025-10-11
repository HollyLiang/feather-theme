# SCSS Import 配置指南

## 概述

已配置 Angular 專案，讓所有元件的 SCSS 檔案可以直接引用 Feather Theme 的變數和 mixins，無需使用完整路徑。

## 配置內容

### angular.json

在 `angular.json` 中的 `build` 和 `test` 配置中加入了 `stylePreprocessorOptions`：

```json
{
  "stylePreprocessorOptions": {
    "includePaths": [
      "projects/feather-theme/src/lib/styles"
    ]
  }
}
```

這個配置告訴 Angular 在編譯 SCSS 時，自動在 `projects/feather-theme/src/lib/styles` 目錄中尋找匯入的檔案。

## 使用方式

### 之前（需要完整路徑）

```scss
@import '../../../projects/feather-theme/src/lib/styles/variables';
@import '../../../projects/feather-theme/src/lib/styles/mixins';
```

### 之後（簡化路徑）

```scss
@import 'variables';
@import 'mixins';
```

## 可用的匯入檔案

在任何元件的 `.scss` 檔案中，你可以直接匯入以下檔案：

### 變數
```scss
@import 'variables';
```

包含：
- 主題顏色 (`$color-primary`, `$color-secondary`, 等)
- 中性色 (`$color-gray-100`, `$color-gray-200`, 等)
- 間距變數 (`$spacing-xs`, `$spacing-sm`, 等)
- 圓角變數 (`$border-radius-sm`, `$border-radius-base`, 等)
- 過渡效果 (`$transition-fast`, `$transition-base`, 等)

### 其他樣式檔案
```scss
@import 'button';    // 按鈕樣式
@import 'display';   // Display 工具
@import 'layout';    // Layout 工具
@import 'spacing';   // 間距工具
@import 'tag';       // 標籤樣式
```

## 範例

### NavComponent

```scss
// src/app/components/nav/nav.component.scss
@import 'variables';

.main-nav {
  background: $color-secondary;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-brand {
  color: $color-white;
  transition: $transition-base;
  
  &:hover {
    color: $color-gray-200;
  }
}
```

### 自訂元件

```scss
// src/app/components/my-component/my-component.scss
@import 'variables';

.my-component {
  padding: $spacing-md;
  background: $color-primary;
  border-radius: $border-radius-base;
  transition: $transition-base;
  
  &:hover {
    background: darken($color-primary, 10%);
  }
}
```

## 注意事項

1. **重新啟動開發伺服器**
   - 修改 `angular.json` 後需要重新啟動 `ng serve`
   - 配置才會生效

2. **僅適用於元件樣式**
   - 這個配置適用於所有元件的 `.scss` 檔案
   - 全域樣式 (`src/styles.scss`) 仍需使用相對路徑

3. **避免循環引用**
   - 不要在 Feather Theme 的樣式檔案中引用應用程式的樣式
   - 保持單向依賴關係

4. **建置時間**
   - 這個配置不會影響建置時間
   - 只是簡化了匯入路徑

## 優勢

✅ **簡化程式碼**: 不需要計算相對路徑
✅ **易於維護**: 移動元件時不需要更新匯入路徑
✅ **一致性**: 所有元件使用相同的匯入方式
✅ **可讀性**: 程式碼更清晰易讀

## 疑難排解

### 問題：匯入失敗，找不到檔案

**解決方案**:
1. 確認已重新啟動開發伺服器
2. 檢查 `angular.json` 配置是否正確
3. 確認檔案名稱正確（不需要 `_` 前綴和 `.scss` 副檔名）

### 問題：變數未定義

**解決方案**:
1. 確認已匯入 `variables` 檔案
2. 檢查變數名稱是否正確
3. 查看 `projects/feather-theme/src/lib/styles/_variables.scss` 確認變數存在

## 相關檔案

- `angular.json` - Angular 專案配置
- `projects/feather-theme/src/lib/styles/_variables.scss` - 變數定義
- `projects/feather-theme/src/lib/styles/theme.scss` - 主題樣式匯入

## 更新日期

2025-10-10
