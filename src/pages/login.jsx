import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Main (로그인 페이지)
import axios from 'axios';
export const Login = () => {
  const navigate = useNavigate();
  const [id, setID] = useState('');
  const [pw, setPW] = useState('');
  const[idEmpty, setIEmpty] = useState(true);
  const[pwEmpty, setPEmpty] = useState(true);
  const[hasSpace, setSpace] = useState(false);

  const reg =/[~!@#$%^&*()_+|<>?:{}\s/g]/;

  const setSessions = (data)=>{
    //sessionStorage.setItem("isAdmin", data.isAdmin);//나는 학생이다 브라우저를 닫으면 사라짐
    localStorage.clear();
    localStorage.setItem("isAdmin", data.isAdmin);
    localStorage.setItem("className", data.className);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("userName", id);

  }
  const postLogin = ()=>{
    const memberInfo = {
      userName: id,
      userPin: pw,
      IP: '192.168.0.'
    };
    axios.post('/login', memberInfo, {
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
      },
    })
    .then((response) => {
      // 성공적인 응답 처리
      setSessions(response.data);
      if(response.data.isFirstLogin){
        alert("로그인 성공~!");
        console.log('로그인 변경 페이지로 이동');
        navigate('/changePw'); // 로그인 변경 페이지로 리다이렉트
      }else{
        alert("로그인 성공~!");
        console.log('메인 페이지로 이동');
        if(response.data.isAdmin)
        navigate('/teacherMain'); // 선생님 페이지로 리다이렉트
        else navigate('/studentMain');
      }
    })
    .catch((error) => {
      // 에러 처리
      console.log('Error while fetching data:', error);
    });
  }
  const valid = ()=>{
    if(id==''){setIEmpty(false);}else{setIEmpty(false);}
    if(pw==''){setPEmpty(false);}else{setPEmpty(false);}
    if(reg.test(id) || reg.test(pw)){setSpace(false);}else{setSpace(false);}
  }

  return (
    <div>
        <header><h1>로그인 하세요</h1></header>
        <div>
       
            <div>
            <input id="nameInput" type='text' name='userName' placeholder='이름' onChange={(e)=>{setID(e.target.value); valid();}}/>
            </div>
            <div>
            <input type='text' name='userPin' placeholder='비밀번호' onChange={(e)=>setPW(e.target.value)}/>
            </div>
            <div>
            {!idEmpty && !pwEmpty && !hasSpace && <input type="submit" onClick={postLogin}/>}
            {idEmpty && <div>이름을 입력해주세요.</div>}
            {pwEmpty && <div>비밀번호를 숫자로 입력해주세요.</div>}
            {hasSpace && <div>공백과 특수문자를 입력할 수 없습니다.</div>}
            </div>
              
        </div>
    </div>
  )
}
export default Login