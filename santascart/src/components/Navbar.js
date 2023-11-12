import { useState } from 'react'
import Account from "../components/Account"
import colored from '../images/colored-sc.png'
import white from '../images/white-sc.png'
import { FaSearch } from 'react-icons/fa'
import data from '../data/data.json'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ minimal }) => {

    const navigate = useNavigate();
    const [showAcc, setShowAcc] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(data);
    const [authToken, setAuthToken] = useState(true)

    const handleSearch = event => {
        const term = event.target.value;
        setSearchTerm(term);

        const results = data.filter(item =>
            item['Name'].toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };
    const navigateHome = () => {
        navigate('/');
    }
    const handleClick = () => {
        {authToken ? setAuthToken((prevAuthToken) => !prevAuthToken) : setShowAcc(true)}
    }

    return (
        <nav>
            <div className="logo-container">
            <button className="logo-container" onClick={navigateHome}>
            <img className="logo" src={minimal ? colored : white} />
            </button>
            </div>
            <div className='search-container'>
                <div className='search-icon-container'>
                    {minimal && <FaSearch />}
                </div>
                {minimal && <input className='search-bar'
                    type="text"
                    placeholder="Search... " 
                    value={searchTerm}
                    onChange={handleSearch}
                />}

            </div>

            <div className='button-container'>
                {!minimal && <button className="nav-button" onClick={handleClick}>
                    {authToken ? 'Logout' : 'Account'}
                </button>}
            </div>

            {showAcc && (
                <Account setShowAcc={setShowAcc}/>
            )}
        
        </nav>

    )

}

export default Navbar