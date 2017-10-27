import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>

          <label>Enter Animal species: </label>
          <input [(ngModel)]="childSelectedAnimal.species"><br>

          <label>Enter Animal name: </label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>


          <label>Enter Animal age: </label>
          <input [(ngModel)]="childSelectedAnimal.age"><br>

          <label>Enter Animal diet: </label>
          <input [(ngModel)]="childSelectedAnimal.diet"><br>

          <label>Enter Animal location: </label>
          <input [(ngModel)]="childSelectedAnimal.location"><br>

          <label>Enter Animal caretakers: </label>
          <input [(ngModel)]="childSelectedAnimal.caretakers"><br>

          <label>Enter Animal sex: </label>
          <input [(ngModel)]="childSelectedAnimal.sex"><br>

          <label>Enter Animal likes: </label>
          <input [(ngModel)]="childSelectedAnimal.likes"><br>

          <label>Enter Animal dislikes: </label>
          <input [(ngModel)]="childSelectedAnimal.dislikes"><br>

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
