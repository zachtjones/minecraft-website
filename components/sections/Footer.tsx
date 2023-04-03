import { Grid, Typography } from "@mui/material"

const Footer: React.FC = () => {
    return (
        <Grid container columns={3} sx={{ p: 5}} bgcolor='secondary.main'>
            <Grid item xs={3} md={1}>
                <Typography variant='body1' color='secondary.contrastText'>
                    &copy; Zacari 2023
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer
