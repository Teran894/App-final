import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';


const API_PATH = 'https://65334237d80bd20280f65941.mockapi.io/';


@Injectable({
  providedIn: 'root'
})

export class DatasService {

  constructor(private http: HttpClient) { 
  }
  
  getDataListas():Observable<Sale[]>{
    const path = API_PATH +'Ventas';
    return this.http.get<Sale[]>(path);
  }
}
