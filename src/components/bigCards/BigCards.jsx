import "./BigCards.css";
import bigCardsData from "../../utils/big_cards.json";

const Big_Cards = () => {
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