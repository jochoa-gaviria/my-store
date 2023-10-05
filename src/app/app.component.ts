import { Component } from '@angular/core';
import { Product } from './product.model';

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

  names:string[] = ['Juan', 'David', 'Daniela', 'Erika'];
  newName:string = '';


  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  register = {
    name: '',
    email: '',
    password: ''
  };

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

  onRegister() {
    console.log({register: this.register});
  }

}
