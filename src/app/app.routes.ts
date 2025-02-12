import { Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';

import { EditUserComponent } from './edit-user/edit-user.component';
import { ThirdComponent } from './third/third.component';

export const routes: Routes = [

    { path: '', redirectTo: '/third', pathMatch: 'full' },
    {
        path: 'third',
        component: ThirdComponent
    },
    { path: 'third/:index', component: ThirdComponent },
    {
        path: 'edit-user',
        component: EditUserComponent
    }];




