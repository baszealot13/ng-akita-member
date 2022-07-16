import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID, transaction } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { getTweets } from 'src/app/tweets/tweets.data';
import { Tweet } from './tweet.model';
import { TweetStore } from './tweet.store';

@Injectable({ providedIn: 'root' })
export class TweetService {
    constructor(private tweetStore: TweetStore) {
    }

    get(page: number) {
        this.tweetStore.setLoading(true);

        getTweets({ page }).subscribe({
            next: (res: any) => this.updateTweets(res)
        });
    }

    @transaction()
    private updateTweets(res: any) {
        const nextPage = res.currentPage + 1;
        this.tweetStore.add(res.data);
        this.tweetStore.updatePage({ hasMore: res.hasMore, page: nextPage });
        this.tweetStore.setLoading(false);
    }

}
