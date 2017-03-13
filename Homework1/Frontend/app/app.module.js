"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { AlertModule } from 'ng2-bootstrap';
var core_2 = require('angular2-google-maps/core');
var index_component_1 = require('./index/index.component');
// import { IndexServiceComponent } from './index/index.service'
var tweets_list_component_1 = require('./tweets/tweets-list.component');
var tweet_thumbnail_component_1 = require('./tweets/tweet-thumbnail.component');
var navbar_component_1 = require('./nav/navbar.component');
var dropdown_component_1 = require('./nav/dropdown.component');
var marker_component_1 = require('./marker/marker.component');
var search_marker_component_1 = require('./marker/search-marker.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_component_1.IndexComponent,
                tweets_list_component_1.TweetsListComponent,
                tweet_thumbnail_component_1.TweetThumbnailComponent,
                navbar_component_1.NavBarComponent,
                dropdown_component_1.DropdownComponent,
                marker_component_1.MarkerComponent,
                search_marker_component_1.SearchMarkerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                // AlertModule.forRoot(),
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCvSxaeNAxaziOKTelih7xX3OxeCa6_2Zk'
                })
            ],
            providers: [],
            bootstrap: [index_component_1.IndexComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map