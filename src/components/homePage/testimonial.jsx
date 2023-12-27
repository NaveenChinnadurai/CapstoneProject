import React from 'react'
import '../../styles/homePage/review.css'
import { FaRegStar as Star } from 'react-icons/fa6'

function Testimonials(props) {
  const ratings = []
  for (let i = 1; i <= props.ratings; i++) {
    ratings.push(i)
  }
  return (
    <div className="review-card" key={props.name}>
      <h3>
        {
          ratings.map((i) => {
            return (
              <span><Star /></span>
            )
          })
        }
      </h3>
      <img src={props.img} alt={props.name} className='review-img' />
      <h3>{props.name}</h3>
      <p>{props.review}</p>
    </div>
  )
}

export default Testimonials