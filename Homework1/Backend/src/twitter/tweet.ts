export class TweetLoc {
    lat: number;
    lon: number;
    name: string;
}

export class Tweet {
    id: number;
    location: TweetLoc;
    content: string;
    user: string;
    time: string;
}
