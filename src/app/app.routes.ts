import { Routes } from '@angular/router';
import { LapList } from './lap-list/lap-list';
import { LapForm } from './lap-form/lap-form'

export const routes: Routes = [
    { path: '', redirectTo: 'laps', pathMatch: 'full'},
    { path: 'laps/new', component: LapList },
    { path: 'laps/new', component: LapForm },
];
