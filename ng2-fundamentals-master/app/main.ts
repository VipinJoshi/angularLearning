//main.ts one time setting here to bootsrap app module as app module is our root module

import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

