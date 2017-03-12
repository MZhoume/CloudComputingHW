import { Component } from '@angular/core'

@Component({
    selector: 'map-marker',
    templateUrl: 'app/marker/marker.component.html',
    styles : [`
        .sebm-google-map-container {
            height: 600px;
            width: auto;
        }
    `]
})
export class MarkerComponent {
    zoom: number = 12;

    lat: number = 40.8075355;
    lng: number = -73.9547614;

    clickedMarker(m: marker, $event: MouseEvent) {
         console.log("clicked the marker: ", m, $event)
    }
  
    mapClicked($event: any) {
        var newMarker = {
            name: "New Marker",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
    }
        this.markers.push(newMarker);
        console.log("placed the marker: ", newMarker.lat, newMarker.lng )
    }

    markerDragEnd(m: marker, $event: any) {
        console.log('draged the marker to: ', m, $event);
        // updated marker
        var upMarker = {
            name: m.name,
            lat: m.lat,
            lng: m.lat,
            draggle:false
        }

        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;

    }

    

    markers: marker[] = [
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
  ]
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