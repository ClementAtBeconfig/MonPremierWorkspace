import { provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { APP_ROUTES } from './app.routes';


export const appConfig: ApplicationConfig = {
  
  providers: [
    //importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, 
      ///withPreloading(PreloadAllModules),
      withDebugTracing(),
    ),
  ],
};
