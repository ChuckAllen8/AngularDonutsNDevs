import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { DevResults } from "../interfaces/dev-results";

@Injectable({
  providedIn: 'root'
})
export class DevDataService {

  getDevs(): Observable<DevResults> {
    return this.http.get<DevResults>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json');
  }

  constructor(private http: HttpClient) { }
}
