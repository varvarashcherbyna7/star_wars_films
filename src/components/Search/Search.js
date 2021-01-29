import React from 'react';
import './Search.sass';
import {NavLink} from "react-router-dom";

function Search(props) {

    return (
        <div className="search-box">
            <input type="text"
                   className="search-txt"
                   name=""
                   placeholder="Search"
                   onChange={props.onHandlerChange}
            />
            <NavLink to="#" className="search-btn">
                <i className="fas fa-search"/>
            </NavLink>
        </div>
    )
}

export default Search;
