import { Link, useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Video from "../components/Video";
import Channel from "../components/Channel";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Result() {
    const {youtube} = useYoutubeApi();
    const {searchKeywordParam} = useParams();

    const {isLoading, data} = useQuery(['search', searchKeywordParam], ()=> youtube.search({keyword :searchKeywordParam}) ,{
        staleTime: 1000 * 60 * 60 * 24,
    })

    if(isLoading){
        return <div></div>
    }
    const videoData = data.filter((item) => item.id.kind === "youtube#video");

    const channelData = data.filter((item) => item.id.kind === "youtube#channel");
    
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-7 lg:px-10 md:mt-3">
            {channelData.map((item)=>{
                return (
                    <div className="md:col-span-3 lg:col-span-5 min-h-[70px] border-y border-gray-200 py-3" key={item.id.channelId}>
                        <Channel channelId={item.id.channelId} />
                    </div>
                )
            })}

            {videoData.map((item)=>{
                return (
                    <Link className="block" key={item.id.videoId} to={`/watch/${item.id.videoId}`}><Video data={item} /></Link>
                )
            })}
        </div>
    )
}