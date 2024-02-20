import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nomproduit: any;
  categorieproduit: any;
  imageproduit: any;
  PRODUIT: any = [];
  constructor(public _apiService: ApiService) {
    this.getetu();
  }

  ajouter() {
    let data = {
      nomproduit: this.nomproduit,
      categorieproduit: this.categorieproduit,
      imageproduit: this.imageproduit,
    };
    this._apiService.ajouter(data).subscribe(
      (res: any) => {
        console.log('SUCCES ===', res);
        this.nomproduit = '';
        this.categorieproduit = '';
        this.categorieproduit = '';

        this.getetu();
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }

  getetu() {
    this._apiService.getetu().subscribe(
      (res: any) => {
        console.log('SUCCES ===', res);
        this.PRODUIT = res;
      },
      (error: any) => {
        console.log('ERROR ===', error);
      }
    );
  }
}
