import { FC, useState} from 'react'

export const ClickSwitch : FC = () => {

    const [ darkMode, setDarkMode ] = useState<boolean>(false)
    const clickHandler = ():void => {
        setDarkMode( prev => !prev )
    }

    return (
        <div className={ darkMode? 'dark-mock-page':'light-mock-page'}>
            <button
                className='btn-darkmode'
                disabled={ darkMode? true:false }
                onClick={ clickHandler }
                >Dark Mode
            </button>
            <button 
                className='btn-lightmode'
                disabled={ darkMode? false:true }
                onClick={ clickHandler } 
            >Light Mode
            </button>
        </div>
    );
}