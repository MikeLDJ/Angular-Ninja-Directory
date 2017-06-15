import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle: string = 'Welcome to the ninja directory!'
  myString: string = 'I like chicken'
  myBoolean: boolean = true

  @Input() ninja;


  alertMe(val) {
    alert(val)
  }

  constructor() { }

  ngOnInit() {
  }

}
