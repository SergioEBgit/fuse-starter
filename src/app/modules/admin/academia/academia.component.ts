import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'academia',
    templateUrl  : './academia.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AcademiaComponent
{
    public welcome?: string;

    constructor()
    {
        this.welcome = 'Bienvenido a la academia';
    }
}
