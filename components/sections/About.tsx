import { Box, Container, Grid, Typography } from "@mui/material"
import ImageCard from "../utilities/ImageCard"
import React from "react"
import useIsSmallScreen from "../../hooks/useIsSmallScreen";

const About: React.FC = () => {
    const isSmallScreen = useIsSmallScreen();

    const images = [1,2,3,4].map((number) =>
        <Grid item xs={12} md={6} key={number} sx={{ p: 3 }} style={{ position: 'relative' }}>
            <ImageCard
                src={`/images/about-${number}.png`}
                alt="Minecraft logo"
                aspect='16/9'
                position='center'
            />
        </Grid>
    )
    return (
        <Box sx={{ bgcolor: 'secondary.main', flexGrow: 1, p: 3 }}>
            <Container maxWidth="xl">
                <Grid container sx={{ p: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" color='secondary.contrastText' textAlign='center'>About Me</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ pl: 4 }}>
                        <Typography variant="body1" color='secondary.contrastText'>
                            I make videos on YouTube showing cool redstone contraptions, farms, and bases in Minecraft.
                        </Typography>
                        <Typography variant="body1" color='secondary.contrastText' sx={{ mt: 2 }}>
                            Currently, I&apos;m working on two series, a survival let&apos;s play and a survival skyblock world.
                        </Typography>
                    </Grid>

                    {isSmallScreen ? [images[1], images[3]] : images}
                </Grid>
            </Container>
        </Box>
    )
}

export default About
