import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MVClientCoreAppModule } from 'mv-core/src/mv-core/mv-core-app.module';
import { MVComponentsModule } from 'mv-core/src/mv-core/mv-components/mv-components.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MVClientCoreAppModule,
    MVComponentsModule
  ],
  providers: [MVClientCoreAppModule,MVComponentsModule],
  bootstrap: [AppComponent],
  exports:[MVClientCoreAppModule,MVComponentsModule],
})
export class AppModule { }
