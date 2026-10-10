import { Component, input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../product';
import { required } from '@angular/forms/signals';

@Component({
  imports: [MatCardModule , MatButtonModule],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  readonly product =input.required<Product>();
  readonly addButtonLabel=input('Add to cart');

}
