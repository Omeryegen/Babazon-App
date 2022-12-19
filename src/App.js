
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Provider from './Provider';
import Favors from './components/Favors';
import { Routes, Route } from 'react-router-dom';
import Basket from './components/Basket';
import Category from './components/Category';
import Success from './components/Success';
import Footer from './components/shared/Footer';
function App() {
  return (
   <Provider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Showcase/>}/>
        <Route path='/favors' element={<Favors/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/:smth' element={<Category/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
      <Footer/>
    </Provider>
    
  );
}

export default App;
