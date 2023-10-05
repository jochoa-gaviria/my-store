import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.scss']
})
export class AngularBasicsComponent {
  buttonDisable: boolean = true;

  person = {
    name: "Juan",
    age: 25,
    avatar: 'https://source.unsplash.com/random'
  }

  names:string[] = ['Juan', 'David', 'Daniela', 'Erika'];
  newName:string = '';

  register = {
    name: '',
    email: '',
    password: ''
  };

  products: Product[] = [
    {
      id: "1",
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      id: "2",
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: "3",
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: "4",
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: "5",
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: "6",
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
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
