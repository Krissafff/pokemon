import React, {useContext} from 'react'
import '../css/style.css';

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
            <nav>
                <div>
                    <img alt="PokéAPI" src={logoImg} className='navbar-img'/>
                </div>
                
            </nav>
    )
}

export default Navbar;