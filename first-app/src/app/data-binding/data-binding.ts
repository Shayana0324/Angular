import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation Binding
  location = 'Forsyth County, GA';
  meetingTime = '6:30 PM';
  currentBook = 'The Midnight Library by Matt Haig';

  // Property Binding
  isDisabled = true;

  // Event Binding
  showMessage() {
    alert("Next book: Atomic Habits by James Clear");
  }
}
