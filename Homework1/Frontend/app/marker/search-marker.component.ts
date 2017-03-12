import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'search-marker',
    templateUrl: 'app/marker/search-marker.component.html'
})
export class SearchMarkerComponent {
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggle: string;
    markers: marker[] = []
    addMarker(){
        console.log("adding markerer");
        if(this.markerDraggle == "yes") {
            var isDraggable = true;
        } else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable
        }
        this.markers.push(newMarker);

    }
}
// just an interface for type safety
interface marker {
    content?: string;
    name?: string;
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}