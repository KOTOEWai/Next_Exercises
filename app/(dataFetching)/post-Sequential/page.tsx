import React, { Suspense } from 'react';
import Author from './author'; // Import the nested Server Component
export const dynamic = 'force-dynamic'; // Ensure the page is always dynamically rendered
// Define types for Post (simplified)
type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

// Main Server Component: Fetches all posts
async function PostsSequential() {
    
    // 1. Fetch posts data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
        throw new Error('Failed to fetch posts data');
    }

    const posts: Post[] = await response.json();
    
    // We'll simulate the filtering shown in the screenshot's context 
    // to keep the list short for demonstration, e.g., only posts by user 1.
    const filteredPosts = posts.filter(post => post.userId === 1); 

    return (
        <div className="container p-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts by User 1</h1>
            
            {/* The main grid layout for the posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  p-6 rounded-lg shadow-sm">
                {filteredPosts.map((post) => (
                    <div 
                        key={post.id} 
                        className=" shadow-md rounded-lg p-6 border border-gray-100 bg-amber-300"
                    >
                        {/* Post Title */}
                        <h2 className="text-xl font-bold mb-3 text-gray-800">
                            {post.title}
                        </h2>
                        
                        {/* Post Body */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.body.substring(0, 100)}...
                        </p>

                        {/* 2. Suspense Boundary for Dependent Fetch */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-sm font-semibold text-gray-700 mb-1">Author:</span>
                            
                            {/* The Fallback shows while the Author component is fetching data */}
                            <Suspense fallback={<div className="text-sm text-gray-500 italic">Loading author details...</div>}>
                                
                                {/* 3. Nested Server Component: Fetches Author details (Slower Request) */}
                                <Author userId={post.userId} />
                                
                            </Suspense>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostsSequential;