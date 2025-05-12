import { useEffect, useState } from "react"
import FilmCard from "../components/FilmCard";
import axios from "axios";

export default function FilmsPage() {

    const [films, setFilms] = useState([]);

    function getFilms() {
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => setFilms(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() => { getFilms() }, []);

    return (
        <>
            <div className="bg-black">
                <h1 className="text-light">films</h1>
                <div className="row">
                    {films ? films.map(film => (
                        <div className="col-12 col-md-4 mb-5" key={film.id}>
                            <FilmCard data={film} />
                        </div>
                    )) :
                        <div className="alert alert-danger text-center" role="alert">
                            NESSUN FILM TROVATO
                        </div>
                    }
                </div>
            </div>
        </>
    )
};