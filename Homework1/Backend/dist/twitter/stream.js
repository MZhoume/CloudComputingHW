"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twit = require("twit");
const location_1 = require("./location");
const tweet_1 = require("./tweet");
class TwitterStreamRetriever {
    constructor(twitConfig, esConfig) {
        this.twit = new Twit(twitConfig);
        // this.esClient = new ES.Client(esConfig);
    }
    bootstrap() {
        let stream = this.twit.stream('statuses/filter', { locations: location_1.location.NewYork });
        stream.on('tweet', (tweet) => {
            let t = new tweet_1.Tweet();
            t.location = new tweet_1.TweetLoc();
            t.id = tweet.id;
            t.content = tweet.text;
            t.user = tweet.user.name;
            t.time = tweet.created_at;
            if (tweet.coordinates && tweet.coordinates.coordinates) {
                t.location.lon = tweet.coordinates.coordinates[0];
                t.location.lat = tweet.coordinates.coordinates[1];
            }
            else if (tweet.place && tweet.place.bounding_box && tweet.place.bounding_box.coordinates) {
                t.location.lon = tweet.place.bounding_box.coordinates[0][0][0];
                t.location.lat = tweet.place.bounding_box.coordinates[0][0][1];
            }
            if (tweet.place) {
                t.location.name = tweet.place.full_name;
            }
        });
    }
}
exports.TwitterStreamRetriever = TwitterStreamRetriever;
//# sourceMappingURL=stream.js.map