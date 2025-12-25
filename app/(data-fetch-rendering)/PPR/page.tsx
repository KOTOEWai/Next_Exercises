import { Suspense } from "react";
import Book from "./book";


export default function Page() {
return (
<>
<h1>Home Page</h1>


{/* Static content */}
<p>Welcome to our website</p>


{/* Dynamic content */}
<Suspense fallback={<p>Loading book...</p>}>
    <Book/>
</Suspense>
</>
);
}