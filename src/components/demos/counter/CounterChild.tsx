import { useState, ChangeEvent } from 'react'
import './CounterChild.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';

// Q: why need key prop to update child state...

interface IProps {
    initialCount: number
    incrementStep?: number
    decrementStep?: number
    double?: number
}

const CounterChild = ({ 
    initialCount = 0,
    incrementStep = 1,
    decrementStep = 1,
    double = 2
}:IProps) => {
    const [ count, setCount ] = useState<number>( initialCount )
    const [decrease, setDecrease] = useState<number>(decrementStep)
    const [increase, setIncrease] = useState<number>(incrementStep)
    const [isNotNumber, setIsNotNumber] = useState<boolean>(false)

    const incHandler = (event:ChangeEvent<HTMLInputElement>) => {
        let inputVal = parseInt(event.target.value)
        isNaN( inputVal )
            ? setIsNotNumber( state => !state  )
            : setIncrease( (state) => state = inputVal )
    }
    const decHandler = (event:ChangeEvent<HTMLInputElement>) => {
        let inputVal = parseInt(event.target.value)
        isNaN( inputVal )
            ? setIsNotNumber( (state) => !state  )
            : setDecrease( (state) => state = inputVal )
    }

    return ( 
        <div className='counterchild-container'>
            <p>Count: { count }</p>
                <div className="counterchild-btn-item">
                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        variant="standard"
                        onChange={ incHandler } 
                        /> 
                    <Button 
                        variant='outlined' 
                        onClick={ ()=> setCount( prev => prev + increase ) }
                    >add { increase }</Button>
                </div>

            <div className="counterchild-btn-item">
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard"
                    onChange={ decHandler } 
                /> 
                <Button 
                    variant='outlined' 
                    onClick={ ()=> setCount( prev => prev - decrease ) }
                >sub { decrease }</Button>
            </div>

            <div className="counterchild-btn-item">
                <Button variant='outlined' onClick={ ()=> setCount( prev => prev * double ) }
                > x { double }</Button>
            </div>

            <div className="counterchild-btn-item">
                { isNotNumber && <p> Must Enter A Number Value </p> } 
            </div>
            <div className="counterchild-btn-item">
                <Button 
                    className="counterchild-btn-item-reset"
                    variant='outlined' 
                    onClick={ () => setCount( (prev) => prev = initialCount ) } 
                >reset count </Button>
            </div>

        </div>
    )
}

export default CounterChild