import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ChangePw = () => {
    const navigate = useNavigate();
    const [isValid, setValid] = useState(false);
    const [pin1, setPin1]= useState();
    const [pin2, setPin2]= useState();
    const postChangePW = ()=>{
        const memberInfo = {
            changePin: pin1
        };
        axios.post(`/user/${localStorage.getItem("userId")}/change-password`, memberInfo, {
        headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
        },
        })
        .then((response) => {console.log(response);})

        redirect();
    };

    const check = ()=>{
        if (pin1 == pin2) {
            setValid(true);
        }else {setValid(false);}
        
    }
    const redirect = ()=>{
        console.log("그냥 세션 값은"+ localStorage.getItem("isAdmin"));
        const isAdmin = (localStorage.getItem("isAdmin"));///문자열은 빈 문자열을 제외하고 true
        if(isAdmin=='true'){
            console.log('선생님 페이지로 이동');
            navigate('/teacherMain');
        }else{
            console.log('학생 페이지로 이동');
            navigate('/studentMain');
        }
    }

    return (
        <div>
        <header><h1>비밀번호 변경</h1></header>
        <div>
        <form action='서버요' method='POST'>
            <div>
                <input id='changePin1' type='text' name='changePin' placeholder='비밀번호'
                onChange={(target)=>setPin1(target.value)}/>
            </div>
            <div>
                <input id='changePin2' type='text' placeholder='비밀번호 확인'
                onChange={(target)=>{setPin2(target.value); check(); console.log(localStorage.getItem("className"));}}/>
            </div>
            {isValid &&
            <div>
                <input type="submit" onClick={()=>postChangePW()}/>
            </div>
            }
            {!isValid &&
            <div>
                변경할 비밀번호가 일치하는지 다시 확인해주세요.
            </div>
            }
            <br/>
            <div onClick={()=>redirect()}>다음에 변경하기</div>
            
        </form>
        </div>
    </div>
    )
}

export default ChangePw