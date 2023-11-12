import { useState } from 'react'

const Account = ({ setShowAcc }) => {

    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [ error, setError ] = useState(null)

    const [signIn, setSignIn] = useState(true);
    const authToken = true
    
    const handleClick = ( ) => {
        setShowAcc(false)
    }

    const signChange = () => {
        setSignIn((prevSignIn) => !prevSignIn);
    };
    
    return (
        <div className="auth">
            <div className="x-icon" onClick={handleClick}>X</div>
            
            {authToken ? (
                <form>
                    <br></br>
                    <button className="logout">
                    logout
                    </button>
                </form>) : (
            <form>
                <h2>{signIn ? 'ACCOUNT DETAILS' : 'CREATE ACCOUNT'}</h2>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <input 
                className="secondary-button" 
                type="submit" 
                value={signIn ? 'Log in' : 'Submit'}
                />

                <button className="sign-in-up" onClick={signChange}>
                    {signIn ? 'Sign Up!' : 'Sign In!'}
                </button>


                <p>{error}</p>
            
            </form> 
            )}
            
        </div>
    )
}
export default Account