import { useState } from 'react'
import Account from "../components/Account"
import colored from '../images/colored-sc.png'
import white from '../images/white-sc.png'
import { FaSearch } from 'react-icons/fa'
import data from '../data/data.json'
import { useNavigate } from 'react-router-dom'
import ProductList from './ProductList'

const Navbar = ({ minimal }) => {

    const navigate = useNavigate();
    const [showAcc, setShowAcc] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(data);
    const [authToken, setAuthToken] = useState(true)

    const fetchData = async (term) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ input: term })
            };

            const response = await fetch('http://127.0.0.1:8000/query/', requestOptions);
            const data = await response.json();

            console.log('Success:', data);
            setSearchResults(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (event.key === 'Enter') {
            fetchData(term);
        }
    };
    
    const navigateHome = () => {
        navigate('/');
    }
    const handleClick = () => {
        {authToken ? setAuthToken((prevAuthToken) => !prevAuthToken) : setShowAcc(true)}
    }

    return (
        <div>
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
                    onKeyPress={handleSearch}
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
        {minimal && (<ProductList data={searchResults} />)}
        </div>
    )
}

export default Navbar