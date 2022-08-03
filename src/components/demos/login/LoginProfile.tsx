import { FC } from 'react'
import './LoginProfile.css'

interface Props{
    username:string
    isLoggedIn: boolean
    setIsLoggedIn: ( bool:boolean ) => void
}

/* TODO: add last session feature */

export const LoginProfile : FC<Props> = ({ username, isLoggedIn, setIsLoggedIn }) => {
    console.log(isLoggedIn)
    return (
        <div className='login-profile-wrapper' >
            <div className="login-profile-container">
                <p> Welcome { ` ${ username } ` }</p>
                <p>Status: { ` ${ isLoggedIn } ` } </p>
                <p> last session: { JSON.stringify( new Date() ) }</p>
                <div className='img-placeholder'>profile pic</div>
                <button
                    onClick={ () => setIsLoggedIn(false) }
                    className='login-profile-btn'
                >Logout</button>
            </div>
        </div>

    );
}
