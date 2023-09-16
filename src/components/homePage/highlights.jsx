import React from 'react'
import '../../styles/homePage/heighlights.css'
import { specialItems } from '../../scripts/specials'
function Highlights() {
  const displaySpecials=specialItems.map((item)=>{
    return(
      <div className="special-card" key={item.foodName}>
        <img src={item.img} alt="Imgage" className='card-img'/>
        <div className="row-sb special-head">
          <h4>{item.foodName}</h4>
          <span>${item.price}</span>
        </div>
        <p>{item.caption}</p>
        <span>Order a delivery</span>
      </div>
    )
  })
  return (
    <div className='highlights-div'>
      <div className="row row-sb pad-10-percent higlight-head">
        <h1>This Week Specials!</h1>
        <button className='btn br-20 highlights-btn'>Online Menu</button>
      </div>
      <div className="pad-10-percent row highlight-cards">{displaySpecials}</div>
    </div>
  )
}

export default Highlights