import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';

@Component({
  selector: 'app-listar-eliminado',
  templateUrl: './listar-eliminado.component.html',
  styleUrls: ['./listar-eliminado.component.css']
})

export class ListarEliminadoComponent implements OnInit, OnDestroy {

  constructor(
    public aspiranteService: AspiranteService,
    public dialog: MatDialog
  ) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'direccion', 'estado', 'causa_eliminacion'];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        let aux: Aspirante[] = [];
        for (let i = 0; i < aspirantes.length; i++) {
          if (aspirantes[i].estado == "Candidato Eliminado") {
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
