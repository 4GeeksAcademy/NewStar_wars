import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehicleProfile = () => {
    const {store,actions} = useContext(Context)
    let params = useParams()
    let id = parseInt(params.id)
    let item = store.vehicles[id]
    return(
        <div className="profile">
            <div className="profile-top">
                <img className="profile-image" src={`https://starwars-visualguide.com/assets/img/vehicles/${id + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="profile-bottom">
                <p>Model: {item.model}</p>
                <p>Manufacturer: {item.manufacturer}</p>
                <p>Cost: {item.cost}</p>
                <p>Crew: {item.crew}</p>
                <p>Passengers: {item.passengers}</p>
                <p>Vehicle Class: {item.vehicle_class}</p>
            </div>
        </div>
    )
}

export default VehicleProfile