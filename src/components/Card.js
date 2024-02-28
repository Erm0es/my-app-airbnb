export default function Card() {
    return (
        <div className="Card-div">
            <img className="Card-img" src="\pictures\Katie-Zaferes.jpg" alt="Katie Zaferes" width="270px" height="300px"></img>
            <div className="Card-text-div">
                <img className= "Card-star" src="\pictures\star.jpg"  width="30px" height="30px" alt="red star"></img>
                <p className="Card-rating">5.0</p>
                <p className="Card-availability">(6)</p>
                <p className="Card-country">* USA</p>
            </div>
            <h2 className="Card-info">Life lessons with Katie Zaferes</h2>
            <p className="Card-price"><span>From $136</span>/person</p>
        </div>
    )
}