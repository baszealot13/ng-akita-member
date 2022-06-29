import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VISIBILITY_FILTER } from 'src/app/filter.model';
import { Member } from './member.model';

export interface MemberState extends EntityState<Member, string> {
    ui: {
        filter: VISIBILITY_FILTER
    };
}

const initialState = {
    ui: { filter: VISIBILITY_FILTER.SHOW_ALL }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'member' })
export class MemberStore extends EntityStore<MemberState> {
    constructor() {
        super(initialState);
    }

}
