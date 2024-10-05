import Banner from "../../components/banner/Banner";
import BigCards from "../../components/bigCards/BigCards";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
return(
    <div className="home">
        <Navbar/>
        <Banner/>
        <BigCards/>
    </div>
);
}

export default Home;