import './Login.css'
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Login = () => {

    return(
        <div className="login-wrapper">
            <h2>Welcome</h2>
            <p>Login by entering the required information</p>
            <div className="login-container">
                <div className="login-item">
                    <TextField
                        label="username"
                        type="text"
                        variant='standard'
                        required
                    />
                </div>
                <div className="login-item">
                    <TextField
                        label="password"
                        type="text"
                        variant='standard'
                        required
                    />
                </div>
                <div className="login-item-btn">
                    <button className='login-item-btn'>Login</button>
                </div>
                <div className="login-item-chkbox">
                    <Checkbox/> Remember Me?
                </div>
                <div className="login-item-signup">Not a Member?<a href="#blank">Sign Up</a></div>
            </div>

        </div>
    )
}

export default Login