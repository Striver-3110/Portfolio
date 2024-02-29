import React from 'react'
import HTML from '../../images/stack/HTML.png'
import CSS from '../../images/stack/CSS.png'
import Javascript from '../../images/stack/Javascript.svg'
import Express from '../../images/stack/Express.png'
import NextJsCircle from '../../images/stack/NextJsCircle.png'
import Tailwind from '../../images/stack/Tailwind.png'
import NodeJs from '../../images/stack/NodeJs.svg'
import MongoDB from '../../images/stack/MongoDB.svg'
import Redux from '../../images/stack/Redux.svg'
import Vercel from '../../images/stack/Vercel.svg'

export default function Projects () {
  return (
    <div className='project-section' id='projects'>
      <h2 className='page-header'>Projects</h2>

      <div className='project-container'>
        <div className='project-card' id='project1'>
          <div className='project-number project-number-right '>01</div>

          <div className='project-content project-content-left'>
            <div className='projects-skills-container'>
              <img src={Express} alt='' className='project-skill' />
              <img src={NextJsCircle} alt='' className='project-skill' />
              <img src={Tailwind} alt='' className='project-skill' />
              <img src={NodeJs} alt='' className='project-skill' />
              <img src={MongoDB} alt='' className='project-skill' />
            </div>

            <h2 className='project-heading'>News Lions</h2>

            <p className='project-sub-heading'>
              News website works on news api, by providing daily top news in various fields
            </p>

            <div className='btn-grp'>
              <button className='btn-pink btn-project'>Read More</button>
              <a href=''>
                <i title='GitHubLink' className='fa-brands fa-github icon'></i>
              </a>
              <a href=''>
                <i title='Live Link' className='fa-solid fa-link icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='project-card' id='project2'>
          <div className='project-number project-number-left'>02</div>

          <div className='project-content project-content-right'>
            <div className='projects-skills-container'>
              <img src={HTML} alt='' className='project-skill' />
              <img src={CSS} alt='' className='project-skill' />
              <img src={NextJsCircle} alt='' className='project-skill' />
              <img src={Tailwind} alt='' className='project-skill' />
              <img src={Vercel} alt='' className='project-skill' />
            </div>

            <h2 className='project-heading'>Breaking Copyrights</h2>

            <p className='project-sub-heading'>
              A platform to download copyrights free youtube music
            </p>

            <div className='btn-grp'>
              <button className='btn-pink btn-project'>Read More</button>
              <a href=''>
                <i title='GitHubLink' className='fa-brands fa-github icon'></i>
              </a>
              <a href=''>
                <i title='Live Link' className='fa-solid fa-link icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='project-card' id='project3'>
          <div className='project-number project-number-right'>03</div>

          <div className='project-content project-content-left'>
            <div className='projects-skills-container'>
              <img src={HTML} alt='' className='project-skill' />
              <img src={CSS} alt='' className='project-skill' />
              <img src={Javascript} alt='' className='project-skill' />
              <img src={NextJsCircle} alt='' className='project-skill' />
              <img src={Tailwind} alt='' className='project-skill' />
            </div>
            <h2 className='project-heading'>Isha Tattva</h2>

            <p className='project-sub-heading'>
              A Website for interior designer to showcase her works and samples
            </p>

            <div className='btn-grp'>
              <button className='btn-pink btn-project'>Read More</button>
              <a href=''>
                <i title='GitHubLink' className='fa-brands fa-github icon'></i>
              </a>
              <a href=''>
                <i title='Live Link' className='fa-solid fa-link icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='project-card' id='project4'>
          <div className='project-number project-number-left'>04</div>

          <div className='project-content project-content-right'>
            <div className='projects-skills-container'>
              <img src={NextJsCircle} alt='' className='project-skill' />
              <img src={Tailwind} alt='' className='project-skill' />
              <img src={Vercel} alt='' className='project-skill' />
            </div>

            <h2 className='project-heading'>Granit</h2>

            <p className='project-sub-heading'>
              A architectural website to plan your building or home (Hebrew
              Language)
            </p>

            <div className='btn-grp'>
              <button className='btn-pink btn-project'>Read More</button>
              <a href=''>
                <i title='GitHubLink' className='fa-brands fa-github icon'></i>
              </a>
              <a href=''>
                <i title='Live Link' className='fa-solid fa-link icon'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
