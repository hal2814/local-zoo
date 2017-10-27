import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="font3">
  <h1 class="font2">Add a new animal</h1>
 <div>
   <label>Animal species:</label>
   <input #newSpecies>
 </div>
 <div>
  <label>Animal name:</label>
  <input #newName>
  </div>
  <div>
    <label>Animal age:</label>
    <input #newAge>
  </div>
  <div>
    <label>Animal diet:</label>
    <input #newDiet>
  </div>
  <div>
    <label>Animal location:</label>
    <input #newLocation>
  </div>
  <div>
    <label>Animal caretakers:</label>
    <input #newCaretakers>
  </div>
  <div>
    <label>Animal sex:</label>
    <input #newSex>
  </div>
  <div>
    <label>Animal likes:</label>
    <input #newLikes>
  </div>
  <div>
    <label>Animal dislikes:</label>
    <input #newDislikes>
  </div>
  </div>

  <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species,name,age,diet,location,caretakers,sex,likes,dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
