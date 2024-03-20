import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Pages/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">

      <Header/>

      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>





      </Routes>

      <Footer/>


     
    </div>
  );
}

export default App;
