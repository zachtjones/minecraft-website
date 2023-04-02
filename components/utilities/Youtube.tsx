import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography';
import { Box } from '@mui/system';
import Link from 'next/link'; 

function Youtube(props: { smaller?: Boolean }) {
    let width = 60
    let height = 50
    let variant: Variant = 'h4'
    if (props.smaller) {
        width = 40
        height = 30
        variant = 'h6'
    }

    return (
        <Link href='https://www.youtube.com/@zacari_mc' style={{ display: 'inline-block'}}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <YouTubeIcon 
                    sx={{ width: width, height: height, color:'primary.main'}} 
                />
                <Typography variant={variant} component='span' color='secondary.contrastText'>@zacari_mc</Typography>
            </Box>
        </Link>
    )
}

export default Youtube