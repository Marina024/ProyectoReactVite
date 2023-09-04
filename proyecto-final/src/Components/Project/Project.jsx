import './Project.css';
import Project1 from '../../assets/project1.jpg';
import Project2 from '../../assets/project2.jpg';
import Card1 from '../../assets/1.jpg';
import Card2 from '../../assets/2.jpg';
import Card3 from '../../assets/3.jpg';
import Card4 from '../../assets/4.jpg';
import Icono1 from '../../assets/icono1.jpg';
import Icono2 from '../../assets/icono2.jpg';
import Icono3 from '../../assets/icono3.jpg';
import Icono4 from '../../assets/icono4.jpg';
import Collage1 from '../../assets/Collage1.jpg';
import Collage2 from '../../assets/Collage2.jpg';
import Collage3 from '../../assets/Collage3.jpg';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";

const Project = () => {
    return(
        <>
        <div>
            <div className='project1'>
                <div className='izquierdo'>
                    <img src= { Project1 } alt='' width={700} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime officiis.</p>
                </div>

                <div className='derecho'>
                    <h3>Intuitive and easy</h3>
                    <h1>PROJECT1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, earum numquam? Qui, ducimus,
                        voluptates recusandae suscipit exercitationem eligendi minus voluptas ad nam atque consequuntur.</p>
                    <button className='botonreadme'>
                        <a href='#'>Read more</a>
                    </button>
                </div>
            </div>

            <div className='project2'>
                <div className='derecho'>
                    <h3>Intuitive and easy</h3>
                    <h1>PROJECT2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, earum numquam? Qui, ducimus,
                        voluptates recusandae suscipit exercitationem eligendi minus voluptas ad nam atque consequuntur.</p>
                    <button className='botonreadme'>
                        <a href='#'>Read more</a>
                    </button>
                </div>

                <div className='izquierdo'>
                    <img src= { Project2 } alt='' width={700} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime officiis.</p>
                </div>
            </div>

            <div className='cards1'>
                    <div className='btn-slider'>
                        <button className='btn-card w' href='#'><i><FaAngleLeft/></i></button>
                        <button className='btn-card' href='#'><i><FaAngleRight/></i></button>
                    </div>
                    <div><img src= {Card1}/>
                        <div className='cardtext'><h3>Colour fabrics</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Card2}/>
                    <div className='cardtext'><h3>Ambient lighting</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Card3}/>
                    <div className='cardtext'><h3>Ergonomic design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Card4}/>
                    <div className='cardtext'><h3>Contemporary design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
            </div>

            <div className='container-collage'>
                <div className='text-collage'>
                    <div className='txt'>
                    <h4>Fell the</h4>
                    <h1>REVOLUTION</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid illum rem a.</p>
                    </div>
                </div>
                <div><img src= {Collage1}/></div>
                <div><img src= {Collage2}/></div>
                <div><img src= {Collage3}/></div>
                <div><img src= {Project1}/></div>
                <div className='text-collage y'>
                    <div className='txt'>
                    <h4>Get a comfy seat</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid illum rem a.</p>
                    <br></br>
                    <button className='btn-collage' href='#'><i><FaArrowRight/></i></button>
                    </div>
                </div>
            </div>

            <div className='cards1'>
                    <div className='btn-slider'>
                        <button className='btn-card w' href='#'><i><FaAngleLeft/></i></button>
                        <button className='btn-card' href='#'><i><FaAngleRight/></i></button>
                    </div>
                    <div><img src= {Icono1}/>
                        <div className='cardtext'><h3>Colour fabrics</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Icono2}/>
                    <div className='cardtext'><h3>Ambient lighting</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Icono3}/>
                    <div className='cardtext'><h3>Ergonomic design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                    <div><img src= {Icono4}/>
                    <div className='cardtext'><h3>Contemporary design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
            </div>
        </div>
        </>
    )
}

export { Project }