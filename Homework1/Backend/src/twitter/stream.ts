/*
 curl -XDELETE 'localhost:9200/twitter' && curl -XPUT 'localhost:9200/twitter' -H 'Content-Type: application/json' -d'
 {
 "mappings": {
 "tweet": {
 "properties": {
 "location": {
 "type": "geo_point"
 },
 "locName": {
 "type": "string"
 },
 "id": {
 "type": "long"
 },
 "content": {
 "type": "string"
 },
 "user": {
 "type": "string"
 },
 "time": {
 "type": "date"
 }
 }
 }
 }
 }
 '
 */

import * as Twit from 'twit';
import {location} from './location';
import * as ES from 'elasticsearch'
import {Tweet, TweetLoc} from "./tweet";
import {EsService} from "../elasticsearch/esservice";

const esClient: ES.Client = EsService.getEsClient();

export class TwitterStreamRetriever {
    private twit: Twit;

    constructor(twitConfig: Twit.Options) {
        this.twit = new Twit(twitConfig);
    }

    bootstrap() {
        let stream: NodeJS.ReadableStream = this.twit.stream('statuses/filter', <Twit.Params>{locations: location.NewYork});
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
                t.locName = tweet.place.full_name;
            }

            esClient.create({
                index: 'twitter',
                type: 'tweet',
                id: t.id.toString(),
                body: t
            }, (err, res) => {
                console.log(err, res);
            });
        });
    }
}
