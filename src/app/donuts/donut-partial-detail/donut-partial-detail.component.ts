import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../../interfaces/donut';

@Component({
  selector: 'app-donut-partial-detail',
  templateUrl: './donut-partial-detail.component.html',
  styleUrls: ['./donut-partial-detail.component.css']
})
export class DonutPartialDetailComponent implements OnInit {
  @Input() donut: Donut;
  constructor() { }

  ngOnInit(): void {
  }

}
