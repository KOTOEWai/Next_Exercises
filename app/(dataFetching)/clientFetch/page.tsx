"use client";

import React, { useState, useEffect } from 'react';
import './UserList.css'; // Assuming you create a UserList.css file for styles

type User = {
    id: number; // Changed to number as JSONPlaceholder IDs are numbers
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                setIsLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data: User[] = await response.json();
                
                setUsers(data);
            } catch (e) {
                const error = e as Error; // Type assertion for cleaner error handling
                console.error("Fetching error:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    // --- Render Logic ---
    
    if (isLoading) {
        return <div className="loading-message min-h-screen">⏳ Loading users...</div>;
    }

    if (error) {
        return <div className="error-message">❌ Error: {error}</div>;
    }

    return (
        <div className="container">
            <h1 className="header">🏢 JSONPlaceholder Users</h1>
            {/* The grid container that handles responsiveness */}
            <div className="user-grid">
                {users.map((user) => (
                    <div key={user.id} className="user-card">
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-detail">
                            **@{user.username}**
                        </p>
                        
                        <div className="separator"></div>
                        
                        <p className="user-detail">
                            📧 **Email:** <a href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                        <p className="user-detail">
                            📞 **Phone:** {user.phone.split(' ')[0]}
                        </p>
                        <p className="user-detail">
                            🌐 **Website:** <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                        </p>
                        
                        <div className="separator"></div>
                        
                        <p className="company-name">
                            Company: **{user.company.name}**
                        </p>
                        <p className="address-detail">
                            📍 {user.address.city}, {user.address.street}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;