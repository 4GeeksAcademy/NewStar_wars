import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharacterProfile = () => {
    const {store,actions} = useContext(Context)
    let params = useParams()
    let id = parseInt(params.id)
    let item = store.characters[id]
    return(
        <div className="profile">
            <div className="profile-top">
                <img className="profile-image" src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}/>
                <div>
                    <h3>{item.name}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="profile-bottom">
                <p>Height: {item.height}</p>
                <p>Mass: {item.mass}</p>
                <p>Hair Color: {item.hair_color}</p>
                <p>Skin Color: {item.skin_color}</p>
                <p>Birth Year: {item.birth_year}</p>
                <p>Gender: {item.gender}</p>
            </div>
        </div>
    )
}

export default CharacterProfile