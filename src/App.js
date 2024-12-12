import './App.css';
import Cultivo from './Cultivo';
import Son_Tecnicas from './Son-Tecnicas';
import Logo from './Logo';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/> 
        <Titulo/>
        <Son_Tecnicas/>

      </header>
    </div>
  );
}

export default App;
