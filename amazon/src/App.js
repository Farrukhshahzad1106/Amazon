import './App.css';
//We are importing BrowserRouter from reactrouter-dom but we are using it by the name of router here
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from './Header';


function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/login' element={<div><Header/></div>} />
            <Route path='/checkout' element={<h1>Checkout Page</h1>}/>
              {/* <Header/> */}
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;


// BrowserRouter is a Higher-Order Component.