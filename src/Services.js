import React from "react";
import { FaLaptop} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"
import { FaUserGraduate } from "react-icons/fa";
const Services = () => {
    return(
        <>
        <div className="global-container">
            <h1 style={{textAlign:'center'}}>What I do best</h1>
        <div className="service-content-container">

            <div className="service-content">
                <div className="bg-icon">
                <FaLaptop  className="icon"/>
                </div>
                <h3>Web developement</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
            </div>

            <div className="service-content">
                <div className="bg-icon">
                <FaMobileAlt className="icon" />
                </div>
                <h3>Mobile App</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
            </div>

            <div className="service-content">
                <div className="bg-icon">
                <FaSearch  className="icon"/>
                </div>
                <h3>SEO</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
            </div>

            <div className="service-content">
                <div className="bg-icon">
                <FaUserGraduate  className="icon"/>
                </div>
                <h3>Web developement</h3>
                <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
            </div>

        </div>
        </div>
        </>
    )
}
export default Services;