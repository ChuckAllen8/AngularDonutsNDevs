import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donut } from '../../interfaces/donut';
import { DonutDataService } from '../../services/donut-data.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  id: number;
  idObj;
  donut: Donut;
  constructor(private router: Router, private data: DonutDataService) { }

  ngOnInit(): void {
    this.idObj = window.history.state;
    this.id = this.idObj.donut_id;
    if(this.id == undefined || isNaN(this.id) || this.id < 1 || this.id > this.data.donutCount) {
      this.router.navigate(['/DonutNotFound']);
    }
    this.data.getDonut(this.id).subscribe(result => this.donut = result);
  }
}
