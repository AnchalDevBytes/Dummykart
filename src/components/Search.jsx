"use client"

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5"

const Search = ({handleSearch}) => {
    const [query, setQuery] = useState("")

    const searchFun = (e, query) => {
        e.preventDefault();
        handleSearch(query)
        setQuery("")
    }

    return (
        <form onSubmit={(e) => searchFun(e, query)} className="flex  relative items-center">
           <input
            type="text" 
            placeholder="search"
             className="px-2 placeholder:text-white placeholder:text-center w-40 md:w-52 bg-stone-400 py-2 rounded-full" 
             value={query}
        onChange={(e) => setQuery(e.target.value)}
             />
           <div className="absolute right-3">
           <button type="submit"><IoSearchOutline className="text-xl" /></button>
           </div>
        </form>
    );
}

export default Search;