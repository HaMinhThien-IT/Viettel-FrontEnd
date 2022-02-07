import React, { useEffect, useState } from 'react';
import './FromProduct.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoAddCircle } from 'react-icons/io5';
import OptionRam from './Option/OptionRam';
import OptionColor from './Option/OptionColor';
import { Stack, TextField } from '@mui/material';
import { Products } from '../../../../model/Product';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

type props = {
    product_id: string,
    onAdd:(products:Products)=>void,
    onOpenz : () => void,
    handleClosez : () =>void,
    openz:boolean,
    dataEdit :Products
}
type State = {
    products: Products 
}

export default function FromProduct(props: props) {
    const [state, setState] = useState<State>({ products: props.dataEdit })
   
    const handleChangeRam = (ram: number) =>{
        setState({ ...state, products:{...state.products,product_ram_id:ram}})
    }
    const handleChangeColor = (color: number) =>{
        setState({ ...state, products:{...state.products,product_color_id:color}})
    }
    return (
        <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <Button onClick={props.onOpenz}>  <IoAddCircle /></Button>
            </Typography>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.openz}
                onClose={props.handleClosez}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openz}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            From products in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Stack
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <OptionRam value={state.products.product_ram_id} handleChange={handleChangeRam} />
                                <OptionColor value={state.products.product_color_id} handleChange={handleChangeColor}/>
                                <TextField value={state.products.quantity} onChange={(e)=>setState({...state,products:{...state.products,quantity:Number(e.target.value)}})} style={{ width: '90%' }} id="outlined-basic" label="Quantity" variant="outlined" />
                                <TextField value={state.products.price_product} onChange={(e)=>setState({...state,products:{...state.products,price_product:Number(e.target.value)}})} style={{ width: '90%' }} id="outlined-basic" label="Price" variant="outlined" />
                                <TextField value={state.products.image} onChange={(e)=>setState({...state,products:{...state.products,image:e.target.value}})}  style={{ width: '90%' }} id="outlined-basic" label="Image" variant="outlined" />
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Button variant="contained" onClick={()=>{props.onAdd(state.products)}} >Add new</Button>
                                    <Button variant="outlined" onClick={()=>props.handleClosez()}>Cancel</Button>
                                </Stack>
                            </Stack>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}
