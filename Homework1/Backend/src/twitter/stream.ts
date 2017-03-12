import * as Twit from 'twit';
import * as AWS from 'aws-sdk';
import { location } from './location';

export class TwitterStreamRetriever {
    private twit: Twit;
    private firehose: AWS.Firehose = new AWS.Firehose({ apiVersion: '2015-08-04', region: 'us-east-1' });

    constructor(config: Twit.Options) {
        this.twit = new Twit(config);
    }

    bootstrap() {
        let stream: NodeJS.ReadableStream = this.twit.stream('statuses/filter', <Twit.Params>{ locations: location.NewYork });
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