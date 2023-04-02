import { Box, Typography } from "@mui/material"
import Image from "next/image"

function SkyBlock() {
    const images = [1,2,3,4].map((number) =>
        <Box key={number} sx={{ width: '250px' }} style={{ aspectRatio: '5/4', position: 'relative' }}>
            <Image
                src={`/images/about-${number}.png`}
                alt="Minecraft logo"
                fill
                style={{ objectFit: 'cover' }}
            />
        </Box>   
    )
    return (
        <Box sx={{ bgcolor: 'secondary.contrastText'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 4
            }}>
                <Box>
                    Image of me
                    <Typography variant="h2">SkyBlock Series</Typography>
                    Starting out with a single tree and some grass, let&apos;s see what I can do!
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexFlow: 'wrap',
                    justifyContent: 'none',
                    p: 3,
                    minWidth: '50%'
                }}>
                    {images}
                </Box>
            </Box>

            
        </Box>
    )
}

export default SkyBlock
