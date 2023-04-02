import { Box, Container, Stack, Typography } from "@mui/material"
import Youtube from "../utilities/Youtube"
import React from "react"
import ImageCard from "../utilities/ImageCard"
import useIsSmallScreen from "@/hooks/useIsSmallScreen"
import WatchNowButton from "../utilities/WatchNowButton"

const LetsPlay: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();

    if(isSmallScreen){
        return (
            <Box sx={{ bgcolor: 'secondary.main', p: 3}}>
                <Typography variant="h2" color='primary.contrastText' sx={{ m: 1, mt: 3 }}>
                    Let&apos;s Play Series
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ bgcolor: 'secondary.main', p: 3}}>
            <Typography variant="h2" color='primary.contrastText' sx={{ m: 1, mt: 3 }}>
                Let&apos;s Play Series
                <WatchNowButton url={new URL("https://www.youtube.com/playlist?list=PLNXoRRqPgxuhiYXNaMbj0tmOYx3Vkn-fl")} inline />
            </Typography>

            <Stack spacing={2} direction={{ sm: 'column', md: 'row'}} sx={{ p: 2 }}>
                <ImageCard
                    src={`/images/LetsPlay-8.png`}
                    alt="Minecraft logo"
                    position='center'
                    aspect='4/5'
                />
                <ImageCard
                    src={`/images/LetsPlay-7.png`}
                    alt="Minecraft logo"
                    position='95%'
                    aspect='4/5'
                />
                <ImageCard
                    src={`/images/LetsPlay-5.png`}
                    alt="Minecraft logo"
                    position='87%'
                    aspect='4/5'
                />
            </Stack>

            <Stack direction='row' justifyContent='center'>
                <Typography variant="h6" component='span' color='primary.contrastText'>
                        + more on 
                </Typography>
                <Youtube smaller />
            </Stack>
        </Box>
    )
}

export default LetsPlay
