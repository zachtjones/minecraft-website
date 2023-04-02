import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Youtube from "../utilities/Youtube"

const LATEST_EPISODE = 4

function SkyBlock() {
    const images = [LATEST_EPISODE, LATEST_EPISODE - 1, LATEST_EPISODE - 2].map((number) =>
        <Box key={number} sx={{ width: '50%' }} style={{ aspectRatio: '5/4', position: 'relative' }}>
            <Image
                src={`/images/Skyblock-${number}.png`}
                alt={`SkyBlock Episode ${number} Thumbnail`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'left bottom' }}
            />
        </Box>
    )
    images.push(
        <Box key={1} sx={{ width: '50%' }} style={{ aspectRatio: '5/4', position: 'relative' }}>
            <Box sx={{ 
                position: 'relative', 
                zIndex: 1, 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'space-around',
                mt: 3
            }}>
                <Box>
                    <Typography variant="h6" color='secondary.contrastText'>+ more at</Typography>
                    <Youtube/>
                </Box>
            </Box>
            <Image
                src='/images/Skyblock-more.png'
                alt="SkyBlock there's more"
                fill
                style={{ objectFit: 'cover', objectPosition: 'left bottom' }}
            />
            <Typography variant="h6">hi</Typography>
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
                    <Box sx={{ m: 3, display: 'flex', justifyContent: 'space-around'}}>
                        <Image
                            src='/images/zacari.png'
                            alt="Zacari's headshot"
                            width='100'
                            height='100'
                        />
                    </Box>
                    <Typography variant="h2">SkyBlock Series</Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Starting out with a single tree and some grass, let&apos;s see what I can do!
                    </Typography>
                </Box>
                <Box style={{position: 'relative'}} sx={{
                    display: 'flex',
                    flexFlow: 'wrap',
                    justifyContent: 'none',
                    pr: 3,
                    pl: 3,
                    minWidth: '70%'
                }}>
                    {images}
                </Box>
            </Box>

            
        </Box>
    )
}

export default SkyBlock
