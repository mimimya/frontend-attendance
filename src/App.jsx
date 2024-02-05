import './App.css'
import ChangePw from './pages/ChangePw';
import TeacherMain from './pages/TeacherMain';
import TempMain from './pages/TempMain';
import Login from './pages/login';//경로 체크 해주세요
import Test from './pages/test';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempMain/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/changePW" element={<ChangePw/>}></Route>
          <Route path="/teacherMain" element={<TeacherMain/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
    </BrowserRouter>
      </div>
  )
}

export default App
