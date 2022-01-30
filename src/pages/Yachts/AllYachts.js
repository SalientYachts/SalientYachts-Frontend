import { Button, Container, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import styles from './Yachts.module.css';
import kaosXC64 from "../../assets/kaosXC64.jpg";
import salientOne from "../../assets/salientOne.jpeg";
import kaosXE54 from "../../assets/kaosXE54.png";

const AllYachts = () => {
    const cards = [
        { img: salientOne, title: "Salient One", link: "/Yachts" },
        { img: kaosXE54, title: "Kaos XE54 Offshore Cruiser", link: "/Yachts1" },
        { img: kaosXC64, title: "Kaos XC64 Full Carbon Cruiser", link: '/Yachts2' }
    ]

    return (
        <div style={{ minHeight: '100vh', width: '100%' }}>
            <Container maxWidth="false">
                <Fade duration={2000}>
                    <Typography variant='h3' align="center" gutterBottom sx={{ mb: '2rem' }} className={styles.title}>
                        Available Yachts
                    </Typography>
                </Fade>

                <div className={styles.flex}>
                    {cards.map((el, index) => {
                        return (
                            <Fade duration="2000" key={index}>
                                <div>
                                    <Typography variant='h5' color="white" gutterBottom align="center">
                                        {el.title}
                                    </Typography>
                                    <div className={styles.card + " " + styles.allYachtsCard}>
                                        <img className={styles.cardImg} src={el.img} alt={el.title} />
                                        <Button variant='contained' component={Link} to={el.link}>Click here for details</Button>
                                    </div>
                                </div>
                            </Fade>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}
export default AllYachts;