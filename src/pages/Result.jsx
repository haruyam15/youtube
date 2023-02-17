import { Link, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Video from "../components/Video";
import Channel from "../components/Channel";

export default function Result() {
    const {searchKeywordParam} = useParams();
    const REDIRECT_SERVER_HOST = "https://lustrous-muffin-d99aaa.netlify.app"; 

    const {isLoading, error, data} = useQuery(['search', searchKeywordParam], async ()=>{

        const url = new URL("youtube/v3/search", REDIRECT_SERVER_HOST);
        const params = {
            part : 'snippet',
            maxResults : '25',
            q : searchKeywordParam
        }
        url.search = new URLSearchParams(params).toString();

        return fetch(url).then((res) => res.json());
    },{
        staleTime: 1000 * 60 * 60 * 24,
    })

    if(isLoading){
        return <div></div>
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
                        <div className="md:col-span-3 lg:col-span-5 min-h-[70px] border-y border-gray-200 py-3">
                            <Channel channelId={item.id.channelId} key={item.id.channelId} />
                        </div>
                    )
            })}
        </div>
    )
}