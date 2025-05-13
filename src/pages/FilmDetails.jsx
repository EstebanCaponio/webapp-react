import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function FilmsDetailsPage() {

    const { id } = useParams();
    const [film, setFilm] = useState({});


    function getFilm() {
        axios(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => setFilm(response.data))
            .catch(err => console.log(err))
    }

    useEffect(getFilm, [id]);


    return (
        <>
            <div className="row">
                {film ?
                    <h1>{film.title}</h1> :
                    <div className="alert alert-danger text-center" role="alert">
                        NESSUN FILM TROVATO
                    </div>
                }
            </div>
        </>
    )
};