import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';

export let idAspirante: any;

@Component({
  selector: 'app-listar-aspirante',
  templateUrl: './listar-aspirante.component.html',
  styleUrls: ['./listar-aspirante.component.css']
})

export class ListarAspiranteComponent implements OnInit, OnDestroy {

  constructor(
    public aspiranteService: AspiranteService,
    public dialog: MatDialog
  ) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  aspirante!: Aspirante;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'direccion', 'estado', 'acciones'];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        let aux: Aspirante[] = [];
        for (let i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].estado == "Candidato sin Procesar") {
            aux.push(aspirantes[i]);
          }
        }
        this.aspirantes = aux;
      });
  }

  ngOnDestroy() {
    this.aspiranteSub.unsubscribe();
  }

  onProcesarAspirante(id: any) {
    idAspirante = id;
    for (let i = 0; i < this.aspirantes.length; i++) {
      if (this.aspirantes[i].id == idAspirante) {
        this.aspirante = this.aspirantes[i];
      }
    }
    this.aspiranteService.updateAspirante(
      idAspirante,
      this.aspirante.nombre,
      this.aspirante.apellidos,
      this.aspirante.alias,
      this.aspirante.ci,
      this.aspirante.edad,
      this.aspirante.sexo,
      this.aspirante.provincia,
      this.aspirante.municipio,
      this.aspirante.direccion,
      this.aspirante.correo,
      this.aspirante.telefono,
      this.aspirante.raza,
      this.aspirante.estatura,
      this.aspirante.peso,
      this.aspirante.estado_civil,
      this.aspirante.hijos,
      this.aspirante.licencia,
      this.aspirante.categoria_licencia,
      this.aspirante.militancia,
      this.aspirante.nivel_escolaridad,
      this.aspirante.titulo_graduado,
      this.aspirante.experiencia_laboral,
      this.aspirante.otros_estudios,
      this.aspirante.trayectoria_laboral,
      this.aspirante.situacion_laboral,
      this.aspirante.centro_trabajo,
      this.aspirante.organismo_trabajo,
      this.aspirante.cargo_trabajo,
      this.aspirante.categoria_trabajo,
      this.aspirante.direccion_trabajo,
      this.aspirante.telefono_trabajo,
      this.aspirante.otros_oficios,
      "Candidato en Proceso",
      this.aspirante.causa_eliminacion,
      this.aspirante.causa_no_apto,
      this.aspirante.preseleccion,
      this.aspirante.fecha_inicio_proceso_investigativo,
      this.aspirante.fecha_fin_proceso_investigativo,
      this.aspirante.resultado_proceso_investigativo,
      this.aspirante.curriculum_vitae,
      this.aspirante.fecha_curriculum_vitae,
      this.aspirante.autobiografia,
      this.aspirante.fecha_autobiografia,
      this.aspirante.titulo,
      this.aspirante.fecha_titulo,
      this.aspirante.chequeo_medico,
      this.aspirante.fecha_chequeo_medico,
      this.aspirante.avales_cdr,
      this.aspirante.fecha_avales_cdr,
      this.aspirante.avales_centro_trabajo,
      this.aspirante.fecha_avales_centro_trabajo,
      this.aspirante.fotos,
      this.aspirante.fecha_fotos,
      this.aspirante.anexo1,
      this.aspirante.fecha_anexo1,
      this.aspirante.antecedentes,
      this.aspirante.fecha_antecedentes,
      this.aspirante.evaluacion_psicologica,
      this.aspirante.comite_admision,
      this.aspirante.mixta,
      this.aspirante.cargo_mixta,
      this.aspirante.fecha_mixta,
      this.aspirante.causa_devolucion,
      this.aspirante.fecha_devolucion,
    );
  }

  openDialogNoApto(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(AspiranteNoAptoComponent);
  }

  openDialogEliminar(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(EliminarAspiranteComponent);
  }
}

@Component({
  selector: 'aspirante-noapto',
  templateUrl: '../aspirante-noapto/aspirante-noapto.component.html',
  styleUrls: ['../aspirante-noapto/aspirante-noapto.component.css'],
})

export class AspiranteNoAptoComponent implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vac??o";
  }

  ngOnInit() {
    this.form = new FormGroup({
      causa_no_apto: new FormControl(null, { validators: [Validators.required] }),
    });

    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        this.aspirantes = aspirantes;
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          for (let i = 0; i < this.aspirantes.length; i++) {
            if (this.aspirantes[i].id == idAspirante) {
              this.aspirante = this.aspirantes[i];
            }
          }
        });
      });
  }

  onAspiranteNoApto() {
    this.aspiranteService.updateAspirante(
      idAspirante,
      this.aspirante.nombre,
      this.aspirante.apellidos,
      this.aspirante.alias,
      this.aspirante.ci,
      this.aspirante.edad,
      this.aspirante.sexo,
      this.aspirante.provincia,
      this.aspirante.municipio,
      this.aspirante.direccion,
      this.aspirante.correo,
      this.aspirante.telefono,
      this.aspirante.raza,
      this.aspirante.estatura,
      this.aspirante.peso,
      this.aspirante.estado_civil,
      this.aspirante.hijos,
      this.aspirante.licencia,
      this.aspirante.categoria_licencia,
      this.aspirante.militancia,
      this.aspirante.nivel_escolaridad,
      this.aspirante.titulo_graduado,
      this.aspirante.experiencia_laboral,
      this.aspirante.otros_estudios,
      this.aspirante.trayectoria_laboral,
      this.aspirante.situacion_laboral,
      this.aspirante.centro_trabajo,
      this.aspirante.organismo_trabajo,
      this.aspirante.cargo_trabajo,
      this.aspirante.categoria_trabajo,
      this.aspirante.direccion_trabajo,
      this.aspirante.telefono_trabajo,
      this.aspirante.otros_oficios,
      "Candidato No Apto",
      this.aspirante.causa_eliminacion,
      this.form.value.causa_no_apto,
      this.aspirante.preseleccion,
      this.aspirante.fecha_inicio_proceso_investigativo,
      this.aspirante.fecha_fin_proceso_investigativo,
      this.aspirante.resultado_proceso_investigativo,
      this.aspirante.curriculum_vitae,
      this.aspirante.fecha_curriculum_vitae,
      this.aspirante.autobiografia,
      this.aspirante.fecha_autobiografia,
      this.aspirante.titulo,
      this.aspirante.fecha_titulo,
      this.aspirante.chequeo_medico,
      this.aspirante.fecha_chequeo_medico,
      this.aspirante.avales_cdr,
      this.aspirante.fecha_avales_cdr,
      this.aspirante.avales_centro_trabajo,
      this.aspirante.fecha_avales_centro_trabajo,
      this.aspirante.fotos,
      this.aspirante.fecha_fotos,
      this.aspirante.anexo1,
      this.aspirante.fecha_anexo1,
      this.aspirante.antecedentes,
      this.aspirante.fecha_antecedentes,
      this.aspirante.evaluacion_psicologica,
      this.aspirante.comite_admision,
      this.aspirante.mixta,
      this.aspirante.cargo_mixta,
      this.aspirante.fecha_mixta,
      this.aspirante.causa_devolucion,
      this.aspirante.fecha_devolucion,
    );
  }
}

@Component({
  selector: 'eliminar-aspirante',
  templateUrl: '../eliminar-aspirante/eliminar-aspirante.component.html',
  styleUrls: ['../eliminar-aspirante/eliminar-aspirante.component.css'],
})

export class EliminarAspiranteComponent implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vac??o";
  }

  ngOnInit() {
    this.form = new FormGroup({
      causa_eliminacion: new FormControl(null, { validators: [Validators.required] }),
    });

    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        this.aspirantes = aspirantes;
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          for (let i = 0; i < this.aspirantes.length; i++) {
            if (this.aspirantes[i].id == idAspirante) {
              this.aspirante = this.aspirantes[i];
            }
          }
        });
      });
  }

  onDeleteAspirante() {
    this.aspiranteService.updateAspirante(
      idAspirante,
      this.aspirante.nombre,
      this.aspirante.apellidos,
      this.aspirante.alias,
      this.aspirante.ci,
      this.aspirante.edad,
      this.aspirante.sexo,
      this.aspirante.provincia,
      this.aspirante.municipio,
      this.aspirante.direccion,
      this.aspirante.correo,
      this.aspirante.telefono,
      this.aspirante.raza,
      this.aspirante.estatura,
      this.aspirante.peso,
      this.aspirante.estado_civil,
      this.aspirante.hijos,
      this.aspirante.licencia,
      this.aspirante.categoria_licencia,
      this.aspirante.militancia,
      this.aspirante.nivel_escolaridad,
      this.aspirante.titulo_graduado,
      this.aspirante.experiencia_laboral,
      this.aspirante.otros_estudios,
      this.aspirante.trayectoria_laboral,
      this.aspirante.situacion_laboral,
      this.aspirante.centro_trabajo,
      this.aspirante.organismo_trabajo,
      this.aspirante.cargo_trabajo,
      this.aspirante.categoria_trabajo,
      this.aspirante.direccion_trabajo,
      this.aspirante.telefono_trabajo,
      this.aspirante.otros_oficios,
      "Candidato Eliminado",
      this.form.value.causa_eliminacion,
      this.aspirante.causa_no_apto,
      this.aspirante.preseleccion,
      this.aspirante.fecha_inicio_proceso_investigativo,
      this.aspirante.fecha_fin_proceso_investigativo,
      this.aspirante.resultado_proceso_investigativo,
      this.aspirante.curriculum_vitae,
      this.aspirante.fecha_curriculum_vitae,
      this.aspirante.autobiografia,
      this.aspirante.fecha_autobiografia,
      this.aspirante.titulo,
      this.aspirante.fecha_titulo,
      this.aspirante.chequeo_medico,
      this.aspirante.fecha_chequeo_medico,
      this.aspirante.avales_cdr,
      this.aspirante.fecha_avales_cdr,
      this.aspirante.avales_centro_trabajo,
      this.aspirante.fecha_avales_centro_trabajo,
      this.aspirante.fotos,
      this.aspirante.fecha_fotos,
      this.aspirante.anexo1,
      this.aspirante.fecha_anexo1,
      this.aspirante.antecedentes,
      this.aspirante.fecha_antecedentes,
      this.aspirante.evaluacion_psicologica,
      this.aspirante.comite_admision,
      this.aspirante.mixta,
      this.aspirante.cargo_mixta,
      this.aspirante.fecha_mixta,
      this.aspirante.causa_devolucion,
      this.aspirante.fecha_devolucion,
    );
  }
}
