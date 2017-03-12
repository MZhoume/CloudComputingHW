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
var IndexComponent = (function () {
    function IndexComponent() {
        this.eventClick = new core_1.EventEmitter();
        this.navname = "TWEET MAP";
        this.keywords = ["Xiao Long Bao", "Macaron", "Icecream"];
        this.markers = [];
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
        this.concated_pins = [
            {
                content: "Love xiaolongbao here!",
                lat: 40.8075355,
                lng: -73.9647614,
                label: 'CU',
                draggable: false
            },
            {
                content: "Amorino's icecream is always the best",
                lat: 40.7295134,
                lng: -73.9986496,
                label: 'NYU',
                draggable: false
            },
            {
                content: "Wow, even better macaron than those from Paris!!!",
                lat: 40.758895,
                lng: -73.9873197,
                label: 'TS',
                draggable: false
            }];
        // map related
        this.zoom = 12;
        this.lat = 40.8075355;
        this.lng = -73.9547614;
    }
    IndexComponent.prototype.handleClickMe = function (keyword) {
        console.log("user clicked ", keyword);
        this.eventClick.emit(keyword); // send to backend!
        // remove marker missing implementation
        this.removeAllMarkers();
        // add all pins to the map, right now it is hardcoded from concated_pins
        for (var i = 0; i < this.concated_pins.length; i++) {
            this.addPin(this.concated_pins[i].lat, this.concated_pins[i].lng, this.concated_pins[i].content);
        }
    };
    IndexComponent.prototype.clickedMarker = function (m, $event) {
        console.log("clicked the marker: ", m, $event);
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
    };
    IndexComponent.prototype.addMarkerFromForm = function () {
        console.log("adding markerer...");
        if (this.markerDraggle == "yes") {
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
            styleUrls: ['./app/index/index.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map