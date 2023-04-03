import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Youtube from '../utilities/Youtube';

function Cover() {
    return (
        <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
            <Image
                src="/images/minecraft-background.png"
                alt="Desert background with mountains in the distance"
                fill
                priority
                style={{ zIndex: -1, objectFit: 'cover' }}
            />
            <Box sx={{
                display: 'flex',
                alignItems: 'right',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                p: 2
            }}>
                <Youtube />
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'right',
                flexDirection: 'row',
                justifyContent: 'center',
                p: 2,
                mt: 5
            }}>
                <Typography variant='h2' component='h1' color='white'>Zacari</Typography> 
            </Box>
        </div>       
    )
}

export default Cover
