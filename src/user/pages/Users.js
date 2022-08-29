import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
        { id: 'u1', name: 'Germaine', image: '/images/germaine.jpg', places: 0 },
        { id: 'u2', name: 'Gift Ishimwe', image: '/images/gift.jpg', places: 4 }
    ]
    return (
        <div className='users-list'>
            <UserList items={USERS} />
        </div>
    );
}

export default Users;