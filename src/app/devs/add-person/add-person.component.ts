import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dev } from '../../interfaces/dev';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: Dev;
  message: string;
  showing: boolean;
  @Output() added: EventEmitter<Dev> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.person = {firstName: '', lastName: '', innovation: '', year: 1900};
  }

  expand() {
    this.showing = !this.showing;
  }

  add() {
    if(this.person.firstName != '' && this.person.lastName != '' && this.person.innovation != '' && this.person.year > 100 && this.person.year < 2020) {
      this.added.emit(this.person);
      this.person = {firstName: '', lastName: '', innovation: '', year: 1900};
      this.message = '';
    }
    else {
      this.message = 'Person must have a first and last name, innovation, and year between 0100 and 2020';
    }
  }

}
