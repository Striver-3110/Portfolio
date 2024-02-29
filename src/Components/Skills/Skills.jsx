import React from 'react'
import dots from '../../images/userAsset/blob vector.png'
import cube from '../../images/stack/HTML.png'
import circle from '../../images/stack/CSS.png'
import zigzags from '../../images/stack/Javascript.svg'
import plus from '../../images/stack/React.png'
import UserImage from '../../images/stack/NodeJs.svg'
import next from '../../images/stack/Next.svg'
import tailwind from '../../images/stack/Tailwind.png'
import bootstrap from '../../images/stack/Bootstrap.svg'
import materialUI from '../../images/stack/MaterialUI.svg'
import express from '../../images/stack/Express.png'
import git from '../../images/stack/Git.svg'
import github from '../../images/stack/Github.svg'
import mongodb from '../../images/stack/MongoDB.svg'
import vercel from '../../images/stack/Vercel.svg'

export default function Skills () {
  return (
    <div className='container skills-container' id='skills'>
      {/* <div className='skill-fade-text'>Skill</div> */}

      <div className='skill-container-left'>
        <h2 className='skill-heading'>
          <span className='caps'>M</span>e and
          <br />
          MyTech Stack
        </h2>
        <div className='skill-subHeading'>
          <p>
            Hi, I'm Prajapati Jay, currently pursuing a degree in Computer
            Engineering at LD College of Engineering, in my 3rd year. I possess
            skills in problem-solving, teaching, and I'm a Full Stack Web
            Developer.
          </p>
        </div>
      </div>
      <div className='skill-container-right'>
        <img src={dots} alt='' className='blob-style' />
        <img src={cube} alt='' className='skills-logo' />
        <img src={circle} alt='' className='skills-logo' />
        <img src={zigzags} alt='' className='skills-logo' />
        <img src={plus} alt='' className='skills-logo' />
        <img src={UserImage} alt='' className='skills-logo' />
        <img src={next} alt='' className='skills-logo' />
        <img src={tailwind} alt='' className='skills-logo' />
        <img src={bootstrap} alt='' className='skills-logo' />
        <img src={materialUI} alt='' className='skills-logo' />
        <img src={express} alt='' className='skills-logo' />
        <img src={git} alt='' className='skills-logo' />
        <img src={github} alt='' className='skills-logo' />
        <img src={mongodb} alt='' className='skills-logo' />
        <img src={vercel} alt='' className='skills-logo' />
      </div>
    </div>
  )
}
