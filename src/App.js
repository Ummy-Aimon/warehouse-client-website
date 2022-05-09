import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './Component/Add items/AddItem';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import ItemDetails from './Component/Itemdetails/ItemDetails';
import Login from './Component/Login/Login';
import MyItems from './Component/My Items/MyItems';
import NotFound from './Component/Not Found pages/Not Found.js/NotFound';
import RequireAuth from './Component/RequireAuth/RequireAuth';
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
    <Route path="/blog" element={<Blog></Blog>}></Route>
    <Route path='/item/:id' element={
<RequireAuth>
    <ItemDetails></ItemDetails>
    </RequireAuth>
    }></Route>
    <Route path='/myitems' element={
<RequireAuth>
    <MyItems></MyItems>
    </RequireAuth>
    }></Route>
    <Route path='/additem' element={
<RequireAuth>
    <AddItem></AddItem>
    </RequireAuth>
    }></Route>
    {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
    <Route path="*" element={<NotFound></NotFound>}></Route>

  </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
