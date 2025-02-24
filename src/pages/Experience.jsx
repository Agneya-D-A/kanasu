import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Banner from "../components/Banner";
import './Experience.css';

export default function Experience(){
    return (
        <div className="Experience">
            <div className="bannerDiv">
                <NavLink to="student" style={({isActive })=> ({
                    width: isActive? "115%" : "95%",
                    height: isActive? "115%" : "95%"
                })}><Banner url="src/assets/studex.png"/></NavLink>
                <NavLink to="volunteer" style={({isActive })=> ({
                    width: isActive? "115%" : "95%",
                    height: isActive? "115%" : "95%"
                })}><Banner url="src/assets/volex.png"/></NavLink>
            </div>
            <div className="experiences-box">
                <Outlet/>
            </div>
        </div>
    );
}