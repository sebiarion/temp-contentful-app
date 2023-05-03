import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
            labore magni ad sit odit, at mollitia et aut maxime eius, excepturi
            accusamus repellat eum tenetur aliquid eveniet necessitatibus
            similique!
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
