import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'members', loadChildren: () => import('./members/members.module').then(m => m.MembersModule) },
    { path: 'tweets', loadChildren: () => import('./tweets/tweets.module').then(m => m.TweetsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
