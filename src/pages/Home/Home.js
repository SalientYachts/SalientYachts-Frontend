import { Button, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import logo from "../../assets/logo.png";
import kaosXC64 from "../../assets/kaosXC64.jpg";
import salientOne from "../../assets/salientOne.jpeg";
import kaosXE54 from "../../assets/kaosXE54.png";
import styles from './Home.module.css';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const Home = () => {

    const consultants = [
        "Marine Engineering",
        "Resin-Infusion Composite Engineering",
        "Custom Stainless Steel",
        "Mechanical & Electrical specialists"
    ]
    const consultants2 = [
        "CAD Design and Rendering",
        "Financial Services",
        "SABBEX Member"
    ]
    const mainCard = { img: salientOne, title: "Salient One" };
    const card1 = [
        { img: kaosXE54, title: "Kaos XE54 Offshore Cruiser" },
        { img: kaosXC64, title: "Kaos XC64 Full Carbon Cruiser" }
    ]

    return (
        <>
            <div className={styles.mainContainer}>
                <Container maxWidth={false}>
                    <Fade duration="2000">
                        <div className={styles.flex}>
                            <img src={logo} className={styles.logo} alt="salient yachts" />
                        </div>
                        <Typography variant="h2" align="center" className={styles.title} sx={{ margin: '1rem 1rem 0 1rem' }}>
                            Salient Yachts
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h3" color="white" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            Overview
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="h6" color="white" align="center" sx={{ margin: '2rem 0 2rem' }}>
                            Salient Yachts owns production moulds for manufacturing 54ft / 64ft Luxury Catamarans.
                        </Typography>
                    </Fade>
                    <Fade duration="2000">
                        <Typography variant="body1" align="center" sx={{ width: '80%', margin: 'auto' }}>
                            Our shipyard is a complete marine facility.
                            Our impressive 20 000m2 property of which 3500m2 is factory space and 10 000m2 concreted flat surface.
                            This currently allows us to build 4x Luxury 54ft Catamarans simultaneously!
                            We can upgrade our infrastructure further, to enable building up to 8x Catamarans per year.
                            Depending on the spec level, current lead times are less than 12 months.
                        </Typography>
                        <Divider sx={{ width: '90%', margin: '2rem' }} />
                    </Fade>

                    <Fade duration="2000">
                        <Typography variant="h4" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            We have a full specialist marine facility with the following consultants:
                        </Typography>
                    </Fade>
                    <div className={styles.flex}>
                        <List>
                            {consultants.map((single, index) => {
                                return (
                                    <Fade duration="2000" key={index}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EngineeringIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={single} />
                                        </ListItem>
                                    </Fade>
                                )
                            })}
                        </List>
                        <List>
                            {consultants2.map((single, index) => {
                                return (
                                    <Fade duration="2000" key={index}>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EngineeringIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={single} />
                                        </ListItem>
                                    </Fade>
                                )
                            })}
                        </List>
                        <Divider sx={{ width: '90%', margin: '2rem' }} />
                    </div>
                    <Fade duration="2000">
                        <Typography variant="h4" align="center" className={styles.overview} sx={{ margin: '2rem 0 2rem' }}>
                            Yacht Showcase
                        </Typography>
                        <Divider sx={{ width: '90%', margin: '2rem' }} />
                    </Fade>


                    <div className={styles.flex}>

                        <Fade duration="2000">
                            <div>
                                <Typography variant='h5' color="white" gutterBottom align="center">
                                    {mainCard.title}
                                </Typography>
                                <div className={styles.card + " " + styles.cardPrimary}>
                                    <img className={styles.cardImg} src={mainCard.img} alt={mainCard.title} />
                                    <Button variant='contained' component={Link} to="/AllYachts">Click here for details</Button>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className={styles.flex}>
                        {card1.map((el, index) => {
                            return (
                                <Fade duration="2000" key={index}>
                                    <div>
                                        <Typography variant='h5' color="white" gutterBottom align="center">
                                            {el.title}
                                        </Typography>
                                        <div className={styles.card + " " + styles.cardSecondary}>
                                            <img className={styles.cardImg} src={el.img} alt={el.title} />
                                            <Button variant='contained' component={Link} to="/AllYachts">
                                                Click here for details</Button>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>

                    <Divider sx={{ width: '90%', margin: '2rem' }} />

                </Container>
                <Footer />
            </div>
        </>
    )
}
export default Home;