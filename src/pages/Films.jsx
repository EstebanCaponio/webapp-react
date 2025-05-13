import { useEffect, useState } from "react"
import FilmCard from "../components/FilmCard";
import axios from "axios";

export default function FilmsPage() {

    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState('');

    function getFilms() {
        axios.get('http://127.0.0.1:3000/movies', {
            params: {
                search
            }
        })
            .then(response => setFilms(response.data))
            .catch(err => console.log(err))
    };

    function searchFilms(e) {
        e.preventDefault();
        getFilms();
    }

    useEffect(() => { getFilms() }, []);

    return (
        <>
            <div>
                <div className="search-container">
                    <form onSubmit={searchFilms} role="search" className="search-form">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-input"
                            type="search"
                            placeholder="Cerca film..."
                            aria-label="Search"
                        />
                        <button type="submit" className="search-button">
                            Cerca
                        </button>
                    </form>
                </div>

                {/* lista dei post */}
                <div className="posts-grid">
                    {films ? films.map(film => (
                        <div key={film.id} className="post-container">
                            <FilmCard data={film} />
                        </div>)) :
                        <div>
                            NESSUN FILM TROVATO
                        </div>
                    }
                </div>
            </div >
        </>
    )
};