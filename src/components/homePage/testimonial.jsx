import React from 'react'
import { testimonial } from '../../scripts/testimonial'
import '../../styles/homePage/review.css'
import {FaRegStar as Star} from 'react-icons/fa6'

function Testimonials() {
  const displayTestimonial = testimonial.map((person) => {
    return (
      <div className="review-card" key={person.name}>
        <h4><Star/></h4>
        <img src={person.img} alt={person.name} className='review-img' />
        <h3>{person.name}</h3>
        <p>{person.review}</p>
      </div>
    )
  })
  return (
    <div className='row testimonial-div'>{displayTestimonial}</div>
  )
}

export default Testimonials