import React, { FormEvent, useEffect, useState } from 'react';
import './style.modules.css';
import User from './User';

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

export interface IPerson {
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

  const addNewUser = (user: IPerson) => {
    const id =
      users
        .map(u => u.id)
        .sort((a, b) => a - b)
        .reverse()[0] + 1;
    user.id = id;
    setUsers([...users, user]);
  };

  return { users, addNewUser };
};

export default () => {
  let initialState: IPerson = {
    id: 0,
    name: '',
    username: '',
    email: ''
  };
  const [newUser, setNewUser] = useState(initialState);
  const { users, addNewUser } = useUsers();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);
    addNewUser(newUser);
    setNewUser(initialState);
  };

  const handleChange = (element: FormEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [element.currentTarget.name]: element.currentTarget.value
    });
  };

  return (
    <div className="container">
      {users.map(user => (
        <User user={user} />
      ))}

      <form action="" id="form" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            required
            type="text"
            id="username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
