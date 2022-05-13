import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AspiranteService } from '../../aspirante/aspirante.service';
import { Aspirante } from '../../aspirante/aspirante.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export let idAspirante: any;

@Component({
  selector: 'app-listar-candidato',
  templateUrl: './listar-candidato.component.html',
  styleUrls: ['./listar-candidato.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListarCandidatoComponent implements OnInit {

  constructor(
    public aspiranteService: AspiranteService,
    public dialog: MatDialog
  ) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'estado', 'acciones'];
  expandedCandidato!: Aspirante | null;

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        let aux: Aspirante[] = [];
        for (let i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].estado == "Candidato en Proceso") {
            aux.push(aspirantes[i]);
          }
        }
        this.aspirantes = aux;
      });
  }

  openDialogPreSeleccion(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(PreseleccionComponent);
  }

  openDialogProcesoInvestigativo(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(ProcesoInvestigativo);
  }

  openDialogDocumentos(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(Documentos);
  }

}

@Component({
  selector: 'preseleccion',
  templateUrl: '../preseleccion/preseleccion.component.html',
  styleUrls: ['../preseleccion/preseleccion.component.css'],
})

export class PreseleccionComponent implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute, private router: Router) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vacío";
  }

  ngOnInit() {
    this.form = new FormGroup({
      preseleccion: new FormControl(null, { validators: [Validators.required] }),
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

  onPreseleccion() {
    this.aspiranteService.updateCandidato(
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
      this.aspirante.estado,
      this.aspirante.causa_eliminacion,
      this.aspirante.causa_no_apto,
      this.form.value.preseleccion,
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
      this.aspirante.comite_admision
    );
    this.router.navigate(["/"]);
  }
}

@Component({
  selector: 'procesoinvestigativo',
  templateUrl: '../procesoinvestigativo/procesoinvestigativo.component.html',
  styleUrls: ['../procesoinvestigativo/procesoinvestigativo.component.css'],
})

export class ProcesoInvestigativo implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute, private router: Router) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vacío";
  }

  ngOnInit() {
    this.form = new FormGroup({
      fecha_inicio_proceso_investigativo: new FormControl(""),
      fecha_fin_proceso_investigativo: new FormControl(""),
      resultado_proceso_investigativo: new FormControl(""),
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

  onProcesoInvestigativo() {
    this.aspiranteService.updateCandidato(
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
      this.aspirante.estado,
      this.aspirante.causa_eliminacion,
      this.aspirante.causa_no_apto,
      this.aspirante.preseleccion,
      this.form.value.fecha_inicio_proceso_investigativo,
      this.form.value.fecha_fin_proceso_investigativo,
      this.form.value.resultado_proceso_investigativo,
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
      this.aspirante.comite_admision
    );
    this.router.navigate(["/"]);
  }
}

@Component({
  selector: 'documentos',
  templateUrl: '../documentos/documentos.component.html',
  styleUrls: ['../documentos/documentos.component.css'],
})

export class Documentos implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute, private router: Router) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vacío";
  }

  ngOnInit() {
    this.form = new FormGroup({
      curriculum_vitae: new FormControl(false),
      fecha_curriculum_vitae: new FormControl(""),
      autobiografia: new FormControl(false),
      fecha_autobiografia: new FormControl(""),
      titulo: new FormControl(false),
      fecha_titulo: new FormControl(""),
      chequeo_medico: new FormControl(false),
      fecha_chequeo_medico: new FormControl(""),
      avales_cdr: new FormControl(false),
      fecha_avales_cdr: new FormControl(""),
      avales_centro_trabajo: new FormControl(false),
      fecha_avales_centro_trabajo: new FormControl(""),
      fotos: new FormControl(false),
      fecha_fotos: new FormControl(""),
      anexo1: new FormControl(false),
      fecha_anexo1: new FormControl(""),
      antecedentes: new FormControl(false),
      fecha_antecedentes: new FormControl("")
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

  onDocumentos() {
    if (this.aspirante.curriculum_vitae == false) {
      this.form.value.fecha_curriculum_vitae = "";
    }

    if (this.aspirante.autobiografia == false) {
      this.form.value.fecha_autobiografia = "";
    }

    if (this.aspirante.titulo == false) {
      this.form.value.fecha_titulo = "";
    }

    if (this.aspirante.chequeo_medico == false) {
      this.form.value.fecha_chequeo_medico = "";
    }

    if (this.aspirante.avales_cdr == false) {
      this.form.value.fecha_avales_cdr = "";
    }

    if (this.aspirante.avales_centro_trabajo == false) {
      this.form.value.fecha_avales_centro_trabajo = "";
    }

    if (this.aspirante.fotos == false) {
      this.form.value.fecha_fotos = "";
    }

    if (this.aspirante.anexo1 == false) {
      this.form.value.fecha_anexo1 = "";
    }

    if (this.aspirante.antecedentes == false) {
      this.form.value.fecha_antecedentes = "";
    }

    this.aspiranteService.updateCandidato(
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
      this.aspirante.estado,
      this.aspirante.causa_eliminacion,
      this.aspirante.causa_no_apto,
      this.aspirante.preseleccion,
      this.aspirante.fecha_inicio_proceso_investigativo,
      this.aspirante.fecha_fin_proceso_investigativo,
      this.aspirante.resultado_proceso_investigativo,
      this.aspirante.curriculum_vitae,
      this.form.value.fecha_curriculum_vitae,
      this.aspirante.autobiografia,
      this.form.value.fecha_autobiografia,
      this.aspirante.titulo,
      this.form.value.fecha_titulo,
      this.aspirante.chequeo_medico,
      this.form.value.fecha_chequeo_medico,
      this.aspirante.avales_cdr,
      this.form.value.fecha_avales_cdr,
      this.aspirante.avales_centro_trabajo,
      this.form.value.fecha_avales_centro_trabajo,
      this.aspirante.fotos,
      this.form.value.fecha_fotos,
      this.aspirante.anexo1,
      this.form.value.fecha_anexo1,
      this.aspirante.antecedentes,
      this.form.value.fecha_antecedentes,
      this.aspirante.evaluacion_psicologica,
      this.aspirante.comite_admision
    );
    this.router.navigate(["/"]);
  }
}
