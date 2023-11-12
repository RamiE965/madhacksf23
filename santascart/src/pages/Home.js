import Navbar from '../components/Navbar'
import { useState } from 'react'
import Account from '../components/Account'
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const navigate = useNavigate();
    const [showAcc, setShowAcc] = useState(false)


    const handleClick = () => {
        navigate('/search');
    }

    return (
        <div className='overlay'>
            <Navbar minimal={false}/>
            <h1 className='slogan'>
                Saving with
                <br></br>
                a
                <br></br>
                <span className='jingle'>JINGLE</span>

                {showAcc && (
                    <Account setShowAcc={setShowAcc}/>
                )}
            </h1>

            <h2 className='main-mission'>
                Unwrap the joy of smart savings
                <br></br> 
                Find products you desire at the perfect price
            </h2>
            
            <button className="start-button" onClick={handleClick}>
                Start Saving!
            </button>


        </div>
    )
}

export default Home