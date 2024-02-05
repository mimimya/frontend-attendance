import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

const TempMain = () => {
  return (
    <DefaultLayout>
    <div>
    <header><h1>만들 내용</h1></header>
    <section>
    <div>
      <a to="/" href='/'>
        toMain
      </a>
    </div>
    <div>
      <a to="/" href='/login'>
        toLogin
      </a>
    </div>
    <div>
      <a to="/" href='/changePW'>
        tochangePW
      </a>
    </div>
    <div>
      <a to="/" href='/teacherMain'>
        toTeacher
      </a>
    </div>
    <div>
      <a to="/" href='/student'>
        toStudent
      </a>
    </div>
    <div>
      <a href='/test'>to test</a>
    </div>
    </section>

 </div>
 </DefaultLayout>
  )
}

export default TempMain