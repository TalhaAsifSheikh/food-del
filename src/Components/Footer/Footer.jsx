import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Is Lorem Ipsum a dummy text?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privay Policy</li>
                    </ul>
                 </div>

                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+1-323-333-4524</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>    
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © - All rights reserved.</p>
    </div>
  )
}

export default Footer 