import React from 'react';
import './style.modules.css';

interface IPerson {
  name: string;
  lastName: string;
  age: number;
  direction?: {
    adresss: string;
    number: number;
  };
}

export class Person implements IPerson {
  name: string;
  lastName: string;
  age: number;
  direction?: {
    adresss: string;
    number: number;
  };

  constructor(person: IPerson) {
    this.name = person.name;
    this.lastName = person.lastName;
    this.age = person.age;
  }

  showPerson(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person({ name: 'Miguel', lastName: 'Depiante', age: 26 });

export default () => <p className="card">{person.showPerson()}</p>;
