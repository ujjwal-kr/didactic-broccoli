import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TalkComponent } from './talk/talk.component';
import { VerifyComponent } from './verify/verify.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TalkComponent,
    VerifyComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
