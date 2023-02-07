import { useQuery } from '@tanstack/react-query';
import * as common from '../CommonFunction';

export default function Channel({channelId}) {

    const {isLoading, error, data} = useQuery(['channel', channelId], async ()=>{
        return fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=AIzaSyDIbyUMiFZkfW9_SL-8EkOnZkfHsqHyWSE`).then((res) => res.json());
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