import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Add New Animal</h1>
 <div>
   <label>Enter Animal species:</label>
   <input #newSpecies>
 </div>
 <div>
  <label>Enter Animal name:</label>
  <input #newName>
  </div>
  <div>
    <label>Enter Animal age:</label>
    <input #newAge>
  </div>
  <div>
    <label>Enter Animal diet:</label>
    <input #newDiet>
  </div>
  <div>
    <label>Enter Animal location:</label>
    <input #newLocation>
  </div>
  <div>
    <label>Enter Animal caretakers:</label>
    <input #newCaretakers>
  </div>
  <div>
    <label>Enter Animal sex:</label>
    <input #newSex>
  </div>
  <div>
    <label>Enter Animal likes:</label>
    <input #newLikes>
  </div>
  <div>
    <label>Enter Animal dislikes:</label>
    <input #newDislikes>
  </div>

  <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; ">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species,name,age,diet,location,caretakers,sex,likes,dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
