import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResDataModal} from './modals/resDataModal';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  apiUrl = 'https://medicoys.vantura.id/api/poli';

  constructor(private http: HttpClient) { }

  getData(): Observable<ResDataModal> {
    return this.http.get<ResDataModal>(this.apiUrl);
  }
}