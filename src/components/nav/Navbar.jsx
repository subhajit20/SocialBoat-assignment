import React from "react";
import SearchBar from "../ui/inputs/SearchBar";

const Navbar = ({
    _onSearch
}) =>{
    return <div className="navbar">
                <div className="navbar-start">
                    <a className="navbar-item">SocialBoat</a>
                </div>
                <div className="navbar-end md:navbar-center">
                    <SearchBar _onChange={_onSearch} />
                </div>
                <div className="navbar-end hidden md:block">
                    <div className="avatar avatar-ring avatar-md">
                    <label class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
						<img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="avatar" />
					</label>

                    </div>
                </div>
            </div>
}

export default Navbar;