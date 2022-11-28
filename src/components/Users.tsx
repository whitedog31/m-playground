/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import axios from '../api/axios';

interface UserType {
  name: string;
}

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axios.get('/users', {
          signal: controller.signal,
        });
        console.log('res', response.data);
        isMounted && setUsers(response.data);
      } catch (err) {
        console.error('err', err);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>User List</h2>
      {users.length ? (
        <ul>
          {users.map((user: UserType, i: number) => {
            return <li key={i}> {user.name}</li>;
          })}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
}
