import './App.css';
// import Cache from '../demos/cache/Cache';
// import Counter from '../demos/counter/Counter';
import ColorRenderer from '../code_challenges/color_renderer/ColorRenderer';
import Header from '../header/Header';
// import Login from '../demos/login/Login'

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='app-container'>
        <div>
          <h3>Demos</h3>
            {/* <Cache /> */}
            {/* <Counter /> */}
            {/* <Login /> */}
        </div>
        <div>
          <h3>Code Challenges</h3>
          <ColorRenderer />
        </div>
      </div>

    </div>
  );
}

export default App;
