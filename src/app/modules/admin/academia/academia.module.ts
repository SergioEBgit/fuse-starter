import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AcademiaComponent} from './academia.component';

const academiaRoutes: Route[] = [
    {
        path     : '',
        component: AcademiaComponent
    }
];

@NgModule({
    declarations: [
        AcademiaComponent
    ],
    imports     : [
        RouterModule.forChild(academiaRoutes)
    ]
})
export class AcademiaModule
{
}
