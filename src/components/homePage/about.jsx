import React from 'react'
import '../../styles/homePage/about.css'

function About() {
  return (
    <div className='wid-70 row row-se about-div'>
      <div className="about-txt">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed expedita cumque quo doloribus, sequi consectetur, omnis cum quam harum tempora praesentium eos porro voluptatibus quia hic iure, quis impedit obcaecati dolore? Animi molestias, aliquid quia atque similique veniam beatae id ullam neque quis cumque voluptate eaque? Tempore magni facere possimus autem et, accusamus est ex qui sint temporibus repellat obcaecati.</p>
      </div>
      <div className="row about-img-div" >
        <div className="about-img ab-1"></div>
        <div className="about-img ab-2"></div>
      </div>
    </div>
  )
}

export default About