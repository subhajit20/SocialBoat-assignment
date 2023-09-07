import React from "react";

const SearchBar = ({
    _onChange
}) =>{
    return <input onChange={_onChange} className="input input-warning p-1 max-w-[20rem]" placeholder="Search Video" />
}

export default SearchBar