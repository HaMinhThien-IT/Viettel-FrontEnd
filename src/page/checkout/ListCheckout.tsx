import React, { useContext, useEffect, useState } from 'react';
import { orderController } from '../../controller/OrderController';
import { OrderWithDetail } from '../../model/Order';
import { userContext } from '../../store/UserContext';
import CheckoutItem from './checkoutItem/CheckoutItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import './ListCheckout.css'
import Profile from '../profile/Profile';
import { productController } from '../../controller/ProductController';
type State = {
    listOrder: OrderWithDetail[],
    numberPage: number
}
export default function ListCheckout() {
    const [state, setState] = useState<State>({ listOrder: [], numberPage: 0 })
    const { user_id } = useContext(userContext)
    useEffect(() => {
        orderController.listCheckout(user_id, 2, 1).then(res => {
            setState({ ...state, listOrder: res.ListProduct, numberPage: res.pagination })

        })
    }, [user_id])
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)

        orderController.listCheckout(user_id, 2, value).then(res => {
            setState({ ...state, listOrder: res.ListProduct, numberPage: res.pagination })

        })
    };
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return <div className='checkoutLayout'>
        <div className="container">
            <div className="checkoutDad">
                <div className="menuCheckout">
                    <div className="infoCheckout">
                        <div className="infoCheckoutDaddy">
                            <div className="imgUser">
                                <img src="https://cf.shopee.vn/file/bea1f02980a14113f00b87b223b34ec2_tn" alt="" />
                            </div>
                            <div className="nameUserCheckout">
                                <p className="nameUser">
                                    bronze47
                                </p>
                                <div className="editInfo">
                                    <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 4 }}><path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fillRule="evenodd" /></svg>
                                    <span>Sửa hồ sơ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menuCheckoutChild">
                        <div className="menuCheckoutChildIcon">                         
                            <List>
                                <ListItemButton onClick={handleClick}>
                                <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" alt="" />
                                    Tài khoản của tôi
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <div>okok</div>
                                    </List>
                                </Collapse>
                            </List>
                        </div>
                        <div className="menuCheckoutChildIcon">
                            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" alt="" />
                            <span>Đơn Mua</span>
                        </div>
                        <div className="menuCheckoutChildIcon">
                            <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" alt="" />
                            <span>Thông báo</span>
                        </div>
                        <div className="menuCheckoutChildIcon">
                            <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" alt="" />
                            <span>Kho Voucher</span>
                        </div>
                        <div className="menuCheckoutChildIcon">
                            <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="" />
                            <span>Viettel Xu</span>
                        </div>
                    </div>
                </div>
                <Stack className='containerListCheckOutDad'>
                    <div className="listCheckout">
                        {state.listOrder.map((item, index) => (
                            <CheckoutItem items={item} key={index} />
                        ))
                        }
                    </div>
                    <Pagination className='paginationListCheckout' count={state.numberPage} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </div>
    </div>;
}
