import { useQuery } from '@tanstack/react-query';
import * as common from '../CommonFunction';

export default function Channel({channelId}) {

    const {isLoading, error, data} = useQuery(['channel'], async ()=>{
        return fetch(`../data/channel.json`).then((res) => res.json());
    })


    if(isLoading){
        return <p>Loading...</p>
    }

    const snippet = data.items[0].snippet;
    const statistics = data.items[0].statistics;


    return(
        <div className="flex px-3 md:px-0">
            <div className="flex-none w-[40px] h-[40px] mr-3 rounded-full overflow-hidden"><img className="w-full" src="https://yt3.ggpht.com/_1Z4I2qpWaCN9g3BcDd3cVA9MDHOG43lE1YNWDNkKro49haGxkjwuFK-I8faWTKM6Jle9qb4ag=s88-c-k-c0x00ffffff-no-rj"  alt="" /></div>
            <dl className="flex flex-col">
                <dt className="font-bold">{snippet.title}</dt>
                <dd className="text-[#606060] text-sm">구독자수 {common.compactNumberFormatter.format(statistics.subscriberCount)}명</dd>
            </dl>
        </div>
    )
}