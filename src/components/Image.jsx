export default function Image({width = "100%", height = "auto", image, title, id, __imageIndex}) {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "16px"}}>
            <img src={image} alt={title} width={width} height={height} id={id} style={{textAlign: "center"}}/>
            <i>Рисунок {__imageIndex} - {title}</i>
        </div>
    );
}