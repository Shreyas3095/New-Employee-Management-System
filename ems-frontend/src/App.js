import './App.css';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing></Routing>
      </BrowserRouter>
    </div>
  );
}

export default App;
