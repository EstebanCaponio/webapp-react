import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import StarRating from "../components/starRating";

export default function FilmsDetailsPage() {

    const { id } = useParams();
    const [film, setFilm] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        vote: 1,
        text: ''
    });


    function getFilm() {
        axios(`http://127.0.0.1:3000/movies/${id}`)
            .then(response => setFilm(response.data))
            .catch(err => console.log(err))
    }

    useEffect(getFilm, [id]);

    const handleFormData = (e) => {
        const { name, value } = e.target;

        let currentValue = value;
        if (name === 'value') {
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [name]: currentValue,
        }));
    };

    const sendData = (e) => {
        e.preventDefault();
        // console.log(formData);
        axios.post(`http://127.0.0.1:3000/movies/${id}/reviews`, formData)
            .then(res => {
                getFilm()
                setFormData({
                    name: '',
                    vote: 1,
                    text: ''
                })
            })
            .catch(err => { console.log(err) });
    }

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
                                <StarRating vote={comm.vote} />
                            </h4>
                            <p>{comm.text}</p>
                        </div>
                    ))
                ) : (
                    <div className="alert alert-danger text-center no-reviews" role="alert">
                        NESSUNA RECENSIONE
                    </div>
                )}

                <div className="add-review-card">
                    <h2>Add review:</h2>
                    <form className="add-review-form"
                        onSubmit={sendData}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Insert your name"
                                value={formData.name}
                                onChange={handleFormData} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="vote">Vote (1-5):</label>
                            <input type="number" id="vote" name="vote" className="form-control" min={1} max={5}
                                value={formData.vote}
                                onChange={handleFormData} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Text:</label>
                            <textarea id="text" name="text" rows="3" className="form-control"
                                value={formData.text}
                                onChange={handleFormData}></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            send
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
};