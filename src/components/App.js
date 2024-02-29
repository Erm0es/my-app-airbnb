import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import { arr } from "../Data"


export default function App() {

    const cards = arr.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                ratingCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />
        )

    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}