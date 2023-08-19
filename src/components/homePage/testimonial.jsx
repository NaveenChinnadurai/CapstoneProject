import React from 'react'
import { testimonial } from '../../scripts/testimonial'
import '../../styles/homePage/review.css'

function Testimonials() {
  const displayTestimonial = testimonial.map((person) => {
    return (
      <div className="review-card" key={person.name}>
        <h4>{person.rating}</h4>
        <img src={person.img} alt={person.name} className='review-img' />
        <h3>{person.name}</h3>
        <p>{person.review}</p>
      </div>
    )
  })
  return (
    <div className='testimonial-div row'>{displayTestimonial}</div>
  )
}

export default Testimonials