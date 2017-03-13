import * as Twit from 'twit';
import { location } from './location';
import * as ES from 'elasticsearch'
import {Tweet, TweetLoc} from "./tweet";

export class TwitterStreamRetriever {
    private twit: Twit;
    private esClient: ES.Client;

    constructor(twitConfig: Twit.Options, esConfig: ES.ConfigOptions) {
        this.twit = new Twit(twitConfig);
        // this.esClient = new ES.Client(esConfig);
    }

    bootstrap() {
        let stream: NodeJS.ReadableStream = this.twit.stream('statuses/filter', <Twit.Params>{ locations: location.NewYork });
        stream.on('tweet', (tweet) => {
            let t = new Tweet();
            t.location = new TweetLoc();
            t.id = tweet.id;
            t.content = tweet.text;
            t.user = tweet.user.name;
            t.time = tweet.created_at;

            if (tweet.coordinates && tweet.coordinates.coordinates) {
                t.location.lon = tweet.coordinates.coordinates[0];
                t.location.lat = tweet.coordinates.coordinates[1];
            } else if (tweet.place && tweet.place.bounding_box && tweet.place.bounding_box.coordinates) {
                t.location.lon = tweet.place.bounding_box.coordinates[0][0][0];
                t.location.lat = tweet.place.bounding_box.coordinates[0][0][1];
            }

            if (tweet.place) {
                t.location.name = tweet.place.full_name;
            }
        });
    }
}
