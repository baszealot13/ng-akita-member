import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Tweet } from './tweet.model';
import { TweetStore, TweetState } from './tweet.store';

@Injectable({ providedIn: 'root' })
export class TweetQuery extends QueryEntity<TweetState, Tweet> {

    constructor(protected override store: TweetStore) {
        super(store);
    }

    getHasMore() {
        return this.getValue().hasMore;
    }

    getPage() {
        return this.getValue().page;
    }

}
