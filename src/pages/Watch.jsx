import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Channel from "../components/Channel";
import Description from "../components/Description";
import RelatedVideo from "../components/RelatedVideo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Watch() {
    const navigate = useNavigate();
    const {youtube} = useYoutubeApi();
    
    useEffect(() => {
        window.scrollTo({top:0,behavior:'smooth'})
    },[])

    const {videoId} = useParams();

    const {isLoading, error, data} = useQuery(['watch', videoId], ()=> youtube.videos(videoId), {
        staleTime: 1000 * 60 * 60 * 24,
    })


    if(isLoading){
        return <div></div>
    }

    if(error){
        alert(`error : ${error}`);
        navigate(`/`);
    }

    const {title, channelId} = data.snippet;

    return(
        <div className="flex flex-col lg:flex-row md:p-5 md:pt-0">
            <div className="lg:w-[70%]">
                <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <div className="p-3 pb-0 md:px-0">
                    <p className="font-bold text-lg mb-3">
                        {title}
                    </p>

                    <Channel className="mb-3" channelId={channelId} />

                    <Description data={data} />
                </div>

                
            </div>

            <ul className="p-3 pt-0 md:p-0 lg:w-[30%] lg:p-0 lg:pl-5">
                <RelatedVideo videoId={videoId}/>
            </ul>

        </div>
    )
}