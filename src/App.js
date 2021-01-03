import React from 'react'
import { Provider } from "react-redux"
import './App.css';
import Container from "./components/Container"
import store from "./store"

export default function App() {
  return (
    <Provider store={store}>
            <Container/>
    </Provider>
  )
}
