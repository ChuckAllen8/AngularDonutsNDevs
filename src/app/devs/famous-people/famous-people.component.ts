import { Component, OnInit } from '@angular/core';
import { Dev } from '../../interfaces/dev';
import { DevResults } from '../../interfaces/dev-results';
import { DevDataService } from '../../services/dev-data.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {
  people: Dev[];
  constructor(private data: DevDataService) { }

  ngOnInit(): void {
    this.data.getDevs().subscribe(
      results => this.people = results
    );
  }

  onDelete(dev: Dev) {
    this.data.deleteDev(dev);
  }

  onAdd(dev: Dev) {
    this.data.addDev(dev);
  }
}
