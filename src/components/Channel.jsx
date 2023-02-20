import { useQuery } from '@tanstack/react-query';
import * as common from '../CommonFunction';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Channel({channelId}) {  
    const {youtube} = useYoutubeApi();
    const {isLoading, error, data} = useQuery(['channel', channelId], () => youtube.channel(channelId), {
        staleTime: 1000 * 60 * 60 * 24,
    })


    if(isLoading){
        return <div></div>
    }

    const {title, thumbnails} = data.snippet;
    const {subscriberCount} = data.statistics;


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