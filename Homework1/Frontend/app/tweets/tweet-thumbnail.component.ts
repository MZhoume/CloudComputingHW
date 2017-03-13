import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tweet-thumbnail',
    template:`
    <div class = "well hoverwell thumbnail">
        <h6>{{tweet?._source.content}}</h6>
        <div *ngIf="tweet?._source.user">Source: {{tweet?._source.user}} | Date: {{tweet?._source.time}} </div>
    </div>
    `,
    styles: [`
    .thumbnail { min-height: 120px; width: 360px }
    .well div {color: #bbb; font-size: 10px; margin-top:0px}
    `]
})

export class TweetThumbnailComponent {
    @Input() tweet:any
    @Output() tweetClick = new EventEmitter()

    handleClickMe() {
        this.tweetClick.emit(this.tweet.name)
    }
}
        // <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>