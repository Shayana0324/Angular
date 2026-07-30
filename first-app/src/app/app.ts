import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Body } from './body/body';
import { DataBinding } from './data-binding/data-binding';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Body, DataBinding, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('');
}
