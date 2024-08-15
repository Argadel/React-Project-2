import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.css'

import Home from './components/Home'
import Category from './components/Category'
import Recipe from './components/Recipe'
import Header from "./components/shared/Header";
import s from "./styles/Main.module.css";
import background from "./assets/images/background.jpg";


function App() {
    return (
        <div className="global_container">
            <Router>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path={'/category/:category'} element={<Category/>}/>
                        <Route path={'/recipe/:id'} element={<Recipe/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App