import React, { useState } from "react";
import searchIcon from '../../Resources/icons/icon-look.svg';

const Search= () =>{
    const [isFocused, setIsFocused] = useState(true);
    const [inputValue,setInputValue]=useState(null)
    return (
        <>
        <div className="px-6 py-3 gap-2 rounded-full bg-Grey-grey-30 flex items-center justify-between w-full max-w-full">
            <input   onChange={(e) => setInputValue(e.target.value)} onFocus={() => setIsFocused(false)}
             className="focus:outline-none placeholder: bg-Grey-grey-30 leading-[20px] placeholder:font-montserrat" type={"text"}  placeholder="Buscar"/>
           <img className={`w-5 h-5 bg-transparent ${!isFocused && inputValue ? "opacity-0" : ""} `} alt="search-icon" src={searchIcon} />

        </div>
        </>
    )
}

export default Search;