import { Component } from '@angular/core';
import { TweetMarker } from './marker';
import { HttpService } from './httpservice';
import { TweetEntry } from './tweetentry';
import { Tweet } from './tweet';
import { shallowEqualArrays } from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-root',
    templateUrl: './index.component.html',
    providers: [HttpService]
})
export class IndexComponent {
    private httpSvc: HttpService;

    public lat: number = 40.7722314;
    public lng: number = -74.0135349;

    public keyword: string = '';
    private currMethod: Function;

    public tweets: TweetMarker[];
    public entries: TweetEntry[];

    constructor(httpSvc: HttpService) {
        this.httpSvc = httpSvc;

        this.toggle();
        setInterval(() => this.currMethod(), 3000);
    }

    private clear() {
        this.entries = [];
        this.tweets = [];
    }

    private update(res: Tweet[]) {
        for (let i = res.length - 1; i >= 0; i--) {
            this.tweets.unshift({
                content: res[i].content,
                lat: res[i].location.lat,
                lng: res[i].location.lon,
                iconUrl: res[i].sentiment > 0 ? 'assets/happy.png' : res[i].sentiment < 0 ? 'assets/sad.png' : 'assets/neutral.png'
            });

            this.entries.unshift({
                user: res[i].user,
                content: res[i].content,
                time: res[i].time,
                sentiment: res[i].sentiment,
                id: res[i].id
            });
        }
    }

    public toggle() {
        this.clear();
        if (this.keyword.length > 0) {
            this.currMethod = () => {
            };
            this.search();
        } else {
            this.currMethod = this.refresh;
            this.refresh();
        }
    }

    public search() {
        this.httpSvc.searchByKeyword(this.keyword)
            .subscribe(
                res => {
                    this.update(res);
                },
                err => console.log(err)
            );
    }

    public refresh() {
        this.httpSvc.getAll(this.entries.length > 0 ? this.entries[0].id.toString() : '0')
            .subscribe(
                res => {
                    this.update(res);
                },
                err => console.log(err)
            );
    }
}
