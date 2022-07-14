import './Cache.css'
import { useState, useEffect } from 'react'

// TODO: find better type solution for data's type useState()
// TODO: index the cache object with helper function hasKey()
// TODO: find better type solution for selectionHandler event type

type CacheObject = { [query:string]: string }
const cache: CacheObject = { }

const Cache = () => {

    const [ status, setStatus ] = useState<string>('idle :|')
    const [ data, setData ] = useState<any[]>([])
    const [ query, setQuery ] = useState<string>('people')
    
    const selectionHandler = (e:any ) => {
        const selectedValue = e.target.value
        setQuery( updateQuery => updateQuery = selectedValue )
    }

    useEffect(()=>{
        const fetchData = async () =>{
            setStatus( stats => stats = 'fetching ... ' )
            if(!query) console.log('query is not falsy === ',!query)
            if( cache[query] ){
                const data:any = cache[query]
                setData( updateData => updateData = data )
                setStatus( stats => stats = 'cache hit 😀 ' )
            }
            else{
                setStatus( stats => stats = 'cache miss 😩 ' )
                const body = await (await fetch(`https://swapi.dev/api/${query}`)).json()
                const { results } = body
                cache[query] = results
                setData( updateData => updateData = results )
                setStatus( stats => stats = 'fresh fetch 😎' )
            }
        }
        fetchData()
    },[query])

    return (
        <div className="cache-wrapper">
            <h3>Cache Component</h3>
            <p>This component fetches Star Wars API data using React's useEffect hook</p>
            <p>Pick a resource from the list of available Star Wars API resources:</p>
            <form onChange={ selectionHandler } >
                <label htmlFor="cache-resources"> query </label>
                <select 
                    id="cache-resources"
                    name="select resource" 
                >
                    <option value="people">People</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </form>
            <h3> Status: { status } </h3>
            <h3> Cache: { Object.keys(cache).map( el =>( 
                     <div key={ el }>
                                <h5>{ el }</h5>
                            </div>
                        ))}
            </h3>
            <h3>Results</h3>
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