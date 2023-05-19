import{BrowserRouter as  Router,Route,Routes}from "react-router-dom"
import React from 'react'
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route/>
      </Routes>
    </Router>
  )
}

export default App