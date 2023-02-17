import Detail from './Detail';
export default function Video({data}) {
    const {thumbnails} = data.snippet;
    return (

        <>
            <div className="flex items-center justify-center mb-3 md:rounded-lg aspect-video overflow-hidden relative">
                <img className="w-full" src={thumbnails.high.url} alt="thumb" />
                <div className="hidden group-hover:block px-2 py-1 absolute right-1 bottom-1 bg-black text-white text-xs rounded-sm">
                    마우스 클릭하여 재생하기
                </div>
            </div>

            <Detail data={data} />
        </>
    )
}