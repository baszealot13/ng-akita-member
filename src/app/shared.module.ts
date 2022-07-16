import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCompComponent } from './components/member-comp/member-comp.component';
import { MembersCompComponent } from './components/members-comp/members-comp.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetComponent } from './components/tweet/tweet.component';



@NgModule({
    declarations: [
        MemberCompComponent,
        MembersCompComponent,
        TweetListComponent,
        TweetComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ],
    exports: [
        MemberCompComponent,
        MembersCompComponent,
        TweetListComponent,
        TweetComponent,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule
    ]
})
export class SharedModule { }
