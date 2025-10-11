# Breaking Changes

## Version 1.1.0 - 2025-10-10

### Button and Tag Class Prefix Change

為了避免與其他 CSS 框架衝突並保持命名一致性，所有按鈕和標籤類別現在都使用 `ft-` 前綴。

#### Button Classes

**之前**:
```html
<button class="btn btn-primary">Button</button>
<button class="btn btn-sm btn-success">Small Button</button>
<button class="btn btn-icon btn-primary">
  <span class="material-icons">add</span>
</button>
```

**現在**:
```html
<button class="ft-btn btn-primary">Button</button>
<button class="ft-btn btn-sm btn-success">Small Button</button>
<button class="ft-btn btn-icon btn-primary">
  <span class="material-icons">add</span>
</button>
```

**變更內容**:
- `.btn` → `.ft-btn`
- 所有 modifier 類別保持不變（`btn-primary`, `btn-sm`, `btn-icon` 等）

#### Tag Classes

**之前**:
```html
<span class="tag tag-primary">Tag</span>
<span class="tag tag-outline tag-success">Outline Tag</span>
```

**現在**:
```html
<span class="ft-tag tag-primary">Tag</span>
<span class="ft-tag tag-outline tag-success">Outline Tag</span>
```

**變更內容**:
- `.tag` → `.ft-tag`
- 所有 modifier 類別保持不變（`tag-primary`, `tag-outline` 等）

### Migration Guide

#### 自動遷移（推薦）

使用以下命令批量替換：

```bash
# 替換 button 類別
find . -name "*.html" -type f -exec sed -i 's/class="btn /class="ft-btn /g' {} +

# 替換 tag 類別
find . -name "*.html" -type f -exec sed -i 's/class="tag/class="ft-tag/g' {} +
```

Windows PowerShell:
```powershell
# 替換 button 類別
Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
  (Get-Content $_.FullName -Raw) -replace 'class="btn ', 'class="ft-btn ' | Set-Content $_.FullName
}

# 替換 tag 類別
Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
  (Get-Content $_.FullName -Raw) -replace 'class="tag', 'class="ft-tag' | Set-Content $_.FullName
}
```

#### 手動遷移

1. 搜尋所有 `class="btn` 並替換為 `class="ft-btn`
2. 搜尋所有 `class="tag` 並替換為 `class="ft-tag`

### 為什麼要這樣改？

1. **避免衝突**: 許多 CSS 框架（如 Bootstrap）使用 `.btn` 和 `.tag`，加上前綴可以避免衝突
2. **命名一致性**: 與其他 Feather Theme 類別（如 `.ft-container`）保持一致
3. **更好的識別**: 清楚表明這些類別來自 Feather Theme

### 不受影響的類別

以下類別**不需要**更改：

- Display 工具: `.d-flex`, `.d-center`, `.d-space-between` 等
- Spacing 工具: `.p-*`, `.m-*`, `.px-*`, `.my-*` 等
- Typography 工具: `.text-*` 等
- Layout 工具: `.ft-container` 等
- Modifier 類別: `btn-primary`, `tag-outline` 等（這些是 modifier，不是基礎類別）

### 完整的類別對照表

#### Buttons

| 舊類別 | 新類別 |
|--------|--------|
| `.btn` | `.ft-btn` |

#### Tags

| 舊類別 | 新類別 |
|--------|--------|
| `.tag` | `.ft-tag` |

### 需要協助？

如果在遷移過程中遇到問題，請參考：
- [Button Styles Guide](./ICON_BUTTONS_GUIDE.md)
- [Tag Styles Guide](./TAG_STYLES_GUIDE.md)
- Demo 應用中的範例

## 更新日期

2025-10-10
