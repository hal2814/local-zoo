import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3>Filter by Animal Age: </h3>
  <select (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="old">Adult Animals</option>
  </select>
<ul>
  <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><h3>{{currentAnimal.name}} the {{currentAnimal.species}}</h3> <h4><span>Age:  {{currentAnimal.age}} </span></h4> <h4><span>Diet: {{currentAnimal.diet}}</span></h4> <h4><span>Location: {{currentAnimal.location}}</span></h4>

  <h4><span> Number of Caretakers: {{currentAnimal.caretakers}}</span></h4>

  <h4><span>Sex: {{currentAnimal.sex}}</span></h4>

  <h4><span>likes: {{currentAnimal.likes}}</span></h4>

  <h4><span>Dislikes: {{currentAnimal.dislikes}}</span></h4>

    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>

  </li>
</ul>
`
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "all";
  displayPints: boolean = false;

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
