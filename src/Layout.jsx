import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0px',
    paddingTop: '0px'
}

const mainBodyStyle = {
    marginTop: "5%"
}

export default function Layout(){
    return (
        <div style={{layoutStyle}}>
            <Navbar/>
            <div className="mainBody" style={mainBodyStyle}>
                <Outlet/>
            </div>
            
        </div>
    );
}