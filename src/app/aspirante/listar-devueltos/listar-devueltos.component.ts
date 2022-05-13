import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';
import { MixtaService } from '../../mixta/mixta.service';
import { Mixta } from '../../mixta/mixta.model';

export let idAspirante: any;

@Component({
  selector: 'app-listar-devueltos',
  templateUrl: './listar-devueltos.component.html',
  styleUrls: ['./listar-devueltos.component.css']
})

export class ListarDevueltosComponent implements OnInit, OnDestroy {

  constructor(
    public aspiranteService: AspiranteService,
    public dialog: MatDialog
  ) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  aspirante!: Aspirante;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'estado', 'acciones'];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        let aux: Aspirante[] = [];
        for (let i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].estado == "Candidato Disponible en Bolsa (Devuelto)") {
            aux.push(aspirantes[i]);
          }
        }
        this.aspirantes = aux;
      });
  }

  ngOnDestroy() {
    this.aspiranteSub.unsubscribe();
  }

  openDialogEmplearMixta(id: any) {
    idAspirante = id;
    const dialogRef = this.dialog.open(EmplearMixtaDevueltosComponent);
  }

}

@Component({
  selector: 'emplearmixta',
  templateUrl: '../emplearmixta/emplearmixta.component.html',
  styleUrls: ['../emplearmixta/emplearmixta.component.css'],
})

export class EmplearMixtaDevueltosComponent implements OnInit {

  constructor(public aspiranteService: AspiranteService, public mixtaService: MixtaService, public route: ActivatedRoute, private router: Router) { }

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  mixtas: Mixta[] = [];
  private mixtasSub!: Subscription;

  form!: FormGroup;
  aspirante!: Aspirante;

  getErrorMessage() {
    return "Este campo no puede estar vacío";
  }

  ngOnInit() {
    this.form = new FormGroup({
      mixta: new FormControl(null, { validators: [Validators.required] }),
      cargo_mixta: new FormControl(null, { validators: [Validators.required] }),
      fecha_mixta: new FormControl(null, { validators: [Validators.required] }),
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

    this.mixtaService.getMixtas();
    this.mixtasSub = this.mixtaService
      .getMixtasUpdateListener()
      .subscribe((mixtas: Mixta[]) => {
        this.mixtas = mixtas;
      });
  }

  onEmplearMixta() {
    this.aspiranteService.updateCandidatoDisponible(
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
      "Candidato Empleado por la Empresa Mixta",
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
      this.form.value.mixta,
      this.form.value.cargo_mixta,
      this.form.value.fecha_mixta,
      this.aspirante.causa_devolucion,
      this.aspirante.fecha_devolucion,
    );
    this.router.navigate(["/"]);
  }
}
