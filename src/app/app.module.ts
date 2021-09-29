import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AtendimentoModule } from './atendimento';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtendimentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
