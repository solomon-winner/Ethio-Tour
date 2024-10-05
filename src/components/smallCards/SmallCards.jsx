import "./SmallCards.css";
import Hammer from "../../assets/images/hammer.PNG";
import Gifata from "../../assets/images/Gifata.PNG";
import Girl from "../../assets/images/girl.PNG";

const SmallCards = () => {
    const SmallCardsData = [
        {
            "image": Hammer,
            "title": "Originality"
        },
        {
            "image": Gifata,
            "title": "Culture"
        },
        {
            "image": Girl,
            "title": "Hospitality"
        }
    ];
    return(
        <div className="Smallcards-wrapper">
        { SmallCardsData.map((card, index) => (
        <div className="small_cards" key = {index} style={{ backgroundImage: `url(${card.image})` }}>
            <div className="Smallcard_desc">
                <p className="Smallcard_title">{card.title}</p>
            </div>        
        </div>        
        ))
    
        }
    
    </div>       
    );
}

export default SmallCards;