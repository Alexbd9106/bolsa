import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListarAspiranteComponent } from "./aspirante/listar-aspirante/listar-aspirante.component";
import { FichaAspiranteComponent } from './aspirante/ficha-aspirante/ficha-aspirante.component';
import { ListarCandidatoComponent } from './candidato/listar-candidato/listar-candidato.component';
import { ListarNoAptoComponent } from "./aspirante/listar-noapto/listar-noapto.component";
import { ListarEliminadoComponent } from "./aspirante/listar-eliminado/listar-eliminado.component";

const rutas: Routes = [
  { path: '', component: ListarAspiranteComponent },
  { path: 'ficha/:idAspirante', component: FichaAspiranteComponent },
  { path: 'candidatos', component: ListarCandidatoComponent },
  { path: 'no_aptos', component: ListarNoAptoComponent},
  { path: 'eliminados', component: ListarEliminadoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
