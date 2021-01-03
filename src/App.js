import React from 'react'
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Container from "./components/Container"
import store from "./store"
import Nav from "./components/Nav"
import About from './components/About';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav/>
        <Route path="/" exact component={Container} />
        <Route path="/About" component={About} />
      </BrowserRouter>
    </Provider>
  )
}
