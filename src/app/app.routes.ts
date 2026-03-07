import { Routes } from '@angular/router';
import { LapList } from './lap-list/lap-list';
import { LapForm } from './lap-form/lap-form';
import { Dashboard } from './dashboard/dashboard';
import { LapDetail } from './lap-detail/lap-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: Dashboard},
    { path: 'laps', component: LapList },
    { path: 'laps/new', component: LapForm },
    { path: 'laps/:id', component: LapDetail },
];
