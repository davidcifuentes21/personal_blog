// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home></Home>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div> */}
        
      </div>
    </Router>
  );
}

export default App;
