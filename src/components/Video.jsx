
import moment from 'moment';
import 'moment/locale/ko';
export default function Video({data}) {
    
    const {title, channelTitle, description, thumbnails, publishedAt} = data;
    return (
        <div>
            <div>
                <img src={thumbnails.medium.url} alt="thumb" />
            </div>
            <dl>
                <dt>{title}</dt>
                <dd>{channelTitle}</dd>
                <dd>조회수 274만회 ∙ {moment(publishedAt).fromNow()}</dd>
            </dl>

        </div>
    )
}