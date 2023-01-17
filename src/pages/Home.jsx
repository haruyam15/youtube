import { Link } from "react-router-dom";
import Video from "../components/Video";
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    
    const {isLoading, error, data} = useQuery(['mostPopular'], async ()=>{
        return fetch(`data/mostPopular.json`).then((res) => res.json());
    })

    if(isLoading){
        return <p>Loading...</p>
    }
    
    const items = data.items.map((item)=>item);

    return (
        <>
            {items.map((item)=>{
               return <Link to={`/watch/${item.id}`}><Video data={item.snippet} /></Link>
            })}
            
            

        </>
    )
}