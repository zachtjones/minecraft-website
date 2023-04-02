import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@mui/material'

function Youtube() {
    return (
        <>
            <YouTubeIcon 
                style={{ color: '#f00' }} 
                sx={{ width: 60, height: 50}} 
            />
            <Typography variant='h4' component='span' color='white'>@zacari_mc</Typography>
        </>
    )
}

export default Youtube