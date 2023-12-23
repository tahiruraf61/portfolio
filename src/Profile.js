import { FaUserTie } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Profile = () => {
    return(
        <div className="profile">

                <div>
                <img
                    src={require("./assets/images/Profile-pic.png")}
                    alt='profile'
                    className="profile-img"
                />
                </div>

                <div className="hero-item">
                <h3>Tahiru Rafiu</h3>
                <h5>I'm a front-end developer</h5>
                <FaFacebook className="icon"/> <FaXTwitter className="icon"/> <FaWhatsapp  className="icon"/>
                </div>

                <div className="hero-item">
                <h3><FaUserTie className="icon" /> 21st December, 2023</h3>
                <h5><FaLocationDot className="icon"/> Tamale-Ghana</h5>
                </div>

                <div className="hero-item">
                <h3><FaUserTie className="icon" /> 21st December, 2023</h3>
                <h5><FaLocationDot className="icon"/> Tamale-Ghana</h5>
                </div>
            </div>
    )
}
export default Profile;