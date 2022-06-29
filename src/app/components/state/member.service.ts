import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { VISIBILITY_FILTER } from 'src/app/filter.model';
import { createMember, Member } from './member.model';
import { MemberStore } from './member.store';

@Injectable({ providedIn: 'root' })
export class MemberService {

    constructor(private memberStore: MemberStore, private http: HttpClient) {
    }


    updateFilter(filter: VISIBILITY_FILTER) {
        this.memberStore.update({
            ui: {
                filter
            }
        });
    }

    add(title: string) {
        const member = createMember(title);

        this.memberStore.add(member);
    }

    complete({ id, completed }: Member) {
        console.log({ id, completed });
        this.memberStore.update(id, { completed });
    }

    delete(id: string) {
        this.memberStore.remove(id);
    }

}
