import React, { useEffect, useState } from 'react';
import './style.modules.css';

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },

interface IPerson {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export class Person implements IPerson {
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(person: IPerson) {
    this.id = person.id;
    this.name = person.name;
    this.username = person.username;
    this.email = person.email;
  }
}

const useUsers = () => {
  const initialState: IPerson[] = [];
  const [users, setUsers] = useState(initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersFetch => setUsers(usersFetch));
  }, []);

  return { users };
};

export default () => {
  const { users } = useUsers();

  return (
    <div>
      {users.map(person => {
        <div className="card">{person.name}</div>;
      })}
    </div>
  );
};
