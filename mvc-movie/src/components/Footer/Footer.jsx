import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="youtube icon" className='media-social'/>
        <img src={twitter_icon} alt="youtube icon" className='media-social'/>
        <img src={instagram_icon} alt="youtube icon" className='media-social'/>
        <img src={facebook_icon} alt="youtube icon" className='media-social'/>
     
      </div>
      
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Invessor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <div className="img-by-netflix">
        <h3>All the image by netflix</h3>
      </div>
    </div>
  )
}

export default Footer
