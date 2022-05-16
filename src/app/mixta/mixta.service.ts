import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

import { Mixta } from "./mixta.model";

@Injectable({providedIn: "root"})
export class MixtaService {
  private mixtas: Mixta[] = [];
  private mixtasUpdated = new Subject<Mixta[]>();

  constructor(private http: HttpClient, private router: Router) {}

  servidor: string = "http://192.168.1.48:3000"

  getMixtas() {
    this.http.get<{mensaje: string, mixtas: any}>(this.servidor + "/mixtas")
      .pipe(map((mixtaData) => {
        return mixtaData.mixtas.map((mixta: { _id: any; nombre: any; }) => {
          return {
            id: mixta._id,
            nombre: mixta.nombre
          };
        });
      }))
      .subscribe((mixtas) => {
        this.mixtas = mixtas;
        this.mixtasUpdated.next([...this.mixtas]);
      });
  }

  getMixtasUpdateListener() {
    return this.mixtasUpdated.asObservable();
  }
}
