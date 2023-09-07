import React from "react";
import SearchBar from "../ui/inputs/SearchBar";

const Navbar = ({
    _onSearch
}) =>{
    return <div className="navbar">
                <div className="navbar-start">
                    <a className="navbar-item">Ripple UI</a>
                </div>
                <div className="navbar-end md:navbar-center">
                    <SearchBar _onChange={_onSearch} />
                </div>
                <div className="navbar-end hidden md:block">
                    <a className="navbar-item">Home</a>
                </div>
            </div>
}

export default Navbar;