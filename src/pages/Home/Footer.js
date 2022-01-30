import { AppBar, Toolbar, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
const Footer = () => {
    return (
        <AppBar position='static' sx={{ background: '#111111' }}>
            <Toolbar>
                <Typography variant='body1' color={grey[50]} align="center" sx={{ width: '100%' }}>
                    Copyright © 2022 Salient Yachts in Partnership Kaos Catamarans
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;