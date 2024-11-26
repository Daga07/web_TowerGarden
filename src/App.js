import './App.css';
import Cultivo from './Cultivo';
import Logo from './Logo';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/> 
        <Titulo/>
        <Cultivo/>

      </header>
    </div>
  );
}

export default App;
