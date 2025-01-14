import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NaviComponent, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'engin-demirog-northwind';
}
