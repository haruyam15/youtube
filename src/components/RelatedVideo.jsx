import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { useYoutubeApi } from '../context/YoutubeApiContext';
import Video from './Video';

export default function RelatedVideo({videoId}) {
    const {youtube} = useYoutubeApi();
    const handleClick = ()=> {
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const {isLoading, error, data} = useQuery(['relatedVideo', videoId], ()=> youtube.search({videoId}) ,{
        staleTime: 1000 * 60 * 60 * 24,
    });


    if(isLoading){
        return <div></div>
    }

    return(
        <>
            {data.map((item)=>{
                return (
                    <Link to={`/watch/${item.id.videoId}`} key={item.id.videoId} onClick={handleClick}><Video data={item} type="list" /></Link>
                )
            })}
        </>
    )
}