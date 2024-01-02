import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import pt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule } from './imports/ng-zorro-antd/ng-zorro-antd.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_BR } from 'ng-zorro-antd/i18n';
import { LoginComponent } from './login/login.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
