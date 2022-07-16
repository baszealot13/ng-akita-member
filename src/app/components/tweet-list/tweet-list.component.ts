import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../state/tweet.model';

@Component({
    selector: 'app-tweet-list',
    templateUrl: './tweet-list.component.html',
    styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {
    @Input() tweets!: Tweet[];
    
    constructor() { }

    ngOnInit(): void {
    }

}
