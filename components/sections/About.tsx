import { Box, Typography } from "@mui/material"
import Image from "next/image"

function About() {
    const images = [1,2,3,4].map((number) =>
        <Box key={number} sx={{ m: 3 }} style={{ width: '45%', minWidth: 'max(400px, 45%)', aspectRatio: '16/9', position: 'relative' }}>
            <Image
                src={`/images/about-${number}.png`}
                alt="Minecraft logo"
                fill
                style={{ objectFit: 'cover' }}
            />
        </Box>   
    )
    return (
        <Box sx={{ bgcolor: 'secondary.main'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 4
            }}>
                <Typography variant="h2" color='secondary.contrastText'>About Me</Typography>
                <Box maxWidth="50%">
                    <Typography variant="body1" component='div' color='secondary.contrastText'>
                        Hi! I make videos on YouTube showing cool redstone contraptions, farms, and bases in Minecraft.
                    </Typography>
                    <Typography variant="body1" component='div' color='secondary.contrastText' sx={{ mt: 2 }}>
                        Currently, I&apos;m working on two series, a survival let&apos;s play and a survival skyblock world.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexFlow: 'wrap',
                justifyContent: 'space-between',
                p: 3,
                pt: 0
            }}>
                {images}
            </Box>
        </Box>
    )
}

export default About
