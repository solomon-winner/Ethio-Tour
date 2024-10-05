import "./BigCards.css";
import Semien from "../../assets/images/semen.PNG";
import Fassil from "../../assets/images/fassil.PNG";
import Irrecha from "../../assets/images/Irrecha.PNG";

const Big_Cards = () => {
    const bigCardsData = [
        {
        "image": Semien,
        "title": "Breathtaking Landscapes",
        "description": "Explore the diverse landscapes of Ethiopia, from the Simien Mountains to the Danakil Depression. Trek through the rugged highlands, witness volcanic craters and salt flats, and immerse yourself in Ethiopia's breathtaking natural wonders. Whether it's hiking the dramatic cliffs of the Simien Mountains or experiencing the surreal beauty of Erta Ale's lava lake, Ethiopia offers an unparalleled adventure for nature lovers and explorers alike."
        },
        {
        "image": Fassil,
        "title": "Historical Sites",
        "description": "Delve into the ancient history of Ethiopia by visiting iconic sites such as Lalibela and Gondar. Explore the fascinating rock-hewn churches of Lalibela, a UNESCO World Heritage site, and step back in time at the royal castles of Gondar, once the center of Ethiopia’s powerful empire. Uncover the rich historical tapestry of a nation whose legacy stretches back thousands of years, from the ancient kingdom of Axum to the legendary Queen of Sheba."
        },
        {
        "image": Irrecha,
        "title": "Cultural Festivals",
        "description": "Immerse yourself in the colorful celebrations and traditions of Ethiopia, including the Timkat Festival, Meskel, and Irrecha. Witness the vibrant religious ceremonies of Timkat, marking the Epiphany, where thousands gather for a joyful reenactment of Christ's baptism. Experience the dazzling bonfires of Meskel, commemorating the discovery of the True Cross, and join the Oromo people in the Irrecha festival, celebrating gratitude and the connection to nature. These festivals offer a unique glimpse into Ethiopia's deep spiritual and cultural heritage."
        }
    ]
return (
 <div className="cards-wrapper">
    { bigCardsData.map((card, index) => (
        console.log(card),
    <div className="big_cards" key = {index}>
        <img src= {card.image} alt= {card.title} />
        <div className="card_desc">
            <p className="card_title">{card.title}</p>
            <p className="card_text">{card.description}</p>
        </div>        
    </div>        
    ))

    }

</div>
);
}

export default Big_Cards;