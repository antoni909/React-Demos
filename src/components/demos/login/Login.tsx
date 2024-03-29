import './Login.css'
import { FC,useState } from 'react'
import { LoginForm } from './LoginForm'
import { LoginProfile } from './LoginProfile'

const Login: FC = () => {

    const [ user, setUser ] = useState<string>('')
    const [ isValid, setIsValid ] = useState<boolean>(false)
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

    return(
        <div className="login-wrapper">
            <h2>Simple Login</h2>
            <div className="login-container">
                {
                    ( isValid && isLoggedIn )
                        ? <LoginProfile 
                            username={ user.length? user : '' }
                            isLoggedIn={ isLoggedIn } 
                            setIsLoggedIn={ setIsLoggedIn }
                          />
                        : <LoginForm 
                            setUser={ setUser }
                            setIsLoggedIn={ setIsLoggedIn }
                            setIsValid={ setIsValid }
                          />
                }
            </div>
        </div>
    )
}

export default Login