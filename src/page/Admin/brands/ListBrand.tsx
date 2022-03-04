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
import ModalBrand from "./ModalBrand";
import BrandTable from "./BrandTable";
type State = {
    brand: brand[],
    dataEdit: brand
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


export default function ListBrand() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = useState<State>({ brand: [], dataEdit: { trademark_id: '', image_trademark: '', name_trademark: '' } });
    useEffect(() => {
        brandController.getListBrand().then((res) => {
            setState({ ...state, brand: res });
        });
    }, []);
    const onAdd = (data: brand) => {
        if (data.trademark_id !== '') {

            brandController.updateBrand(data).then((res) => {
                setState({ ...state, brand: res });
            });

        } else {
            brandController.addNewBrand(data).then((res) => {
                setState({ ...state, brand: res });
            });

        }
    }
    const setDataEdit = (data: brand) => {
        setState({ ...state, dataEdit: data });
    }
    const onRemove = (id: string) => {
        brandController.removeBrand(id).then((res) => {
            setState({ ...state, brand: res });
        });

    }

    return (
        <Box>
            <ModalBrand
                key={state.dataEdit.trademark_id}
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
                            <StyledTableCell align="left">Id Brand</StyledTableCell>
                            <StyledTableCell align="left">Brand Image</StyledTableCell>
                            <StyledTableCell align="left">Brand Name</StyledTableCell>
                            <StyledTableCell align="left">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            state.brand.map((item, index) => <BrandTable key={index} onRemove={onRemove} setDataEdit={setDataEdit} handleOpen={handleOpen} value={item} />)
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}
