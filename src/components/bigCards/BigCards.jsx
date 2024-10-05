import "./BigCards.css";
import Semien from "../../assets/images/semen.PNG";
import Fassil from "../../assets/images/fassil.PNG";
import Irrecha from "../../assets/images/Irrecha.PNG";

const Big_Cards = () => {
    const bigCardsData = [
        {
        "image": Semien,
        "title": "Breathtaking Landscapes",
        "description": "Explore the diverse landscapes of Ethiopia, from the Simien Mountains to the Danakil Depression."
        },
        {
        "image": Fassil,
        "title": "Historical Sites",
        "description": "Delve into the ancient history of Ethiopia by visiting iconic sites such as Lalibela and Gondar."
        },
        {
        "image": Irrecha,
        "title": "Cultural Festivals",
        "description": "Immerse yourself in the colorful celebrations and traditions of Ethiopia, including the Timkat Festival, Meskel and Irrecha."
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