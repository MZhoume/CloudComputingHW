"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Twit = require("twit");
const AWS = require("aws-sdk");
const location_1 = require("./location");
class TwitterStreamRetriever {
    constructor(config) {
        this.firehose = new AWS.Firehose({ apiVersion: '2015-08-04', region: 'us-east-1' });
        this.twit = new Twit(config);
    }
    bootstrap() {
        let stream = this.twit.stream('statuses/filter', { locations: location_1.location.NewYork });
        stream.on('tweet', (tweet) => {
            if (tweet.coordinates && tweet.coordinates !== null) {
                console.log('TWEET: ' + JSON.stringify(tweet));
                this.firehose.putRecord({
                    DeliveryStreamName: 'ccHw1Stream',
                    Record: {
                        Data: JSON.stringify(tweet)
                    }
                });
            }
        });
    }
}
exports.TwitterStreamRetriever = TwitterStreamRetriever;
//# sourceMappingURL=stream.js.map