import React from 'react';
export const dynamic = 'force-dynamic'; // Ensure the page is always dynamically rendered
// Define the required data types (simplified)
type User = {
    id: number;
    name: string;
};

type Todo = {
    id: number;
    title: string;
    completed: boolean;
};
// This component is an async function (Server Component)
async function ParallelFetcher() {

    // 1. Define the Promises for independent data fetching
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
    const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos');

    // 2. Use Promise.all to execute both requests concurrently
    try {
        const [usersResponse, todosResponse] = await Promise.all([
            usersPromise, 
            todosPromise
        ]);

        // 3. Check for errors in both responses
        if (!usersResponse.ok || !todosResponse.ok) {
            // Throw an error if either request failed
            const errorStatus = !usersResponse.ok ? usersResponse.status : todosResponse.status;
            throw new Error(`One or more requests failed with status: ${errorStatus}`);
        }

        // 4. Parse the JSON data concurrently
        const [users, todos] = await Promise.all([
            usersResponse.json(),
            todosResponse.json()
        ]);
        
        // --- 5. Render the combined data ---
        return (
            <div className="container p-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">✅ Parallel Data Fetching Result</h1>
                <p className="description text-gray-600 mb-8">
                    Both User and Todo lists were fetched simultaneously, minimizing total loading time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Users */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Users ({users.length})</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {users.slice(0, 5).map((user: User) => (
                                <li key={user.id} className="text-gray-700">**{user.name}**</li>
                            ))}
                            <li className="text-gray-500 italic">...and {users.length - 5} more</li>
                        </ul>
                    </div>

                    {/* Right Column: Todos */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-green-600">Todos ({todos.length})</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {todos.slice(0, 5).map((todo: Todo) => (
                                <li key={todo.id} className={`text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                                    {todo.title}
                                </li>
                            ))}
                            <li className="text-gray-500 italic">...and {todos.length - 5} more</li>
                        </ul>
                    </div>
                </div>
            </div>
        );

    } catch (error) {
        // Handle any error that occurred during the fetching process
        console.error("Parallel Fetching Error:", error);
        return <div className="error-message p-8 text-red-600">❌ Failed to load resources concurrently.</div>;
    }
}

export default ParallelFetcher;