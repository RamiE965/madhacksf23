import { useState } from 'react'
import Account from "../components/Account"
import colored from '../images/colored-sc.png'
import white from '../images/white-sc.png'


const Navbar = ({ minimal }) => {

    const [showAcc, setShowAcc] = useState(false)

    const handleClick = () => {
        setShowAcc(true)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colored : white}/>
            </div>

            <div className='button-container'>
               {!minimal && <button className="nav-button" onClick={handleClick}>
                    Account
                </button> }
                
            </div>
        
        </nav>

    )
}

export default Navbar