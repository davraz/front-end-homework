import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { VideoComponent } from './video/video.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    VideoComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,    
    RouterModule.forRoot([
     // { path: 'registration/basic-information', component: BasicInformationComponent },
     // { path: 'registration/video', component: VideoComponent }
      { path: '', component: RegistrationComponent }
      //{ path: 'registration', component: RegistrationComponent }
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
