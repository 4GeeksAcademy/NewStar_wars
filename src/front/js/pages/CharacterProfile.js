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
                <img/>
                <div>
                    <h3>{item.name}</h3>
                    <p>Loremmepsim</p>
                </div>
            </div>
            <div className="profile-bottom"></div>
        </div>
    )
}

export default CharacterProfile