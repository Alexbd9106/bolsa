import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListarAspiranteComponent } from "./aspirante/listar-aspirante/listar-aspirante.component";
import { ListarCandidatoComponent } from './candidato/listar-candidato/listar-candidato.component';
import { FichaAspiranteComponent } from './aspirante/ficha-aspirante/ficha-aspirante.component';

const rutas: Routes = [
  { path: '', component: ListarAspiranteComponent },
  { path: 'ficha/:idAspirante', component: FichaAspiranteComponent },
  { path: 'candidatos', component: ListarCandidatoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
