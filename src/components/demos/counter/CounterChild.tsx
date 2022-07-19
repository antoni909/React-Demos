import { useState, ChangeEvent } from 'react'

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
        <div>
            <h1>CounterChild Component</h1> 
            <p>Count: { count }</p>

            <input 
                id="btn-change-increment" type="text"
                onChange={ incHandler }
            />
            <button onClick={ ()=> setCount( prev => prev + increase ) }
            >add { increase }</button>

            <input 
                id="btn-change-decrement" type="text" 
                onChange={ decHandler }
            />
            <button onClick={ ()=> setCount( prev => prev - decrease ) }
            >sub { decrease }</button>

            <button  onClick={ ()=> setCount( prev => prev * double ) }
            >dbl { double }</button>
            <div> { isNotNumber && <p> Must Enter A Number Value </p> } </div>

            <button onClick={ () => setCount( (prev) => prev = initialCount ) } > reset count </button>
        </div>
    )
}

export default CounterChild