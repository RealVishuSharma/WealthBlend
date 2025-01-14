import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/page';
import Login from './login/page';
import SignupPage from './signup/page';
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/signup" element={<SignupPage/>} />
        


        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
