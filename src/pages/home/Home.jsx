import Banner from "../../components/banner/Banner";
import BigCards from "../../components/bigCards/BigCards";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SmallCards from "../../components/smallCards/SmallCards";

const Home = () => {
return(
    <div className="home">
        <Navbar/>
        <Banner/>
        <BigCards/>
        <SmallCards/>
        <Footer/>
    </div>
);
}

export default Home;