import { Routes } from '@angular/router';
import { LapList } from './lap-list/lap-list';
import { LapForm } from './lap-form/lap-form';
import { Dashboard } from './dashboard/dashboard';
import { LapDetail } from './lap-detail/lap-detail';
import { Login } from './login/login'

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: Login},
    { path: 'dashboard', component: Dashboard},
    { path: 'laps', component: LapList },
    { path: 'laps/new', component: LapForm },
    { path: 'laps/:id', component: LapDetail },
    { path: 'laps/edit/:id', component: LapForm}
];
