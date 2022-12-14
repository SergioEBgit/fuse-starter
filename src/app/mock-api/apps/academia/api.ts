import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { cursos as coursesData} from 'app/mock-api/apps/academia/data';

@Injectable({
    providedIn: 'root'
})
export class AcademiaMockApi
{
    private _cursos: any[] = coursesData;

    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    registerHandlers(): void
    {
        this._fuseMockApiService
            .onGet('api/apps/academia/cursos')
            .reply(() => {
                const cloned = cloneDeep(this._cursos);
                return [200, cloned];
            });

        this._fuseMockApiService
            .onGet('api/apps/academia/cursos/:id')
            .reply((params) => {
                const cloned = cloneDeep(this._cursos);
                const curso = cloned.filter(n=>(n.id===params.urlParams.id));
                return [200, curso];
            });
    }
}
