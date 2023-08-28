import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import PlanetCard from "../component/PlanetCard";
import StarshipCard from "../component/StarshipCard";
import VehicleCard from "../component/VehicleCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 home-container" >
			<h3>CHARACTERS</h3>
			<div className="card-container">
				{store.characters.map((item, index) => {
					return(
						<CharacterCard key={index} character={item} id={index}/> 
					)
				}
				)}
			</div>
			<h3>PLANETS</h3>
			<div className="card-container">
				{store.planets.map((item, index) => {
					return(
						<PlanetCard key={index} planets={item} id={index}/> 
					)
				}
				)}
			</div>
			<h3>STARSHIPS</h3>
			<div className="card-container">
				{store.starships.map((item, index) => {
					return(
						<StarshipCard key={index} starships={item} id={index}/> 
					)
				}
				)}
			</div>
			<h3>VEHICLES</h3>
			<div className="card-container">
				{store.vehicles.map((item, index) => {
					return(
						<VehicleCard key={index} vehicles={item} id={index}/> 
					)
				}
				)}
			</div>
		</div>
	);
};
