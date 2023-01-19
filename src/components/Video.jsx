
import moment from 'moment';
import 'moment/locale/ko';
import * as common from '../CommonFunction';
export default function Video({data}) {
    const statistics = data.statistics;
    const {title, channelTitle, thumbnails, publishedAt} = data.snippet;

    console.log(data)

    return (

        <>
            {/* <div className="flex items-center justify-center mb-3 md:rounded-lg aspect-video overflow-hidden">
                <img className="w-full" src={thumbnails.medium.url} alt="thumb" />
            </div>
            <div className="flex px-3 md:px-0">
                <div className="flex-none w-[36px] h-[36px] mr-3 rounded-full overflow-hidden"><img className="w-full" src="" alt="" /></div>
                <dl className="flex flex-col">
                    <dt className="line-clamp-2 text-md">{title}</dt>
                    <dd className="text-[#606060] text-sm mt-2">{channelTitle}</dd>
                    <dd className="text-[#606060] text-sm">조회수 {common.compactNumberFormatter.format(statistics.viewCount)}회 ∙ {moment(publishedAt).fromNow()}</dd>
                </dl>
            </div> */}
            
            <div className="flex items-center justify-center mb-3 md:rounded-lg aspect-video overflow-hidden">
                <img className="w-full" src={thumbnails.medium.url} alt="thumb" />
            </div>
            <dl className="flex flex-col mx-3 md:mx-0">
                <dt className="line-clamp-2 text-md">{title}</dt>
                <dd className="text-[#606060] text-sm mt-2">{channelTitle}</dd>
                <dd className="text-[#606060] text-sm">조회수 {common.compactNumberFormatter.format(statistics.viewCount)}회 ∙ {moment(publishedAt).fromNow()}</dd>
            </dl>
        </>
    )
}