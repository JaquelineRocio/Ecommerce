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
        for (let index = 0; index <= 10; index++) {
          // console.log(res.products[index]);
          this.products = [...this.products, 
            {
              id: res.products[index].id,
              title: res.products[index].title,
              description: res.products[index].description,
              price: res.products[index].price,
              image:res.products[index].images
            }
        ] 
        }
        
       
        
             

      })
}
   }


