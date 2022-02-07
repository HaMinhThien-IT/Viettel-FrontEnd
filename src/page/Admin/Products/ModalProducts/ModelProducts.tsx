import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { height, styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BiMessageDetail } from 'react-icons/bi';
import { Alert, AlertTitle, Stack } from '@mui/material';
import './ModelProduct.css'
import { MdRemoveCircle } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import FromProduct from '../FromProduct/FromProduct';
import { getProductsById, Products } from '../../../../model/Product';
import { productController } from '../../../../controller/ProductController';
import ListProductItemById from '../ListProductItemById/ListProductItemById';
import { toast } from 'react-toastify';

const Root = styled('div')`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #ddd;
  }
`;

const CustomTablePagination = styled(TablePaginationUnstyled)`
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }

  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }

  & .MuiTablePaginationUnstyled-actions {
    display: flex;
    gap: 0.25rem;
  }
`;
type props = {
  getIdProductLine: () => void
  product_id: string,

}
type State = {
  products: getProductsById[],
  productsEdit: Products
}

export default function ModelProducts(props: props) {

  const [openz, setOpenz] = React.useState(false);
  const handleOpenz = () => {
    setOpenz(true)
  };
  const handleClosez = () => setOpenz(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const [state, setState] = useState<State>({
    products: [], productsEdit: {
      productsid: '',
      product_id: '',
      product_color_id: 0,
      product_ram_id: 0,
      price_product: 0,
      quantity: 0,
      image: '',
    }
  })
  useEffect(() => {
    productController.getProductsById(props.product_id).then(res => {
      setState({ ...state, products: res })

    })
  }, [props.product_id])
  const onAdd = (products: Products) => {
    // id product 

    if (products.productsid !== '') {
      let check2 = -1
      state.products.map(itemCheck => {
        if (itemCheck.productsid !== products.productsid) {
          if (itemCheck.product_id === products.product_id && itemCheck.product_color_id === products.product_color_id && itemCheck.product_ram_id === products.product_ram_id) {
            check2 = 1
          }         
        }
      })
      if (check2 === -1) {
        products.product_id = props.product_id
        productController.editProductById(products).then(res => {
          setState({ ...state, products: res })
        })
      } else {
        toast.error("Sản phẩm đã tồn tại !", {
          position: 'top-center',
          autoClose: 3000
        })
      }

    } else {
      products.product_id = props.product_id
      let check1 = -1
      state.products.map(itemCheck => {
        if (itemCheck.product_id === products.product_id && itemCheck.product_color_id === products.product_color_id && itemCheck.product_ram_id === products.product_ram_id) {
          check1 = 1
        }
      })
      if (check1 == -1) {
        productController.addToProductsById(products).then(res => {
          setState({ ...state, products: res })
        })
      } else {
        toast.error("Sản phẩm đã tồn tại !", {
          position: 'top-center',
          autoClose: 3000
        })
      }
    }

  }



  const removeProductById = (productsId: string) => {
    productController.deleteProductById(productsId,props.product_id).then(res =>{
      setState({ ...state, products: res })
    })
  }
  const setDataEdit = (products: Products) => {
    setState({ ...state, productsEdit: products })
  }
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <button className='btnProductLine' onClick={() => { handleOpen(); props.getIdProductLine() }}> <BiMessageDetail /> </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Panel Products
            </Typography>
            <FromProduct key={state.productsEdit.productsid} dataEdit={state.productsEdit} openz={openz} handleClosez={handleClosez} onOpenz={handleOpenz} onAdd={onAdd} product_id={props.product_id} />
          </Stack>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Root sx={{ maxWidth: '100%', width: 1200 }}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <table aria-label="custom pagination table">
                  <thead>
                    <tr>
                      <th>Product id</th>
                      <th>Color</th>
                      <th>Ram</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      state.products.map((item, index) => (
                        <ListProductItemById onRemove={removeProductById} setDataEdit={setDataEdit} open={handleOpenz} products={item} key={index} />
                      ))
                    }

                  </tbody>

                </table>

              </Stack>
            </Root>

          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
