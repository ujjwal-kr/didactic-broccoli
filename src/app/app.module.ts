import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TalkComponent } from './talk/talk.component';
import { VerifyComponent } from './verify/verify.component';
import { SelectComponent } from './select/select.component';
import { MaterialModule } from './material.module';
import { StatusService } from './services/status.service';
import { TalkComponent2 } from './talk2/talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TalkComponent,
    TalkComponent2,
    VerifyComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'didactic-broccoli'),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
