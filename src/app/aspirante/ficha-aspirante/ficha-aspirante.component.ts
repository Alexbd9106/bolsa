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

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  aspirante!: Aspirante;
  private idAspirante: any;

  trayectorias: any[] = [];
  trayectoria: any[] = [];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        this.aspirantes = aspirantes;
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          if(paramMap.has('idAspirante')) {
            this.idAspirante = paramMap.get("idAspirante");
            for (let i = 0; i < this.aspirantes.length; i++) {
              if (this.aspirantes[i].id == this.idAspirante) {
                this.aspirante = this.aspirantes[i];
              }
            }

            for (let i = 0; i < this.aspirante.trayectoria_laboral.length; i++) {
              for (let j = 0; j < this.aspirante.trayectoria_laboral[i].length; j++) {
                this.trayectorias.push(this.aspirante.trayectoria_laboral[i][j]);
              }
            }

            for (let i = 0; i < this.trayectorias.length; i++) {
              let aux: any [] = [];
              aux.push(this.trayectorias[0], this.trayectorias[1], this.trayectorias[2], this.trayectorias[3]);
              this.trayectoria.push({...aux});
              this.trayectorias.splice(0,4);
            }
          };
        });
      });
  }
}
