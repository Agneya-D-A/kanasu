import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import volExArray from '../util/volunteer_experience.json';
import ExperienceCard from "../components/ExperienceCard";

export default function VolunteerExperience(){
    // let volExArray = JSON.parse(fs.readFileSync('/src/util/volunteer_experience.json'));
    let componentArray = volExArray.map((card)=><ExperienceCard key={`${card.name + card.age}`} props={{...card}} />);
    // console.log(volExArray);
    return (
        <div style={{display: "flex", flexDirection: 'column-reverse', border: "3px solid blue"}}>
            {componentArray}
        </div>
    )
}