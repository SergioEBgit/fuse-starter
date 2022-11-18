import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {CursoComponent, DialogAlumnosComponent} from './curso.component';
import {NgForOf, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

const cursoRoutes: Route[] = [
    {
        path     : '',
        component: CursoComponent
    }
];

@NgModule({
    declarations: [
        CursoComponent,
        DialogAlumnosComponent
    ],
    exports: [
        CursoComponent
    ],
    imports: [
        RouterModule.forChild(cursoRoutes),
        NgForOf,
        MatTableModule,
        NgIf,
        FormsModule,
        MatDialogModule,
    ]
})
export class CursoModule
{
}
