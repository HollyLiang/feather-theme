import { NgModule } from '@angular/core';
import { ThemeDirective } from './directives/theme.directive';

/**
 * Module for theme management
 */
@NgModule({
  imports: [ThemeDirective],
  exports: [ThemeDirective]
})
export class ThemeModule { }
