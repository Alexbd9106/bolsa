import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Aspirante } from '../aspirante.model';
import { AspiranteService } from '../aspirante.service';

@Component({
  selector: 'app-listar-aspirante',
  templateUrl: './listar-aspirante.component.html',
  styleUrls: ['./listar-aspirante.component.css']
})

export class ListarAspiranteComponent implements OnInit, OnDestroy {

  constructor(public aspiranteService: AspiranteService) {}

  aspirantes: Aspirante[] = [];
  private aspiranteSub!: Subscription;

  displayedColumns: string[] = ['nombre', 'ci', 'edad', 'sexo', 'direccion', 'acciones'];

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
}
