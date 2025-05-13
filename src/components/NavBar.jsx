import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        // <>
        //      <nav className="navbar navbar-expand-lg bg-danger">
        //         <div className="container-fluid">
        //             {/* <a className="navbar-brand" href="#">Booflix</a> */}
        //             <img src="booflix2.jpeg" style={{ maxWidth: '200px' }} alt="" />
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li>
        //                         <NavLink to='/' className="nav-link">Home Page</NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink to='/films' className="nav-link">Films List</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </>

        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/films'>Films List</NavLink>
                    </li>
                </ul>
            </nav>
        </>

    )
}