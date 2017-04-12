import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product = {};
  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      let id = +params['id'];
      this.productService.getById(id).subscribe(res=>{
        this.product = res;
      });
    });
  }

}
