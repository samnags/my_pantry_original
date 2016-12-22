import React from 'react'
import { Link } from 'react-router'
import '../../public/App.css'
import { Col } from 'react-bootstrap';

const PantryCard = (props) => {
    let pantry = props.pantry
    return (
      <Col md={4}>
      <div className='card'>        
          <div className="card-block">
            <h4 className="card-title"><Link to={`/pantries/${pantry.id}`} key={pantry.id}>{pantry.location}</Link></h4>
            <p className="card-text">Some stuff</p>
          </div>

      </div>
      </Col>
    )
}

module.exports = PantryCard
