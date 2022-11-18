import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {AlumnoComponent} from './alumno.component';

const alumnoRoutes: Route[] = [
    {
        path     : '',
        component: AlumnoComponent
    }
];

@NgModule({
    declarations: [
        AlumnoComponent
    ],
    exports: [
        AlumnoComponent
    ],
    imports: [
        RouterModule.forChild(alumnoRoutes)
    ]
})
export class AlumnoModule
{
}
