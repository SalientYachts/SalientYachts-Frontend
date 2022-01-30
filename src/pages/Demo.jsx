import { Container, Typography } from '@mui/material'
import { Fade } from "react-awesome-reveal";
import styles from './Home/Home.module.css';
import Divider from '@mui/material/Divider';

const Demo = () => {
return (
        <>
            <div className={styles.mainContainer}>
                <Container maxWidth={false}>
                    <Fade duration="2000">
                        <div className={styles.flex}>
                            
                        </div>
                        <Typography variant="h2" align="center" className={styles.title} sx={{ margin: '1rem 1rem 0 1rem' }}>
                            dApp Demo Program
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h3" color="white" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            Use Avalanche Testnet
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h6" color="white" align="center" sx={{ margin: '2rem 0 2rem' }}>
                            Use the app on testnet in demo mode using pretend cryptocurrencies and NFT.
                            See how the dApp functions and watch how your rewards grow continuosly in the same way as if you bought real NFTs!
                        </Typography>
                    </Fade>
                    
                    <Divider sx={{ width: '90%', margin: '2rem' }} />
                    
                </Container>
               
            </div>
        </>
    )
}
export default Demo;