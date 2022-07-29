import Cache from '../demos/cache/Cache';
import Counter from '../demos/counter/Counter';
import Login from '../demos/login/Login'
import Header from '../header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <div className='app-container'>
          <Cache />
          <Counter />
          <Login />
      </div>

    </div>
  );
}

export default App;
