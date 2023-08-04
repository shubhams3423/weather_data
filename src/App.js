import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promise = await fetch("https://api.weatherapi.com/v1/current.json?key=5bca6bccf3ce4c41a8f15340232807&q=Pune&aqi=no")
        const resolve = await promise.json();
        console.log(resolve)
      }
      catch (error) {
        console.log(error)
      }

    }
    fetchData();
  })


  return (
    <div className="App">
      <h1>Fetch weather data</h1>
    </div>
  );
}

export default App;
