import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';

@Component({
  selector: 'app-ficha-aspirante',
  templateUrl: './ficha-aspirante.component.html',
  styleUrls: ['./ficha-aspirante.component.css']
})

export class FichaAspiranteComponent implements OnInit {

  constructor(public aspiranteService: AspiranteService, public route: ActivatedRoute) {}

  aspirante!: Aspirante;
  private idAspirante: string = "";

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('idAspirante')) {
        this.idAspirante = paramMap.get("idAspirante");
        this.aspiranteService.getAspirante(this.idAspirante).subscribe(aspiranteData => {
          this.aspirante = {
            id: aspiranteData._id,
            nombre: aspiranteData.nombre,
            apellidos: aspiranteData.apellidos,
            alias: aspiranteData.alias,
            ci: aspiranteData.ci,
            edad: aspiranteData.edad,
            sexo: aspiranteData.sexo,
            provincia: aspiranteData.provincia,
            municipio: aspiranteData.municipio,
            direccion: aspiranteData.direccion,
            correo: aspiranteData.correo,
            telefono: aspiranteData.telefono,
            color_piel: aspiranteData.color_piel,
            estatura: aspiranteData.estatura,
            peso: aspiranteData.peso,
            estado_civil: aspiranteData.estado_civil,
            hijos: aspiranteData.hijos,
            licencia: aspiranteData.licencia,
            categoria_licencia: aspiranteData.categoria_licencia,
            militancia: aspiranteData.militancia,
            nivel_escolaridad: aspiranteData.nivel_escolaridad,
            titulo_graduado: aspiranteData.titulo_graduado,
            experiencia_laboral: aspiranteData.experiencia_laboral,
            otros_estudios: aspiranteData.otros_estudios,
            trayectoria_laboral: aspiranteData.trayectoria_laboral,
            situacion_laboral: aspiranteData.situacion_laboral,
            centro_trabajo: aspiranteData.centro_trabajo,
            organismo_trabajo: aspiranteData.organismo_trabajo,
            cargo_trabajo: aspiranteData.cargo_trabajo,
            categoria_trabajo: aspiranteData.categoria_trabajo,
            direccion_trabajo: aspiranteData.direccion_trabajo,
            telefono_trabajo: aspiranteData.telefono_trabajo,
            otros_oficios: aspiranteData.otros_oficios
          }
        });
      };
    });
  }
}
