import React from 'react'
import '../styles/homePage/home.css'
import { testimonial } from '../scripts/testimonial'
import { specialItems } from '../scripts/specials'
import Hero from '../components/homePage/hero'
import Highlights from '../components/homePage/highlights'
import Testimonials from '../components/homePage/testimonial'
import About from '../components/homePage/about'
function HomePage() {
    window.scrollTo(0,0)
    return (
        <div className='Home-page-div'>
            <Hero />
            <div className='highlights-div'>
                <div className="row row-sb  higlight-head">
                    <h1>This Week Specials!</h1>
                    <button className='btn br-20 highlights-btn'>Online Menu</button>
                </div>
                <div className="pad-10-percent row highlight-cards">
                    {
                        specialItems.map((e) => {
                            return (
                                <Highlights
                                    key={specialItems.indexOf(e)}
                                    foodName={e.foodName}
                                    img={e.img}
                                    price={e.price}
                                    caption={e.caption}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="col testimonial-wrapper">
                <h1>Testimonials</h1>
                <div className='row testimonial-div'>
                    {
                        testimonial.map((e) => {
                            return (
                                <Testimonials
                                    key={specialItems.indexOf(e)}
                                    name={e.name}
                                    img={e.img}
                                    ratings={e.rating}
                                    review={e.review}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <About />
        </div>
    )
}

export default HomePage