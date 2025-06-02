import { Routes } from '@angular/router';
import { DecideComponent } from './views/decide/decide.component';
import { ZenComponent } from './views/zen/zen.component';

export const routes: Routes = [

    {
        path: '', redirectTo: 'decide', pathMatch: 'full'
    },
    {
        path: 'decide', component: DecideComponent
    },
    {
        path: 'zen', component: ZenComponent
    }
];
