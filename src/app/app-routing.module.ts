import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListarAspiranteComponent } from "./aspirante/listar-aspirante/listar-aspirante.component";
import { FichaAspiranteComponent } from './aspirante/ficha-aspirante/ficha-aspirante.component';
import { ListarCandidatoComponent } from './candidato/listar-candidato/listar-candidato.component';
import { ListarNoAptoComponent } from "./no-apto/listar-noapto/listar-noapto.component";
import { ListarEliminadoComponent } from "./eliminado/listar-eliminado/listar-eliminado.component";
import { ListarBolsaComponent } from './disponible/listar-bolsa/listar-bolsa.component';
import { ListarEmpleadosComponent } from './empleado/listar-empleados/listar-empleados.component';
import { ListarDevueltosComponent } from './disponible/listar-devueltos/listar-devueltos.component';

const rutas: Routes = [
  { path: '', component: ListarAspiranteComponent },
  { path: 'ficha/:idAspirante', component: FichaAspiranteComponent },
  { path: 'candidatos-en-proceso', component: ListarCandidatoComponent },
  { path: 'candidatos-en-bolsa', component: ListarBolsaComponent },
  { path: 'candidatos-en-bolsa-devueltos', component: ListarDevueltosComponent },
  { path: 'empleados-mixta', component: ListarEmpleadosComponent },
  { path: 'no-aptos', component: ListarNoAptoComponent},
  { path: 'eliminados', component: ListarEliminadoComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
