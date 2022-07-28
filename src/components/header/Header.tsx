import logo from './logo.svg';
import ts_logo from '../../assets/images/ts_logo.png'
import './Header.css'

const Header = () => {

    return(
      <header className="App-header">
        <div className="header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="header-logo-ts">
            <img src={ts_logo} alt="typescript logo" />
          </div>
        </div>
      </header>
    )
}

export default Header