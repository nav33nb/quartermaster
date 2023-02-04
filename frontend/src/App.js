import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Auth from "./Home/Auth"


function App() {
  return (
    // <Home/>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
