import { Component } from '@angular/core'

@Component({
    selector: 'tweets-list',
    template: `
        <div>
            <h5>Top 3 Closest Tweets to Your Designated Location(s)!</h5>
            <div class="row">
                <div *ngFor="let tweet of tweets" class="col-md-4">
                    <tweet-thumbnail (tweetClick)="handleTweetClicked($tweet)" [tweet]="tweet"></tweet-thumbnail>
                </div>
            </div>
        </div>
    `,
        styles: [`
        h5 {
            padding-left: 15px;
        }
    `]
})
export class TweetsListComponent{
    // replace by API later on
    tweets = [
        {
        id: 1,
        name: "Emily Hua",
        date: '2017-03-10',
        time: '10:00pm',
        content: 'Chongqingxiaomain here at Hell kitchen is really delicious!'
        },
        {
        id: 2,
        name: 'Huffington Post',
        date: '2017-03-11',
        time: '12:00pm',
        content: 'Hillary Clinton and her new haircut have clearly moved past 2016!'
        },
        {
        id: 3,
        name: 'The New York Times',
        date: '2017-03-11',
        time: '12:00pm',
        content: 'A 3,000-year-old statue found in Cairo could be a likeness of Ramses, archaeologists say http://nyti.ms/2neN36o '
    } ]
    
    handleTweetClicked(data) {
        console.log('received: ', data)
    }
}