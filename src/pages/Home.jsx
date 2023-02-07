import { Link } from "react-router-dom";
import Video from "../components/Video";
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    
    const {isLoading, error, data} = useQuery(['mostPopular'], async ()=>{
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=kr&key=AIzaSyDIbyUMiFZkfW9_SL-8EkOnZkfHsqHyWSE`).then((res) => res.json());
    })

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 md:px-7 lg:px-10 md:mt-3">
            {data.items.map((item)=>{
                return (
                    <Link className="block" key={item.id} to={`/watch/${item.id}`}><Video data={item} /></Link>
                )
            })}
        </div>
    )
}