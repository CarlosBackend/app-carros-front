import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Carro } from '../models/carro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarroService {
  http = inject(HttpClient);

  API = 'http://localhost:8080/api/carro';

  constructor() {}

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/findAll');
  }

  delete(id: number): Observable<string> {
    return this.http.delete<string>(this.API + '/delete/' + id, {
      responseType: 'text' as 'json',
    });
  }
}
