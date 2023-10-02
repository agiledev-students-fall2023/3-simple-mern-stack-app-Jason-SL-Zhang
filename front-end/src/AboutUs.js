import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = props => {
    const [paragraph, setParagraph] = useState('')
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('')

    const fetchAboutUs = () => {
      axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
        .then(response => {
            console.log(response)
            setParagraph(response.data.paragraph)
            setPhoto(response.data.photo)
        })
        .catch(err => {
            const errMsg = JSON.stringify(err, null, 2) 
            setError(errMsg)
        })
    }

    useEffect(() => {
        
        fetchAboutUs()
    
      }, [])

    return (
      <>
        {error && <p className = "Messages-error">{error}</p>}
        <text> {paragraph_1} <br></br> {paragraph_2}
        </text>
        <br></br>
        <img src = {photo} alt = "me" />
      </>
    )
  }

// make this component available to be imported into any other file
export default AboutUs