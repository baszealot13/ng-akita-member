import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Tweet } from './tweet.model';

export interface TweetState extends EntityState<Tweet> { 
    hasMore: boolean;
    page: number;
}

const initialState: TweetState = {
    hasMore: true,
    page: 1
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tweet' })
export class TweetStore extends EntityStore<TweetState, Tweet> {

    constructor() {
        super(initialState);
    }

    updatePage(page: {hasMore: boolean, page: number}) {
        this.update(page);
    }

}
