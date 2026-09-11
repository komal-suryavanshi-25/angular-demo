import { Component, OnInit } from '@angular/core';
import { Products,Product as IProduct} from '../services/products';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})

export class Product implements OnInit {

    productList:IProduct[]=[]
  constructor(private products: Products)
  {


  }
 
  ngOnInit(): void 
  {
    this.productList = this.products.getProucts();
  }


}
