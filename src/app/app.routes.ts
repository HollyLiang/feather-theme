import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { TagsComponent } from './pages/tags/tags.component';
import { DisplayComponent } from './pages/display/display.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LiquidGlassComponent } from './pages/liquid-glass/liquid-glass.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'liquid-glass', component: LiquidGlassComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '**', redirectTo: '' }
];
