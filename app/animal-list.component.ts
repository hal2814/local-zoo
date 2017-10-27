import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h3 class="font1">Filter by Animal Age: </h3>
  <select class="font1" (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="old">Adult Animals</option>
  </select>
<ul>
  <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
  <div class="card card-inverse" style="margin: 3px; width: 40rem; background-color: #011627; border-color: #E71D36; color: #FF9F1C;">
    <div class="card-header font2">
      <h3>{{currentAnimal.name}} the {{currentAnimal.species}}</h3>
    </div>
    <div class="card-block font3">

        <h4><span>Age:  {{currentAnimal.age}} </span></h4> <h4><span>Diet: {{currentAnimal.diet}}</span></h4> <h4><span>Location: {{currentAnimal.location}}</span></h4>

        <h4><span> Number of Caretakers: {{currentAnimal.caretakers}}</span></h4>

        <h4><span>Sex: {{currentAnimal.sex}}</span></h4>

        <h4><span>likes: {{currentAnimal.likes}}</span></h4>

        <h4><span>Dislikes: {{currentAnimal.dislikes}}</span></h4>

        <button (click)="editButtonHasBeenClicked(currentAnimal)" class="btn btn-warning">Edit</button>
      </div>
    </div>
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
