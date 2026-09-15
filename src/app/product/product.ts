import { Component, OnInit } from '@angular/core';
import { Products, Product as IProduct } from '../services/products';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReactiveForms } from '../reactive-forms/reactive-forms';

@Component({
  selector: 'app-product',
  imports: [ReactiveFormsModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product implements OnInit {
  productForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  });

  onSubmit() {
    const product = {
      id: this.productForm.value.id ?? 1,
      name: this.productForm.value.name ?? 'NA',
      price: this.productForm.value.price ?? 0,
      quantity: this.productForm.value.quantity ?? 0,
    };
    console.log(this.productForm.value);
    this.products.addProduct(product);
    this.productList = this.products.getProucts();

    this.productForm.reset();
  }

  productList: IProduct[] = [];
  constructor(private products: Products) {}

  ngOnInit(): void {
    this.productList = this.products.getProucts();
  }
}
