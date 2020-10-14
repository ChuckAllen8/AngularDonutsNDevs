import { Component, OnInit } from '@angular/core';
import { DonutResults } from '../../interfaces/donut-results';
import { DonutDataService } from "../../services/donut-data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donuts: DonutResults;
  extraData;
  constructor(private data: DonutDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.getDonuts().subscribe(
      results => this.donuts = results
    );
    this.route.data.subscribe(
      data => this.extraData = data
    );
  }

}
