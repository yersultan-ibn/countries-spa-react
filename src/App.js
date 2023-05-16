import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { Controls } from './components/Controls';

function App() {
  return (
    <BrowserRouter>
  <Header/>
     {/* <Main>
     <Controls/>
     </Main> */}
   </BrowserRouter>
    );
}

export default App;
