import { FC,ChangeEvent, useState } from 'react'
import CounterChild from "./CounterChild"

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
        <div>
            <h1>Counter Component</h1>
            start count number:
            <form>
                <label htmlFor="btn-start-count"></label>
                <input
                    id="btn-start-count"
                    type="text"
                    onChange={ handler } 
                />
            </form>

            { isNotNumber && <p> Must Enter A Number Value </p> }
            <CounterChild 
                initialCount={ initialCount } 
                key={ initialCount }
            />
        </div> 
    )
}

export default Counter
