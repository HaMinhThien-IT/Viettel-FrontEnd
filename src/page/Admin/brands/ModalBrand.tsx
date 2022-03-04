import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Stack, TextField } from "@mui/material";
import { brand } from "../../../model/Option";
const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #2fb1d1 30%, #2294e0 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 80px",

        "& svg": {
            fontSize: "20px",
            marginRight: "10px",
        },
    },
    inputBrand: {
        width: "300px",
    },
});

type props = {
    handleOpen: () => void;
    handleClose: () => void;
    open: boolean;
    onAdd: (data: brand) => void,
    dataEdit: brand
};
type State = {
    brand: brand,
    check: boolean
}
const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #ddd",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};

export default function ModalBrand(props: props) {
    const classes = useStyles();
    const [state, setState] = React.useState<State>({
        brand: props.dataEdit,
        check: false
    })
    React.useEffect(() => {
        if (props.dataEdit.trademark_id != '') {
            setState({ ...state, check: true })
        } else {
            setState({ ...state, check: false })
        }
    }, [props.dataEdit])
    console.log(state.check)
    return (
        <div>
            <Button
                className={classes.root}
                variant="contained"
                sx={{ margin: "20px 0px" }}
                onClick={() => props.handleOpen()}
            >
                Add new brand
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={() => props.handleClose()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography
                                id="transition-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                {state.check ? ' Update brand' : ' Add new brand'}
                            </Typography>
                            <TextField
                                className={classes.inputBrand}
                                placeholder="Image"
                                value={state.brand.image_trademark}
                                onChange={(e) => setState({ ...state, brand: { ...state.brand, image_trademark: e.target.value } })}
                            ></TextField>
                            <TextField
                                className={classes.inputBrand}
                                placeholder="Name"
                                value={state.brand.name_trademark}
                                onChange={(e) => setState({ ...state, brand: { ...state.brand, name_trademark: e.target.value } })}
                            ></TextField>
                            <Button className={classes.root} variant="contained" onClick={() => props.onAdd(state.brand)}>
                                {state.check ? ' Update brand' : ' Add new brand'}
                            </Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
