import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DonutResults } from "../interfaces/donut-results";
import { Donut } from "../interfaces/donut";

@Injectable({
  providedIn: 'root'
})
export class DonutDataService {
  public donutCount: number;

  getDonuts(): Observable<DonutResults> {
    return this.http.get<DonutResults>('https://grandcircusco.github.io/demo-apis/donuts.json');
  }

  getDonut(id: number): Observable<Donut> {
    return this.http.get<Donut>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`);
  }

  constructor(private http: HttpClient) {
    this.getDonuts().subscribe(data => this.donutCount = data.count);
  }
}
