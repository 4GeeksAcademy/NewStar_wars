import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const PlanetCard = (props) => {
    const {store, actions} = useContext(Context)
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ props.planets.name }</h5>
                <p class="card-text">Height: { props.planets.rotation_period }</p>
                <p class="card-text">Mass: { props.planets.diameter }</p>
                <p class="card-text">Climate: { props.planets.climate }</p>
                <p class="card-text">Terrain: { props.planets.terrain }</p>
                <p class="card-text">Population: { props.planets.population }</p>
                <Link to={"/planetprofile/" + props.id}>
                    <span class="btn btn-primary">View More</span>
                </Link>
                <button className="btn btn-warning" onClick = {()=> actions.addFavorite(props.planets.name)}><i class="fa-solid fa-bookmark"></i></button>
                
            </div>
        </div>
    )
}
export default PlanetCard