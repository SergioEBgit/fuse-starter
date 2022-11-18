import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Curso} from './curso';
import {CursoService} from './curso.service';
import {FuseConfirmationModule, FuseConfirmationService} from '@fuse/services/confirmation';
import {AlumnoService} from '../alumno/alumno.service';
import {Alumno} from '../alumno/alumno';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
    curso: Curso;
    alumnos: Array<Alumno>;
}

@Component({
    selector     : 'curso',
    templateUrl  : './curso.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit
{
    public displayedColumns: string[] = ['id', 'title', 'description', 'category','duration','updatedAt'];
    public _cursos: Array<Curso>;
    public _curso?: Curso;
    public _alumnos?: Array<Alumno>;

    constructor(private _cursoService: CursoService,private _alumnoService: AlumnoService, private _fuseConfirmationService: FuseConfirmationService, public dialog: MatDialog) {}

    ngOnInit(): void {
        // const dialogRef = this._fuseConfirmationService.open({
        //     title: 'Listamos',
        //     message: 'seguro?',
        //     actions: {
        //         confirm:{
        //             label: 'Listar'
        //         }
        //     }
        // });
        // dialogRef.afterClosed().subscribe((result)=>{console.log(result);});
        this._cursoService.getCursos().subscribe(data=>this._cursos=data);
    }

    public findAlumnos(curso: Curso): void{
        this._alumnoService.getAlumnos().subscribe((data)=>{
            this._alumnos = data.filter((n)=>{
                if (n.courses !== undefined) {
                    return n.courses.some(id=>curso.id===id);
                }
                return false;
            });
            this._curso=curso;
            this.openDialogAlumnos();
        });
    }

    private openDialogAlumnos(): void{
        const dialogRef = this.dialog.open(DialogAlumnosComponent, {
            width: ((this._alumnos.length===0)?'300px':'80%'),
            data: {curso:this._curso, alumnos: this._alumnos},
        });
        //
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log('The dialog was closed');
        //     this.animal = result;
        // });
    }
}

@Component({
    selector: 'alumno.dialog',
    templateUrl: 'alumno.dialog.html',
    styleUrls: ['alumno.dialog.css']
})
export class DialogAlumnosComponent {
    public displayedColumns: string[] = ['id', 'name', 'birthday', 'address'];
    constructor(public dialogRef: MatDialogRef<DialogAlumnosComponent>, @Inject(MAT_DIALOG_DATA)  public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
