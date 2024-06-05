import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LocationMap from '../LocationMap/LocationMap'
import './ExperienceCard.css'

const ExperienceCard = ({ _id: experienceId, country, hotel, imageUrl, imageLinks, places, location }) => {

    return (

        <article className='ExperienceCard mb-3'>
            <Card className="fixed-card-size">

                <Card.Body>
                    <h1 className="h1-primary">{country}</h1>
                    <h4>{hotel}</h4>
                    <h6>{places}</h6>

                    <Carousel className="carousel-container">
                        <Carousel.Item>

                            <img src={imageUrl} alt="Primary Image" className="experience-card-image" />

                        </Carousel.Item>

                        {imageLinks.map((link, index) => (

                            <Carousel.Item key={index}>

                                <img src={link} alt={`Additional Image ${index}`} className="experience-card-image" />

                            </Carousel.Item>

                        ))}

                    </Carousel>

                    <div className="map-container">

                        <LocationMap address={{ latitude: location.coordinates[1], longitude: location.coordinates[0] }} />

                    </div>
                    <div className="d-grid">

                        <Link to={`/experiences/edit/${experienceId}`} className="btn-primary">Edit experience</Link>

                    </div>

                </Card.Body>

            </Card>
        </article>

    )
}

export default ExperienceCard
