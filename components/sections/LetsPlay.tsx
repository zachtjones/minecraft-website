import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Youtube from "../utilities/Youtube"

function LetsPlay() {
    const images1 = [1,2,3].map((number) =>
        <Box key={number} style={{ width: 'calc(33.33% - 20px)', aspectRatio: '4/5', position: 'relative' }}>
            <Image
                src={`/images/about-${number}.png`}
                alt="Minecraft logo"
                fill
                style={{ objectFit: 'cover' }}
            />
        </Box>   
    )
    return (
        <Box sx={{ bgcolor: 'secondary.main', p: 3}}>
            <Typography variant="h2" color='primary.contrastText' sx={{ m: 1, mt: 3 }}>
                Let&apos;s Play Series
            </Typography>

            <Box sx={{
                display: 'flex',
                flexFlow: 'wrap',
                justifyContent: 'space-around',
                p: 3
            }}>
                {images1}
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Typography variant="h6" component='span' color='primary.contrastText'>
                    + more on 
                </Typography>
                <Youtube smaller />
            </Box>
            
        </Box>
    )
}

export default LetsPlay
