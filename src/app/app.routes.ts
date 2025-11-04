import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { TagsComponent } from './pages/tags/tags.component';
import { DisplayComponent } from './pages/display/display.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CardComponent } from './pages/card/card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'card', component: CardComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '**', redirectTo: '' }
];
