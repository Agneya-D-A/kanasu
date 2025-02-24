import React from "react";

export default function Banner({url}){
    return (
        <img src={url} width="95%" style={{borderRadius: '2em'}}/>
    );
}