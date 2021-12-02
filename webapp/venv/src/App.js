import Home from './Pages/Home';
import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
 
  return (
        
    <div className="App">
      <Home/>
    </div>
  )
}

export default function WrappedApp() {

  
  return (

    <Router>

      <App />
      
    </Router>
  )
}