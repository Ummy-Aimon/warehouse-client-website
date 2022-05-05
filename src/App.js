import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import SignUP from './Component/SignUp/SignUP';
import HomePage from './Pages/HomePages/HomePage';
import Footer from './Pages/Shared Pages/Footer/Footer';
import Header from './Pages/Shared Pages/Header/Header';
// import Navbar from './Pages/Shared Pages/Header/Header';
function App() {
  return (
    <div className="App">
  <Header></Header>
  <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/signup" element={<SignUP></SignUP>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>

  </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;