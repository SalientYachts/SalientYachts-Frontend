import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { SALIENT_YACHT_NFT_ADDR, SALIENT_YACHT_NFT_ABI, SALIENT_YAGHT_STREAM_ABI, CHAINLINK_AVAX_USD_ADDR, CHAINLINK_AGGREGATORV3_INTERFACE_ABI } from "../constants";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useMoralis } from "react-moralis";
import Divider from '@mui/material/Divider';
import ImgCommon from '../assets/Common.jpg';
import ImgRare from '../assets/Rare.jpg';
import ImgUltra from '../assets/Ultra.jpg';
import { Button, Chip, Slider, LinearProgress, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';


const styles = {
  NFT: {
    width: "100%",
    maxWidth: "350px",
    resizeMode: 'contain'
  },
}


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



function SYBuyNFT() {
  const [expanded, setExpanded] = React.useState('');
  const { Moralis, isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    if (panel === 'panel1') {
      getAVAUSDTPrice()
      getRemainingNFTBalance()
    }
  };

  const [progress, setProgress] = useState(0);
  const [remainingNFTBalance, setRemainingNFTBalance] = useState(0);
  const [noOfNfts, setNoOfNfts] = useState(0);
  const [nftType, setNftType] = useState(0); //0: Common, 1: Rare, 2: Ultra Rare 
  const [nftTxnAmount, setNftTxnAmount] = useState(0n);
  const [streamContractAddr, setStreamContractAddr] = useState();
  const [currentNftPrice, setCurrentNftPrice] = useState(0);
  const [nftPrice, setNftPrice] = useState({
    price: '',
    0: '',
    1: '',
    2: ''
  })

  const nftContractOptions = {
    contractAddress: SALIENT_YACHT_NFT_ADDR,
    abi: SALIENT_YACHT_NFT_ABI,
  };

  const streamContractOptions = {
    contractAddress: streamContractAddr,
    abi: SALIENT_YAGHT_STREAM_ABI,
  };

  const chainlinkOptions = {
    contractAddress: CHAINLINK_AVAX_USD_ADDR,
    abi: CHAINLINK_AGGREGATORV3_INTERFACE_ABI,
  };

  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [commonQty, setCommonQty] = useState(1)
  const [rareQty, setRareQty] = useState(1)
  const [ultraQty, setUltraQty] = useState(1)
  const [balanceLoading, setBalanceLoading] = useState(true)

  const getAVAUSDTPrice = async () => {
    const latestPrice = await Moralis.executeFunction({
      functionName: 'latestRoundData',
      params: {}, ...chainlinkOptions
    });
    console.log("----> latestPrice: ", latestPrice);
    if (latestPrice.answer) {
      const price = Number(latestPrice.answer) / (10 ** 8);
      console.log("-----> 1 AVAX = ", price, " USD");
      console.log("-----> 1 USD    = ", 1 / price, " AVAX");
      console.log("-----> 10 USD   = ", 10 / price, " AVAX");
      console.log("-----> 100 USD  = ", 100 / price, " AVAX");
      parseFloat(Moralis.Units.FromWei(1 / price,).toFixed(4))
      setNftPrice({
        price: price,
        0: parseFloat((1 / price).toFixed(4)),
        1: parseFloat((10 / price).toFixed(4)),
        2: parseFloat((100 / price).toFixed(4))
      })
      
    }
  }

  const getRemainingNFTBalance = async () => {
    const balance  = await Moralis.executeFunction({
      functionName: 'getRemainingNFTBalance',
      params: {}, ...nftContractOptions
    });
    console.log("----> remainingNFTBalance: " + remainingNFTBalance);
    setRemainingNFTBalance(balance)
    setProgress(100 - (balance / 18000) * 100)
    setBalanceLoading(false)
  }

  const buyNFT = async (noOfNfts, nftType, nftTxnAmount) => {
    console.log("----> noOfNfts     = ", noOfNfts);
    console.log("----> nftType     = ", nftType);
    console.log("----> nftTxnAmount = ", nftTxnAmount);
    console.log("----> Amount = ", noOfNfts * nftTxnAmount * (10 ** 18))
    const nftTxnResult = await Moralis.executeFunction({
      functionName: 'buyYachtNFT', msgValue: noOfNfts * nftTxnAmount * (10 ** 18),
      params: {
        numberOfTokens: noOfNfts,  // max 20
        nftType: nftType,  //0,1,2
      }, ...nftContractOptions
    });
    console.log("----> nftTxnResult = ", nftTxnResult);
    console.log("----> currentNftPrice = ", currentNftPrice);
  }

  function LinearProgressWithLabel(props) {
    return (
      <div>
        <Typography sx={{ width: '90%', m: '1rem auto 0', color: '#1fc7d3'}} variant="body1">
          Only {remainingNFTBalance} shares remaining out of 18000
        </Typography>
        <Divider sx={{ width: '90%', margin: '1rem' }} />
        <Box sx={{ width: '90%', m: 'auto', display: 'flex', alignItems: 'center' }}>
        
        <Box sx={{ minWidth: 35, }}>
            <Typography variant="body2" color="text.secondary">
            {`${Math.round(props.value)}% SOLD`}
            </Typography>
        </Box>  
        
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
          </Box>
          
        </Box>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', opacity: '0.85'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Buy "Salient One" NFT Yacht Shares</Typography>
        </AccordionSummary>
        {balanceLoading ? (
          <CircularProgress size={30} sx={{ display: 'block', m: '1rem auto 1rem' }} />
        ) : (
          <>
        <div style={{ width: '100%' }}><LinearProgressWithLabel value={progress} /> </div>
        <AccordionDetails sx={{ width: "100%", display: 'flex', AlignItems: "center", JustifyContent: "centre" }}>

          
          <Card sx={{ maxWidth: 350, margin: "15px" }}>
            <CardMedia
              component="img"
              style={styles.NFT}
              img src={ImgCommon}
              alt="Common NFT"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Common NFT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1 Yacht Share <br /> <br />
                Includes 2400 WIND <br />
                Vested over 10 Years<br />
                0.657098 WIND per Day<br />
              </Typography>
            </CardContent>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', fontSize: "1.5rem", color: '#0f0909', backgroundColor: '#1fc7d3' }} label="$1 USD" />
            </CardActions>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', backgroundColor: '#e84241' }} label={nftPrice[0] + " AVAX"} />
              {/* <Chip sx={{ ml: '1em', mr: '1em', p: '0.5em' }} label="$1 USD" /> */}
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='body1'>
                Quantity: {commonQty} NFTs
              </Typography>
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Slider
                aria-label="Always visible"
                value={commonQty}
                step={1}
                min={1}
                max={20}
                onChange={(e) => setCommonQty(e.target.value)}
                valueLabelDisplay="auto"
                sx={{ width: '8rem' }}
              />
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center', mb: '1em' }}>
              <Button size='small' sx={{ display: 'block', fontSize: "1.2rem", mr: '1rem' }} onClick={() => 
                buyNFT(commonQty, '0', nftPrice[0])} variant='contained'>Buy</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350, margin: "15px" }}>
            <CardMedia
              component="img"
              style={styles.NFT}
              img src={ImgRare}
              alt="Common NFT"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rare NFT
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 Yacht Shares <br /> <br />
                Includes 24 000 WIND<br />
                Vested over 10 Years<br />
                6.570977 WIND per Day<br />
              </Typography>
            </CardContent>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', fontSize: "1.5rem", color: '#0f0909', backgroundColor: '#1fc7d3' }} label="$10 USD" />
            </CardActions>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', backgroundColor: '#e84241' }} label={nftPrice[1] + " AVAX"} />
              {/* <Chip sx={{ ml: '1em', mr: '1em', p: '0.5em' }} label="$1 USD" /> */}
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='body1'>
                Quantity: {rareQty} NFTs
              </Typography>
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Slider
                aria-label="Always visible"
                value={rareQty}
                step={1}
                min={1}
                max={20}
                onChange={(e) => setRareQty(e.target.value)}
                valueLabelDisplay="auto"
                sx={{ width: '8rem' }}
              />
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center', mb: '1em' }}>
              <Button size='small' sx={{ display: 'block', fontSize: "1.2rem", mr: '1rem' }} onClick={() => 
                buyNFT(rareQty, 1, nftPrice[1])} variant='contained'>Buy</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 350, margin: "15px" }}>
            <CardMedia
              component="img"
              style={styles.NFT}
              img src={ImgUltra}
              alt="Common NFT"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" 
              style={{  textalign: 'center'}}>
                Ultra Rare NFT    
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100 Yacht Shares <br /> <br />
                Includes 240 000 WIND<br />
                Vested over 10 Years<br />
                65.709768 WIND per Day<br />
              </Typography>
            </CardContent>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', fontSize: "1.5rem", color: '#0f0909', backgroundColor: '#1fc7d3' }} label="$100 USD" />
            </CardActions>
            <CardActions>
              <Chip sx={{ m: 'auto', p: '0.5em', backgroundColor: '#e84241' }} label={nftPrice[2] + " AVAX"} />
              {/* <Chip sx={{ ml: '1em', mr: '1em', p: '0.5em' }} label="$1 USD" /> */}
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Typography variant='body1'>
                Quantity: {ultraQty} NFTs
              </Typography>
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center' }}>
              <Slider
                aria-label="Always visible"
                value={ultraQty}
                step={1}
                min={1}
                max={20}
                onChange={(e) => setUltraQty(e.target.value)}
                valueLabelDisplay="auto"
                sx={{ width: '8rem' }}
              />
            </CardActions>
            <CardActions sx={{ justifyContent: 'center', alignItems: 'center', mb: '1em' }}>
              <Button size='small' sx={{ display: 'block', fontSize: "1.2rem", mr: '1rem' }} onClick={() => 
                buyNFT(ultraQty, 2, nftPrice[2])} variant='contained'>Buy</Button>
            </CardActions>
          </Card>


        </AccordionDetails>
        </>
        )
      }

      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Buy Salient Yachts Hull #2 - NFT Shares</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
             Coming soon ....
          </Typography>

        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Buy Salient Yachts Hull #3 - NFT Shares</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Typography>
            Coming soon ....
          </Typography>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SYBuyNFT