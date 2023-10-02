import React, { useEffect, useState } from 'react';
import './AboutUs.css'

const AboutUs = () => {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("Fetching data from /about-us");
        fetch('http://localhost:5002/about-us')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div>
        <img src={data.imageURL} alt="About Me" className="image" />
        <p>{data.description}</p>
        </div>
    );
}

export default AboutUs;