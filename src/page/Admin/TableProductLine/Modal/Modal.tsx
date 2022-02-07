import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { productController } from '../../../../controller/ProductController';
import { brand } from '../../../../model/Option'
import { ProductLine, ProductLines } from '../../../../model/Product';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface State {
  brandProduct: brand[],
  age: string,
  productLine: ProductLines,

}
type props = {
  onAdd: (product: ProductLines) => void,
  handleOpen: () => void,
  handleClose: () => void,
  dataEdit: ProductLines
  open:boolean,
}
export default function ModalAdmin(props: props) {

  const [state, setState] = useState<State>({ brandProduct: [], age: '', productLine: props.dataEdit })

  function handleAddrTypeChange(e: any) {
    setState({ ...state, productLine: { ...state.productLine, trademark_id: e.target.value } })
  }

  useEffect(() => {
    productController.getBrandProduct().then(res => setState({ ...state, brandProduct: res })
    )
  }, [])
  return (
    <div>
      <Button onClick={()=>props.handleOpen()}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              New Product Line
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <TextField value={state.productLine.product_name} onChange={(e) => setState({ ...state, productLine: { ...state.productLine, product_name: e.target.value } })} id="outlined-basic" label="Name product " variant="outlined" />

                <Select sx={{ minWidth: 235 }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state.productLine.trademark_id}
                  label="Age"
                  onChange={handleAddrTypeChange}
                  
                >
                  {
                    state.brandProduct.map((item, index) => <MenuItem key={index} value={item.trademark_id}>{item.name_trademark}</MenuItem>)
                  }

                </Select>
                <Button variant="contained" onClick={() => {props.onAdd(state.productLine); props.handleClose()}}>Add new</Button>
              </Stack>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}