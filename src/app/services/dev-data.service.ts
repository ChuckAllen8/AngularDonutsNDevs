import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { DevResults } from "../interfaces/dev-results";
import { Dev } from '../interfaces/dev';

@Injectable({
  providedIn: 'root'
})
export class DevDataService {
  devList: Dev[];

  getDevs(): Observable<Dev[]> {
    return of(this.devList);
  }

  addDev(dev: Dev) {
    this.devList.push(dev);
  }

  deleteDev(dev: Dev) {
    this.devList.splice(this.devList.indexOf(dev), 1);
  }

  

  constructor(private http: HttpClient) {
    this.devList = [];
    this.http.get<DevResults>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json').subscribe(
      devs => devs.complete.forEach(d => this.devList.push(d))
    );
  }
}
