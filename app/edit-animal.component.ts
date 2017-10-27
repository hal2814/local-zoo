import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>Edit Animal</h3>
          <h4>{{childSelectedAnimal.name}}</h4>
          <label>Enter Animal species: </label>
          <input [(ngModel)]="childSelectedAnimal.species">
          <label>Enter Animal name: </label><br>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Enter Animal age: </label><br>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Enter Animal diet: </label><br>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <label>Enter Animal location: </label><br>
          <input [(ngModel)]="childSelectedAnimal.location">
          <label>Enter Animal caretakers: </label><br>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <label>Enter Animal sex: </label><br>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <label>Enter Animal likes: </label><br>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <label>Enter Animal dislikes: </label><br>
          <input [(ngModel)]="childSelectedAnimal.dislikes">
          <button (click)="doneButtonClicked()">Update</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();
  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
