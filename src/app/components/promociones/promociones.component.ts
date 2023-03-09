import { Component } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Products } from '../products/products/products';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent {

  public productsPromocion: Products[]=[];

  constructor( public productService:ProductsService) {
    
  }

  ngOnInit(){
   
  
     this.productService.getProducts().subscribe((res)=>{
       for (let index = 0; index <= 10; index++) {
         console.log(res.products[index]);
        if(res.products[index].price<15){
          this.productsPromocion = [...this.productsPromocion, 
            {
              id: res.products[index].id,
              title: res.products[index].title,
              description: res.products[index].description,
              price: res.products[index].price,
              image:res.products[index].images
            }
        ] 
        console.log('promocion', this.productsPromocion);
        
        }else{
          console.log('no esta en promocion');
          
        }
       
       }
        

     })
  }


  }


