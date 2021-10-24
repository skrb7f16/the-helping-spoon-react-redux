import React from 'react'
import Description from './About/Description'
import PictorialRepresentation from './About/PictorialRepresentation'

function About() {
    return (
        <div
        style={{
            position: 'absolute',
            top: '90vh',
        }}
        id="about"
        >
            <h1>How We Work?</h1>
            <Description />
            <PictorialRepresentation />
        </div>
    )
}

export default About
