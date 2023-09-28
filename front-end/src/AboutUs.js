import { Link } from 'react-router-dom'
import './AboutUs.css'
import photo from './photo.jpg'
import React from 'react' 

const AboutUs = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Hello, my name is Jason Zhang, and I am a senior at NYU CAS majoring in Economics and Computer Science. I was born in Wenzhou, China, 
        and moved to Great Neck, New York, when I was ten years old. I have a strong interest in sports, particularly basketball and football 
        because I find these sports to be a source of immense excitement and camaraderie. My favorite NBA team is the Brooklyn Nets, and my 
        favorite NFL team is the Buffalo Bills. In addition to sports, I enjoy playing League of Legends, watching movies, and traveling.
      </p>
      <img src ={photo} alt = "Description" className = "image"/>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
