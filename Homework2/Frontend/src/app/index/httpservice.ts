import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

@Injectable()
export class HttpService {
    private http: Http;
    private urlBase = 'http://ec2-52-70-84-118.compute-1.amazonaws.com';

    constructor(http: Http) {
        this.http = http;
    }

    private get(url: string) {
        return this.http.get(this.urlBase + url)
            .flatMap(res =>
                res.json()
            )
            .map(r =>
                (<any>r)._source
            )
            .toArray();
    }

    public getAll(from: string): Observable<any> {
        return this.get('/search/all?from=' + from);
    }

    public searchByKeyword(keyword: string): Observable<any> {
        return this.get('/search/content?key=' + keyword);
    }
}
