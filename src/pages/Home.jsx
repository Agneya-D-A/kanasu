import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ActivityTimeline from "../components/ActivityTimeline";
import './Home.css'

export default function Home(){
    return (
        <div className="Home">
            <h1 style={{color:'#000000'}}>Timeline Here</h1>
            <ActivityTimeline/>
        </div>
    )
}