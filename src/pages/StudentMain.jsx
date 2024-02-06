import React from 'react'
import LogonHeader from '../components/LogonHeader'
const StudentMain = () => {
  return (
    
      <div>
        <LogonHeader>StudentrMain</LogonHeader>
        <div>로그인 정보:</div>
        <div>이름{localStorage.getItem("userName")}</div>
        <div>반{localStorage.getItem("className")}</div>
        <div>ID: {localStorage.getItem("userId")}</div>

    </div>
  )
}

export default StudentMain