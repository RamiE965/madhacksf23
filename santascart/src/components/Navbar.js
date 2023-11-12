import colored from '../images/colored-sc.png'
import white from '../images/white-sc.png'

const Navbar = ({ minimal, setShow, show, setSignUp }) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colored : white}/>
            </div>

            <div className='button-container'>
            <button className="nav-button">LogIn</button>
            <button className="nav-button">Create Account</button>
            </div>
        </nav>

    )
}

export default Navbar