import Detail from './Detail';
export default function Video({data, type}) {
    const {thumbnails, title} = data.snippet;
    const isList = type === "list";

    if(isList){
        return <li className="flex mt-3">
            <div className="flex-none w-[168px] h-[94px] overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full" src={thumbnails.high.url} alt={title} />
            </div>

            <Detail item={data} type={type}/>
            
        </li>
    }else{
        return <>
            <div className="flex items-center justify-center mb-3 md:rounded-lg aspect-video overflow-hidden relative">
                <img className="w-full" src={thumbnails.high.url} alt={title} />
                <div className="hidden group-hover:block px-2 py-1 absolute right-1 bottom-1 bg-black text-white text-xs rounded-sm">
                    마우스 클릭하여 재생하기
                </div>
            </div>

            <Detail item={data} />
        </>
    }
    
}