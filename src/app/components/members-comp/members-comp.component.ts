import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../state/member.model';

@Component({
    selector: 'app-members-comp',
    templateUrl: './members-comp.component.html',
    styleUrls: ['./members-comp.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersCompComponent implements OnInit {
    @Input() members: Member[] | undefined;
    @Output() complete = new EventEmitter<Member>();
    @Output() delete = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    trackByFn(index: any, member: any) {
        return member.id;
    }

}
