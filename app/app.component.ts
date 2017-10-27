import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Animals</h1>
      <h3>{{currentFocus}}</h3>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-animal>

      <new-animal (newKegSender)="addKeg($event)"></new-animal>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Local Zoo'
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Sloth', 'Speedy', 5, 'Herbivore', 'Jungle Building', 3, 'Male', 'Rubbed behind the ears', 'Lemons'),
    new Animal('Grizzly Bear', 'Jupiter', 1, 'Omnivore', 'Forest Building', 2, 'Female', 'Squirrel shaped toys', 'Being on her back'),
    new Animal('Squirrel', 'Jumanji', 3, 'Herbivore', 'Forest Building', 1, 'Male', 'Peanuts', 'Being in the bear pen')
  ];
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
