import { Box, Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Youtube from "../utilities/Youtube"
import WatchNowButton from "../utilities/WatchNowButton"
import ImageCard from "../utilities/ImageCard"

const LATEST_EPISODE = 4

function SkyBlock() {
    const images = [LATEST_EPISODE, LATEST_EPISODE - 1, LATEST_EPISODE - 2].map((number) =>
        <Grid xs={2} md={1} key={number} style={{ position: 'relative' }}>
            <ImageCard
                src={`/images/Skyblock-${number}.png`}
                alt={`SkyBlock Episode ${number} Thumbnail`}
                position='left'
                aspect='5/4'
            />
        </Grid>
    )
    images.push(
        <Grid xs={2} md={1} key={1} style={{ position: 'relative' }}>
            <ImageCard
                src='/images/Skyblock-more.png'
                alt="SkyBlock there's more"
                position='center'
                aspect='5/4'
            >
                <Typography variant="h6" color='secondary.contrastText'>+ more at</Typography>
                <Youtube smaller />
            </ImageCard>
        </Grid>
    )
    return (
        <Stack direction='row' sx={{ p: 2 }}>
            <Grid xs={12} md={4} display='flex'>
                <Stack direction='column' alignItems='center' sx={{ mt: 4, mr: 4 }} justifyContent='space-around'>
                    <Image
                        src='/images/zacari.png'
                        alt="Zacari's headshot"
                        width='100'
                        height='100'
                    />
                    <Typography variant="h2">SkyBlock Series</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Starting out with a single tree and some grass, let&apos;s see what I can do!
                    </Typography>
                    <WatchNowButton url={new URL("https://www.youtube.com/playlist?list=PLNXoRRqPgxuiVrGS_Vw9XbAv9bzQF8lW-")} />
                </Stack>
            </Grid>
            <Grid xs={12} md={8} container columns={2}>
                {images}
            </Grid>
        </Stack>
        
    )
}

export default SkyBlock
