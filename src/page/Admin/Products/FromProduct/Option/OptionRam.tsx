import React, { useEffect } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { productController } from '../../../../../controller/ProductController';
import { ram } from '../../../../../model/Option';
import { Box } from '@mui/system';

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


function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
type State = {
  listRam: ram[]
}
type props = {
  handleChange: (ram: number) => void,
  value : number
}
export default function OptionRam(props: props) {
  const [state, setState] = React.useState<State>({ listRam: [] })
  useEffect(() => {
    productController.getRamProduct().then(res => {
      setState({ ...state, listRam: res })
    })
  }, [])

  function handleChange(event: any){
    props.handleChange(event.target.value)
  };
  return (
    <div>
      <Box sx={{ m: 1, width: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Ram</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Ram"
            value={props.value}
            onChange={handleChange}
          >
            {
              state.listRam.map((item, index) => (
                <MenuItem key={index} value={item.product_ram_id}>{item.ram}</MenuItem>
              ))
            }

          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
