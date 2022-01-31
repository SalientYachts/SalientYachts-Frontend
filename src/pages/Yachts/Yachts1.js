import { Button, Container, Typography } from "@mui/material"
import { Fade } from "react-awesome-reveal";
import styles from './Yachts.module.css';
import kaosXE54 from "../../assets/kaosXE54.png";
import lastFromProductionMould1 from "../../assets/kaosXE54/last-build-from-moulds-1.jpg";
import lastFromProductionMould2 from "../../assets/kaosXE54/last-build-from-moulds-2.jpg";
import lastFromProductionMould3 from "../../assets/kaosXE54/last-build-from-moulds-3.jpg";
import productionMould1 from "../../assets/kaosXE54/ProductionMould-1.jpg";
import productionMould2 from "../../assets/kaosXE54/ProductionMould-2.jpeg";
import deckView from "../../assets/kaosXE54/deck-view.jpg";
import frontWaterlineView from "../../assets/kaosXE54/front-waterline-view.jpg";
import Footer from "pages/Home/Footer";
import Divider from '@mui/material/Divider';

const Yachts1 = () => {

   

    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="false">
                <Fade duration="2000">
                    <Typography variant="h4" align="center" className={styles.title} sx={{ margin: '2rem 0 2rem' }}>
                        Kaos XE54 Offshore Cruiser
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <img src={kaosXE54} alt="salient one" className={styles.mainImage} />
                </Fade>
                <Fade duration="2000">
                    <Typography variant="h5" align="center" className={styles.subHead} sx={{ margin: '2rem 0 2rem' }}>
                        Starting from US $ 800 000
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        – 54ft Sail or Power Catamaran –
                    </Typography>
                </Fade>
                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0 2rem' }}>
                        We chose to purchase a hull mould, tried and tested for both performance and safety (Scape 51), for our production moulds!
                        <br />
                        Then we modernized the Cabins, Bridge Deck and Roof, Galley and Saloon areas,
                        <br />
                        and added wave piercing bows to suite the discerning market .
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
                        Length 54ft
                        <br />
                        Beam 28ft
                        <br />
                        Disp. 10 000kgs
                        <br />
                        Engines 2 x 50hp+ Diesels
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://salientyachts.com/Documents/Kaos-XE52-Offshore-Cruiser-Package.pdf" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the XE54 Offshore Cruiser Package Specifications
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

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Build timeline – 12 months from date of order
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Manufactured from composite fiberglass and foam core using only approved materials.
                        <br />
                        Scott Bader’s industry leading products are approved by the key industry standards as appropriate, such as Lloyds, ClassNK, DNV-GL and RINA.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://salientyachts.com/Documents/Scott-Bader-Marine-Guide.pdf" target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the Scott Bader Marine Guide</Button>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '2rem 0' }}>
                        In the words from an owner of the previous models: “Whether chartering with 65 passengers or racing in 25 knots upwind at 14 knots and,
                        <br />
                        as we found recently, hitting high twenties under spinnaker (28.2 knots!) she feels like a real race horse.”
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        These are pictures of the last yacht that came from the production moulds
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <div className={styles.flex} style={{ marginBottom: '1rem' }}>
                        <img className={styles.designImage} src={lastFromProductionMould1} alt="last from productionMould 1" />
                        <img className={styles.designImage} src={lastFromProductionMould2} alt="last from productionMould 2" />
                        <img className={styles.designImage} src={lastFromProductionMould3} alt="last from productionMould 3" />
                    </div>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

                <Fade duration="2000">
                    <Typography variant="h6" align="center" className={styles.subHead} color="white" sx={{ margin: '2rem 0 2rem' }}>
                        Photos below show production moulds.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <Typography variant="body1" align="center" color="white" sx={{ margin: '0 0 2rem' }}>
                        Build photos show last power version built, but Sailing version is also available.
                    </Typography>
                </Fade>

                <Fade duration="2000">
                    <div className={styles.flex} style={{ marginBottom: '1rem' }}>
                        <img className={styles.designImage} src={productionMould1} alt="productionMould 1" />
                        <img className={styles.designImage} src={productionMould2} alt="productionMould1 2" />
                        <img className={styles.designImage} src={deckView} alt="deckView" />
                        <img className={styles.designImage} src={frontWaterlineView} alt="front Waterline View" />
                    </div>
                </Fade>

                <Fade duration="2000">
                    <Button variant="contained" href="http://dutoityachtdesign.co.za/the-scape-51-cat-an-owners-perspective/"  target="_blank" sx={{ display: 'block', margin: 'auto', width: 'fit-content' }}>Click here for the full Owners perspective on the production moulds</Button>
                </Fade>

                <Divider sx={{ width: '90%', margin: '2rem' }} />

            </Container>
            <Footer />
        </div>
    )
}
export default Yachts1;