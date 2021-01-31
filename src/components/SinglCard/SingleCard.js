import React, {useState, useEffect} from 'react';
import "./SingleCard.sass";
import {useParams} from 'react-router-dom';
import Loader from "../Loader/Loader";
import ToggleBox from "../ToggleBox/ToggleBox";

const SingleCard = ({data}) => {
    const {episode_id} = useParams();

    //get array of planets film
    const allPlanets = data.map(res => ({id: res.episode_id, planets: res.planets,}));
    let filmPlanets = allPlanets.find(res => res.id === +episode_id);
    let planets = filmPlanets.planets;
    //console.log(planets);

    //get array of starships film
    const AllStarships = data.map(res => ({id: res.episode_id, starships: res.starships}));
    let filmStarships = AllStarships.find(res => res.id === +episode_id);
    let starships = filmStarships.starships
    // console.log(starships);

    const [planetsData, setPlanets] = useState([]);
    const [starshipsData, setStarships] = useState([]);
    const [loading, setLoading] = useState(true);

    const [allPlanetsFilmsResidents, setAllPlanetsFilmsResidents] = useState([]);
    const [allStarshipsFilms, setAllStarshipsFilms] = useState([]);

    useEffect(() => {

        const fetchPlanets = async () => {
            try {
                const response = await Promise.all(
                    planets.map(url => fetch(`${url}?format=json`).then(res => res.json()))
                );
                setPlanets(response);
                setLoading(false);
                //console.log(response);

                //fetch of films, residents in planets
                let dataFilmsResidents = [];

                for (let i = 0; i < response.length; i++) {
                    let urlsArrFilms = response[i].films;
                    let urlsArrResidents = response[i].residents;
                    let namesArr = response[i].name;
                    let resFilms = await Promise.all(
                        await urlsArrFilms.map(url => fetch(`${url}?format=json`).then(res => res.json()))
                    );
                    let resResidents = await Promise.all(
                        await urlsArrResidents.map(url => fetch(`${url}?format=json`).then(res => res.json()))
                    );
                    dataFilmsResidents.push({name: namesArr, filmsUrls: resFilms, residentsUrls: resResidents});

                }
                setAllPlanetsFilmsResidents(dataFilmsResidents);
                setLoading(false);
                //console.log(dataFilms);

            } catch (error) {
                console.log("Error", error)
            }
        };
        const fetchStarships = async () => {
            try {
                const response = await Promise.all(
                    starships.map(url => fetch(`${url}?format=json`).then(res => res.json()))
                );
                setStarships(response);
                setLoading(false);

                //console.log(response);

                //fetch of films, pilots in starships
                let dataFilms = [];

                for (let i = 0; i < response.length; i++) {
                    let urlsArrFilms = response[i].films;
                    let namesArr = response[i].name;
                    let resFilms = await Promise.all(
                        await urlsArrFilms.map(url => fetch(`${url}?format=json`).then(res => res.json()))
                    );
                    dataFilms.push({name: namesArr, filmsUrls: resFilms});
                }
                setAllStarshipsFilms(dataFilms);
                setLoading(false);
                //console.log(dataFilms);

            } catch (error) {
                console.log("Error", error)
            }
        }

        fetchPlanets();
        fetchStarships();
    }, []);

    //console.log(allPlanetsFilms.map(film => film.name));
    // console.log('starships', starshipsData);
    //console.log('planets', planetsData);

    return (
        <>
            <div className="single-card" id={episode_id}>

                <div className="card">
                    <div className="cards-planets-header"><h1>Planets:</h1></div>
                    {
                        loading
                            ? <Loader/>
                            : <div className="cards-planets">
                                {
                                    planetsData.map((planet, index) => (
                                        <div className='card-planets' key={index}>

                                            <ToggleBox
                                                title={
                                                    <div className="card-name">
                                                        <div>Name: <span>{planet.name}</span></div>
                                                        <div><i className="fas fa-arrow-circle-down"/></div>
                                                    </div>
                                                }>
                                                {/*children*/}
                                                <div className="card-description">
                                                    <div>Climate: <span>{planet.climate}</span></div>
                                                    <div>Diameter: <span>{planet.diameter}</span></div>
                                                    <div>Gravity: <span>{planet.gravity}</span></div>
                                                    <div>Orbital period: <span>{planet.orbital_period}</span></div>
                                                    <div>Population: <span>{planet.population}</span></div>
                                                    <div>Rotation period: <span>{planet.rotation_period}</span></div>
                                                    <div>Surface water: <span>{planet.surface_water}</span></div>
                                                    <div>Terrain: <span>{planet.terrain}</span></div>
                                                    {
                                                        <div>
                                                            <strong>All Films:</strong> <br/> {
                                                            allPlanetsFilmsResidents.map(films => {
                                                                    if (films.name === planet.name) {
                                                                        return films.filmsUrls.map((arr, i) => {
                                                                            return (
                                                                                loading
                                                                                    ? <span>Loading ...</span>
                                                                                    :
                                                                                    <span key={i}>{i + 1}. {arr.title}
                                                                                        <br/> </span>
                                                                            )
                                                                        })
                                                                    }
                                                                }
                                                            )
                                                        }
                                                            <strong>All Residents: </strong> <br/> {
                                                            allPlanetsFilmsResidents.map(residents => {
                                                                    if (residents.name === planet.name) {
                                                                        return residents.residentsUrls.map((arr, i) => {
                                                                            return (
                                                                                <span key={i}>{i + 1}. {arr.name} <br/> </span>
                                                                            )
                                                                        })
                                                                    }
                                                                }
                                                            )
                                                        }
                                                        </div>
                                                    }
                                                </div>
                                            </ToggleBox>

                                        </div>
                                    ))
                                }
                            </div>
                    }

                    <div className="cards-planets-header"><h1>Starships:</h1></div>
                    {
                        loading
                            ? <Loader/>
                            : <div className="cards-planets">

                                {starshipsData.map((starships, index) => (
                                    <div className='card-starships' key={index}>
                                        <ToggleBox title={
                                            <div className="card-name">
                                                <div>Name: <span>{starships.name}</span></div>
                                                <div><i className="fas fa-arrow-circle-down"/></div>
                                            </div>
                                        }>
                                            <div className="card-description">
                                                <div>Manufacturer: <span>{starships.manufacturer}</span></div>
                                                <div>Model: <span>{starships.model}</span></div>
                                                <div>MGLT: <span>{starships.MGLT}</span></div>
                                                <div>Cargo Capacity: <span>{starships.cargo_capacity}</span></div>
                                                <div>Consumables: <span>{starships.consumables}</span></div>
                                                <div>Cost in credits: <span>{starships.cost_in_credits}</span></div>
                                                <div>Crew: <span>{starships.crew}</span></div>
                                                <div>Created: <span>{starships.created.slice(0, 10)}</span></div>
                                                <div>Edited: <span>{starships.edited.slice(0, 10)}</span></div>
                                                <div>Length: <span>{starships.length}</span></div>
                                                <div>Max atmosphering speed: <span>{starships.max_atmosphering_speed}</span>
                                                </div>
                                                <div>Passengers: <span>{starships.passengers}</span></div>
                                                <div>Starship class: <span>{starships.starship_class}</span></div>

                                                {
                                                    <div>
                                                        <strong>All Films:</strong> <br/> {
                                                        allStarshipsFilms.map(films => {
                                                                if (films.name === starships.name) {
                                                                    return films.filmsUrls.map((arr, i) => {
                                                                        return (
                                                                            loading
                                                                                ? <span>Loading ...</span>
                                                                                :
                                                                                <span key={i}>{i + 1}. {arr.title} <br/> </span>
                                                                        )
                                                                    })
                                                                }
                                                            }
                                                        )
                                                    }
                                                    </div>
                                                }
                                            </div>
                                        </ToggleBox>
                                    </div>
                                ))}
                            </div>
                    }
                </div>

            </div>
        </>

    )
}

export default SingleCard;
