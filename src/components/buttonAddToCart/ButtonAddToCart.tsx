import React from 'react'
import'./ButtonAddToCart.css'
type props ={
    title :string,
    decs:string
}
export default function ButtonAddToCart(props:props) {
  return (
    <button className='addToCartItem'>
       <strong>{props.title}</strong> 
       <p>{props.decs}</p>
    </button>
  )
}
