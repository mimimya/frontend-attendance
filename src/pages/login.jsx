import React from 'react'
// Main (로그인 페이지)
export const Login = () => {
  return (
    <div>
        <header><h1>로그인 하세요</h1></header>
        <div>
        <form action='서버요' method='POST'>
            <div>
            <input id="nameInput" type='text' name='userName' placeholder='이름'/>
            </div>
            <div>
            <input type='text' name='userPin' placeholder='비밀번호'/>
            </div>
            <div>
            <input type="submit"/>
            </div>
        </form>
        </div>
    </div>
  )
}
export default Login