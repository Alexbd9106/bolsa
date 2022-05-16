import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Aspirante } from '../../aspirante/aspirante.model';
import { AspiranteService } from '../../aspirante/aspirante.service';

@Component({
  selector: 'app-listar-noapto',
  templateUrl: './listar-noapto.component.html',
  styleUrls: ['./listar-noapto.component.css']
})

export class ListarNoAptoComponent implements OnInit, OnDestroy {

  constructor(
    public aspiranteService: AspiranteService,
    public dialog: MatDialog
  ) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'estado', 'causa_no_apto'];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        let aux: Aspirante[] = [];
        for (let i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].estado == "Candidato No Apto") {
            aux.push(aspirantes[i]);
          }
        }
        this.aspirantes = aux;
      });
  }

  ngOnDestroy() {
    this.aspiranteSub.unsubscribe();
  }
}
