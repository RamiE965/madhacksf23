import Navbar from '../components/Navbar'
import { useState } from 'react'
import Account from '../components/Account'



const Home = () => {

    const [showAcc, setShowAcc] = useState(false)

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
        </div>
    )
}

export default Home