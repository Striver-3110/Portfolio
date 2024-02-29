import React from 'react'

export default function Footer () {
  return (
    <footer>
      {/* <div className='container'> */}
      <div className='footer-wrapper'>
        {/* <div className='footer-faded-text'>Jay Prajapati</div> */}

        <div className='link-wrapper'>
          <div>
            <a href='#projects'>Projects</a>
          </div>
          <div>
            <a href='#skills'>Skills</a>
          </div>
          <div>
            <a href='#contactme'>Contact Me</a>
          </div>
        </div>

        <div className='icon-wrapper'>
          <i className='fa-brands icon fa-linkedin'></i>
          <i className='fa-brands icon fa-github'></i>
          <i className='fa-brands icon fa-twitter'></i>
          <i className='fa-brands icon fa-instagram'></i>
          <i className='fa-regular icon fa-envelope'></i>
          {/* <!-- <i className="fa-brands icon fa-facebook"></i> --> */}
        </div>
      </div>
      {/* </div> */}
    </footer>
  )
}
