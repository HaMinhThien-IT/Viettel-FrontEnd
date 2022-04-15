import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { orderController } from '../../../controller/OrderController';
import { OrderWithAdmin } from '../../../model/Order';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { formatMoney } from '../../../helper';
import ModalConfirm from '../modal-confirm/ModalConfirm';
function Row(props: { row: OrderWithAdmin, onUpdateStatus: (id_order: string, email: string, nameUser: string, orderCart: OrderWithAdmin) => void }) {
  const { row } = props;

  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 40,
      padding: '0 30px',
    },
    root2: {
      background: "linear-gradient(45deg, #2fb1d1 30%, #2294e0 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 40,
      padding: "0 30px",
    },
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const confirmOrder = () => {
    props.onUpdateStatus(row.id_order, row.email, row.user.name_order, row)
  }
  const [opens, setOpens] = React.useState(false);

  const handleClickOpen = () => {
    setOpens(true);
  };
  const handleClose = () => {
    setOpens(false);
  };
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id_order}
        </TableCell>
        <TableCell align="left">{row.user.name_order}</TableCell>
        <TableCell align="left">{row.user.address}</TableCell>
        <TableCell align="left">{row.user.sdt}</TableCell>
        <TableCell align="left">{row.status_order === false ? <ModalConfirm confirmOrder={confirmOrder} open={opens} handleClose={handleClose} handleClickOpen={handleClickOpen} ></ModalConfirm> : <Button className={classes.root2}>Success</Button>}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products order
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Image product</TableCell>
                    <TableCell>Product order name</TableCell>
                    <TableCell align="left">Price (vnđ)</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="left">Ram</TableCell>
                    <TableCell align="left">Color</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.orderProducts.map((historyRow) => (
                    <TableRow key={historyRow.id_order}>
                      <TableCell component="th" scope="row">
                        <img style={{ width: '100px', height: 'auto' }} src={historyRow.products?.image} alt="" />
                      </TableCell>
                      <TableCell> {historyRow.productLine?.product_name}</TableCell>
                      <TableCell align="left"> {formatMoney(historyRow.price)}</TableCell>
                      <TableCell align="left">
                        x {historyRow.quantity}
                      </TableCell>
                      <TableCell align="left">
                        {historyRow.products?.ram}
                      </TableCell>
                      <TableCell align="left">
                        {historyRow.products?.color}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



export default function ListCheckoutAdmin() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    getListOrderAdmin()
  }, [])
  const getListOrderAdmin = () => {
    orderController.listCheckoutAdmin().then(res => {
      setData(res)
      console.log("res", res);
    })
  }
  const updateStatusOrder = (id_order: string, email: string, nameUser: string, orderCart: OrderWithAdmin) => {
    orderController.updateStatusOrder(id_order, email, nameUser, orderCart).then(() => {
      getListOrderAdmin()
    })
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID Order Product</TableCell>
            <TableCell align="left">Name user</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Number phone</TableCell>
            <TableCell align="left">Status order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <Row onUpdateStatus={updateStatusOrder} key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}