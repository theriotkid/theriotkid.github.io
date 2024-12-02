import Home from "./Components/Home"
import Pembelajaran from "./Components/Pembelajaran"
import Info from "./Components/Info"
import AdminDasboard from "./Components/AdminDasboard"
import AdminUpload from "./Components/AdminUpload"
import AdminEditProfile from "./Components/AdminEditProfile"
import PageLogin from "./Components/PageLogin"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import NotLogin from "./Components/NotLogin"

function App() {
  const [isLoggin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState([])

  return (
    <div style={{
      backgroundColor:'#F2F6FC'
  }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggin={isLoggin} setIsloggin={setIsLogin}/>}/>
          <Route path="/pembelajaran" element={<Pembelajaran isLoggin={isLoggin} setIsloggin={setIsLogin}/>}/>
          <Route path="/info" element={<Info isLoggin={isLoggin} setIsloggin={setIsLogin}/>}/>
          <Route path="/admin/dashboard" element={<AdminDasboard userData={userData} setIsLoggin={setIsLogin}/>}/>
          <Route path="/admin/upload" element={<AdminUpload userData={userData} setIsloggin={setIsLogin}/>}/>
          <Route path="/admin/edit" element={<AdminEditProfile userData={userData} setIsLoggin={setIsLogin} setUserData={setUserData}/>}/>
          <Route path="/login" element={<PageLogin setIsLogin={setIsLogin} setUserData={setUserData}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
