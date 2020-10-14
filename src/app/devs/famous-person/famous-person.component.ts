import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dev } from '../../interfaces/dev';
import { DevDataService } from '../../services/dev-data.service';

@Component({
  selector: 'app-famous-person',
  templateUrl: './famous-person.component.html',
  styleUrls: ['./famous-person.component.css']
})
export class FamousPersonComponent implements OnInit {
  @Input() person: Dev;
  showing: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.showing = !this.showing;
  }

}
