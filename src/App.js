import './App.css';
import Cultivo from './Cultivo';
import Son_Tecnicas from './Son-Tecnicas';
import Logo from './Logo';
import Titulo from './Titulo';
import Quienes_somos from './Quienes_somos';
import Productos from './Productos';
import Rede_so from './Rede_so';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/> 
        <Titulo/>
        <Son_Tecnicas/>
        <Quienes_somos/>
        <Productos/>
        <Rede_so/>
      </header>
    </div>
  );
}

export default App;
