import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='overlay'>
            <Navbar minimal={false}/>
            <h1 className='slogan'>
                Saving with
                <br></br>
                a
                <br></br>
                <span className='jingle'>JINGLE</span>
            </h1>
        </div>
    )
}

export default Home