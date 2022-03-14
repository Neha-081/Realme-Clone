import './App.css';
import { Link } from 'react-router-dom';
import RoutesContainer from './Routes'
import { useEffect } from 'react';
import { useLocation } from "react-router-dom";




function App() {
  const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
  
}, [location]);
  return (
    <div className="App">
     <nav>
     <Link to="/"></Link>
     </nav>
        <RoutesContainer />
    </div>
  );
}

export default App;
