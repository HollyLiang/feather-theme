# Tag Styles Guide

## 概述

Feather Theme 提供兩種 Tag 樣式變體：
1. **Default Tags** - 彩色背景，白色文字（預設樣式）
2. **Outline Tags** - 透明背景，彩色邊框和文字

## Tag 樣式類型

### 1. Default Tags（預設樣式）

彩色背景配白色文字，視覺效果最強烈，這是預設樣式。

```html
<span class="tag">Default</span>
<span class="tag tag-primary">Primary</span>
<span class="tag tag-secondary">Secondary</span>
<span class="tag tag-accent">Accent</span>
<span class="tag tag-success">Success</span>
<span class="tag tag-warning">Warning</span>
<span class="tag tag-danger">Danger</span>
<span class="tag tag-info">Info</span>
```

**特性**:
- 實心彩色背景
- 白色文字
- 最高對比度
- 適合需要強調的場景
- **這是預設樣式，不需要額外的 modifier 類別**

### 2. Outline Tags（外框樣式）

透明背景配彩色邊框，適合需要更輕量視覺效果的場景。

```html
<span class="tag tag-outline">Default Outline</span>
<span class="tag tag-outline tag-primary">Primary</span>
<span class="tag tag-outline tag-accent">Accent</span>
<span class="tag tag-outline tag-success">Success</span>
<span class="tag tag-outline tag-warning">Warning</span>
<span class="tag tag-outline tag-danger">Danger</span>
<span class="tag tag-outline tag-info">Info</span>
```

**特性**:
- 透明背景
- 彩色邊框（1px solid）
- 彩色文字
- 適合需要更輕量視覺的場景


## 顏色變體

兩種樣式都支援以下顏色：

| 類別 | 顏色 | 用途 |
|------|------|------|
| `tag-primary` | #446192 | 主要標籤 |
| `tag-secondary` | #273854 | 次要標籤 |
| `tag-accent` | #6d5d7e | 強調標籤 |
| `tag-success` | #4caf50 | 成功/完成 |
| `tag-warning` | #ff9800 | 警告/待處理 |
| `tag-danger` | #e74c3c | 錯誤/危險 |
| `tag-info` | #116cb1 | 資訊 |

## 使用範例

### 狀態標籤

```html
<!-- Default style (白色文字) -->
<span class="tag tag-success">Active</span>
<span class="tag tag-warning">Pending</span>
<span class="tag tag-danger">Inactive</span>

<!-- Outline style (彩色文字) -->
<span class="tag tag-outline tag-success">Active</span>
<span class="tag tag-outline tag-warning">Pending</span>
<span class="tag tag-outline tag-danger">Inactive</span>
```

### 分類標籤

```html
<span class="tag tag-primary">Angular</span>
<span class="tag tag-accent">TypeScript</span>
<span class="tag tag-info">SCSS</span>
```

### 優先級標籤

```html
<!-- Default style 最適合優先級標籤 -->
<span class="tag tag-danger">High Priority</span>
<span class="tag tag-warning">Medium Priority</span>
<span class="tag tag-primary">Low Priority</span>
```

## 樣式組合規則

### 有效組合

✅ `.tag` - 預設樣式（灰色背景）
✅ `.tag .tag-primary` - 預設樣式 + 顏色（白色文字）
✅ `.tag .tag-outline .tag-primary` - Outline + 顏色（彩色文字）

### 無效組合

❌ `.tag .tag-primary .tag-success` - 不能同時使用多個顏色

## 自訂樣式

### 修改間距

```scss
.tag {
  padding: 0.5em 1em; // 增加內距
}
```

### 修改圓角

```scss
.tag {
  border-radius: 0.5em; // 減少圓角
}
```

### 修改字體大小

```scss
.tag {
  font-size: 1em; // 增大字體
}
```

## 可訪問性建議

1. **對比度**: Default tags（白色文字）提供最佳對比度
2. **語義化**: 使用適當的顏色表達含義
   - Success (綠色) - 正面、完成
   - Danger (紅色) - 錯誤、危險
   - Warning (橙色) - 警告、注意
   - Info (藍色) - 資訊
3. **不僅依賴顏色**: 配合文字或圖示傳達資訊
4. **選擇合適的樣式**:
   - 需要強調時使用 Default（白色文字）
   - 需要輕量視覺時使用 Outline（彩色文字）

## 響應式考量

Tags 會自動適應容器寬度，並在需要時換行：

```html
<div style="max-width: 300px;">
  <span class="tag tag-primary">Tag 1</span>
  <span class="tag tag-success">Tag 2</span>
  <span class="tag tag-danger">Tag 3</span>
  <!-- 自動換行 -->
</div>
```

## 瀏覽器支援

- ✅ Chrome/Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 所有現代瀏覽器

## 更新日期

2025-10-10
