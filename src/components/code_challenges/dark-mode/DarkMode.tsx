import './DarkMode.css'
import { FC } from 'react'
import { ClickSwitch } from './ClickSwitch'

export const DarkMode : FC = () => {

    return (
        <div className='darkmode-color-container'>
            <h3 className='darkmode-header'>A component that allows you to go from light and dark mode</h3>
            <ClickSwitch/>
        </div>
    );
}
