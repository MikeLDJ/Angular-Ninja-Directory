import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('./assets/ninjas.json')
      .map((res) => res.json())
  }

}
