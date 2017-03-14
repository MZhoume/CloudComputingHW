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
var core_1 = require('@angular/core');
var TweetThumbnailComponent = (function () {
    function TweetThumbnailComponent() {
        this.tweetClick = new core_1.EventEmitter();
    }
    TweetThumbnailComponent.prototype.handleClickMe = function () {
        this.tweetClick.emit(this.tweet.name);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TweetThumbnailComponent.prototype, "tweet", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TweetThumbnailComponent.prototype, "tweetClick", void 0);
    TweetThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'tweet-thumbnail',
            template: "\n    <div class = \"well hoverwell thumbnail\">\n        <h6>{{tweet?._source.content}}</h6>\n        <div *ngIf=\"tweet?._source.user\">Source: {{tweet?._source.user}} | Date: {{tweet?._source.time}} </div>\n    </div>\n    ",
            styles: ["\n    .thumbnail { min-height: 120px; width: 360px }\n    .well div {color: #bbb; font-size: 10px; margin-top:0px}\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TweetThumbnailComponent);
    return TweetThumbnailComponent;
}());
exports.TweetThumbnailComponent = TweetThumbnailComponent;
// <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button> 
//# sourceMappingURL=tweet-thumbnail.component.js.map