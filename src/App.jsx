import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import { Login } from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header><h1>만들 내용</h1></header>
    <DefaultLayout>
      <div>
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
          <a to="/" href='/theacher'>
            toTeacher
          </a>
        </div>
        <div>
          <a to="/" href='/student'>
            toStudent
          </a>
        </div>
        </section>

     </div>
      </DefaultLayout>
    </>
  )
}

export default App
