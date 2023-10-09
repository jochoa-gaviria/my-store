import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.scss']
})
export class AngularBasicsComponent {

  buttonDisable = true;

  person = {
    name: "Juan",
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }

  names = ['Juan', 'David', 'Daniela', 'Erika'];
  newName = '';

  register = {
    name: '',
    email: '',
    password: ''
  };

  products: Product[] = [
    {
      id: "1",
      title: 'EL mejor juguete',
      price: 565,
      images: ['./assets/images/toy.jpg'],
      category: {
        id:"1",
        name: "all"
      },
      description: "juguete"
    },
    {
      id: "2",
      title: 'Bicicleta casi nueva',
      price: 356,
      images: ['./assets/images/bike.jpg'],
      category: {
        id:"1",
        name: "all"
      },
      description: "bicicleta"
    }
  ];

  onRegister() {
    console.log({register: this.register});
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

  addNewName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
