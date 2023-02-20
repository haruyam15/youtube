
import moment from 'moment';
import 'moment/locale/ko';
import * as common from '../CommonFunction';
export default function Detail({item}) {
    const {title, channelTitle, publishedAt} = item.snippet;
    let viewCount = '';

    if(item.statistics){
        viewCount = `조회수 ${common.compactNumberFormatter.format(item.statistics.viewCount)}회 ∙ `
    }

    return (
        <dl className="flex flex-col mx-3 md:mx-0">
            <dt className="line-clamp-2 text-md font-medium">{title}</dt>
            <dd className="text-[#606060] text-sm mt-2">{channelTitle}</dd>
            <dd className="text-[#606060] text-sm">{viewCount}{moment(publishedAt).fromNow()}</dd>
        </dl>
    )
}