import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'; 
interface WatchNowProps {
    url?: URL;
}

const WatchNowButton: React.FC<WatchNowProps> = ({url: href = 'https://www.youtube.com/@zacari_mc'}) => {
    return (
        <Box sx={{margin: '10px 0px'}}>
            <Button variant="contained" href={href.toString()}>
            <YouTubeIcon sx={{ marginRight: '5px'}} />
            Watch Now
            </Button>
        </Box>
    )
}

export default WatchNowButton