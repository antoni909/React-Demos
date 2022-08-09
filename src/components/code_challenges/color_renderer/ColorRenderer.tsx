import Color from './Color'
import './ColorRenderer.css'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

interface Colors {
    hex:string
    name:string
}

export default function ColorRenderer () {

    const renderColors = ( colorsArr:Colors[] ): JSX.Element => {
            return (
                <div className='color-renderer-container'>
                    { colorsArr.map( ( color:Colors ) => (
                        <Color key={color.name} hex={ color.hex } name={ color.name }/>
                    ))}
                </div>
            )
    }

  return (
    <div className='color-rederer-wrapper'>
        <h3>Render Color Challenge</h3>
        <p>Use the Color component to render each item in the colors array on the page!</p>
        { renderColors( colors ) }
    </div>
  )
}