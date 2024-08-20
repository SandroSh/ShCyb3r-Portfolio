import MainComponent from './MainComponent';
import { Analytics } from "@vercel/analytics/react"
import './App.css';



function App() {
  return (
    <div className="App">
      <MainComponent/>
      <Analytics />
    </div>
  );
}

export default App;
