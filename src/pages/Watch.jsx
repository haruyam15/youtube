import { useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query';


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
        <div>
            <iframe  src={`https://www.youtube.com/embed/${videoId}`} title={snippet.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

        </div>
    )
}