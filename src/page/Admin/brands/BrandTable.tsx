import "./Brand.css";
import * as React from "react";
import { styled } from "@mui/material/styles";


import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import { brand } from "../../../model/Option";
import { BsFillTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
type props = {
  value: brand;
  handleOpen: () => void;
  setDataEdit: (data: brand) => void
  onRemove: (id: string) => void
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BrandTable(props: props) {
  return (

    <StyledTableRow >
      <StyledTableCell align="left">
        {props.value.trademark_id}
      </StyledTableCell>
      <StyledTableCell align="left">
        <img
          src={props.value.image_trademark}
          style={{
            width: "50px",
            height: "auto",
          }}
          alt=""
        />
      </StyledTableCell>
      <StyledTableCell align="left">
        {props.value.name_trademark}
      </StyledTableCell>
      <StyledTableCell align="left">
        <BsFillTrashFill onClick={() => props.onRemove(props.value.trademark_id)} /> <AiTwotoneEdit onClick={() => { props.handleOpen(); props.setDataEdit(props.value) }} />
      </StyledTableCell>
    </StyledTableRow>


  );
}
