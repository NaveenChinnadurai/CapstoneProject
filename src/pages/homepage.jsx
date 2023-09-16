import React from 'react'

import Hero from '../components/homePage/hero'
import Highlights from '../components/homePage/highlights'
import Testimonials from '../components/homePage/testimonial'
import About from '../components/homePage/about'
function HomePage() {
    return (
        <div className='Home-page-div'>
            <Hero />
            <Highlights />
            <About />
            <Testimonials />
        </div>
    )
}

export default HomePage