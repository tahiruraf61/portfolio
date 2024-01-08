import React from 'react'
import {useNavigate} from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";

const About = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate ('./contact')
    }
    return(
        <>
        <div className='about-container'>
        <div className='about-content'>
            <div className="about-section">
                <img
                src={require('./assets/images/mohamad.png')}
                alt="about-img"
                className="about-image"
                />
            </div>
            <div className='about-section'>
            <h1 style={{color: '#f8e60c'}}>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Ut elit tellus,
                luctus nec ullamcorper mattis,<br/> pulvinar dapibus leo. Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis,
                pulvinar dapibus leo.<br/>Lorem ipsum dolor sit amet, consectetur.</p>
                <h4><FaCheck /> Front-end developer</h4>
                <h4><FaCheck /> 24/7 service support</h4>
                <h4><FaCheck /> Unlimited revision</h4>
                <button onClick={handleClick} className='btn1'>Get in touch</button>
            </div>
            </div>

            <h1 style={{textAlign:'center',color: '#1a1a1a'}}>My skills</h1>
    <div>
     <h4 style={{marginBottom: '-40px' , color: '#1a1a1a'}}>Web design</h4>
    <h6 style={{textAlign:'right',marginBottom:'-15px',color: '#1a1a1a'}}>98%</h6>
    <div className="progress-container">
    <div className ="progress-bar" style={{width:'98%'}}></div>
    </div>
    </div>

    <div>
     <h4 style={{marginBottom: '-40px', color: '#1a1a1a'}}>SEO</h4>
     <h6 style={{textAlign:'right',marginBottom:'-15px' ,color: '#1a1a1a'}}>95%</h6>
    <div className="progress-container">
    <div className ="progress-bar" style={{width:'95%'}}></div>
    </div>
    </div>

    <div>
     <h4 style={{marginBottom: '-40px' , color: '#1a1a1a'}}>Marketing</h4>
     <h6 style={{textAlign:'right',marginBottom:'-15px' ,color: '#1a1a1a'}}>90%</h6>
    <div className="progress-container">
    <div className ="progress-bar" style={{width:'90%'}}></div>
    </div>
    </div>

    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',alignItems:'center',justifyContent:'center'
    , padding :'50px'}}>
        <div className='about-content2'>
            <div className='bg-icon'>
        <FaArrowUpRightDots className='icon'/>
        </div>
        <h3>Mission</h3>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
        </div>

        <div className='about-content2'>
            <div className='bg-icon'>
        <FaRegEye className='icon'/>
        </div>
        <h3>Vision</h3>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur
                 adipiscing elit.<br/> Ut elit tellus, luctus nec ullam<br/>corper mattis,
                 pulvinar dapibus leo.</p>
        </div>
    </div>

        </div>
        </>
    )
}
export default About