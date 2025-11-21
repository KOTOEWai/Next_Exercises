import { useEffect, useState } from "react";
import { fetchData } from "./api";
export default function Datafetch() {
  const [data, setData] = useState<any[]>([]);
  
    useEffect(() => {
    fetchData().then((res)=> setData(res.message));
  }, []);
 
    return (
    <div>
        <h1>Fetched Data</h1>
       <p data-testid="result">{data || "fetching......"}</p>

    </div>
    );
}