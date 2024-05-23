import React from 'react'
import './Intro.css'
import profileImage from '../../assets/profileImage.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Sandra</span> <br/> Fullstack Web Developer</span>
            <p className="introDescription">I am a fullstack skilled web developer with a strong passion in creating <br/> amazing and user friendy websites</p>
            <button className="hireMeBtn">Hire me</button>
        </div>
        <img src={profileImage} alt="Profile" className="profileImage"></img>
    </section>
  )
}

export default Intro