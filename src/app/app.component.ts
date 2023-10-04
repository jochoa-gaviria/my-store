import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttonDisable: boolean = true;

  person = {
    name: "Juan",
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton() {
    this.buttonDisable = !this.buttonDisable
  }

  increaseAge() {
    this.person.age++;
  }

  onBoxScroll(event: Event) {
    const element = event.target as HTMLDivElement;
    console.log(element.scrollTop);
  }

  onInputKeyUp(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
