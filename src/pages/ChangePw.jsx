import { React, useState } from 'react';

const ChangePw = () => {
const [isValid, setValid] = useState(false);
const [pin1, setPin1] = useState("");
const [pin2, setPin2] = useState("");
const check = ()=>{
    if (pin1 == pin2) {
        setValid(true);
    }else {setValid(false);}
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
            onChange={(target)=>{setPin2(target.value); check();}}/>
        </div>
        {isValid &&
        <div>
            <input type="submit"/>
        </div>
        }
        
    </form>
    </div>
</div>
  )
}

export default ChangePw