import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button } from '@mui/material'

interface WatchNowProps {
    url?: URL;
    inline?: boolean; // applies inline styles
}

const WatchNowButton: React.FC<WatchNowProps> = ({url = 'https://www.youtube.com/@zacari_mc', inline = false}) => {
    return (
        <Box sx={{margin: `10px ${inline ? '10px' : '0px'}`, display: inline? 'inline' : 'block'}}>
            <Button variant="contained" href={url.toString()} target='_blank'>
            <YouTubeIcon sx={{ marginRight: '5px'}} />
                Watch Now
            </Button>
        </Box>
    )
}

export default WatchNowButton