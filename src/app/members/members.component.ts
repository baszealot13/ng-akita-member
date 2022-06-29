import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../components/state/member.model';
import { MemberQuery } from '../components/state/member.query';
import { MemberService } from '../components/state/member.service';
import { initialFilters, VISIBILITY_FILTER } from '../filter.model';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
    members$: Observable<any> | undefined;
    activeFilter$: Observable<VISIBILITY_FILTER> | undefined;
    filters = initialFilters;

    constructor(private memberQuery: MemberQuery, private memberService: MemberService) { }

    ngOnInit(): void {
        this.members$ = this.memberQuery.selectVisibleTodos$;
        this.activeFilter$ = this.memberQuery.selectVisibilityFilter$;
    }

    add(input: HTMLInputElement) {
        this.memberService.add(input.value);
        input.value = '';
    }

    complete(member: Member) {
        this.memberService.complete(member);
    }

    delete(id: string) {
        this.memberService.delete(id);
    }

    changeFilter(filter: VISIBILITY_FILTER) {
        this.memberService.updateFilter(filter);
    }
}
