import React from 'react';
import { IPerson } from './ListUsers';

export default ({ user }: { user: IPerson }) => (
  <div className="card" key={user.id}>
    <p>
      <u>{user.name}</u>
    </p>
    <small>🔹 {user.username}</small>
    <br />
    <small>{user.email}</small>
  </div>
);
