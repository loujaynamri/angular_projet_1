import { Product } from './../product';
import { Component, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [ProductCard,MatIcon],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export class ProductsGrid {
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
    }

  ]);
}
