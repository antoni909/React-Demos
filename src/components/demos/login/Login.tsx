import './Login.css'
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {

    const handler = (e:any) => {
        e.preventDefault()
        const username:string = e.target.username.value
        const password:string = e.target.password.value
        console.log(username, password)
    }

    const handleRemember = () => {
        console.log('checked')
    }

    return(
        <div className="login-wrapper">
            <h2>Welcome</h2>
            <p>Login by entering the required information</p>
            <div className="login-container">
                <form onSubmit={ handler }>
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

        </div>
    )
}

export default Login