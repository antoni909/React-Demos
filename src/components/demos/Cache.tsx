import './Cache.css'
import { useState, useEffect } from 'react'

// TODO: find better type solution for data's useState()

const Cache = () => {

    const [ status, setStatus ] = useState<string>('idle')
    const [ data, setData ] = useState<any[]>([])
    const [ query, setQuery ] = useState<string>('people')

    useEffect(()=>{
        const fetchData = async () =>{

            if(!query) console.log('query is not falsy === ',!query)

            setStatus( stats => stats = 'fetching' )
            const body = await (await fetch(`https://swapi.dev/api/${query}/`)).json()
            const { results } = body
            setData( updateData => updateData = results )
            setStatus( stats => stats = 'fetched' )
        }
        fetchData()
    },[query])

    return (
        <div className="cache-wrapper">
            <h3>Cache Component</h3>
            <p>this component fetches Star Wars API data using React's useEffect hook</p>
            <h4> Status: { status } </h4>
            {
                data.length && data.map( person =>(
                    <div
                        className='cache-persons' 
                        key={person.name}
                    >
                        <p>{ person.name }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Cache