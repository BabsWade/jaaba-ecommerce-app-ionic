import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  numeroproduit: any;
  nomproduit: any;
  categorieproduit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiservice: ApiService
  ) {
    this.route.params.subscribe((param: any) => {
      this.numeroproduit = param.numeroproduit;
      console.log(this.numeroproduit);
      this.getet(this.numeroproduit);
    });
  }

  ngOnInit() {}

  getet(numeroproduit) {
    this._apiservice.getet(numeroproduit).subscribe(
      (res: any) => {
        console.log('SUCCESS', res);
        let det = res[0];
        this.numeroproduit = det.numeroproduit;
        this.nomproduit = det.nomproduit;
        this.categorieproduit = det.categorieproduit;
        document.write(det.nomproduit);
        document.write(det.prixproduit);
        document.write(det.categorieproduit);
      },
      (err: any) => {
        console.log('ERROR', err);
      }
    );
  }
}
