import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__left">
                <img src={Logo} alt="Ethio Tour logo " />
            </div>
            <div className="navbar__right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;