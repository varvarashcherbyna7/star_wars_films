import React from 'react';
import "./FilmsCards.sass";
import {NavLink} from "react-router-dom";

const FilmsCards = ({data}) => {

    let sortData = data.sort((a, b) => (a.title).localeCompare(b.title));

    return (
        <div className="films-cards">
            {sortData.map((film, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="card-title">{film.title}</div>
                        <div className="card-description">{film.opening_crawl}</div>
                        <div className="card-creator">
                            <div className="creator">{film.director}</div>
                            <div className="release-data">{film.release_date}</div>
                        </div>
                        <NavLink to={`/star_wars_films/singleCard/${film.episode_id}`}>
                            <div className="card-btn">
                                Show more
                            </div>
                        </NavLink>
                    </div>
                )
            })}

        </div>
    )
}

export default FilmsCards;
