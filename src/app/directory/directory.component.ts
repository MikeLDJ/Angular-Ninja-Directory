import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../data.service'

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  ninjas = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.fetchData()
      .subscribe((data) => this.ninjas = data)
  }

}
