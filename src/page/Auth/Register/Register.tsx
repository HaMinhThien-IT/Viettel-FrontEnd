import React, { useState } from 'react'
import { authController } from '../../../controller/AuthController'
import './Register.css'
type State = {
    email : string,
    password:string
}
export default function Register() {
    const [state,setState] = useState<State>({email:'',password:''})
    const onRegister = () =>{
      authController.register(state.email,state.password).then(()=>{alert("Dang ky thanh cong")})
    }
    return (
        <div className='fromLogin'>
        <h1>Đăng kí</h1>
        <div className="containerLoginForm">
          <p className='titleLogin'>Đăng kí tài khoản</p>
          <input type="text" placeholder='Đăng kí với email' onChange={(e)=>setState({...state,email:e.target.value}) }/>
          <input type="password" placeholder='Mật khẩu' onChange={(e)=>setState({...state,password:e.target.value}) }/>
          <p className='chinhsachdk'>Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong <span className='dkkkk'>chính sách riêng tư</span> của chúng tôi.</p>
          <button onClick={onRegister}>Đăng ký</button>
        </div>
      </div>
    )
}
