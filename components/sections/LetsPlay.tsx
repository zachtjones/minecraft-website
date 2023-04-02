import { Box, Container, Grid, ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import Youtube from "../utilities/Youtube"
import React from "react"
import ImageCard from "../utilities/ImageCard"
import useIsSmallScreen from "@/hooks/useIsSmallScreen"
import WatchNowButton from "../utilities/WatchNowButton"
import data from '../../data/lets-play'

const LetsPlay: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();
    const latestEpisodes = data.slice(-3);
    const selectedEpisodes = data.filter((ep) => [8,7,5].includes(ep.number))

    return (
        <Box sx={{ bgcolor: 'secondary.main', p: 3}}>
            <Typography variant="h2" color='primary.contrastText' sx={{ m: 1, mt: 3 }}>
                Let&apos;s Play Series
                <WatchNowButton url={new URL("https://www.youtube.com/playlist?list=PLNXoRRqPgxuhiYXNaMbj0tmOYx3Vkn-fl")} inline />
            </Typography>

            <ImageList cols={ isSmallScreen ? 1 : 3 }>
                {selectedEpisodes.map((episode) => (
                    <ImageListItem sx={{ m: 1 }}>
                        <ImageCard
                            src={`/images/LetsPlay-${episode.number}.png`}
                            alt={episode.name}
                            position={episode.imagePosition || 'center'}
                            aspect='4/5'
                            linkTo={new URL(episode.url)}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
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
