import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Member } from '../state/member.model';

@Component({
    selector: 'app-member-comp',
    templateUrl: './member-comp.component.html',
    styleUrls: ['./member-comp.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCompComponent implements OnInit {
    @Input() member!: Member;
    @Output() complete = new EventEmitter<Member>();
    @Output() delete = new EventEmitter<string>();

    control: any = false;

    constructor() { }

    ngOnInit(): void {
        // this.control = new FormControl(this.member.completed);

        // this.control.valueChanges.subscribe((completed: boolean) => {
        //     console.log('completed: ', completed);
        //     this.complete.emit({ ...this.member, completed });
        // });
    }

    controlChange() {
        this.complete.emit({ ...this.member, completed: this.control });
    }

}
