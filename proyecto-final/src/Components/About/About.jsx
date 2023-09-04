import './About.css';
import Designer from '../../assets/Designer.jpg';
import Architect from '../../assets/Architect.jpg';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const About = () => {
    return(
        <>
        <div className='about'>
            <div className='izquierdoa'>
                <div>
                    <img src= {Designer} />
                    <p>You can also follow him on:</p>
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
            
                <div className='text'>
                    <h3>Designer</h3>
                    <h1>DAVID HORN</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum nostrum animi dignissimos ratione tempora.</p>
                    <br></br>
                    <button className='boton-readmore'>READ MORE</button>
                </div>

            </div>

            <div className='derechoa'>
                <div>
                    <img src= {Architect} />
                    <p>You can also follow her on:</p>
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

                <div className='text'>
                    <h3>Architect</h3>
                    <h1>HELENA CROW</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum nostrum animi dignissimos ratione tempora.</p>
                    <br></br>
                    <button className='boton-readmore'>READ MORE</button>
                </div>
            </div>
        </div>
        </>  
    )
}

export { About }