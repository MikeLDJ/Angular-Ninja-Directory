import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  ninja = {
    name: 'Yoshi',
    belt: 'Red'
  }

  yell(e) {
    alert('I am yelling')
  }
}
