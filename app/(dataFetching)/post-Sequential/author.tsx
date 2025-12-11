// This is a Server Component and does not need a "use client" directive.
import React from 'react';

// Define type for User (simplified)
type User = {
    id: number;
    name: string;
};

interface AuthorProps {
    userId: number;
}

// Nested Server Component: Fetches user details based on ID
async function Author({ userId }: AuthorProps) {
    
    // 1. Fetch user data (This is the dependent/sequential fetch)
    // We can simulate a slower network request here to demonstrate the Suspense fallback
    // await new Promise(resolve => setTimeout(resolve, 2000)); 

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
        // Log the error and display a simple message instead of throwing
        console.error(`Failed to fetch author data for ID: ${userId}`);
        return <div className="text-red-500 text-sm">Author not found</div>;
    }

    const user: User = await response.json();

    // 2. Render the author's name
    return (
        <div className="text-md font-medium text-blue-600">
            {user.name}
        </div>
    );
}

export default Author;