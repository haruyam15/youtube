import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import moment from 'moment';

export default function RelatedVideo({videoId}) {

    const handleClick = ()=> {
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const {isLoading, error, data} = useQuery(['relatedVideo', videoId], async ()=>{
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=25&key=AIzaSyDIbyUMiFZkfW9_SL-8EkOnZkfHsqHyWSE`).then((res) => res.json());
    });


    if(isLoading){
        return <p>Loading...</p>
    };

    if(error){

    }

    return(
        <>
            {data.items.map((item)=>{
                const {title, channelTitle, thumbnails, publishedAt} = item.snippet;
                return (
                    <Link to={`/watch/${item.id.videoId}`} key={item.id.videoId} onClick={handleClick}>
                        <li className="flex mt-3">
                            <div className="flex-none w-[168px] h-[94px] overflow-hidden rounded-lg">
                                <img className="object-cover w-full h-full" src={thumbnails.high.url} alt="" />
                            </div>
                            <dl className="flex flex-col mx-3">
                                <dt className="line-clamp-2 text-sm font-medium">{title}</dt>
                                <dd className="text-[#606060] text-xs mt-2">{channelTitle}</dd>
                                <dd className="text-[#606060] text-xs">{moment(publishedAt).fromNow()}</dd>
                            </dl>
                        </li>
                    </Link>
                )
            })}
        </>
    )
}