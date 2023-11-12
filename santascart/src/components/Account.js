import {useState} from 'react'

const Account = ({ setShowAcc }) => {

    const [ email, setEmail ] = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ confirmPassword, setConfirmPassword ] = useState(null)
    const [ error, setError ] = useState(null)
    
    const handleClick = ( ) => {
        setShowAcc(false)
    }
    
    return (
        <div className="auth">
            <div className="x-icon" onClick={handleClick}>X</div>
            
            
            <h2>{'CREATE ACCOUNT'}</h2>
            <form>
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

                <input className="secondary-button" type="submit" />
                <p>{error}</p>
            </form>
            
        </div>
    )
}
export default Account