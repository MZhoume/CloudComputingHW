import { Component, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IndexServiceComponent } from './index.service';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [IndexServiceComponent]
})
export class IndexComponent {
    @Output() eventClick = new EventEmitter()
    constructor(private _httpService: IndexServiceComponent) { }

    navname = " ˇ◡TWEET MAP~♥";
    keywords = ["stella", "snow", "cold", "trump", "food", "juice","spring"];
    markers: marker[] = [];
    tweets = [];
    tweetByKeyword: any;
    tweetByGeo: any;
    tweetListHeader: string;
    inputRadius: string; // create radius based on user input
    searchRadius: number = 10; // default radius number

    // map related
    zoom: number = 10;
    lat: number = 40.8075355;
    lng: number = -73.9547614;

    handleClickMe(keyword) {
        console.log("user clicked ", keyword);
        this.eventClick.emit(keyword); // send to backend!
        // remove all markers on the map
        this.removeAllMarkers();
        // get me tweets
        this._httpService.getTweetByKeyword(keyword).subscribe(
            data => {
                this.tweetByKeyword = data;
            },
            error => alert(error),
            () => {
                this.tweetListHeader ="Tweets Sample Display";
                console.log(this.tweetByKeyword.length);
                this.tweets = this.tweetByKeyword.slice(0,3);
                console.log(this.tweetByKeyword.length);
                for (var i = 0; i < this.tweetByKeyword.length; i++) {
                    this.addPin(this.tweetByKeyword[i]._source.location.lat, this.tweetByKeyword[i]._source.location.lon, this.tweetByKeyword[i]._source.content);
                }
            }
        );
    }

    clickedMarker(m: marker, $event: MouseEvent) {
        console.log("clicked the marker: ", m, $event)
    }
    callGeo(lat, lng, radius) {
        // get me tweets
        this._httpService.getTweetByGeo(lat, lng, radius).subscribe(
            data => this.tweetByGeo = data,
            error => alert(error),
            () => {
                this.tweetListHeader = "Top 3 Tweets Cloest to Your Newly Designated Location!"
                this.tweets = this.tweetByGeo.slice(0,3);
                for (var i = 0; i < this.tweetByGeo.length; i++) {
                    this.addPin(this.tweetByGeo[i]._source.location.lat, this.tweetByGeo[i]._source.location.lon, this.tweetByGeo[i]._source.content);
                }
            }
        );
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
        console.log("placed the marker: ", newMarker.lat, newMarker.lng);
        this.callGeo(newMarker.lat, newMarker.lng, this.searchRadius);
    }

    markerDragEnd(m: marker, $event: any) {
        console.log('draged the marker to: ', m, $event);
        // updated marker
        var updMarker = {
            name: m.name,
            lat: m.lat,
            lng: m.lat,
            draggle: false,
            iconUrl: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Inside-Pink-icon.png'
        }
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this.callGeo(newLat, newLng, this.searchRadius);
    }

    handleInputRadius() {
        console.log("creating radius...", parseFloat(this.inputRadius));
        this.searchRadius = parseFloat(this.inputRadius);

    }

    // add marker from the form to the map
    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggle: string;
    addMarkerFromForm() {
        if (this.markerDraggle === "yes") {
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
        this.callGeo(newMarker.lat, newMarker.lng, this.searchRadius);
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
        this.tweets = []
        this.tweetListHeader = "";
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
