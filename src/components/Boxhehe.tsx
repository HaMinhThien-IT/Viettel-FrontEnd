import React from 'react'
import { useStylesWhat } from './useStyleWhat'
import { Box, Grid, Typography } from '@mui/material'
export default function Boxhehe() {
    const classes = useStylesWhat()
    return (
        <Grid container xs={12} className={classes.root}>
            <Grid item xs={12}>
                <Typography>What is BEETOKEN?</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>BEETOKEN is the original token of the BeeGifts platform with the transaction symbol BGC, providing many utilities and added value to users on the platform through the staking reward and membership privilege program. Let's look around our business which makes BEETOKEN become more vital and potential.</Typography>
            </Grid>

        </Grid>
    )
}
