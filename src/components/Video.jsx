import Detail from './Detail';
export default function Video({data}) {
    const {thumbnails} = data.snippet;

    return (

        <>
            <div className="flex items-center justify-center mb-3 md:rounded-lg aspect-video overflow-hidden">
                <img className="w-full" src={thumbnails.maxres.url} alt="thumb" />
            </div>

            <Detail data={data} />
        </>
    )
}