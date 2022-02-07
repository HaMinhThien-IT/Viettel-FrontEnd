import React, { useState } from 'react';
import './ProductLineItem.css'
import { MdRemoveCircle } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ProductLines } from '../../../../model/Product';
import ModelProducts from '../../Products/ModalProducts/ModelProducts';

type props = {
    productLine: ProductLines,
    onOpen: () => void,
    setDataEdit: (productLine: ProductLines) => void
}

export default function ProductLineItem(props: props) {
    const [product_id, setProduct_id] = useState<string>('')
    const getIdProductLine = () => {
        setProduct_id(props.productLine.product_id)
    }
    return (
        <>
            <TableRow

                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {props.productLine.product_name}
                </TableCell>
                <TableCell align="right">{props.productLine.name_trademark}</TableCell>
                <TableCell align="right">{props.productLine.createat}</TableCell>
                <TableCell align="right">{props.productLine.updateat}</TableCell>
                <TableCell align="right">

                    <div className="containerButtonTable">
                        <ModelProducts product_id={product_id} getIdProductLine={getIdProductLine} />
                        <button className='btnProductLine ' onClick={() => { props.onOpen(); props.setDataEdit(props.productLine) }}><TiEdit /></button>
                        <button className='btnProductLine removebtn'><MdRemoveCircle /></button>
                    </div>
                </TableCell>
            </TableRow></>
    )

}
