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
var SearchMarkerComponent = (function () {
    function SearchMarkerComponent() {
        this.markers = [];
    }
    SearchMarkerComponent.prototype.addMarker = function () {
        console.log("adding markerer");
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
            draggable: isDraggable
        };
        this.markers.push(newMarker);
    };
    SearchMarkerComponent = __decorate([
        core_1.Component({
            selector: 'search-marker',
            templateUrl: 'app/marker/search-marker.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchMarkerComponent);
    return SearchMarkerComponent;
}());
exports.SearchMarkerComponent = SearchMarkerComponent;
//# sourceMappingURL=search-marker.component.js.map