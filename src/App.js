import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
