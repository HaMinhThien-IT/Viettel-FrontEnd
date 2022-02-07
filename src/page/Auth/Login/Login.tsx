import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authController } from '../../../controller/AuthController'
import { authAxios } from '../../../http'
import { login } from '../../../model/Auth'

import { userContext } from '../../../store/UserContext'
import './Login.css'
type State = {
  user: login
}
export default function Login() {
  const [state, setState] = useState<State>({ user: { email: '', password: '' } })
  const { onSetUserName } = useContext(userContext)

  let navigate = useNavigate();
  const login = () => {
    authController.login(state.user).then(res => {
      localStorage.setItem('jwt', res)
      authAxios.defaults.headers.common['authorization'] = res;
      console.log(res);
      
      if (res != undefined) {
        onSetUserName()
        navigate('/dien-thoai')
      }
      else {
        alert(false)
      }


    })
  }
  return (
    <div className='fromLogin'>
      <h1>Đăng nhập</h1>
      <div className="containerLoginForm">
        <p className='titleLogin'>Đăng nhập vào tài khoản của bạn</p>
        <input type="text" placeholder='Tên đăng nhập hoặc email' onChange={(e) => setState({ ...state, user: { ...state.user, email: e.target.value } })} />
        <input type="text" placeholder='Mật khẩu' onChange={(e) => setState({ ...state, user: { ...state.user, password: e.target.value } })} />
        <Link to='/register'> <p className='gotoLogin'>Bạn đã có tài khoản ? </p></Link>
        <button onClick={login}>Đăng nhập</button>
      </div>
    </div>
  )
}
