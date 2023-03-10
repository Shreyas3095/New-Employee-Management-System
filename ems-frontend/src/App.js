import './App.css';
import 'bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing/Routing';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Home/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routing></Routing>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
