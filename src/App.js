import React from 'react'
import { Provider } from "react-redux"
import './App.css';
import Components from "./components/Container"
import store from "./store"

export default function App() {
  return (
    <Provider store={store}>
      <Components/>
    </Provider>
  )
}
