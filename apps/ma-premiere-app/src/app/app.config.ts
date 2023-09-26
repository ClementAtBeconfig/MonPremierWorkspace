import { provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { APP_ROUTES } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MONINTERFACETOKEN } from '../models/mon-interface';
import { MonImplementationUn } from '../models/mon-implementation-un';
import { WEATHERAPIURLTOKEN } from './services/weather.service';

registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide : MONINTERFACETOKEN, useClass: MonImplementationUn},
    { provide : WEATHERAPIURLTOKEN, useValue:'https://localhost:7164/WeatherForecast'},
    //importProvidersFrom(HttpClientModule),
    provideRouter(APP_ROUTES, 
      ///withPreloading(PreloadAllModules),
      //withDebugTracing(),
    ),
    provideHttpClient(withInterceptorsFromDi())
  ],
};
