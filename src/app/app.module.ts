import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CareerRoutesComponent } from './Components/career-routes/career-routes.component';
import {HttpClientModule} from '@angular/common/http';
import {SignInModule} from './Modules/sign-in/sign-in.module';
import {MaterialModule} from './Modules/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UserService} from './Services/user.service';
import {DataShareService} from './Services/data-share.service';
import {ToolbarComponent} from './Components/toolbar/toolbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CareerRoutesComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatToolbarModule,
    SignInModule,
  ],
  providers: [UserService, DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }

