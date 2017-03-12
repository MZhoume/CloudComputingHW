import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'index-app',
    templateUrl:'./app/index/index.component.html',
    styleUrls: ['./app/index/index.component.css']
})
export class IndexComponent {
    @Output() eventClick = new EventEmitter()
    
    navname = "TWEET MAP";
    keywords = ["Xiao Long Bao", "Macaron", "Icecream"]
    markers: marker[] = [ ] 
    tweets = [
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
    } ]
    concated_pins = [	
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
	  }]

    handleClickMe(keyword) {
        console.log ("user clicked ", keyword);
        this.eventClick.emit(keyword); // send to backend!
        // remove marker missing implementation
        this.removeAllMarkers();
        // add all pins to the map, right now it is hardcoded from concated_pins
        for (var i = 0; i < this.concated_pins.length; i++) {
            this.addPin(this.concated_pins[i].lat, this.concated_pins[i].lng, this.concated_pins[i].content);
        }
        
    }
    // map related
    zoom: number = 12;

    lat: number = 40.8075355;
    lng: number = -73.9547614;

    clickedMarker(m: marker, $event: MouseEvent) {
         console.log("clicked the marker: ", m, $event)
    }
  
    mapClicked($event: any) {
        var newMarker = {
            name: "New Marker",
            content: "Target Location",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true,
            iconUrl: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Inside-Pink-icon.png'
    }
        this.markers.push(newMarker);
        console.log("placed the marker: ", newMarker.lat, newMarker.lng )
    }

    markerDragEnd(m: marker, $event: any) {
        console.log('draged the marker to: ', m, $event);
        // updated marker
        var updMarker = {
            name: m.name,
            lat: m.lat,
            lng: m.lat,
            draggle:false,
            iconUrl: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Inside-Pink-icon.png'
        }

        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
    }

    // add marker from the form to the map
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggle: string;
    addMarkerFromForm(){
        console.log("adding markerer...");
        if(this.markerDraggle == "yes") {
            var isDraggable = true;
        } else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable,
            iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Pink-icon.png"
        }
        this.markers.push(newMarker);

    }

    // add tweet pins to the map 
    addPin(latitude, longitude, content) {
        var newPin = {
            content: content,
            lat: parseFloat(latitude),
            lng: parseFloat(longitude),
            draggable: false,
            iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Ball-Pink-icon.png"
        }
        this.markers.push(newPin);  

    }
    // remove marker from the map
    removeAllMarkers() {
        console.log("removing marker...");
        this.markers = [];
    }
    // remove everything from the map
    handleWipeMap() {
        console.log("wiping the map...")
        this.removeAllMarkers();
    }
  // end of map
}
// just an interface for type safety
interface marker {
    content?: string;
    name?: string;
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
    iconUrl?: string
}