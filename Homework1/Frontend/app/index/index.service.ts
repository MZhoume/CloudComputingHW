import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class IndexServiceComponent {
    constructor (private _http:Http) {}

    private baseUrl = "http://cc-hw-env.jih6zvtkdb.us-east-1.elasticbeanstalk.com/search";

    getTweetByKeyword(keyword) {
        var url = this.baseUrl + '/content?key=' + keyword
        console.log(url)
        return this._http.get(url).map(res => res.json());

    }

    getTweetByGeo(lat, lng, radius) {
        var url = this.baseUrl + '/geo?lon=' + lng + '&lat=' + lat + '&dis=' + radius + 'km';
        console.log(url)
        return this._http.get(url).map(res => res.json());

    }

}
