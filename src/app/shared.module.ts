import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCompComponent } from './components/member-comp/member-comp.component';
import { MembersCompComponent } from './components/members-comp/members-comp.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [MemberCompComponent, MembersCompComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        MemberCompComponent,
        MembersCompComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
