import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//to run on local else false;
const local = false;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [local ? AppComponent : []],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const dashboardApp = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mf-dashboard', dashboardApp);
  }


}
