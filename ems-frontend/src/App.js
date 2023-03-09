import './App.css';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing';

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
