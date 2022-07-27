import { FC,ChangeEvent, useState } from 'react'
import "./Counter.css"
import CounterChild from "./CounterChild"

import { TextField } from '@mui/material';

const Counter: FC = () => {

    const [initialCount,setInitialCount] = useState<number>(0)
    const [isNotNumber, setIsNotNumber] = useState<boolean>(false)
    
    const handler = ( event:ChangeEvent<HTMLInputElement> ) => {
        let inputVal = parseInt(event.target.value)
        isNaN( inputVal )
            ? setIsNotNumber( state => !state  )
            : setInitialCount( state => state = inputVal ) 
    }

    return (
        <div className='counter-wrapper'>
            <div className='counter-container'>

                <div>
                    <h2>Basic Counter</h2>
                    <div className='counter-start-item'>
                        start value:
                        <TextField 
                            id="standard-basic" 
                            label="enter" 
                            variant="standard"
                            onChange={ handler }  
                            />
                        { isNotNumber && <p> enter a number value only </p> }
                    </div>
                    <div className='counter-card-item'>
                        <CounterChild 
                            initialCount={ initialCount } 
                            key={ initialCount }
                        />
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Counter
