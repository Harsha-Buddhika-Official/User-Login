import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
