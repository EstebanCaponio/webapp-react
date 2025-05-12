import { NavLink } from "react-router-dom";

export default function FilmCard({ data }) {

    const { id, title, abstract, image } = data;
    console.log(data)

    return (
        <>
            <div className="card bg-danger" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{abstract}</p>
                    {/* <a href="#" className="btn btn-dark">Details</a> */}
                    <NavLink to='/films:id' className="btn btn-dark bg-dark">Details</NavLink>
                </div>
            </div>
        </>
    )
};