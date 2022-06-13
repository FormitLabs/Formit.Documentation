import React from 'react';

export default function Image({width, image, title}){
    return(
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px" }}>
        <img src={image} width={width} style={{ textAlign: "center" }} />
        <i>{title}</i>
    </div>
    );
}