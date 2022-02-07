import React from 'react';
import { MdRemoveCircle } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { getProductsById, Products } from '../../../../model/Product';
type props = {
  products: getProductsById
  open: () => void,
  setDataEdit: (products: Products) => void,
  onRemove: (productsId: string) => void,
}
export default function ListProductItemById(props: props) {

  return (
    <>
      <tr className='tableProducts'>
        <td style={{ width: 170 }} >{props.products.product_id}</td>
        <td style={{ width: 170 }} align="right">
          {props.products.color}
        </td>
        <td style={{ width: 170 }} align="right">
          {props.products.ram}
        </td>
        <td style={{ width: 170 }} align="right">
          <img src={props.products.image} alt="" />
        </td>
        <td style={{ width: 170 }} align="right">
          {props.products.price_product} vnđ
        </td>
        <td style={{ width: 170 }} align="right">
          {props.products.quantity}
        </td>
        <tr > <td style={{ width: 170, height: 150 }} > <div className="butyonGroupModel">
          <button className='btnModel' ><TiEdit onClick={() => { props.open(); props.setDataEdit(props.products) }} /></button>
          <button className='btnModel' ><MdRemoveCircle onClick={()=>props.onRemove(props.products.productsid)}/></button>

        </div>
        </td> </tr>
      </tr></>
  )
}
