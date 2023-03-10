import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [FormsModule,
    HttpClientModule],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
