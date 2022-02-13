import { Stack } from '@mui/material';
import React from 'react';
import './Footer.css'
import { BiChevronDown } from 'react-icons/bi';


export default function Footer() {
    return (
        <div className="containerStack">
            <div className='container containerV2'>
                <Stack
                    direction="row"
                    spacing={2}

                    justifyContent="center"
                >
                    <ul className="menuLv1">
                        <li className="itemMenu">Chính sách bảo hành</li>
                        <li className="itemMenu">Chính sách đổi trả</li>
                        <li className="itemMenu">Chính sách giao hàng</li>
                        <li className="itemMenu">Chính sách khui hộp</li>
                        <li className="itemMenu">Phương thức thanh toán</li>
                        <li className="itemMenu">Xem thêm <BiChevronDown /> </li>
                    </ul>
                    <ul className="menuLv1">
                        <li className="itemMenu">Quy chế hoạt động website</li>
                        <li className="itemMenu">Siêu thị gần nhất (341 shop)</li>
                        <li className="itemMenu">Chuyên trang tuyển dụng</li>
                        <li className="itemMenu">Tìm trung tâm bảo hành</li>
                        <li className="itemMenu">Tra cứu hóa đơn</li>

                    </ul>
                    <ul className="menuLv1">
                        <div className="containerMenuDad">
                            <li className="itemMenu">Tư vấn bán hàng (8h - 22h)</li>
                            <p className="itemMenuP">1800 8123</p>
                        </div>
                        <div className="containerMenuDad">
                            <li className="itemMenu">CSKH & bảo hành (8h - 22h)</li>
                            <p className="itemMenuP">1900 8096</p>
                        </div>

                    </ul>
                    <ul className="menuLv1">
                        <Stack
                            direction="row"
                            justifyContent="center"

                            spacing={2}
                        >

                            <li className="menuItemStackV ">
                                <img src="https://imgs.viettelstore.vn/images/ctkm/theme-tet-2021/logo-vtmoney.png" alt="" />
                            </li>
                            <li className="menuItemStack">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/480px-Facebook_logo_36x36.svg.png" alt="" />
                            </li>
                            <li className="menuItemStack">
                                <img src="https://drakemall-files-new.s3.eu-central-1.amazonaws.com/TikTok%20L-cjwm2pt4j004j01tpnjb9zhuc.png" alt="" />
                            </li>
                            <li className="menuItemStack">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
                            </li>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <li className="menuItemStackVI ">
                                <img src="https://imgs.viettelstore.vn/images/ctkm/theme-tet-2021/bo-cong-thuong.png" alt="" />
                            </li>
                            <li className="menuItemStackVI">
                                <img src="https://cdn.viettelstore.vn/images/ctkm/common/button-ipv6-small.png" alt="" />
                            </li>
                        </Stack>
                    </ul>
                </Stack>
               
            </div>
            <div className="descFooter">
                © 2018 Công ty TNHH Nhà nước Một thành viên Thương mại và Xuất nhập khẩu Viettel. Đăng ký doanh nghiệp số 0104831030, do Sở Kế hoạch và Đầu tư Hà Nội cấp lần đầu ngày 25/01/2006, thay đổi lần thứ 38 ngày 01/07/2019. Địa chỉ: Số 01, Phố Giang Văn Minh, phường Kim Mã, quận Ba Đình, Thành phố Hà Nội. Chịu trách nhiệm nội dung: Đinh Sơn Tùng.
                </div>
        </div>
    )
}
