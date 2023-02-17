import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import moment from 'moment';

export default function RelatedVideo({videoId}) {

    const handleClick = ()=> {
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const REDIRECT_SERVER_HOST = "https://lustrous-muffin-d99aaa.netlify.app"; 

    const {isLoading, error, data} = useQuery(['relatedVideo', videoId], async ()=>{
        const url = new URL("youtube/v3/search", REDIRECT_SERVER_HOST);
        const params = {
            part : 'snippet',
            relatedToVideoId : videoId,
            type : 'video',
            maxResults : '25'
        }
        url.search = new URLSearchParams(params).toString();

        return fetch(url).then((res) => res.json());
    },{
        staleTime: 1000 * 60 * 60 * 24,
    });


    if(isLoading){
        return <div></div>
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