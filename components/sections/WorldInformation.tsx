import { Button, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, Link } from "@mui/material"
import React from "react"

const WorldInformation: React.FC = () => {
    const [world, setWorld] = React.useState('skyBlockEpisode4')

    const handleChange = (event: SelectChangeEvent) => {
        setWorld(event.target.value as string);
    };

    const handleDownload = () => {
        const link = document.createElement("a")
        link.download = `${world}.zip`
        link.href = `http://minecraft-world-downloads.s3-website-us-west-1.amazonaws.com/${world}.zip`
        link.click()
    }

    const gridItemPadding = 2

    return (
        <Grid container columns={3} sx={{ m: 5}}>
            <Grid item xs={3} md={1} sx={{ p: gridItemPadding }}>
                <Typography variant='h3' sx={{ mb: 2 }}>
                    World Information
                </Typography>
                <Typography variant='body1'>
                    Want to follow along as I build?
                </Typography>
            </Grid>
            <Grid item xs={3} md={1} sx={{ p: gridItemPadding }}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1 }}>
                    SkyBlock 
                </Typography>
                <Typography variant='body1'>
                    Seed: 4351423038790370778
                </Typography>
                <Typography variant='body1'>
                    Mods: <Link target='_blank' href='https://beta.curseforge.com/minecraft/mc-mods/carpet-sky-additions'>Carpet Sky Additions</Link>
                </Typography>
                <Typography variant="body1">
                    * You only need this mod if you want to create a new SkyBlock world
                </Typography>
            </Grid>
            <Grid item xs={3} md={1} sx={{ p: gridItemPadding }}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1 }}>
                    Survival Let&apos;s Play
                </Typography>
                <Typography variant='body1'>
                    Seed: -9151561662370742852
                </Typography>
                <Typography variant='body1'>
                    Vanilla (unmodded)
                </Typography>
            </Grid>
            <Grid item xs={3} md={1}></Grid>
            <Grid item xs={3} md={1} sx={{ p: gridItemPadding }}>
                <Typography variant='h4' color='primary.main' sx={{ mb: 1, mt: 4 }}>
                    World Downloads
                </Typography>
                <InputLabel id='selectWorld'>Select the world you&apos;d like to download</InputLabel>
                <Select
                    labelId='selectWorld'
                    id='selectWorld'
                    value={world}
                    onChange={handleChange}
                >
                    <MenuItem value='skyBlockEpisode4'>SkyBlock (Episode 4)</MenuItem>
                    <MenuItem value='letsPlayEpisode8'>Let&apos;s Play (Episode 8)</MenuItem>
                </Select>
                <Button variant='contained' sx={{ ml: 1}} onClick={handleDownload}>
                    Download
                </Button>
                <Typography variant='body1'>
                    All of these worlds are for Java&nbsp;Edition.
                    <br/>
                    Play on Bedrock? use <Link target="_blank" href='https://chunker.app/'>Chunker</Link> to convert your world
                </Typography>
            </Grid>
        </Grid>
    )
}

export default WorldInformation
