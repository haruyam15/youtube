import { useQuery } from '@tanstack/react-query';
import * as common from '../CommonFunction';

export default function Channel({channelId}) {

    const REDIRECT_SERVER_HOST = "https://lustrous-muffin-d99aaa.netlify.app"; 

    const {isLoading, error, data} = useQuery(['channel', channelId], async ()=>{
        const url = new URL("youtube/v3/channels", REDIRECT_SERVER_HOST);
        const params = {
            part : 'snippet, statistics',
            id : channelId
        }
        url.search = new URLSearchParams(params).toString();

        return fetch(url).then((res) => res.json());
    },{
        staleTime: 1000 * 60 * 60 * 24,
    })


    if(isLoading){
        return <p>Loading...</p>
    }

    const {title, thumbnails} = data.items[0].snippet;
    const {subscriberCount} = data.items[0].statistics;


    return(
        <div className="flex px-3 md:px-0">
            <div className="flex-none w-[40px] h-[40px] mr-3 rounded-full overflow-hidden"><img className="w-full" src={thumbnails.high.url}  alt="" /></div>
            <dl className="flex flex-col">
                <dt className="font-bold">{title}</dt>
                <dd className="text-[#606060] text-sm">구독자수 {common.compactNumberFormatter.format(subscriberCount)}명</dd>
            </dl>
        </div>
    )
}