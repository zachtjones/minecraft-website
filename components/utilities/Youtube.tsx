import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@mui/material'
import { Box } from '@mui/system';
import Link from 'next/link'; 

function Youtube() {
    return (
        <Link href='https://www.youtube.com/@zacari_mc'>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <YouTubeIcon 
                    sx={{ width: 60, height: 50, color:'primary.main'}} 
                />
                <Typography variant='h4' component='span' color='secondary.contrastText'>@zacari_mc</Typography>
            </Box>
        </Link>
    )
}

export default Youtube