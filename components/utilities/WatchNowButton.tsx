import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Button } from '@mui/material'

interface WatchNowProps {
    url?: URL;
}

const WatchNowButton: React.FC<WatchNowProps> = ({url = 'https://www.youtube.com/@zacari_mc'}) => {
    return (
        <Box sx={{margin: '10px 0px'}}>
            <Button variant="contained" href={url.toString()} target='_blank'>
            <YouTubeIcon sx={{ marginRight: '5px'}} />
                Watch Now
            </Button>
        </Box>
    )
}

export default WatchNowButton