import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tweet-thumbnail',
    template:`
    <div class = "well hoverwell thumbnail">
        <h6>{{tweet?.content}}</h6>
        <div *ngIf="tweet?.name">Source: {{tweet?.name}} Date: {{tweet?.date}} </div>
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