import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const StarshipCard = (props) => {
    const {store, actions} = useContext(Context)
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ props.starships.name }</h5>
                <p class="card-text">Model: { props.starships.model }</p>
                <p class="card-text">Manufacturer: { props.starships.manufacturer }</p>
                <p class="card-text">Cost: { props.starships.cost_in_credits }</p>
                <p class="card-text">Crew: { props.starships.crew }</p>
                <p class="card-text">Passengers: { props.starships.passengers }</p>
                <Link to={"/planetprofile/" + props.id}>
                    <span class="btn btn-primary">View More</span>
                </Link>
                <button className="btn btn-warning" onClick = {()=> actions.addFavorite(props.starships.name)}><i class="fa-solid fa-bookmark"></i></button>
                
            </div>
        </div>
    )
}
export default StarshipCard