import { Service } from '@angular/core';

export interface Product{
    id:number;
    name : string;
    price: number;
    quantity : number

}
@Service()
export class Products {
 products:Product[]=[{
    id:1,
    name:"Apple",
    price:100000,
    quantity:2

 },
{
    id:2,
    name:"lecchi",
    price:100000,
    quantity:7

 }]

 getProucts():Product[]
 {
    return this.products;

 } 



}
