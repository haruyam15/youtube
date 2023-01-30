import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import Channel from "../components/Channel";
import Description from "../components/Description";
import RelatedVideo from "../components/RelatedVideo";

export default function Watch() {
    const {videoId} = useParams();
    const {isLoading, error, data} = useQuery(['video'], async ()=>{
        return fetch(`../data/video_${videoId}.json`).then((res) => res.json());
    })


    if(isLoading){
        return <p>Loading...</p>
    }

    const snippet = data.items[0].snippet;

    return(
        <div className="flex flex-col lg:flex-row md:p-5">
            <div className="lg:w-[70%]">
                <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${videoId}`} title={snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <div className="p-3 pb-0 md:px-0">
                    <p className="font-bold text-lg mb-3">
                        {snippet.title}
                    </p>

                    <Channel className="mb-3" channelId={snippet.channelId} />

                    <Description data={data} />
                </div>

                
            </div>

            <ul className="p-3 pt-0 md:p-0 lg:w-[30%] lg:p-0 lg:pl-5">
                <RelatedVideo videoId={videoId}/>
            </ul>

        </div>
    )
}