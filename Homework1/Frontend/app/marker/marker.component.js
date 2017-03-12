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
var MarkerComponent = (function () {
    function MarkerComponent() {
        this.zoom = 12;
        this.lat = 40.8075355;
        this.lng = -73.9547614;
        this.markers = [
            {
                name: "Columbiba University",
                lat: 40.8075355,
                lng: -73.9647614,
                label: 'CU',
                draggable: false
            },
            {
                name: "New York University",
                lat: 40.7295134,
                lng: -73.9986496,
                label: 'NYU',
                draggable: false
            },
            {
                name: "Time Square",
                lat: 40.758895,
                lng: -73.9873197,
                label: 'TS',
                draggable: false
            }
        ];
    }
    MarkerComponent.prototype.clickedMarker = function (m, $event) {
        console.log("clicked the marker: ", m, $event);
    };
    MarkerComponent.prototype.mapClicked = function ($event) {
        var newMarker = {
            name: "New Marker",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
        this.markers.push(newMarker);
        console.log("placed the marker: ", newMarker.lat, newMarker.lng);
    };
    MarkerComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('draged the marker to: ', m, $event);
        // updated marker
        var upMarker = {
            name: m.name,
            lat: m.lat,
            lng: m.lat,
            draggle: false
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
    };
    MarkerComponent = __decorate([
        core_1.Component({
            selector: 'map-marker',
            templateUrl: 'app/marker/marker.component.html',
            styles: ["\n        .sebm-google-map-container {\n            height: 600px;\n            width: auto;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], MarkerComponent);
    return MarkerComponent;
}());
exports.MarkerComponent = MarkerComponent;
//# sourceMappingURL=marker.component.js.map