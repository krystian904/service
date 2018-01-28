import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MassComponent } from './mass/mass.component';
import { HerosComponent } from './heros/heros.component';



@NgModule({
  declarations: [
    AppComponent,
    MassComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
