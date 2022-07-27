import './Cache.css'
import { useState, useEffect } from 'react'

// TODO: find better type solution for data's type useState()
// TODO: index the cache object with helper function hasKey()
// TODO: find better type solution for selectionHandler event type
// TODO: add fetch time in ms and place value in new section: Fetch Time

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

    useEffect( ()=>{
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
            <div className='cache-heading'>
                <h2>Basic Cache</h2>
                <p>Fetches Star Wars data via API using useEffect hook</p>
                <p>Pick a resource from the list of available Star Wars API resources:</p>
            </div>

            <div className='cache-container'>
                <div className='cache-item'>
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
                </div>

                <div className='cache-item'>
                    <h3>Status:</h3>
                    <p>{ status }</p>
                </div>

                <div className='cache-item'>
                    <h3> Cache: { cache && Object.keys(cache).map( el =>( 
                            <div key={ el }><h5>{ el }</h5></div>
                        ))}
                    </h3>
                </div>

                <div className='cache-item'>
                <h3>Results</h3>
                    <div className='cache-results-container'>            
                            <div className='cache-results'>
                                    {
                                        data.length && data.map( person =>(
                                            <div 
                                                key={person.name}
                                            >
                                                <p>{ person.name }</p>
                                            </div>
                                        ))
                                    }
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cache