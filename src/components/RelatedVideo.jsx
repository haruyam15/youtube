import { useQuery } from '@tanstack/react-query';
import moment from 'moment';

export default function RelatedVideo({videoId}) {

    const {isLoading, error, data} = useQuery(['relatedVideo'], async ()=>{
        return fetch(`../data/relatedVideo.json`).then((res) => res.json());
    });


    if(isLoading){
        return <p>Loading...</p>
    };

    return(
        <>
            {data.items.map((item)=>{
                const {title, channelTitle, thumbnails, publishedAt} = item.snippet;
                console.log(thumbnails)
                return (
                    <li className="flex mt-3" key={item.id.videoId}>
                        <div className="flex-none w-[168px] h-[94px] overflow-hidden rounded-lg">
                            <img class="object-cover w-full h-full" src={thumbnails.high.url} alt="" />
                        </div>
                        <dl className="flex flex-col mx-3">
                            <dt className="line-clamp-2 text-sm font-medium">{title}</dt>
                            <dd className="text-[#606060] text-xs mt-2">{channelTitle}</dd>
                            <dd className="text-[#606060] text-xs">{moment(publishedAt).fromNow()}</dd>
                        </dl>
                    </li>
                )
            })}
        </>
    )
}