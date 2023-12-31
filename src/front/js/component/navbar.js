import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img className="navbar-img"src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-black-and-white.png"/>
				</Link>
				<div className="ml-auto">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul class="dropdown-menu">
						{/* <li><a class="dropdown-item" href="#">Action</a></li> */}
						{store.favorites.map((item, index) => {
							return (
								<li key={index}>
									<span className="dropdown-item">{item}</span>
									<button className="btn btn-danger" onClick={() => actions.removeFavorite(index)}>DEL</button>
								</li>
							)
						})}
					</ul>
				</div>
				</div>
			</div>
		</nav>
	);
};
