import { useState } from "react"
import FilmCard from "../components/FilmCard";
import axios from "axios";

export default function FilmsPage() {

    const [films, setFilms] = useState([]);

    function getFilms() {
        axios.get('http://127.0.0.1:3000/movies')
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    getFilms()

    return (
        <>
            <h1>films</h1>
            <div className="row">
                {films.lenght ? films.map(film => {
                    <div className="col-12 col-md-4">
                        <FilmCard />
                    </div>
                }) :
                    <div className="alert alert-danger text-center" role="alert">
                        NESSUN FILM TROVATO
                    </div>
                }
            </div>
        </>
    )
};