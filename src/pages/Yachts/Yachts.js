import { Button, Container, Typography } from "@mui/material"
import { Fade } from "react-awesome-reveal";
import styles from './Yachts.module.css';
import salientOne from "../../assets/salientOne.jpeg";
import inHull from "../../assets/salientOne/inHull.png";
import interior from "../../assets/salientOne/interior.jpg";
import mainDeck from "../../assets/salientOne/mainDeck.png";
import tag60 from "../../assets/salientOne/tag60.jpg";
import 'react-multi-carousel/lib/styles.css';
import Footer from "pages/Home/Footer";
import pic1 from "../../assets/salientOne/1.jpg";
import pic2 from "../../assets/salientOne/2.jpg";
import pic3 from "../../assets/salientOne/3.jpg";
import pic4 from "../../assets/salientOne/4.jpg";
import pic5 from "../../assets/salientOne/5.jpg";
import pic6 from "../../assets/salientOne/6.jpg";
import pic7 from "../../assets/salientOne/7.jpg";
import pic8 from "../../assets/salientOne/8.jpg";
import Divider from '@mui/material/Divider';

const Yachts = () => {



    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="false">
                <Fade duration="2000">
                    <Typography variant="h4" align="center" className={styles.title} sx={{ margin: '2rem 0 2rem' }}>
                        Salient One - Tag 50 Catamaran
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <img src={salientOne} alt="salient one" className={styles.mainImage} />
                </Fade>
                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} sx={{ margin: '2rem 0 2rem' }}>
                        Designed for speed and comfort.
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        This carbon fibre / resin composite vessel, manufactured by Vacuum Infusion, combines maximum strength with minimum weight.
                        <br />
                        This catamaran, is currently a blank canvas, which represents great value and has already completed a 580 mile coastal voyage.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        LIMITED EDITITION:  Hull #2 of 2
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Once in lifetime opportunity to own this rare yacht type
                    </Typography>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        For the discerning investor :
                    </Typography>
                </Fade>


                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Considering her pedigree, upgrading Salient One to a Luxury Cruising Catamaran can lift the value to over $1’800’000.
                        <br />
                        Our vision includes Lithium-Ion batteries, a solar system, and a completely customized finish for the client with singular tastes.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Designed by Greg Young, the TAG 50 is a perfect blend between sailing enjoyment, cruising comfort, performance and ease of ownership.
                        <br />
                        The unique and innovative layout sets the standard and breaks into new territory altogether.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Imagine …… a super yacht size owners cabin, full beam cockpit/saloon living areas, 2 private (owners hull style) guest cabins,
                        massive galley, dedicated outboard sailing cockpits and much, much more.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Built to high production standards, the TAG 50 is also affordable, however the bottom-line is the enjoyment of sailing and getting precise feedback and exhilaration at the helm.
                        <br />
                        This vessel has a range of features that set the TAG 50 apart, yet the overall foundation for this design is based on a very pleasing and timeless aesthetic approach.
                        <br />
                        This is a beautiful looking vessel. Underlining this excellent and exciting appearance, the TAG 50 layout defies convention, yet it works so incredibly well.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://salientyachts.com/brochure.pdf" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for a Downloadable Brochure</Button>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <div className={styles.flex}>
                        <img className={styles.designImage} src={mainDeck} alt="main deck" />
                        <img className={styles.designImage} src={interior} alt="interior" />
                        <img className={styles.designImage} src={inHull} alt="in hull" />
                    </div>
                </Fade>

                
                <Fade duration="2000">
                    <Button variant="contained" href="https://www.youngyachtdesign.com/tag-50" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content', marginTop: "20px" }}>Click here to go the Designer website - Greg Young Tag 50</Button>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h4" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Preview
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <div className={styles.flex} style={{ marginBottom: '1rem' }}>
                        <img className={styles.designImage} src={pic1} alt="pic 1" />
                        <img className={styles.designImage} src={pic2} alt="pic 2" />
                        <img className={styles.designImage} src={pic3} alt="pic 3" />
                        <img className={styles.designImage} src={pic4} alt="pic 4" />
                        <img className={styles.designImage} src={pic5} alt="pic 5" />
                        <img className={styles.designImage} src={pic6} alt="pic 6" />
                        <img className={styles.designImage} src={pic7} alt="pic 7" />
                        <img className={styles.designImage} src={pic8} alt="pic 8" />
                    </div>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h4" align="center" className={styles.title} sx={{ margin: '2rem 0 2rem' }}>
                        Her sister ship - Tag 60
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        The Tag 60 catamaran can sail at 20% faster than wind speed and able to ‘FLY’ a hull.
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <img src={tag60} alt="tag - 60" style={{ width: '80%', margin: 'auto' }} />
                </Fade>
                
                <Divider sx={{ width: '90%', margin: '2rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts;