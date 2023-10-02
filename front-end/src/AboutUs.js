import React, { useEffect, useState } from 'react'

const AboutUs = () => {
  const [aboutMeContent, setAboutMeContent] = useState('')
  const [aboutMeImage, setAboutMeImage] = useState('')

  useEffect(() => {
    fetch('http://localhost:5002/about-us')
      .then(response => response.json())
      .then(data => {
        console.log(data.image)
        setAboutMeContent(data.content)
        setAboutMeImage(data.image)
      })

      .catch(error => console.error('Error fetching "About Us" data:', error))
  }, [])

  return (
    <div>
      <h2>About Us</h2>
      <p>{aboutMeContent}</p>
      <img src={aboutMeImage} alt="Me" width="500" height="600" />
    </div>
  )
}
export default AboutUs