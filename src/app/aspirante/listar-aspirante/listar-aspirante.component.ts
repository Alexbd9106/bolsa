import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';

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

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'direccion', 'estado', 'acciones'];

  ngOnInit() {
    this.aspiranteService.getAspirantes();
    this.aspiranteSub = this.aspiranteService
      .getAspirantesUpdateListener()
      .subscribe((aspirantes: Aspirante[]) => {
        this.aspirantes = aspirantes;
      });
  }

  onDelete(aspiranteId: string) {
    this.aspiranteService.deleteAspirante(aspiranteId);
  }

  ngOnDestroy() {
    this.aspiranteSub.unsubscribe();
  }

  openDialogNoApto() {
    const dialogRef = this.dialog.open(NoApto);
  }

  openDialogEliminado() {
    const dialogRef = this.dialog.open(Eliminado);
  }
}

@Component({
  selector: 'no-apto',
  templateUrl: './no-apto.html',
  styleUrls: ['./no-apto.css'],
})
export class NoApto { }

@Component({
  selector: 'eliminado',
  templateUrl: './eliminado.html',
  styleUrls: ['./eliminado.css'],
})
export class Eliminado { }
