import { NavLink, Link } from "react-router-dom";

export default function FilmCard({ data }) {

    const { id, title, abstract, image } = data;

    return (
        <>
            {/* <div className="card bg-danger" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                    <NavLink to={`/films/${id}`} className="btn btn-dark bg-black" data={data}>
                        Details
                    </NavLink>
                </div>
            </div> */}


            <img src={image} alt="..." className='film-image' />
            <p className="abstract-p">{abstract}</p>
            <Link to={`/films/${id}`} data={data} className="link-details">Details</Link>


        </>
    )
};