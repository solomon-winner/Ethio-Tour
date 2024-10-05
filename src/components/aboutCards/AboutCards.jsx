import "./AboutCards.css";
import GirlSefed from "../../assets/images/girl_sefed.PNG";
import { Link } from "react-router-dom";

const AboutCards = () => {
    return (
        <div className="about-cards-wrapper">
            <div className="aboutCard">
                <div className="aboutCard_desc">
                    <p className="aboutCard_title">About Us</p>
                    <p className="aboutCard_text">We specialize in providing unforgettable 
                experiences in Ethiopia, from breathtaking 
                landscapes to rich cultural heritage</p>

                <Link to = "/" className="button">Back to Home</Link>
                </div>   
                <img className = "image" src= {GirlSefed} alt="simien mountain image" />
                       
            </div>
 </div>
    )
}

export default AboutCards;