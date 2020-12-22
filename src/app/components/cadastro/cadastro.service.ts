import { Cadastro } from './../cadastro-create/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { right } from '@popperjs/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  baseUrl = "http://localhost:3001/cadastro"

  constructor(private snakBar:MatSnackBar,
    private http: HttpClient) { }
  showMesssage(msg:string):void{
    this.snakBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:'right',
      verticalPosition:'top'
    });
  }

  create(cadastro:Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }
}
