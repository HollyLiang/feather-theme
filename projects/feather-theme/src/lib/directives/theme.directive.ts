import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/**
 * Directive to apply theme-specific classes to elements
 * 
 * 目前僅支援 light mode，保留 dark mode 相關輸入供未來使用
 * 
 * Usage: <div featherTheme [themeClass]="'custom-class'"></div>
 */
@Directive({
  selector: '[featherTheme]',
  standalone: true
})
export class ThemeDirective implements OnInit {
  @Input() themeClass?: string;
  @Input() lightClass?: string;
  @Input() darkClass?: string; // 保留供未來使用

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // 套用基礎類別
    if (this.themeClass) {
      this.renderer.addClass(this.el.nativeElement, this.themeClass);
    }

    // 目前固定套用 light mode 類別
    if (this.lightClass) {
      this.renderer.addClass(this.el.nativeElement, this.lightClass);
    }

    // darkClass 保留供未來使用，目前不套用
  }
}
