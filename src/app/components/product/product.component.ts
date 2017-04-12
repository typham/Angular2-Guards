import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {NgProgressService} from "ng2-progressbar";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  state:string = 'normal';
  products;
  constructor(private productService:ProductService,private router:Router, public fb:FormBuilder, private pService: NgProgressService) { }


  public productForm = this.fb.group({
    id:['',Validators.required],
    Name:['',Validators.required],
    Price:[0,Validators.required],
    Description:['',Validators.required]
  });

  ngOnInit() {
    this.pService.start();
    this.productService.getAll().subscribe(res=>{
      this.products = res;
      this.pService.done();
    });
  }

  save(item){
    if(this.state == 'add'){
      this.add(item);
    }else{
      this.update(this.productForm.value);
    }
    this.changeState('normal');
  }

  add(item){
    this.productService.add(item).subscribe(res=>{
      this.products.push(res);
    });
  }

  update(item){
    this.productService.update(item).subscribe(res=>{
      this.router.navigate(['/products']);
    });
  }

  detail(item){
    this.router.navigate([`/products/${item.id}`])
  }

  delete(item){
    this.productService.delete(item.id).subscribe(res=>{
      let idx = this.products.indexOf(item);
      this.products.splice(idx,1);
    });
  }

  edit(item){
   this.productForm.patchValue({id:item.id,Name:item.Name,Price:item.Price,Description:item.Description});
    this.changeState('edit');
  }

  changeState(state){
    this.state = state;
    if(state == 'add'){
      this.productForm.reset();
    }
  }
  

}
