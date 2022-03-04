import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import './CartForm.css'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import LocationUser from './LocationUser';
import { order_user } from '../../../model/Checkout';
import { Link } from 'react-router-dom';



type State = {
  optionChecked: boolean,
  optionCheckAddress: boolean,
  order_user: order_user
}
type props = {
  sendDataCheckOut: (order_user: order_user, optionChecked: boolean, optionCheckAddress: boolean) => void,
}
export default function CartForm(props: props) {

  const [state, setState] = useState<State>({
    optionChecked: false, optionCheckAddress: true, order_user: {
      order_user_id: '',
      name_order: '',
      address: '',
      sdt: '',
    }
  })
  const handleActive = () => {
    setState({ ...state, optionChecked: false, optionCheckAddress: true })
  }
  const handleActiveAddress = () => {
    setState({ ...state, optionChecked: true, optionCheckAddress: false })
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div className='containerFromCart' >
      <div className="titleCart">
        <h3>Nhập địa chỉ nhận hàng</h3>
        <h4><span>Đăng nhập</span> bằng SMS chỉ mất 30s</h4>
      </div>
      <div className="optionPaymentAddress">
        <button onClick={handleActive} className={`${state.optionChecked === false ? 'payMentAtHomeActive' : 'payMentAtHome'}`}>
          <img src="https://www.nguyenkim.com/images/new_checkout/icon-nk-delivery-checked.svg" alt="" />
          <strong>Tạo địa chỉ mới</strong>
        </button>
        <button onClick={handleActiveAddress} className={`${state.optionCheckAddress === false ? 'payMentAtAddressActive' : 'payMentAtAddress'}`}>
          <img className='atHomeImg' src="https://www.nguyenkim.com/images/new_checkout/icon-nk-atstore-checked.svg" alt="" />
          <strong>Chọn địa chỉ đã mua</strong>
        </button>
      </div>
      {/* ok */}
      {!state.optionChecked && state.optionCheckAddress && (
        <>
          <div className="cartContainer">
            <TextField sx={{ m: 1, width: '72.9ch' }}
              required
              id="outlined-required"
              label="Họ"
              focused
              onChange={e => { setState({ ...state, order_user: { ...state.order_user, name_order: e.target.value } }) }}
            />
            <TextField sx={{ m: 1, width: '72.9ch' }}
              required
              id="outlined-required"
              label="Tên"
              focused
            />
            <TextField sx={{ m: 1, width: '72.9ch' }}
              required
              id="outlined-required"
              label="Số điện thoại"
              focused
              onChange={e => { setState({ ...state, order_user: { ...state.order_user, sdt: e.target.value } }) }}
            />
            <TextField sx={{ m: 1, width: '72.9ch' }}
              required
              id="outlined-required"
              label="Địa chỉ"
              focused
              onChange={e => { setState({ ...state, order_user: { ...state.order_user, address: e.target.value } }) }}
            />
          </div>
          <div className="confirm">
            <Checkbox
              {...label}
              defaultChecked
              sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }}
            /> <span>
              Sử dụng thông tin này để đăng ký tài khoản mua hàng tại <strong> Viettel Store </strong></span>
          </div>
          <div className="input-wrapper">
            <span className="input-wrapper__label">
              Để lại lời nhắn cho Viettel
            </span>
            <textarea cols={30} rows={10} />
          </div></>
      )}
      {/* ok */}
      {
        !state.optionCheckAddress && state.optionChecked && (
          <>
            <FormControl>
              <div className="titleLocation">
                <HiLocationMarker /> Địa Chỉ Nhận Hàng
              </div>
              <RadioGroup className="locationItems"
                row
                aria-labelledby="demo-form-control-label-placement"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel value="end" control={<Radio />} label={<LocationUser />} />
              </RadioGroup>
            </FormControl>
          </>
        )
      }



      <div className="pay">
        <h3 className='payment'>Chọn hình thức thanh toán</h3>
      </div>
      <div className="payCart">
        <FormControl className='formControlPay' >
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="end"
          >
            <div className="containerPay">


              <div className="optionPay">
                <div className="imgOptionPay">
                  <img src=" https://www.nguyenkim.com/images/new_checkout/icon-payment-cod.svg" alt="" />
                </div>

                <FormControlLabel value="end" control={<Radio />} label="
              Thanh toán khi nhận hàng"  labelPlacement="start" />
              </div>
              <div className="optionPay">

                <div className="imgOptionPay">
                  <img src="https://www.nguyenkim.com/images/new_checkout/icon-payment-atm.svg" alt="" />
                </div>
                <FormControlLabel value="endx" control={<Radio />} label="
              Thẻ ATM/Internet banking"  labelPlacement="start" />
              </div>
              <div className="optionPay">

                <div className="imgOptionPay">
                  <img src="https://www.nguyenkim.com/images/new_checkout/icon-payment-credit.svg" alt="" />
                </div>
                <FormControlLabel value="endsx" control={<Radio />} label="Thẻ tín dụng" labelPlacement="start" />
              </div>
            </div>
          </RadioGroup>
        </FormControl>
      </div>
      <div className="confirmPayMent">
        <div className="confirmPaymentItem">


          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
          <span>

            Tôi đồng ý <strong className="toiDogy"> thoả thuận bảo mật và chính sách mua hàng</strong> của <strong> Viettel Store </strong></span>
        </div>
        <div className="confirmPaymentItem">

          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: pink[800],
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
          <span>
            Yêu cầu xuất hoá đơn GTGT cho đơn hàng này</span>
        </div>
      </div>
      <Link to='/checkout'>
        <button value={"hi"} className="btnPayMent" onClick={() => { props.sendDataCheckOut(state.order_user, state.optionChecked, state.optionCheckAddress) }}>
          THANH TOÁN <AiOutlineArrowRight />
        </button>
      </Link>
    </div>
  )
}
