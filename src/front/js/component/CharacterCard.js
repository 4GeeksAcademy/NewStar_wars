import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ props.character.name }</h5>
                <p class="card-text">Height: { props.character.height }</p>
                <p class="card-text">Mass: { props.character.mass }</p>
                <p class="card-text">Hair Color: { props.character.hair_color }</p>
                <Link to={"/characterprofile/" + props.id}>
                    <span class="btn btn-primary">Go somewhere</span>
                </Link>
                
            </div>
        </div>
    )
}
export default CharacterCard 