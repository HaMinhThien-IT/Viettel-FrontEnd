import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { brandController } from "../../../controller/BrandController";
import { brand } from "../../../model/Option";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModalBrand from "./ModalUser";
import BrandTable from "./UserTable";
import { User } from "../../../model/Auth";
import { authController } from "../../../controller/AuthController";
import UserTable from "./UserTable";
import ModalConfirm from "../modal-confirm/ModalConfirm";
import Test1 from "../modal-confirm/test1";
type State = {
    user: User[],
    dataEdit: User
};
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    [`& svg`]: {
        fontSize: "18px",
        cursor: "pointer",
    },
    [`& svg:last-child`]: {
        color: "red",
        marginLeft: "20px",
    },
}));


export default function ListUser() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState<State>({ user: [], dataEdit: { user_id: '', email: '', name_user: '', phone: '', password: '' } });
    useEffect(() => {
        authController.getListUser().then((res) => {
            setState({ ...state, user: res });
        });
    }, []);
    console.log(state.user);

    const onAdd = (data: User) => {
        if (data.user_id !== '') {
            authController.updateUser(data).then((res) => {
                setState({ ...state, user: res });
            });
        } else {

            authController.addNewUser(data).then((res) => {
                setState({ ...state, user: res });
            });
        }
    }
    const setDataEdit = (user: User) => {
        setState({ ...state, dataEdit: user });
    }
    const onRemove = (id: string) => {
        authController.removeUser(id).then((res) => {
            setState({ ...state, user: res });
        });
    }

    return (
        <Box>
            <ModalBrand
                key={state.dataEdit.user_id}
                dataEdit={state.dataEdit}
                open={open}
                onAdd={onAdd}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Id User</StyledTableCell>
                            <StyledTableCell align="left">User name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Number phone</StyledTableCell>
                            <StyledTableCell align="left">Password</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {

                            state.user.map((item, index) => <UserTable key={index} onRemove={onRemove} setDataEdit={setDataEdit} handleOpen={handleOpen} value={item}
                            />)
                        }
                    </TableBody>
                </Table>

            </TableContainer>

        </Box>
    );
}
