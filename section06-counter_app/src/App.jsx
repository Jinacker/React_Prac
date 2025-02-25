import './App.css';
import Viewer from "./components/Viewer.jsx";
import Controller from './components/Controller.jsx';

function App() {
  return (
    <div className = "App">
    <h1>Simple Counter</h1>

    <section>
       <Viewer></Viewer>
    </section>

    <section>
       <Controller></Controller>
    </section>
      
    </div>
  )
}

export default App
