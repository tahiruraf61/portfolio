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
                <h3 style={{color: '#ffffff' }}>Tahiru Rafiu</h3>
                <h5 style={{color: '#ffffff' }}>I'm a front-end developer</h5>
                <FaFacebook className="hero-icon"/> <FaXTwitter className="hero-icon"/> <FaWhatsapp  className="hero-icon"/>
                </div>

                <div className="hero-item">
                <h3 style={{color: '#ffffff' }}><FaUserTie className="hero-icon" /> 21st December, 2023</h3>
                <h5 style={{color: '#ffffff' }}><FaLocationDot className="hero-icon"/> Tamale-Ghana</h5>
                </div>

                <div className="hero-item">
                <h3 style={{color: '#ffffff' }}><FaUserTie className="hero-icon" /> 21st December, 2023</h3>
                <h5 style={{color: '#ffffff' }}><FaLocationDot className="hero-icon"/> Tamale-Ghana</h5>
                </div>
            </div>
    )
}
export default Profile;