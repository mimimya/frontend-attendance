import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LogonHeader = ({children}) => {
const navigate = useNavigate(); 
  const handleLogout = ()=>{
    localStorage.clear();//Test용
    
    /*axios.get('/logout', {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
    })
    .then((response) => {
      // 성공적인 응답 처리
      console.log(response.data);
      if(response.data.message == "로그아웃이 완료되었습니다."){
          localStorage.clear();
          console.log('로그인 페이지로 이동');
          navigate('/login');
      }
    })
    .catch((error) => {
      // 에러 처리
      console.log('Error while fetching data:', error);
    });
    */
}
    return (
    <header>
    <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-semibold">{children}</h1>
    <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">로그아웃</button>
    </div>
    <hr/>
  </header>
  )
}

export default LogonHeader