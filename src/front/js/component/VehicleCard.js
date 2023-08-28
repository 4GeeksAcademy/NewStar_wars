import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const VehicleCard = (props) => {
    const {store, actions} = useContext(Context)
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ props.vehicles.name }</h5>
                <p class="card-text">Model: { props.vehicles.model }</p>
                <p class="card-text">Manufacturer: { props.vehicles.manufacturer }</p>
                <p class="card-text">Cost: { props.vehicles.cost_in_credits }</p>
                <p class="card-text">Crew: { props.vehicles.crew }</p>
                <p class="card-text">Passengers: { props.vehicles.passengers }</p>
                <p class="card-text">Vehicle Class: { props.vehicles.vehicle_class }</p>
                <Link to={"/vehicleprofile/" + props.id}>
                    <span class="btn btn-primary">View More</span>
                </Link>
                <button className="btn btn-warning" onClick = {()=> actions.addFavorite(props.vehicles.name)}><i class="fa-solid fa-bookmark"></i></button>
                
            </div>
        </div>
    )
}
export default VehicleCard