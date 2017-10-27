import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal" class="font3">
          <h3 class="font2">Edit {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>

          <label>Animal species: </label>
          <input [(ngModel)]="childSelectedAnimal.species"><br>

          <label>Animal name: </label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>


          <label>Animal age: </label>
          <input [(ngModel)]="childSelectedAnimal.age"><br>

          <label>Animal diet: </label>
          <input [(ngModel)]="childSelectedAnimal.diet"><br>

          <label>Animal location: </label>
          <input [(ngModel)]="childSelectedAnimal.location"><br>

          <label>Animal caretakers: </label>
          <input [(ngModel)]="childSelectedAnimal.caretakers"><br>

          <label>Animal sex: </label>
          <input [(ngModel)]="childSelectedAnimal.sex"><br>

          <label>Animal likes: </label>
          <input [(ngModel)]="childSelectedAnimal.likes"><br>

          <label>Animal dislikes: </label>
          <input [(ngModel)]="childSelectedAnimal.dislikes"><br>

          <button class="btn btn-success" (click)="doneButtonClicked()">Update</button>
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
