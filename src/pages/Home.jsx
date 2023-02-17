import { Link } from "react-router-dom";
import Video from "../components/Video";
import { useQuery } from '@tanstack/react-query';
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";

export default function Home() {
    const {setIsLoading} = useLoading();
    const REDIRECT_SERVER_HOST = "https://lustrous-muffin-d99aaa.netlify.app"; 
    const {isLoading, error, data} = useQuery(['mostPopular'], async ()=>{
        const url = new URL("youtube/v3/videos", REDIRECT_SERVER_HOST);
        const parameters = new URLSearchParams({
            part : 'snippet, statistics',
            chart : 'mostPopular',
            maxResults : '25',
            regionCode : 'Kr',
        });
        url.search = parameters.toString();
        return fetch(url).then((res) => res.json());
    },{
        staleTime: 1000 * 60 * 60 * 24,
    })

    useEffect(() => {
        console.log(isLoading);
        setIsLoading(isLoading);
        
    }, [isLoading]);

    if(isLoading){
        return <div></div>
    }

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-7 lg:px-10 md:mt-3">
            {data.items.map((item)=>{
                return (
                    <Link className="group block" key={item.id} to={`/watch/${item.id}`}><Video data={item} /></Link>
                )
            })}
        </div>
    )
}