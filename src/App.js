import './App.css';
import { Link } from 'react-router-dom';

import RoutesContainer from './Routes'




function App() {

 
  return (
    <div className="App" >
     <nav>
     <Link  to="/"></Link>
     </nav>
        <RoutesContainer />
    </div>
  );
}

export default App;
