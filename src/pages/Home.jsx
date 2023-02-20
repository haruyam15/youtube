import { Link } from "react-router-dom";
import Video from "../components/Video";
import { useQuery } from '@tanstack/react-query';
import { useLoading } from "../context/LoadingContext";
import { useEffect } from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Home() {
    const {setIsLoading} = useLoading();
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data} = useQuery(['mostPopular'], ()=> youtube.videos() , {staleTime: 1000 * 60 * 60 * 24,})

    useEffect(() => {
        setIsLoading(isLoading);
        
    }, [isLoading]);

    if(isLoading){
        return <div></div>
    }

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-7 lg:px-10 md:mt-3">
            {data.map((item)=>{
                return (
                    <Link className="group block" key={item.id} to={`/watch/${item.id}`}><Video data={item} /></Link>
                )
            })}
        </div>
    )
}