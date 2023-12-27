import React from 'react'
import '../../styles/homePage/heighlights.css'

function Highlights(props) {
  return (
    <div className="special-card" key={props.foodName}>
      <img src={props.img} alt="Image" className='card-img' />
      <div className="row-sb special-head">
        <h4>{props.foodName}</h4>
        <span>${props.price}</span>
      </div>
      <p>{props.caption}</p>
      <span>Order a delivery</span>
    </div>
  )
}

export default Highlights