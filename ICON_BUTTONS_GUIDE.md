# Icon Buttons Guide

## 概述

Feather Theme 支援使用 Material Icons 的按鈕樣式，提供三種 icon 按鈕類型。

## 設定 Material Icons

已在 `index.html` 中加入 Material Icons：

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Icon 按鈕類型

### 1. 帶 Icon 的按鈕（Icon 在前）

Icon 顯示在文字前面，這是預設行為。

```html
<button class="btn btn-primary">
  <span class="material-icons">add</span>
  Add Item
</button>

<button class="btn btn-success">
  <span class="material-icons">check</span>
  Confirm
</button>

<button class="btn btn-danger">
  <span class="material-icons">delete</span>
  Delete
</button>
```

**特性**:
- Icon 自動在文字前面
- Icon 和文字之間有適當間距
- 適合大多數操作按鈕

### 2. Icon 在後面的按鈕

使用 `.btn-icon-end` 類別將 icon 放在文字後面。

```html
<button class="btn btn-primary btn-icon-end">
  Next
  <span class="material-icons">arrow_forward</span>
</button>

<button class="btn btn-secondary btn-icon-end">
  Download
  <span class="material-icons">download</span>
</button>

<button class="btn btn-accent btn-icon-end">
  Send
  <span class="material-icons">send</span>
</button>
```

**特性**:
- Icon 顯示在文字後面
- 適合「下一步」、「發送」等動作
- 使用 CSS flexbox order 屬性實現

### 3. 純 Icon 按鈕

使用 `.btn-icon` 類別建立正方形的純 icon 按鈕。

```html
<button class="btn btn-icon btn-primary" title="Add">
  <span class="material-icons">add</span>
</button>

<button class="btn btn-icon btn-success" title="Check">
  <span class="material-icons">check</span>
</button>

<button class="btn btn-icon btn-danger" title="Delete">
  <span class="material-icons">delete</span>
</button>
```

**特性**:
- 正方形按鈕（2.5rem × 2.5rem）
- 只顯示 icon，沒有文字
- 建議加入 `title` 屬性提供提示
- Icon 自動置中

### 4. 圓形 Icon 按鈕

使用 `.btn-icon.btn-rounded` 類別建立圓形的純 icon 按鈕。

```html
<button class="btn btn-icon btn-rounded btn-primary" title="Add">
  <span class="material-icons">add</span>
</button>

<button class="btn btn-icon btn-rounded btn-success" title="Check">
  <span class="material-icons">check</span>
</button>

<button class="btn btn-icon btn-rounded btn-danger" title="Delete">
  <span class="material-icons">delete</span>
</button>
```

**特性**:
- 圓形按鈕（`border-radius: 50%`）
- 尺寸與正方形 icon 按鈕相同
- 更現代、更柔和的視覺效果
- 適合浮動操作按鈕（FAB）風格

## 尺寸變化

### 帶文字的 Icon 按鈕

```html
<!-- 小尺寸 -->
<button class="btn btn-sm btn-primary">
  <span class="material-icons">add</span>
  Add
</button>

<!-- 預設尺寸 -->
<button class="btn btn-primary">
  <span class="material-icons">add</span>
  Add
</button>

<!-- 大尺寸 -->
<button class="btn btn-lg btn-primary">
  <span class="material-icons">add</span>
  Add
</button>
```

### 純 Icon 按鈕尺寸

```html
<!-- 小尺寸 (2rem × 2rem) -->
<button class="btn btn-icon btn-sm btn-primary" title="Small">
  <span class="material-icons">favorite</span>
</button>

<!-- 預設尺寸 (2.5rem × 2.5rem) -->
<button class="btn btn-icon btn-primary" title="Default">
  <span class="material-icons">favorite</span>
</button>

<!-- 大尺寸 (3rem × 3rem) -->
<button class="btn btn-icon btn-lg btn-primary" title="Large">
  <span class="material-icons">favorite</span>
</button>
```

### 圓形 Icon 按鈕尺寸

```html
<!-- 小尺寸 (2rem × 2rem) -->
<button class="btn btn-icon btn-rounded btn-sm btn-primary" title="Small">
  <span class="material-icons">favorite</span>
</button>

<!-- 預設尺寸 (2.5rem × 2.5rem) -->
<button class="btn btn-icon btn-rounded btn-primary" title="Default">
  <span class="material-icons">favorite</span>
</button>

<!-- 大尺寸 (3rem × 3rem) -->
<button class="btn btn-icon btn-rounded btn-lg btn-primary" title="Large">
  <span class="material-icons">favorite</span>
</button>
```

## 常用 Material Icons

### 操作類

| Icon 名稱 | 用途 | 範例 |
|----------|------|------|
| `add` | 新增 | 新增項目 |
| `edit` | 編輯 | 編輯內容 |
| `delete` | 刪除 | 刪除項目 |
| `save` | 儲存 | 儲存變更 |
| `close` | 關閉 | 關閉視窗 |
| `check` | 確認 | 確認操作 |
| `clear` | 清除 | 清除內容 |

### 導航類

| Icon 名稱 | 用途 | 範例 |
|----------|------|------|
| `arrow_forward` | 下一步 | 繼續 |
| `arrow_back` | 上一步 | 返回 |
| `home` | 首頁 | 回到首頁 |
| `menu` | 選單 | 開啟選單 |
| `more_vert` | 更多 | 更多選項 |

### 檔案類

| Icon 名稱 | 用途 | 範例 |
|----------|------|------|
| `upload` | 上傳 | 上傳檔案 |
| `download` | 下載 | 下載檔案 |
| `folder` | 資料夾 | 開啟資料夾 |
| `attach_file` | 附件 | 附加檔案 |

### 社交類

| Icon 名稱 | 用途 | 範例 |
|----------|------|------|
| `favorite` | 喜歡 | 加入最愛 |
| `share` | 分享 | 分享內容 |
| `send` | 發送 | 發送訊息 |
| `notifications` | 通知 | 查看通知 |

### 設定類

| Icon 名稱 | 用途 | 範例 |
|----------|------|------|
| `settings` | 設定 | 開啟設定 |
| `search` | 搜尋 | 搜尋內容 |
| `filter_list` | 篩選 | 篩選結果 |
| `refresh` | 重新整理 | 重新載入 |

## 樣式細節

### Icon 間距

```scss
.btn {
  .material-icons {
    font-size: 1.25rem;
    line-height: 1;
    vertical-align: middle;
    margin-right: 0.25rem; // Icon 和文字之間的間距
  }
}
```

### 純 Icon 按鈕尺寸

```scss
.btn-icon {
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  
  .material-icons {
    margin: 0;
    font-size: 1.5rem;
  }
}
```

## 可訪問性建議

1. **純 Icon 按鈕必須有 title**
   ```html
   <button class="btn btn-icon btn-primary" title="Add new item">
     <span class="material-icons">add</span>
   </button>
   ```

2. **使用語義化的 icon**
   - 選擇能清楚表達功能的 icon
   - 避免使用不常見或容易混淆的 icon

3. **考慮加入 aria-label**
   ```html
   <button class="btn btn-icon btn-primary" aria-label="Add new item">
     <span class="material-icons" aria-hidden="true">add</span>
   </button>
   ```

4. **確保對比度**
   - Icon 顏色應與背景有足夠對比
   - 使用彩色按鈕（primary, success 等）確保可見性

## 完整範例

### 表單操作列

```html
<div class="button-group">
  <button class="btn btn-primary">
    <span class="material-icons">save</span>
    Save
  </button>
  <button class="btn btn-default">
    <span class="material-icons">close</span>
    Cancel
  </button>
</div>
```

### 工具列

```html
<div class="button-group">
  <button class="btn btn-icon btn-default" title="Edit">
    <span class="material-icons">edit</span>
  </button>
  <button class="btn btn-icon btn-default" title="Delete">
    <span class="material-icons">delete</span>
  </button>
  <button class="btn btn-icon btn-default" title="Share">
    <span class="material-icons">share</span>
  </button>
  <button class="btn btn-icon btn-default" title="More">
    <span class="material-icons">more_vert</span>
  </button>
</div>
```

### 導航按鈕

```html
<div class="button-group justify-space-between">
  <button class="btn btn-secondary">
    <span class="material-icons">arrow_back</span>
    Previous
  </button>
  <button class="btn btn-primary btn-icon-end">
    Next
    <span class="material-icons">arrow_forward</span>
  </button>
</div>
```

## 瀏覽器支援

- ✅ Chrome/Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ 所有支援 Material Icons 的瀏覽器

## 更多 Icons

查看完整的 Material Icons 列表：
https://fonts.google.com/icons

## 更新日期

2025-10-10
