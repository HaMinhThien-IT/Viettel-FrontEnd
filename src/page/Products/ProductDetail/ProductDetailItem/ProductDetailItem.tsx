import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React, { useEffect, useState } from 'react'
import './ProductDetailItem.css'

import { ProductDetailModel } from '../../../../model/Product';
import { formatMoney } from '../../../../helper';
import Option from '../../../../components/option/Option';
import { Button } from '@mui/material';
import { ram } from '../../../../model/Option';
import { CartModel } from '../../../../model/Cart';
import Slider from "react-slick";

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
    const handleChange = (event: any) => {
        setState({ ...state, value: event.target.value })
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
                    setState({ ...state, productsId: arrItem[i].productsid, priceProduct: arrItem[i].price_product,cartModel:{...state.cartModel,productsid:arrItem[i].productsid,price:arrItem[i].price_product} })                   
                }
            }
        }
     

    }, [state.value, state.color_id])
    console.log(state.cartModel);
    
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
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={state.value}
                            onChange={handleChange}
                        >
                        
                            {
                                state.ramOption.map((item, index) => <FormControlLabel key={index} className='optionRamProduct ' value={item.product_ram_id} control={<Radio />} label={<Option name={props.item.product_name} price={item.price_product} ram={item.ram} />} />)
                            }
                        </RadioGroup>
                    </FormControl>
                    <Button style={{ marginTop: '40px' }} variant="outlined" onClick={() => props.addToCart(state.cartModel)} >Outlined</Button>
                </div>
               
            </div>
           
        </div>
    )
}
