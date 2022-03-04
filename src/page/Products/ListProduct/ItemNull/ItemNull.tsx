import React from 'react'
import { Link } from 'react-router-dom'
import './ItemNull.css'
type props = {
    value: string
}
export default function ItemNull(props: props) {
    return (
        <div className='containerNull'>

            <h4 className='isEmpty'> No results found for the keyword "{props.value}".</h4>
            <p>Please try using the general key from more than</p>
        </div>
    )
}