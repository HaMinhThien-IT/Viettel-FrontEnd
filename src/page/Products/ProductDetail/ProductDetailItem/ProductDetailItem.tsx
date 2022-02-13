
import React, { useEffect, useState } from 'react'
import './ProductDetailItem.css'
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillAwardFill } from "react-icons/bs";
import { ProductDetailModel } from '../../../../model/Product';
import { formatMoney } from '../../../../helper';
import Option from '../../../../components/option/Option';
import { Button } from '@mui/material';
import { ram } from '../../../../model/Option';
import { CartModel } from '../../../../model/Cart';
import ButtonAddToCart from '../../../../components/buttonAddToCart/ButtonAddToCart';




type props = {
    item: ProductDetailModel,
    addToCart: (cartModel: CartModel) => void
}
interface State {
    color_id: number,
    value: string,
    priceProduct: number,
    ramOption: ram[],
    productsId: string,
    cartModel: CartModel
}
export default function ProductDetailItem(props: props) {

    const [state, setState] = useState<State>({
        color_id: 0, value: '', priceProduct: 0,
        ramOption: [{
            product_ram_id: 0,
            ram: '',
            price_product: 0,
            productsid: ''
        }],
        productsId: '', cartModel: { id_order: '', price: 0, productsid: '', quantity: 1, }
    })


    function handleAddrTypeChange(e: any) {
        setState({ ...state, color_id: Number(e.target.value) })
    }
    const handleChange = (id:number) => {
        setState({ ...state, value: String(id) })
    };
    let filterRam = props.item.products.filter((ele, ind) => ind === props.item.products.findIndex(elem => elem.product_ram_id === ele.product_ram_id && elem.ram === ele.ram))
    let filterColor = props.item.products.filter((ele, ind) => ind === props.item.products.findIndex(elem => elem.product_color_id === ele.product_color_id && elem.color === ele.color))
    useEffect(() => {
        let optionRamTemp: ram[] = []
        for (let i = 0; i < filterRam.length; i++) {
            optionRamTemp.push(
                {
                    product_ram_id: filterRam[i].product_ram_id,
                    ram: filterRam[i].ram,
                    price_product: filterRam[i].price_product,
                    productsid: filterRam[i].productsid,
                }
            )
        }
        setState({ ...state, ramOption: optionRamTemp })
    }, [])


    useEffect(() => {
        let arrItem = Array.from(props.item.products)


        for (let i = 0; i < arrItem.length; i++) {
            if (arrItem[i].product_ram_id === Number(state.value)) {
                if (arrItem[i].product_ram_id === Number(state.value) && arrItem[i].product_color_id === state.color_id) {
                    setState({ ...state, productsId: arrItem[i].productsid, priceProduct: arrItem[i].price_product, cartModel: { ...state.cartModel, productsid: arrItem[i].productsid, price: arrItem[i].price_product } })
                }
            }
        }


    }, [state.value, state.color_id])
    useEffect(() => {
        const optionRamTemp: ram[] = []
        for (let i = 0; i < props.item.products.length; i++) {
            if (props.item.products[i].product_color_id === state.color_id) {
                optionRamTemp.push(
                    {
                        product_ram_id: props.item.products[i].product_ram_id,
                        ram: props.item.products[i].ram,
                        price_product: props.item.products[i].price_product,
                        productsid: props.item.products[i].productsid,

                    }
                )
                setState({ ...state, ramOption: optionRamTemp })
            }
        }


    }, [state.color_id])
 
    return (
        <div className='containerProductDetailItem'>

            <div className="inforProductItemDetail">
                <div className="nameProductDetailItem">
                    {props.item.product_name} {props.item.products[0].ram}
                    <span>Bán chạy</span>
                </div>
                <div className="priceProductDetailItem">
                    {formatMoney(state.priceProduct)} đ
                </div>
                <div className={`listColorProductDetailItem`}>
                    {filterColor.map((item, index) => (
                        <div key={index} className={`itemColorProductDetailItem ${Number(state.color_id) === Number(item.product_color_id) ? 'www' : ""}
                        }`}>
                            {item.color}
                            <input type="radio" value={item.product_color_id} onClick={handleAddrTypeChange} />
                        </div>
                    ))}
                </div>

                <div className="optionProductDetailItem">
                           
                    {
                                state.ramOption.map((item, index) => (
                                    <div key={index} className={` labelOption ${Number(item.product_ram_id) === Number(state.value)? 'labelOptionActive' : ''}`}>
                                    <div className={` iconActive ${Number(item.product_ram_id) === Number(state.value)? 'iconActiveYes' : 'iconActiveNo'}`}>
                                    <AiFillCheckCircle/>
                                    </div>
                                    <Option  id={item.product_ram_id} getValue={handleChange} name={props.item.product_name} price={item.price_product}  ram={item.ram} />
                                    </div>
                                )
                                )
                            }
                 
               
                   
                    {/* <Button style={{ marginTop: '40px' }} variant="outlined" onClick={() => props.addToCart(state.cartModel)} >Outlined</Button> */}

                </div>
                <div className="saleProductItemDetail">
                    <div className="saleProductItemDetailItemHeader">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13.125" height={15} viewBox="0 0 13.125 15"><path id="gift" d="M14.656,4.693H2.469A.468.468,0,0,0,2,5.161V9.38a.468.468,0,0,0,.469.469h.469v4.687A.468.468,0,0,0,3.406,15H13.719a.468.468,0,0,0,.469-.469V9.849h.469a.468.468,0,0,0,.469-.469V5.161A.468.468,0,0,0,14.656,4.693ZM7.625,13.6a.468.468,0,0,1-.469.469H4.344a.468.468,0,0,1-.469-.469V9.849a.468.468,0,0,1,.469-.469H7.156a.468.468,0,0,1,.469.469Zm0-5.625a.468.468,0,0,1-.469.469H3.406a.468.468,0,0,1-.469-.469V6.1a.468.468,0,0,1,.469-.469h3.75a.468.468,0,0,1,.469.469ZM13.25,13.6a.468.468,0,0,1-.469.469H9.969A.468.468,0,0,1,9.5,13.6V9.849a.468.468,0,0,1,.469-.469h2.812a.468.468,0,0,1,.469.469Zm.937-5.625a.468.468,0,0,1-.469.469H9.969A.468.468,0,0,1,9.5,7.974V6.1a.468.468,0,0,1,.469-.469h3.75a.468.468,0,0,1,.469.469ZM6.481,4.692h4.312A3.266,3.266,0,0,0,12.314,2.72a1.5,1.5,0,0,0-.645-1.383,1.64,1.64,0,0,0-1.013-.4c-1.07,0-1.675,1.312-2,2.483C8.264,1.926,7.509.005,6.213.005A1.7,1.7,0,0,0,5.092.492a1.886,1.886,0,0,0-.725,1.747A4.185,4.185,0,0,0,6.481,4.692Zm4.176-2.631a.686.686,0,0,1,.386.18c.242.19.228.308.225.347-.045.41-.814,1.055-1.711,1.587.264-1.135.7-2.114,1.1-2.114Zm-4.891-.7a.782.782,0,0,1,.447-.228c.58,0,1.177,1.523,1.525,3-1.1-.584-2.229-1.412-2.33-2.077C5.394,1.965,5.357,1.719,5.766,1.357Z" transform="translate(-2 -0.005)" fill="#d70018" /></svg>
                        <strong>Khuyến mãi</strong>
                    </div>
                    <div className="saleProductItemDetailItemBottom">
                        <BsFillAwardFill/>
                       <p> Thu cũ lên đời - Trợ giá 1 triệu  <span>(xem chi tiết)</span> </p>
                    </div>
                </div>
                <div className="btnGroup">
                <button className='btnAccToCart' onClick={() => props.addToCart(state.cartModel)} ><p className='btnMuaNgayAdd'>MUA NGAY</p> <p className="btnAddToCartDecs">(Giao tận nơi hoặc lấy tại cửa hàng)</p></button>
                    <div className="btnGroups">
                    <ButtonAddToCart title='TRẢ GÓP 0%' decs='(Xét duyệt qua điện thoại)'/>
                    <ButtonAddToCart title='TRẢ GÓP QUA THẺ' decs='(Visa, Master Card, JCB)'/>
                    </div>
                </div>
                <div className="endowProduct">
                    <div className="endowProductHeader">ƯU ĐÃI THÊM</div>
                   <div className="endDowGroup">
                   <div className="endowProductBottomItem">
                        <AiFillCheckCircle/> <p className="endowProductBottomItemDesc">Giảm thêm tới 1% cho thành viên Smember (áp dụng tùy sản phẩm)</p>
                    </div>
                    <div className="endowProductBottomItem">
                    <AiFillCheckCircle/> <p className="endowProductBottomItemDesc">Mở thẻ tín dụng Shinhanbank, nhận voucher đến 2.000.000đ</p>
                    </div>
                   </div>
                </div>
               
            </div>

        </div>
    )
}
