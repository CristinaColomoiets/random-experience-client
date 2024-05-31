import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LocationMap from '../LocationMap/LocationMap'

const ExperienceCard = ({ _id: experienceId, country, hotel, imageUrl, places, location }) => {
    return (
        <article className='ExperienceCard mb-3'>
            <Card>
                <Card.Body>
                    <Card.Title style={{ color: 'red' }}>Experience: {experienceId}</Card.Title>
                    <hr />
                    <hr />
                    <h2>{country}</h2>
                    <h4>{hotel}</h4>
                    <h6>{places}</h6>
                    {imageUrl && <Image src={imageUrl} />}
                    <LocationMap address={{ latitude: location.coordinates[1], longitude: location.coordinates[0] }} />
                    <div className="d-grid">
                        <Link to={`/experiences/edit/${experienceId}`} className="btn btn-dark btn-sm">Edit ADMIN</Link>
                    </div>
                </Card.Body>
            </Card>
        </article>
    )
}

export default ExperienceCard
