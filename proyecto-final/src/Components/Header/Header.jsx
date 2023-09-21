import './Header.css';

const Header = () => {
    return(
        <>
            <div className='fondoheader'>
                    <div className='container-header'>
                        <div className='navbar'>
                                <span><a href="#">Home</a></span>
                                <a href="#">Projects</a>
                                <a href="#">Services</a>
                                <a href="#">Team</a>
                                <a href="#">Contact</a>
                        </div>
                    
                    <div className='presentacion'>
                        <h3>Cosy and Clean</h3>
                        <h1>SIMPLY</h1>
                        <h1>MODERN</h1>
                    </div>
                    </div>
            </div>
        </>
    )
}

export { Header }