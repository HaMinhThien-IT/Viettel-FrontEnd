import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { productController } from '../../../controller/ProductController';
import { ProductLine, ProductLines } from '../../../model/Product'
import './TableProductLine.css'
import ModalAdmin from './Modal/Modal';

import { v4 as uuidv4 } from 'uuid';
import ProductLineItem from './ProductLineItem/ProductLineItem';
type State = {
  productLine: ProductLines[]
  productLineDataEdit: ProductLines
}

export default function Container() {
  const [state, setState] = React.useState<State>({ productLine: [], productLineDataEdit: { product_id: '', product_name: '', trademark_id: '', createat: '', updateat: '', name_trademark: '' } })

  React.useEffect(() => {
    productController.getListProductLine().then(res => {
      setState({ ...state, productLine: res })
    })
  }, [])
  const onAdd = (product: ProductLines) => {
    if(product.product_id !==''){
      console.log(product.createat);
      productController.editProductLine(product).then(res => {
        setState({ ...state, productLine: res })
      })
    }else{
      productController.addProductLine(product).then(res => {
        setState({ ...state, productLine: res })
      })
    }
  }
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const setDataEdit = (productLineDataEdit: ProductLines) => {
    setState({...state,productLineDataEdit : productLineDataEdit})
  }

  return (

    <TableContainer component={Paper}>
      <ModalAdmin dataEdit={state.productLineDataEdit} handleOpen={handleOpen} handleClose={handleClose} open={open} key={uuidv4()} onAdd={onAdd} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Create At</TableCell>
            <TableCell align="right">Update At</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.productLine.map((item, index) => (
              <ProductLineItem setDataEdit={setDataEdit} onOpen={handleOpen} key={index} productLine={item} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}