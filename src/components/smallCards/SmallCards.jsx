import "./SmallCards.css";

const SmallCards = () => {
    return(
        <div className="smallCardWrapper">
            <div className="smallCard">
                <img src="" alt="simien mountain image" />
                <div className="card_desc">
                    <p className="card_title">Title</p>
                    <p className="card_text">Description</p>
                </div>        
            </div>
        </div>
    );
}

export default SmallCards;