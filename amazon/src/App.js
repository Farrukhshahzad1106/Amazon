import './App.css';
//We are importing BrowserRouter from reactrouter-dom but we are using it by the name of router here
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './Header';
import Home from './Home';


function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<div><Header/></div>} />
            <Route path='/checkout' element={<h1>Checkout Page</h1>}/>
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;


// BrowserRouter is a Higher-Order Component.
//For the Banner we need a gradient effect which could be done that we have an image and we stck another white image on top of it whose opacity decreases as we need the effect of the gradient
//The banner image is more visible at the top and gradually gradiates to white towards the bottom 