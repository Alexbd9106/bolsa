import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

import { FichaAspiranteComponent } from './aspirante/ficha-aspirante/ficha-aspirante.component';
import { ListarAspiranteComponent, EliminarAspiranteComponent, AspiranteNoAptoComponent } from './aspirante/listar-aspirante/listar-aspirante.component';
import { ListarEliminadoComponent } from './eliminado/listar-eliminado/listar-eliminado.component';
import { ListarNoAptoComponent } from './no-apto/listar-noapto/listar-noapto.component';

import { DocumentosComponent, ListarCandidatoComponent, PreseleccionComponent, ProcesoInvestigativoComponent, EvaluacionPsicologicaComponent, ComiteAdmisionComponent, CandidatoNoAptoComponent } from './candidato/listar-candidato/listar-candidato.component';
import { EmplearMixtaComponent, ListarBolsaComponent } from './disponible/listar-bolsa/listar-bolsa.component';
import { ListarEmpleadosComponent, DevolverComponent } from './empleado/listar-empleados/listar-empleados.component';
import { EmplearMixtaDevueltosComponent, ListarDevueltosComponent } from './disponible/listar-devueltos/listar-devueltos.component';

@NgModule({
  declarations: [
    AppComponent,
    AspiranteNoAptoComponent,
    CandidatoNoAptoComponent,
    ComiteAdmisionComponent,
    DevolverComponent,
    DocumentosComponent,
    EliminarAspiranteComponent,
    EmplearMixtaComponent,
    EmplearMixtaDevueltosComponent,
    EvaluacionPsicologicaComponent,
    FichaAspiranteComponent,
    HeaderComponent,
    ListarAspiranteComponent,
    ListarBolsaComponent,
    ListarDevueltosComponent,
    ListarEliminadoComponent,
    ListarEmpleadosComponent,
    ListarNoAptoComponent,
    ListarCandidatoComponent,
    PreseleccionComponent,
    ProcesoInvestigativoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
