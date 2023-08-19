import React from 'react'
import '../../styles/homePage/heighlights.css'
import { specialItems } from '../../scripts/specials'
function Highlights() {
  const displaySpecials=specialItems.map((item)=>{
    return(
      <div className="special-card" key={item.foodName}>
        <img src={item.img} alt="Imgage" className='card-img'/>
        <div className="special-head row-sb">
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
      <div className="higlight-head row row-sb pad-20-rem">
        <h1>This Week Specials!</h1>
        <button className='btn br-20'>Online Menu</button>
      </div>
      <div className="highlight-cards pad-20-rem row">{displaySpecials}</div>
    </div>
  )
}

export default Highlights