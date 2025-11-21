


import Link from "next/link";
import GoButton from "../components/gotoback";

export default  function Home() {
 

  return (
     <div>
      <h1 className="bg-red-300"> Home Page</h1>
      <div className="flex gap-3">
      <GoButton para="Go to about" page="about"/>
      <GoButton para="Go to blog" page="blog"/>
      <Link href={'blog/1'} >Go to blog 1</Link>
      <Link href={'/blog/2'} >Go to blog 2</Link>
      <Link href={'/blog/3'} replace>Go to blog 3</Link>
      </div>
     </div>
  );
}
