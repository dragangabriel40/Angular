import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningComponent } from './warning/warning.component';
import { UsernameComponent } from './username/username.component';
import { ExercitiuComponent } from './exercitiu/exercitiu.component';
import { ExRefacutComponent } from './ex-refacut/ex-refacut.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningComponent,
    UsernameComponent,
    ExercitiuComponent,
    ExRefacutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
