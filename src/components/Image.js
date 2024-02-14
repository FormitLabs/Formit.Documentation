import React from 'react';

export default function Image({width, image, title}){
    return(
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px" }}>
        <img src={image} alt={title} width={width} style={{ textAlign: "center" }} />
        {title && <i>{title}</i>}
    </div>
    );
}