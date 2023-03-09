import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public products: Products[]= [];

  constructor( public productService:ProductsService) {
    
   }

   ngOnInit(){
   
   
      this.productService.getProducts().subscribe((res)=>{
        console.log(res.products);
        
        this.products = [...this.products, 
          {
            id: res.id,
            title: res.title,
            description: res.description,
            price: res.price,
            image:res.image
          }
      ]       
console.log(this.products);

      })

   }

}
