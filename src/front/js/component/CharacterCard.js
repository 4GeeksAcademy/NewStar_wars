import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const CharacterCard = (props) => {
    const {store, actions} = useContext(Context)
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{ props.character.name }</h5>
                <p class="card-text">Height: { props.character.height }</p>
                <p class="card-text">Mass: { props.character.mass }</p>
                <p class="card-text">Hair Color: { props.character.hair_color }</p>
                <Link to={"/characterprofile/" + props.id}>
                    <span class="btn btn-primary">View More</span>
                </Link>
                <button className="btn btn-warning" onClick = {()=> actions.addFavorite(props.character.name)}><i class="fa-solid fa-bookmark"></i></button>
                
            </div>
        </div>
    )
}
export default CharacterCard 