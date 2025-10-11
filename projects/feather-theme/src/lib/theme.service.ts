import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeConfig, ThemeMode } from './models/theme.model';

/**
 * Theme Service for @feather/theme
 * 
 * 目前僅支援亮色主題 (light mode)
 * Dark mode 功能已保留但未啟用，可在未來需要時啟用
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'feather-theme';
  private currentThemeSubject: BehaviorSubject<ThemeMode>;
  private isBrowser: boolean;

  public currentTheme$: Observable<ThemeMode>;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    // 目前固定為 light mode
    this.currentThemeSubject = new BehaviorSubject<ThemeMode>('light');
    this.currentTheme$ = this.currentThemeSubject.asObservable();

    // 初始化時套用亮色主題
    this.applyTheme('light');
  }

  /**
   * 取得當前主題模式 (目前固定為 'light')
   */
  getCurrentTheme(): ThemeMode {
    return this.currentThemeSubject.value;
  }

  /**
   * 設定主題模式
   * 注意：目前僅支援 'light' 模式
   * 
   * @param theme - 主題模式 ('light' | 'dark' | 'auto')
   */
  setTheme(theme: ThemeMode): void {
    // 目前僅支援 light mode，其他模式會被忽略
    if (theme !== 'light') {
      console.warn(`@feather/theme: 目前僅支援 light mode，'${theme}' 模式尚未啟用`);
      return;
    }
    
    this.currentThemeSubject.next(theme);
    this.applyTheme(theme);
    this.storeTheme(theme);
  }

  /**
   * 切換主題 (目前不執行任何操作，保留供未來使用)
   * @deprecated 目前僅支援 light mode
   */
  toggleTheme(): void {
    console.warn('@feather/theme: toggleTheme() 目前未啟用，僅支援 light mode');
  }

  /**
   * 套用主題到 document
   */
  private applyTheme(theme: ThemeMode): void {
    if (!this.isBrowser) {
      return;
    }

    const root = document.documentElement;
    
    // 移除現有主題類別
    root.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    
    // 新增主題類別
    root.classList.add(`theme-${theme}`);
    root.setAttribute('data-theme', theme);
  }

  /**
   * 儲存主題到 localStorage
   */
  private storeTheme(theme: ThemeMode): void {
    if (!this.isBrowser) {
      return;
    }

    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }

  // ========================================
  // 以下功能保留供未來使用，目前未啟用
  // ========================================

  /**
   * 從 localStorage 讀取主題 (保留功能)
   * @private
   */
  private getStoredTheme(): ThemeMode {
    if (!this.isBrowser) {
      return 'light';
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && ['light', 'dark', 'auto'].includes(stored)) {
        return stored as ThemeMode;
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }
    
    return 'light';
  }
}
