import { FC } from 'react'
import { mockCredentials } from './mockCredentials';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';
import './LoginForm.css'

interface Props{
    setUser: ( inp:string ) => void
    setIsLoggedIn: ( inp: boolean ) => void
    setIsValid: ( bool:boolean ) => void
}

export const LoginForm : FC<Props> = ({ setUser, setIsLoggedIn, setIsValid }) => {
    
    /* TODO: Add type for events */
    const handleSubmit = (e:any):void => {
        e.preventDefault()
        const username:string = e.target.username.value
        const password:string = e.target.password.value

        if(username !== mockCredentials.username && password !== mockCredentials.password){
            return console.log('credentials not found')
        }

        setIsLoggedIn( true )
        setIsValid( true )
        setUser( username )
    }

    const handleRemember = () => console.log('checked')

    return (
        <div className='form-wrapper'>
                <form onSubmit={ handleSubmit }>
                    <div className="login-item">
                        <TextField
                            label="username"
                            name="username"
                            type="text"
                            variant='standard'
                            required
                        />
                    </div>
                    <div className="login-item">
                        <TextField
                            label="password"
                            name="password"
                            type="text"
                            variant='standard'
                            required
                        />
                    </div>
                    <div className="login-item-btn">
                        <button type='submit' className='login-item-btn btn'>Login</button>
                    </div>
                </form>
                <div className="login-item-chkbox">
                    <Checkbox onClick={ handleRemember }/> Remember Me?
                </div>
                <div className="login-item-signup">Not a Member?<a href="#blank">Sign Up</a></div>
        </div>
    );
}