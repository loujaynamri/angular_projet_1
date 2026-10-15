import { Product } from './../product';
import { Component, computed, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';
import { single } from 'rxjs';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  imports: [ProductCard,MatIcon,MatInputModule,FormsModule,MatFormFieldModule],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {
  protected readonly searchTerm = signal('');

  protected readonly products =signal <Product[]>([
    {id:1,
    name:'premium wireless headphones',
    description:'high-quality wireless headphones with noise cancellation and premium sound effects',
    price:80.00,
    originalPrice:100.00,
    },
    {
      id:2,
      name:'smart fitness watcg',
      description:'track your fitness goals with this advanced smartwatch',
      price:190.00,
    },
    {
      id:3,
      name:'portable blutooth speaker',
      description:'compact speaker with powerfull bass and 12-hour battaery life',
      price:79.99,
      originalPrice:99.99,
    }

  ]);

  protected readonly filteredProducts =computed(()=>{
    const term = this.searchTerm().toLocaleLowerCase().trim();
    if(!term) return this.products();
    return this.products().filter((product)=>
      product.name.toLocaleLowerCase().includes(term) ||
      product.description.toLocaleLowerCase().includes(term)
  );
  });

  protected clearSearch(){
    this.searchTerm.set('');
  }
  protected trimSearch(){
    this.searchTerm.update((value)=>value.trim());
  }
}
