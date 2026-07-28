import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Body } from './body/body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('First-app-assignment');
}
