import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left_footer">
            <Link to = "/about" className="button">Learn More</Link>
            </div>
            <div className="right_footer">
                <div className="mini_footer">
                    <p className="footer_title">Contact US</p>

                    <div className="footer_list">
                        <p className="list">ethiotour@gmail.com</p>
                        <p  className="list">+251923566778</p>
                        <p  className="list">+7786-333-334(343)</p>
                    </div>
                </div>
                <div className="mini_footer">
                    <p className="footer_title">FAQ</p>

                    <div className="footer_list">
                        <p  className="list">where is Ethiopia?</p>
                        <p  className="list">nations in ethiopia?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;