import React, { useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { productController } from '../../../../../controller/ProductController';
import { color } from '../../../../../model/Option';
import { Box } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
type State = {
  listColor : color[]
}
type props = {
  handleChange: (color: number) => void,
  value : number
}
export default function OptionColor(props:props) {
  const [state,setState] = React.useState<State>({listColor:[]})
  useEffect(()=>{
      productController.getColorProduct().then(res =>{
          setState({...state,listColor:res})
      })
  },[])

  function handleChange(event: any){
    props.handleChange(event.target.value)
  };
  

  return (
    <div>
      <Box sx={{ m: 1, width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Color"
          onChange={handleChange}
        >
          {
            state.listColor.map((item,index)=>(
              <MenuItem key={index} value={item.product_color_id}>{item.color}</MenuItem>
            ))
          }
         
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}
