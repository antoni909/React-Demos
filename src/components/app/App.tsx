import './App.css';
import Cache from '../demos/cache/Cache';
import Counter from '../demos/counter/Counter';
import ColorRenderer from '../code_challenges/color_renderer/ColorRenderer';
import Header from '../header/Header';
import Login from '../demos/login/Login'
import { DarkMode } from '../code_challenges/dark-mode/DarkMode'

function App() {
  return (
    <div className="App">

      <Header />
      <div className='app-container'>
          <Cache />
          <Counter />
          <Login />
          <ColorRenderer />
          <DarkMode />
      </div>

    </div>
  )
}

export default App;
