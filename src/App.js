import React, {useState, useEffect} from 'react';
import './App.sass';
import {Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import FilmsCards from "./components/FilmsCards/FilmsCards";
import SingleCard from "./components/SinglCard/SingleCard";

function App() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filteredFilms, setFilteredFilm] = useState()

    useEffect(() => {

        async function fetchFilms() {
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setFilms(data.results);
            setLoading(false);
        }

        fetchFilms();
    }, []);

    useEffect(() => {
        setFilteredFilm(films.filter(film => {
            return film.title.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, films])


    const onHandlerChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    // console.log(films);

    return (
        <div className="App">
            <div className="nav-container"><Navbar onHandlerChange={onHandlerChange}/></div>
            {
                loading
                    ? <Loader/>
                    : (
                        <Switch>
                            <Route exact path='/' render={() => <FilmsCards data={filteredFilms}/>}/>
                            <Route exact path={`/singleCard/:episode_id`}
                                   render={() => <SingleCard data={films}/>}/>
                            <Route render={() => <h1>404: page not found</h1>}/>
                        </Switch>
                    )
            }
        </div>
    );
}

export default App;
