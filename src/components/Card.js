export default function Card(props) {
    return (
    
        <div className="Card-div">
            <img className="Card-img" src={props.img} alt="Realtive to the activity" width="270px" height="300px"></img>
            <div className="Card-text-div">
                <img className= "Card-star" src="\pictures\star.jpg"  width="30px" height="30px" alt="red star"></img>
                <p className="Card-rating">{props.rating}</p>
                <p className="Card-availability">({props.ratingCount})</p>
                <p className="Card-country">{props.country}</p>
            </div>
            <h2 className="Card-info">{props.title}</h2>
            <p className="Card-price"><span>from ${props.price}</span>/person</p>
        </div>

    )
}