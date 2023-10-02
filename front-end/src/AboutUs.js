import React, { useEffect, useState } from 'react';

const AboutMe = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log("fetching about data")
        // Fetch the about me data from the backend
        fetch('http://localhost:5002/about-us')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // error handling..
    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className="AboutUs">
            {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src="/photo.jpg" alt="Jason Zhang" style={{ width: '300px', height: 'auto', margin: "20px 0" }} />
        </div>
    );
};

export default AboutMe;