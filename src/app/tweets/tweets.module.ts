import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetsRoutingModule } from './tweets-routing.module';
import { TweetsComponent } from './tweets.component';
import { SharedModule } from '../shared.module';


@NgModule({
    declarations: [
        TweetsComponent
    ],
    imports: [
        CommonModule,
        TweetsRoutingModule,
        SharedModule
    ]
})
export class TweetsModule { }
