import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AlertModule } from 'ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { IndexComponent } from './index/index.component';
import { TweetsListComponent } from './tweets/tweets-list.component';
import { TweetThumbnailComponent } from './tweets/tweet-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { DropdownComponent } from './nav/dropdown.component';
import { MarkerComponent} from './marker/marker.component';
import { SearchMarkerComponent } from './marker/search-marker.component'

@NgModule({
  declarations: [
    IndexComponent,
    TweetsListComponent,
    TweetThumbnailComponent,
    NavBarComponent,
    DropdownComponent,
    MarkerComponent,
    SearchMarkerComponent
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