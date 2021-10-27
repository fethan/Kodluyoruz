import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
