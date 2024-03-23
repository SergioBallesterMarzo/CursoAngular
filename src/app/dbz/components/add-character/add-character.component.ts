import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output() //escucha los datos del formulario
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character ={
    name: '',
    power: 0
  };

  // registra los datos del formulario
  emitCharacter():void{

    if (this.character.name.length === 0 ) return; //si formulario está vacio no recoge nada

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0}; // resetear formulario
  }

}
