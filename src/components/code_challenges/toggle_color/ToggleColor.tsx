
import { FC } from 'react'

interface Props{ }

export const DarkMode : FC<Props> = () => {

    return (
        <div className='toggle-color-wrapper'>
            <div className='current-page'>
                <button className='toggle-darkmode'>Dark Mode</button>
                <button className='toggle-lightmode'>Light Mode</button>
            </div>
        </div>
    );
}