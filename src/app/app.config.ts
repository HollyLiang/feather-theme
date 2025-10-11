import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ThemeService } from '@feather/theme';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ThemeService
  ]
};
