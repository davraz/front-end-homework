import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatStepperModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { VideoComponent } from './video/video.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    
    VideoComponent,
    RegistrationComponent,
    ConfirmEqualValidatorDirective,
    MessagesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
    MatButtonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,    
    RouterModule.forRoot([
     // { path: 'registration/basic-information', component: BasicInformationComponent },
      { path: 'registration/success', component: VideoComponent },
      { path: '', redirectTo: 'registration', pathMatch: 'full' },
      { path: 'registration', component: RegistrationComponent }
    ]) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
