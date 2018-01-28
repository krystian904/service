import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MassComponent } from './mass/mass.component';
import { HerosComponent } from './heros/heros.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    MassComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
