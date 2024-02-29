import React from 'react'
import dots from '../../images/userAsset/dots.png'
import cube from '../../images/userAsset/cube.png'
import circle from '../../images/userAsset/circle.png'
import zigzags from '../../images/userAsset/zigzags.png'
import plus from '../../images/userAsset/plus.png'
import UserImage from '../../images/userAsset/UserImage.png'

export default function Hero () {
  return (
    <div className='hero-section'>
      <div className='absolute faded-text'>Jay Prajapati</div>
      <div className='hero-section-left'>
        {/* <div className="hero-section-heading">Hi! Jay Prajapati</div> */}

        <div className='hero-section-heading hero-section-sub-heading'>
          I am a <span className='role'></span>
        </div>
        <div className='hero-section-description'>
          I'm a software developer and here is my portfolio website. Here you'll
          learn about my journey as a software developer.
        </div>

        <button className='btn-pink'>Hire Me</button>
      </div>

      <div className='hero-section-right'>
        <div className='absolute icons icon-dots'>
          <img src={dots} alt='' />
        </div>

        <div className='absolute icons icon-cube'>
          <img src={cube} alt='' />
        </div>

        <div className='absolute icons icon-circle'>
          <img src={circle} alt='' />
        </div>

        <div className='absolute icons icon-zigzag'>
          <img src={zigzags} alt='' />
        </div>

        <div className='absolute icons icon-plus'>
          <img src={plus} alt='' />
        </div>

        <div className='user-image'>
          <img src={UserImage} alt='' />
        </div>
      </div>
    </div>
  )
}
