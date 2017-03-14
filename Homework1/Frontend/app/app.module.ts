import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AlertModule } from 'ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { IndexComponent } from './index/index.component';
import { TweetThumbnailComponent } from './tweets/tweet-thumbnail.component';


@NgModule({
  declarations: [
    IndexComponent,
    TweetThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // AlertModule.forRoot(),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvSxaeNAxaziOKTelih7xX3OxeCa6_2Zk'
    })   
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }