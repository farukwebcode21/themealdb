import './App.css';
import Header from './components/Header';
import Meals from './components/Meals';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <Header/>
     <Meals/>
    </div>
  );
}

export default App;
