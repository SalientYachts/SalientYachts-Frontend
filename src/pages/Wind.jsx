import { Container, Typography } from '@mui/material'
import { Fade } from "react-awesome-reveal";
import styles from './Home/Home.module.css';
import Divider from '@mui/material/Divider';

const Wind = () => {
return (
        <>
            <div className={styles.mainContainer}>
                <Container maxWidth={false}>
                    <Fade duration="2000">
                        <div className={styles.flex}>
                            
                        </div>
                        <Typography variant="h2" align="center" className={styles.title} sx={{ margin: '1rem 1rem 0 1rem' }}>
                            WIND Token Infomation
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h3" color="white" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            Detailed infomation
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h6" color="white" align="center" sx={{ margin: '2rem 0 2rem' }}>
                            This is where we will display the total supply, circulatiing supply, liquidity and token Buyback / Repurchase values
                        </Typography>
                    </Fade>
                    
                    <Divider sx={{ width: '90%', margin: '2rem' }} />
                    
                </Container>
               
            </div>
        </>
    )
}
export default Wind;