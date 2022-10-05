import logo from '../logo.svg';
import '../styles/App.scss';
import ListTodo from './Todos/ListTodo'
import Nav from './Nav/Nav.js'
import Home from './Example/Home'
import MyComponent from './Example/MyComponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from './User/ListUser';
import ProfileUser from './User/ProfileUser';
import ListDataRedux from './Redux/ListDataRedux';
import Hook from './Hook/Hook';
import { createContext, useState } from 'react';
import { TestCss } from './TestCss';
export const CountProvider = createContext()

function App() {
    const [count, setCount] = useState(0)
    return ( <
        CountProvider.Provider value = {
            { count, setCount } } >
        <
        BrowserRouter >

        <
        div className = "App" >
        <
        header className = "App-header" >

        <
        div > Count: { count } < /div>

        <
        Nav / >

        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >

        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/todo"
        element = { < ListTodo / > }
        /> <
        Route path = "/user"
        element = { < ListUser / > }
        /> <
        Route path = "/user/:UserId"
        element = { < ProfileUser / > }
        /> <
        Route path = "/redux"
        element = { < ListDataRedux / > }
        /> <
        Route path = "/hook"
        element = { < Hook / > }
        /> <
        Route path = "/testCss"
        element = { < TestCss / > }
        />

        <
        /Routes>




        <
        /header> <
        ToastContainer position = "top-right"
        autoClose = { 3000 }
        hideProgressBar = { false }
        newestOnTop = { false }
        closeOnClick rtl = { false }
        pauseOnFocusLoss draggable pauseOnHover /
        >


        <
        /div> <
        /BrowserRouter> <
        /CountProvider.Provider>
    );
}

export default App;


//"axios": API
//react-router-dom: nagivation
//react-toastify: toast