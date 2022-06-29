import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from 'src/app/filter.model';
import { Member } from './member.model';
import { MemberStore, MemberState } from './member.store';

@Injectable({ providedIn: 'root' })

export class MemberQuery extends QueryEntity<MemberState> {
    selectVisibilityFilter$ = this.select((state: any) => state.ui.filter);

    selectVisibleTodos$ = combineLatest(
        this.selectVisibilityFilter$,
        this.selectAll(),
        this.getVisibleTodos
    );

    constructor(protected override store: MemberStore) {
        super(store);
    }

    private getVisibleTodos(filter: any, members: any): Member[] {
        switch (filter) {
            case VISIBILITY_FILTER.SHOW_COMPLETED:
                return members.filter((t: any) => t.completed);
            case VISIBILITY_FILTER.SHOW_ACTIVE:
                return members.filter((t: any) => !t.completed);
            default:
                return members;
        }
    }
}
