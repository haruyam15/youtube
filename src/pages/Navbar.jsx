import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        <nav className="flex fixed justify-start item-center w-full bg-white px-5 py-5">
            <h1 className="w-20 md:w-24 lg:w-28 flex items-center"><Link to='/'><img src="../../images/logo.png" alt="youtube 로고" /></Link></h1>
           
           <div className="flex w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <input className="flex-1 border border-[#ccc] rounded-tl-[40px] rounded-bl-[40px] px-3 py-2 text-sm" type="text" placeholder="검색" />
                <p className="w-[64px] flex justify-center items-center px-3 ty-2 border border-l-0 border-[#ccc] rounded-tr-[40px] rounded-br-[40px] bg-[#f8f8f8]">
                    <IoSearchOutline/>
                </p>
           </div>
        </nav>
        
    );
}