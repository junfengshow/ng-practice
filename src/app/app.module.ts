/**
 * 主应用
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './pages/app-routing.module';
import { AppComponent } from './app.component';
import GlobalComponent from './global.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent, GlobalComponent]
})
export class AppModule { }
