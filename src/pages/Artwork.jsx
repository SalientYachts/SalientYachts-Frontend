import { Container, Typography } from '@mui/material'
import { Fade } from "react-awesome-reveal";
import styles from './Home/Home.module.css';
import Divider from '@mui/material/Divider';

const Artwork = () => {
return (
        <>
            <div className={styles.mainContainer}>
                <Container maxWidth={false}>
                    <Fade duration="2000">
                        <div className={styles.flex}>
                            
                        </div>
                        <Typography variant="h2" align="center" className={styles.title} sx={{ margin: '1rem 1rem 0 1rem' }}>
                            NFT Artwork Collection
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h3" color="white" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            Get your collectable NFT - only available for purchase using $WIND
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h6" color="white" align="center" sx={{ margin: '2rem 0 2rem' }}>
                            We will release special Yacht NFT Artwork. All WIND tokens used for purchases will be burned to decrease supply and increase token value
                        </Typography>
                    </Fade>
                    
                    <Divider sx={{ width: '90%', margin: '2rem' }} />
                    
                </Container>
               
            </div>
        </>
    )
}
export default Artwork;