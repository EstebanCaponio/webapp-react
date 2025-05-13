import { NavLink, Link } from "react-router-dom";

export default function FilmCard({ data }) {

    const { id, title, abstract, image } = data;

    return (
        <>
            <img src={image} alt="..." className='film-image' />
            <p className="abstract-p">{abstract}</p>
            <Link to={`/films/${id}`} data={data} className="link-details">Details</Link>


        </>
    )
};