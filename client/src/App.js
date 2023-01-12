import './App.css';
import generateStore from "./redux/store";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import  About from "./components/About.jsx" ;
import Home from "./components/Home.jsx"
import NavBar from "./components/NavBar.jsx";
function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar></NavBar>
     <Routes>
      <Route path="/"element ={<Home/>}/>
      <Route path="/about"element={<About/>}/>
     </Routes>
      </div>
    </Provider>
  );
}

export default App;
