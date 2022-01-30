import { Button, Container, Typography } from "@mui/material"
import { Fade } from "react-awesome-reveal";
import styles from './Yachts.module.css';
import kaosXC64 from "../../assets/kaosXC64.jpg";
import pic1 from "../../assets/kaosXC64/1.jpg";
import Footer from "pages/Home/Footer";
import Divider from '@mui/material/Divider';

const Yachts2 = () => {

    

    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="false">
                <Fade duration="2000">
                    <Typography variant="h4" align="center" className={styles.title} sx={{ margin: '2rem 0 2rem' }}>
                        Kaos XC64 Performance Cruiser
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <img src={kaosXC64} alt="kaosxc64" className={styles.mainImage} />
                </Fade>
                <Fade duration="2000">
                    <Typography variant="h5" align="center" className={styles.subHead} sx={{ margin: '2rem 0 2rem' }}>
                        Starting from US $ 1 800 000
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        64ft High performance Sailing Catamaran
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        This is larger, performance focused, full carbon fibre version of the Koas XE54 !
                        <br />
                        Featuring 4x Cabins with spacious en suite heads, Bridge Deck and Roof, Galley and Saloon areas,
                        <br />
                        owners cabin study / office and a separate crew cabin with head in the front bow.
                    </Typography>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Specifications
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Length 64ft
                        <br />
                        Beam 31ft
                        <br />
                        Disp. 12 000kgs
                        <br />
                        Engines 2 x 80hp+ Diesels
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://salientyachts.com/Documents/Kaos-XE52-Offshore-Cruiser-Package.pdf" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the XC64 Offshore Cruiser Package Specifications
                    </Button>
                </Fade>


                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Manufactured under SAMSA certification for commercial use 12 Passenger endorsement.
                        <br />
                        Up to 60 passengers for day trips pending Incline test once vessel is complete and launched.
                        <br />
                        Our shipyard is registered with SABBEX (Member of the South African Boatbuilders Export Council / Boating South Africa)
                    </Typography>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Build timeline – 12 months from date of order
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Manufactured from composite carbon fiber and foam core using only approved materials.
                        <br />
                        Scott Bader’s industry leading products are approved by the key industry standards as appropriate, such as Lloyds, ClassNK, DNV-GL and RINA.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://salientyachts.com/Documents/Scott-Bader-Marine-Guide.pdf" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content', marginBottom: '20px' }}>Click here for the Scott Bader Marine Guide</Button>
                </Fade>

                <Fade duration="2000">
                    <div className={styles.flex} style={{ marginBottom: '1rem' }}>
                        <img className={styles.designImage} src={pic1} alt="pic 1" />
                    </div>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts2;