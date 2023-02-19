import { Link, useParams } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useLoading } from "../context/LoadingContext";

export default function Navbar() {
    const {searchKeywordParam} = useParams();
    const searchKeywordInit = searchKeywordParam ? searchKeywordParam : '';
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState(searchKeywordInit);

    useEffect(() => {
        if(searchKeywordParam){
            setSearchKeyword(searchKeywordParam)
        }
    },[searchKeywordParam]);

    const handleChange = (e)=> {
        setSearchKeyword(e.target.value);
    }
    const handleKeyDown = (e)=> {
        if(e.key === 'Enter'){
            if(!e.target.value.length == 0){
                navigate(`/result/${e.target.value}`);
                return;
            }
            navigate(`/`);
        }
    }    
    const handleClick = ()=> {
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const handleClickSearch = () => {
        if(!searchKeyword.length == 0){
            navigate(`/result/${searchKeyword}`);
            return;
        }
        navigate(`/`);
    }

    const {isLoading} = useLoading();

    return (
    <div className="fixed w-full z-50">
        {isLoading && <ProgressBar />}
        <nav className="flex justify-start item-center w-full min-h-[66px] bg-white px-5 py-5">
            <h1 className="w-20 md:w-24 lg:w-28 flex items-center" onClick={handleClick}><Link to='/'><img src="../../images/logo.png" alt="youtube 로고" /></Link></h1>
        
            <div className="flex w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <input className="flex-1 border border-[#ccc] rounded-tl-[40px] rounded-bl-[40px] px-3 py-2 text-sm outline-none" type="text" placeholder="검색" value={searchKeyword} onChange={handleChange} onKeyDown={handleKeyDown} />
                <p className="w-[64px] flex justify-center items-center px-3 ty-2 border border-l-0 border-[#ccc] rounded-tr-[40px] rounded-br-[40px] bg-[#f8f8f8] cursor-pointer" onClick={handleClickSearch}>
                    <IoSearchOutline/>
                </p>
            </div>
        </nav>
    </div>
        
    );
}
