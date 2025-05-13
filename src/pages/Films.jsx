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
            <div className="bg-black">
                {/* <div className="d-flex mb-4 p-4 d-flex justify-content-between">
                    <h3 className="text-light">films</h3>
                    <form
                        onSubmit={searchFilms}
                        className="d-flex col-md-3" role="search">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-dark bg-black" type="submit">Search</button>
                    </form>
                </div > */}

                {/* <div>
                    <form
                        onSubmit={searchFilms} role="search">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="submit">Search</button>
                    </form>
                </div > */}

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

                {/* <div className="row">
                    {films ? films.map(film => (
                        <div className="col-12 col-md-4 mb-5" key={film.id}>
                            <FilmCard data={film} />
                        </div>
                    )) :
                        <div className="alert alert-danger text-center" role="alert">
                            NESSUN FILM TROVATO
                        </div>
                    }
                </div> */}


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