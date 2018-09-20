import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
