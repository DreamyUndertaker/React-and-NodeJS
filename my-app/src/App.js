import logo from './logo.svg';
import './App.css';
import Page from './My-Pages/First';
import Technology from './My-Pages/Technology';
import Header from './My-Pages/Header';
const  App = () =>{
  return(
    <div>
      <Header />
      <Technology />
      <Page />
    </div>
  )
}

export default App;
