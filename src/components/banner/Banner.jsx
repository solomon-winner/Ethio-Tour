import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <p className="title">Explore Ethiopia</p>
                <p className="sub_title">Discover The Land of Wonders!</p>
                <Link to = "/about" className="button">Learn More</Link>
                </div>
        </div>
    );
}

export default Banner;