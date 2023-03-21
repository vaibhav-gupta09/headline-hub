import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FetchData from './components/FetchData';
import Footer from './components/Footer';
const App = () => {
  return (
    <div class="wrapper min-vh-100 d-flex flex-column">
      <Router>
         <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/business" element={<FetchData cat="business"/>}/>
          <Route exact path="/entertainment" element={<FetchData cat="entertainment"/>}/>
          <Route exact path="/politics" element={<FetchData cat="politics"/>}/>
          <Route exact path="/health" element={<FetchData cat="health"/>}/>
          <Route exact path="/science" element={<FetchData cat="science"/>}/>
          <Route exact path="/sports" element={<FetchData cat="sports"/>}/>
          <Route exact path="/technology" element={<FetchData cat="technology"/>}/>
          <Route exact path="/world" element={<FetchData cat="world"/>}/>
        </Routes>
        <Footer class="mt-auto">
        </Footer>
      </Router>
    </div>
  )
}

export default App