import React from 'react';

export default function Image({width, image, title, altOverride}) {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px"}}>
            <img src={image} alt={altOverride ?? title} width={width} style={{textAlign: "center"}}/>
            {title && <i>{title}</i>}
        </div>
    );
}