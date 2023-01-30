
import moment from 'moment';
import 'moment/locale/ko';
import { useState } from 'react';
import * as common from '../CommonFunction';

export default function Description({data}) {
    const [readMore, setReadMore] = useState(false)
    const snippet = data.items[0].snippet;
    const statistics = data.items[0].statistics;

    const toggleReadMore = ()=>{
        setReadMore((prev)=>!prev);
    }

    //처음 로딩되면 4줄까지만 보이고 더보기(카드) 클릭시 확장
    // 다시 간략히 누르면 4줄로 

    return(
        <div onClick={toggleReadMore} className="mt-3 text-sm bg-black/[.05] p-3 rounded-xl cursor-pointer hover:bg-black/[.1]">
            <p className="font-bold">조회수 {common.compactNumberFormatter.format(statistics.viewCount)}회 ∙ {moment(snippet.publishedAt).fromNow()}</p>
            <p className={readMore ? `whitespace-pre-wrap `: `whitespace-pre-wrap line-clamp-3`}>
                {snippet.description}
            </p>
            <p className="pl-1">{readMore ? '간략히' : '더보기'}</p>
        </div>
    )
}