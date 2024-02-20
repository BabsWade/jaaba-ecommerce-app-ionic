import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getStore() {
    throw new Error('Method not implemented.');
  }
  delete(numero_magasin: any) {
    throw new Error('Method not implemented.');
  }
  headers: HttpHeaders;

  constructor(public http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
  bo;
  ajouter(data) {
    return this.http.post('http://localhost/essb/create.php', data);
  }
  getetu() {
    return this.http.get('http://localhost/essb/getetu.php');
  }
  getet(numeroproduit) {
    return this.http.get(
      'http://localhost/essb/details.php?numeroproduit=' + numeroproduit
    );
  }
}
