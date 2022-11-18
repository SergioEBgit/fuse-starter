import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { alumnos as alumnosData} from 'app/mock-api/apps/alumno/data';

@Injectable({
    providedIn: 'root'
})
export class AlumnosMockApi
{
    private _alumnos: any[] = alumnosData;

    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    registerHandlers(): void
    {
        this._fuseMockApiService
            .onGet('api/apps/academia/alumnos')
            .reply(() => {
                const cloned = cloneDeep(this._alumnos);
                return [200, cloned];
            });

        this._fuseMockApiService
            .onGet('api/apps/academia/alumnos/:id')
            .reply((params) => {
                const cloned = cloneDeep(this._alumnos);
                const alumno = cloned.filter(n=>(n.id===params.urlParams.id));
                return [200, alumno];
            });
    }
}
