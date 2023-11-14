import React from "react"
import './App.css'
import { RouterHandler } from "./components/pages/routes/RouteHandler"

const App: React.FC=()=>{
  return(
    <>
      <RouterHandler />
    </>
  )
}

export default App