import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Alumno} from './alumno';


@Injectable({
    providedIn: 'root'
})
export class AlumnoService{

    private _alumno: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private http: HttpClient){

    }

    public getAlumnos(): Observable<any>{
        return this.http.get<Alumno[]>('api/apps/academia/alumnos').pipe(
            tap((response: Alumno[])=>{
                this._alumno.next(response);
            })
        );
    }
}
