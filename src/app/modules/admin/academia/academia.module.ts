import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AcademiaComponent} from './academia.component';
import {CursoModule} from '../curso/curso.module';

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
    imports: [
        RouterModule.forChild(academiaRoutes),
        CursoModule
    ]
})
export class AcademiaModule
{
}
