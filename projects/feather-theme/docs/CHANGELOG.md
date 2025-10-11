# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.1] - 2025-10-10

### Added
- Initial release of @feather/theme
- 按鈕樣式系統 (Button styles)
  - 基礎按鈕和彩色按鈕 (primary, success, danger, warning, accent, secondary)
  - 玻璃質感按鈕 (glass, glass-light, glass-dark)
  - 按鈕尺寸 (sm, lg)
  - 按鈕群組 (button-group)
- 間距工具類別 (Spacing utilities)
  - Padding 工具 (p-*, py-*, px-*, pt-*, pb-*, pl-*, pr-*)
  - Margin 工具 (m-*, my-*, mx-*, mt-*, mb-*, ml-*, mr-*)
  - 0-10 級別間距 (0px 到 64px)
- 標籤樣式 (Tag styles)
  - 基礎標籤和彩色標籤
- Display 工具類別 (Display utilities)
  - d-none, d-block, d-flex, d-grid 等
  - Flex 快速工具 (d-center, d-space-between, flex-1)
- SCSS 變數系統
  - 顏色變數
  - 間距變數
  - 圓角變數
  - 陰影變數
  - 過渡效果變數
- ThemeService (目前僅支援 light mode)
- ThemeDirective (standalone)
- TypeScript 型別定義

### Features
- **純 SCSS**: 無額外 JavaScript 依賴
- **輕量級**: 僅包含必要的樣式工具
- **易於整合**: 簡單匯入即可使用
- **TypeScript**: 完整型別支援
- **Angular 18+**: 支援最新 Angular 版本

### Notes
- 目前僅支援亮色主題 (light mode)
- Dark mode 功能已保留但未啟用，可在未來版本啟用

## [Unreleased]

### Planned Features
- Dark mode 支援
- 更多工具類別 (typography, colors, etc.)
- 響應式工具類別
- 動畫工具
