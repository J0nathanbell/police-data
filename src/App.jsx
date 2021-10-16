// import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {

  const getCrimeData = () => {
    fetch('https://data.police.uk/api/crimes-at-location?date=2017-02&location_id=884227')
      .then(response => response.json())
      .then(data => console.log(data));
  }
  <div className="App">
    <h1>Police data App</h1>
    <NavBar/>
  </div>
  return getCrimeData();
}

export default App;
