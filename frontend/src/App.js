import logo from './logo.svg';
import './App.css';
import Login from './Page/Login';
import Allroutes from './components/Allroutes';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="App">
      <div className='menu'>
      <Drawer/>
      </div>
      <Allroutes/>
    </div>
  );
}

export default App;
