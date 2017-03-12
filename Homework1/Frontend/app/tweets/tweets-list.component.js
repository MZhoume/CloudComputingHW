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
var TweetsListComponent = (function () {
    function TweetsListComponent() {
        // replace by API later on
        this.tweets = [
            {
                id: 1,
                name: "Emily Hua",
                date: '2017-03-10',
                time: '10:00pm',
                content: 'Chongqingxiaomain here at Hell kitchen is really delicious!'
            },
            {
                id: 2,
                name: 'Huffington Post',
                date: '2017-03-11',
                time: '12:00pm',
                content: 'Hillary Clinton and her new haircut have clearly moved past 2016!'
            },
            {
                id: 3,
                name: 'The New York Times',
                date: '2017-03-11',
                time: '12:00pm',
                content: 'A 3,000-year-old statue found in Cairo could be a likeness of Ramses, archaeologists say http://nyti.ms/2neN36o '
            }];
    }
    TweetsListComponent.prototype.handleTweetClicked = function (data) {
        console.log('received: ', data);
    };
    TweetsListComponent = __decorate([
        core_1.Component({
            selector: 'tweets-list',
            template: "\n        <div>\n            <h5>Top 3 Closest Tweets to Your Designated Location(s)!</h5>\n            <div class=\"row\">\n                <div *ngFor=\"let tweet of tweets\" class=\"col-md-4\">\n                    <tweet-thumbnail (tweetClick)=\"handleTweetClicked($tweet)\" [tweet]=\"tweet\"></tweet-thumbnail>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n        h5 {\n            padding-left: 15px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], TweetsListComponent);
    return TweetsListComponent;
}());
exports.TweetsListComponent = TweetsListComponent;
//# sourceMappingURL=tweets-list.component.js.map