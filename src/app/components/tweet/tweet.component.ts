import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../state/tweet.model';

@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.scss']
})
export class TweetComponent{
    @Input() tweet!: Tweet;
}
