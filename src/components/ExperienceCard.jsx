import React from "react";
import './ExperienceCard.css'
export default function ExperienceCard({props}){
    return (
        <div className="ExperienceCard" style={{alignSelf: props.side=='left'? "flex-start": 'flex-end'}}>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <p>{props.experience}</p>
        </div>
    )
}