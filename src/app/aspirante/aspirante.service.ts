import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Aspirante } from './aspirante.model';

@Injectable({ providedIn: 'root' })
export class AspiranteService {
  private aspirantes: Aspirante[] = [];
  private aspirantesUpdated = new Subject<Aspirante[]>();

  private servidor: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  getAspirantes() {
    this.http
      .get<{ message: string; aspirantes: any }>(this.servidor + '/aspirantes')
      .pipe(
        map((aspiranteData) => {
          return aspiranteData.aspirantes.map(
            (aspirante: {
              _id: any;
              nombre: any;
              apellidos: any;
              alias: any;
              ci: any;
              edad: any;
              sexo: any;
              provincia: any;
              municipio: any;
              direccion: any;
              correo: any;
              telefono: any;
              raza: any;
              estatura: any;
              peso: any;
              estado_civil: any;
              hijos: any;
              licencia: any;
              categoria_licencia: any;
              militancia: any;
              nivel_escolaridad: any;
              titulo_graduado: any;
              experiencia_laboral: any;
              otros_estudios: any;
              trayectoria_laboral: any;
              situacion_laboral: any;
              centro_trabajo: any;
              organismo_trabajo: any;
              cargo_trabajo: any;
              categoria_trabajo: any;
              direccion_trabajo: any;
              telefono_trabajo: any;
              otros_oficios: any;
              estado: any;
              causa_eliminacion: any;
              causa_no_apto: any
            }) => {
              return {
                id: aspirante._id,
                nombre: aspirante.nombre,
                apellidos: aspirante.apellidos,
                alias: aspirante.alias,
                ci: aspirante.ci,
                edad: aspirante.edad,
                sexo: aspirante.sexo,
                provincia: aspirante.provincia,
                municipio: aspirante.municipio,
                direccion: aspirante.direccion,
                correo: aspirante.correo,
                telefono: aspirante.telefono,
                raza: aspirante.raza,
                estatura: aspirante.estatura,
                peso: aspirante.peso,
                estado_civil: aspirante.estado_civil,
                hijos: aspirante.hijos,
                licencia: aspirante.licencia,
                categoria_licencia: aspirante.categoria_licencia,
                militancia: aspirante.militancia,
                nivel_escolaridad: aspirante.nivel_escolaridad,
                titulo_graduado: aspirante.titulo_graduado,
                experiencia_laboral: aspirante.experiencia_laboral,
                otros_estudios: aspirante.otros_estudios,
                trayectoria_laboral: aspirante.trayectoria_laboral,
                situacion_laboral: aspirante.situacion_laboral,
                centro_trabajo: aspirante.centro_trabajo,
                organismo_trabajo: aspirante.organismo_trabajo,
                cargo_trabajo: aspirante.cargo_trabajo,
                categoria_trabajo: aspirante.categoria_trabajo,
                direccion_trabajo: aspirante.direccion_trabajo,
                telefono_trabajo: aspirante.telefono_trabajo,
                otros_oficios: aspirante.otros_oficios,
                estado: aspirante.estado,
                causa_eliminacion: aspirante.causa_eliminacion,
                causa_no_apto: aspirante.causa_no_apto
              };
            }
          );
        })
      )
      .subscribe((aspirantes) => {
        this.aspirantes = aspirantes;
        this.aspirantesUpdated.next([...this.aspirantes]);
      });
  }

  getAspirantesUpdateListener() {
    return this.aspirantesUpdated.asObservable();
  }

  updateAspirante(
    id: any,
    nombre: any,
    apellidos: any,
    alias: any,
    ci: any,
    edad: any,
    sexo: any,
    provincia: any,
    municipio: any,
    direccion: any,
    correo: any,
    telefono: any,
    raza: any,
    estatura: any,
    peso: any,
    estado_civil: any,
    hijos: any,
    licencia: any,
    categoria_licencia: any,
    militancia: any,
    nivel_escolaridad: any,
    titulo_graduado: any,
    experiencia_laboral: any,
    otros_estudios: any,
    trayectoria_laboral: any,
    situacion_laboral: any,
    centro_trabajo: any,
    organismo_trabajo: any,
    cargo_trabajo: any,
    categoria_trabajo: any,
    direccion_trabajo: any,
    telefono_trabajo: any,
    otros_oficios: any,
    estado: any,
    causa_eliminacion: any,
    causa_no_apto: any
  ) {
    const aspirante: Aspirante = {
      id: id,
      nombre: nombre,
      apellidos: apellidos,
      alias: alias,
      ci: ci,
      edad: edad,
      sexo: sexo,
      provincia: provincia,
      municipio: municipio,
      direccion: direccion,
      correo: correo,
      telefono: telefono,
      raza: raza,
      estatura: estatura,
      peso: peso,
      estado_civil: estado_civil,
      hijos: hijos,
      licencia: licencia,
      categoria_licencia: categoria_licencia,
      militancia: militancia,
      nivel_escolaridad: nivel_escolaridad,
      titulo_graduado: titulo_graduado,
      experiencia_laboral: experiencia_laboral,
      otros_estudios: otros_estudios,
      trayectoria_laboral: trayectoria_laboral,
      situacion_laboral: situacion_laboral,
      centro_trabajo: centro_trabajo,
      organismo_trabajo: organismo_trabajo,
      cargo_trabajo: cargo_trabajo,
      categoria_trabajo: categoria_trabajo,
      direccion_trabajo: direccion_trabajo,
      telefono_trabajo: telefono_trabajo,
      otros_oficios: otros_oficios,
      estado: estado,
      causa_eliminacion: causa_eliminacion,
      causa_no_apto: causa_no_apto
    };
    this.http.put(this.servidor + "/aspirantes/" + id, aspirante)
      .subscribe(response => {
        const aspirantesActualizados = [...this.aspirantes];
        const aspirantesAntiguos = aspirantesActualizados.findIndex(aspirante => aspirante.id === aspirante.id);
        aspirantesActualizados[aspirantesAntiguos] = aspirante;
        this.aspirantes = aspirantesActualizados;
        this.aspirantesUpdated.next([...this.aspirantes]);
        this.router.navigate(["/"]);
      });
  }
}
