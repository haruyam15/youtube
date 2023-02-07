import { Link, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Video from "../components/Video";
import Channel from "../components/Channel";
import { useEffect } from "react";

export default function Result() {
    const {searchKeywordParam} = useParams();
    const {isLoading, error, data} = useQuery(['search'], async ()=>{
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchKeywordParam}&key=AIzaSyDIbyUMiFZkfW9_SL-8EkOnZkfHsqHyWSE
        `).then((res) => res.json());
    })

    if(isLoading){
        return <p>Loading...</p>
    }
    
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-7 lg:px-10 md:mt-3">
            {data.items.map((item)=>{
                if(item.id.kind === "youtube#video"){
                    return(
                        <Link className="block" key={item.id.videoId} to={`/watch/${item.id.videoId}`}><Video data={item} /></Link>
                    )
                    
                }else if(item.id.kind === "youtube#channel")
                    return (
                        <Channel channelId={item.id.channelId} key={item.id.channelId} />
                    )
            })}
        </div>
    )
}