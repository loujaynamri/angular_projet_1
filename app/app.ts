import { Header } from './../header/header';
import { Component,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsGrid } from '../products/products-grid/products-grid';

@Component({
  imports: [RouterOutlet , Header , ProductsGrid],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projet_1');
}
