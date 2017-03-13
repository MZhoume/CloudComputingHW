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
var index_service_1 = require('./index.service');
var IndexComponent = (function () {
    function IndexComponent(_httpService) {
        this._httpService = _httpService;
        this.eventClick = new core_1.EventEmitter();
        this.navname = "TWEET MAP";
        this.keywords = ["food", "juice", "cold", "trump", "bernie"];
        this.markers = [];
        this.tweets = [];
        this.searchRadius = 10; // default radius number
        // map related
        this.zoom = 10;
        this.lat = 40.8075355;
        this.lng = -73.9547614;
    }
    IndexComponent.prototype.handleClickMe = function (keyword) {
        var _this = this;
        console.log("user clicked ", keyword);
        this.eventClick.emit(keyword); // send to backend!
        // remove all markers on the map
        this.removeAllMarkers();
        // get me tweets
        this._httpService.getTweetByKeyword(keyword).subscribe(function (data) {
            _this.tweetByKeyword = data;
        }, function (error) { return alert(error); }, function () {
            _this.tweetListHeader = "Tweets Sample Display";
            _this.tweets = _this.tweetByKeyword.slice(0, 3);
            for (var i = 0; i < _this.tweetByKeyword.length; i++) {
                _this.addPin(_this.tweetByKeyword[i]._source.location.lat, _this.tweetByKeyword[i]._source.location.lon, _this.tweetByKeyword[i]._source.content);
            }
        });
    };
    IndexComponent.prototype.clickedMarker = function (m, $event) {
        console.log("clicked the marker: ", m, $event);
    };
    IndexComponent.prototype.callGeo = function (lat, lng, radius) {
        var _this = this;
        // get me tweets
        this._httpService.getTweetByGeo(lat, lng, radius).subscribe(function (data) { return _this.tweetByGeo = data; }, function (error) { return alert(error); }, function () {
            _this.tweetListHeader = "Top 3 Closest Tweets to Your Newly Designated Location!";
            _this.tweets = _this.tweetByGeo.slice(0, 3);
            for (var i = 0; i < _this.tweetByGeo.length; i++) {
                _this.addPin(_this.tweetByGeo[i]._source.location.lat, _this.tweetByGeo[i]._source.location.lon, _this.tweetByGeo[i]._source.content);
            }
        });
    };
    IndexComponent.prototype.mapClicked = function ($event) {
        var newMarker = {
            name: "New Marker",
            content: "Target Location",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            iconUrl: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Inside-Pink-icon.png'
        };
        this.markers.push(newMarker);
        console.log("placed the marker: ", newMarker.lat, newMarker.lng);
        this.callGeo(newMarker.lat, newMarker.lng, this.searchRadius);
    };
    IndexComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('draged the marker to: ', m, $event);
        // updated marker
        var updMarker = {
            name: m.name,
            lat: m.lat,
            lng: m.lat,
            draggle: false,
            iconUrl: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Inside-Pink-icon.png'
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this.callGeo(newLat, newLng, this.searchRadius);
    };
    IndexComponent.prototype.handleInputRadius = function () {
        console.log("creating radius...", parseFloat(this.inputRadius));
        this.searchRadius = parseFloat(this.inputRadius);
    };
    IndexComponent.prototype.addMarkerFromForm = function () {
        if (this.markerDraggle === "yes") {
            var isDraggable = true;
        }
        else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable,
            iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png"
        };
        this.markers.push(newMarker);
        this.callGeo(newMarker.lat, newMarker.lng, this.searchRadius);
    };
    // add tweet pins to the map 
    IndexComponent.prototype.addPin = function (latitude, longitude, content) {
        var newPin = {
            content: content,
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
            draggable: false,
            iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Ball-Pink-icon.png"
        };
        this.markers.push(newPin);
    };
    // remove marker from the map
    IndexComponent.prototype.removeAllMarkers = function () {
        console.log("removing marker...");
        this.markers = [];
    };
    // remove everything from the map
    IndexComponent.prototype.handleWipeMap = function () {
        console.log("wiping the map...");
        this.removeAllMarkers();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], IndexComponent.prototype, "eventClick", void 0);
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'index-app',
            templateUrl: './app/index/index.component.html',
            styleUrls: ['./app/index/index.component.css'],
            providers: [index_service_1.IndexServiceComponent]
        }), 
        __metadata('design:paramtypes', [index_service_1.IndexServiceComponent])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map