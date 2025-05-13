import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import StarRating from "../components/starRating";

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
            <div className="container">
                <div className="film-header-card">
                    <header>
                        <h1>{film.title}</h1>
                        <h2>{film.director}</h2>
                        <p>{film.abstract}</p>
                    </header>
                </div>

                <hr className="divider" />

                {film && film.reviews ? (
                    film.reviews.map(comm => (
                        <div key={comm.id} className="review-card">
                            <h2>{comm.name}</h2>
                            <h4>
                                Voto: {comm.vote}
                                <StarRating vote={film.vote_review} />
                            </h4>
                            <p>{comm.text}</p>
                        </div>
                    ))
                ) : (
                    <div className="alert alert-danger text-center no-reviews" role="alert">
                        NESSUNA RECENSIONE
                    </div>
                )}
            </div>
        </>
    )
};