import './Color.css'

interface Props{
    hex:string
    name:string
}

export default function Color ({ hex, name }:Props){
    return (
      <div
        className='color-square' style={{ backgroundColor: hex }}
      >
      <h3>{name}</h3>
      </div>
    )
  }