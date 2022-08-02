import { FC } from 'react'
import './LoginProfile.css'

interface Props{
    username:string
    isLoggedIn: boolean
    setIsLoggedIn: ( bool:boolean ) => void
}

export const LoginProfile : FC<Props> = ({ username, isLoggedIn, setIsLoggedIn }) => {

    return (
        <div className='login-profile-wrapper' >
            <p> Welcome { `${ username }` }</p>
            <p>Status: logged in ?{ isLoggedIn }</p>
            <p> last session: Jan 1 2020</p>
            <div className='img-placeholder'>profile pic</div>
            <button
                onClick={ () => setIsLoggedIn(false) }
                className='login-profile-btn'
             >Logout</button>
        </div>

    );
}
