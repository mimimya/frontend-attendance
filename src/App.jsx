import './App.css'
import ChangePw from './pages/ChangePw';
import TempMain from './pages/TempMain';
import Login from './pages/login';//경로 체크 해주세요
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempMain/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/changePW" element={<ChangePw/>}></Route>
        </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
