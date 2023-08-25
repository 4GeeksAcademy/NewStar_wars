import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h3>CHARACTERS</h3>
			<div className="card-container">
				{store.characters.map((item, index) => {
					return(
						<CharacterCard key={index} character={item} id={index}/> 
					)

				}
				)}
			</div>
		</div>
	);
};
