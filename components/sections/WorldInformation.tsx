import { Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import React from "react"

const WorldInformation: React.FC = () => {
    const [world, setWorld] = React.useState('skyBlockEpisode4')

    const handleChange = (event: SelectChangeEvent) => {
        setWorld(event.target.value as string);
    };

    return (
        <Grid container columns={3} sx={{ m: 5}}>
            <Grid item xs={3} md={1}>
                <Typography variant='h3' sx={{ mb: 2 }}>
                    World Information
                </Typography>
                <Typography variant='body1'>
                    Want to follow along as I build?
                </Typography>
            </Grid>
            <Grid item xs={3} md={1}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1 }}>
                    SkyBlock 
                </Typography>
                <Typography variant='body1'>
                    Seed: 4351423038790370778
                </Typography>
                <Typography variant='body1'>
                    Mods: Carpet Sky Additions
                </Typography>
            </Grid>
            <Grid item xs={3} md={1}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1 }}>
                    Survival Let's Play
                </Typography>
                <Typography variant='body1'>
                    Seed: -9151561662370742852
                </Typography>
                <Typography variant='body1'>
                    Vanilla (unmodded)
                </Typography>
            </Grid>
            <Grid item xs={3} md={1}></Grid>
            <Grid item xs={3} md={1}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1, mt: 1 }}>
                    World Downloads
                </Typography>
                <InputLabel id='selectWorld'>Select the world you'd like to download</InputLabel>
                <Select
                    labelId='selectWorld'
                    id='selectWorld'
                    value={world}
                    onChange={handleChange}
                >
                    <MenuItem value='skyBlockEpisode4'>SkyBlock (Episode 4)</MenuItem>
                    <MenuItem value='letsPlayEpisode8'>Let's Play (Episode 8)</MenuItem>
                </Select>
            </Grid>
        </Grid>
    )
}

export default WorldInformation
