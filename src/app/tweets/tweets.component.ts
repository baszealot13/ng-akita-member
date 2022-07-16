import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../components/state/tweet.model';
import { TweetQuery } from '../components/state/tweet.query';
import { TweetService } from '../components/state/tweet.service';

@Component({
    selector: 'app-tweets',
    templateUrl: './tweets.component.html',
    styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
    tweets$: Observable<any> | undefined;
    isLoading$: Observable<boolean> | undefined;

    constructor(
        private tweetQuery: TweetQuery,
        private tweetService: TweetService
    ) { }

    ngOnInit() {
        this.fetchTweets();
        this.tweets$ = this.tweetQuery.selectAll();
        this.isLoading$ = this.tweetQuery.selectLoading();
    }

    onScroll() {
        this.fetchTweets();
    }

    private fetchTweets() {
        if (this.tweetQuery.getHasMore()) {
            this.tweetService.get(this.tweetQuery.getPage());
        }
    }

}
