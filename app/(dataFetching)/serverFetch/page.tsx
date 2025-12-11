
import React from 'react';


type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    
}


async function UserListServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
  
    const response = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-cache' }
    );

  
    if (!response.ok) {
      
        throw new Error('Failed to fetch user data');
    }

    
    const users: User[] = await response.json();


    return (
        <div className="container">
            <h1 className="header">🌐 Server Component Users</h1>
            <p className="description">
                *This data was fetched and the component was rendered entirely on the server.*
            </p>
            <div className="user-list">
                {users.map((user) => (
                    <div key={user.id} className="user-item">
                        **{user.name}** (@{user.username})
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserListServer;