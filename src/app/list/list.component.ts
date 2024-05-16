import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private router: Router) {}
  goTodetail() {
    this.router.navigate(['/detail']);
  }
  items: { name: string, eaten: boolean }[] = [
//    { name: 'Item 1', eaten: false },
//    { name: 'Item 2', eaten: false },
//    { name: 'Item 3', eaten: false },
//    { name: 'Item 4', eaten: false },
//    { name: 'Item 5', eaten: false }
  ];
  newItemText: string = ''; // Ensure newItemText property is defined

  addItem() {
    if (this.newItemText.trim() !== '') {
      // Updated addItem method to push an object with 'name' and 'eaten' properties
      this.items.push({ name: this.newItemText, eaten: false });
      this.newItemText = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
  toggleItemStatus(index: number) {
    this.items[index].eaten = !this.items[index].eaten;
  }
}


