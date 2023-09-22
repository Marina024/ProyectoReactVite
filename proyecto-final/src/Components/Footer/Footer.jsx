import './Footer.css';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter, FaChevronUp, FaPhone, FaEnvelope, FaIdCard } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        <footer className='footer'>
                <div>
                        <h4>Get in touch with us</h4>
                        <h1 className='contactus'>CONTACT US</h1>
                
                        <p>You can also follow us on:</p>
                        <a href='#'>
                            <i>< FaGooglePlusG /></i>
                        </a>
                        <a href='#'>
                            <i><FaLinkedinIn/></i>
                        </a>
                        <a href='#'>
                            <i><FaFacebookF/></i>
                        </a>
                        <a href='#'>
                            <i><FaInstagram/></i>
                        </a>
                        <a href='#'>
                            <i><FaTwitter/></i>
                        </a>
                </div>

                <div>
                        <h2>New York</h2>
                        <i className='icon'><FaPhone style={{color: "#ffffff"}}/></i><p>1-677-124-44225</p>
                        <i className='icon'><FaEnvelope style={{color: "#ffffff"}}/></i><p>office@bridge.com</p>
                        <i className='icon'><FaIdCard style={{color: "#ffffff"}}/></i><p>184 Collins St</p>
                </div>

                <div>
                        <h2>San Diego</h2>
                        <i className='icon'><FaPhone style={{color: "#ffffff"}}/></i><p>1-677-124-44225</p>
                        <i className='icon'><FaEnvelope style={{color: "#ffffff"}}/></i><p>office@bridge.com</p>
                        <i className='icon'><FaIdCard style={{color: "#ffffff"}}/></i><p>184 Collins St</p> 
                </div>

                <button className='btn-footer'>
                            <a href='#'><i>< FaChevronUp style={{color: "#ffffff"}} /></i></a>
                        </button> 
        </footer>
        </>  
    )
}

export { Footer }