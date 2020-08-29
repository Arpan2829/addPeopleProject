import React,{useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dashImage from '../../Assets/toget.png'
import dashImagefirst from '../../Assets/demol.png'
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    
  }));

const LandingPage=()=>{
    const classes = useStyles();
    const [login, setLogIn] = useState(false)
    const [signup, setSignup] = useState(false)

    if(login) 
        return <Redirect to= "/"/>
    else if(signup)
    return <Redirect to= "/SignUp"/>
    return(<div>
        <Grid container style={{height:"70px",backgroundColor:"transparent",position:"fixed",top:"0px"}}>
            <Grid item sm={8} style={{padding:"25px",fontWeight:"bold"}}>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem"}}>
                    <span style={{color:"dodgerblue"}}>Indii</span><span style={{color:"red"}}>Globe</span>
                </Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"red"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}}  onClick={()=>setLogIn(!login)}>How you Earn</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}}  onClick={()=>setLogIn(!login)}>Donation</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>setSignup(!signup)}>Join Us</Typography>
            </Grid>
            <Grid item sm={1} style={{padding:"25px 10px",textAlign:"right",color:"dodgerblue"}}>
                <Typography style={{fontWeight:"bold",cursor:"pointer"}} onClick={()=>setLogIn(!login)}>Login</Typography>
            </Grid>
        </Grid>
        <Grid container style={{padding:"180px 25px",backgroundImage:`url(${dashImagefirst})`,backgroundRepeat: "no-repeat"}}>
            <Grid item sm={12}>
                <Typography style={{fontSize:"1.4rem",color:"dodgerblue"}}>
                    Indii Globe Support Funding.				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"red"}}>
                    Happiness At Your Doorstep				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *At our platform, you get certain and maximum earn. 
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *Our “Support Funding System” is built in a way, to become most rewarding ever.				
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    Start Raising Happiness Today				
                </Typography>
            </Grid>
        </Grid>
        <Grid container style={{padding:"180px 25px",textAlign:"center",backgroundImage:`url(${dashImage})`,backgroundRepeat: "no-repeat"}}>
            <Grid item sm={6}></Grid>
            <Grid item sm={6}>
                <Typography style={{fontSize:"1.4rem",color:"red"}}>
                    What is Indiiglobe
                </Typography>
                <Typography style={{fontSize:"1.4rem",color:"red"}}>
                    Support Funding
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *Welcome to WIN-WIN situation for donor, created by Indiiglobe. 
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *We established a system, where you get 3 times return of your donation amount.
                </Typography>
                <Typography style={{fontWeight:"bold",fontSize:"1.4rem",color:"dodgerblue"}}>
                    *And only 5 % of your earning will support to orphan house associated with us.
                </Typography>
            </Grid>
        </Grid>
        <Grid container style={{padding:"30px 25px",backgroundColor:"black",color:"white",textAlign:"center"}}>
            <Grid item sm={3}>
                Site:
            </Grid>
            <Grid item sm={3}>
                Creators:
            </Grid>
            <Grid item sm={3}>
                About:
            </Grid>
            <Grid item sm={3}>
                Help:
            </Grid>
            <Grid item sm={3}>
                <Typography  onClick={()=>setLogIn(!login)}>Login</Typography>
            </Grid>
            <Grid item sm={3}>
                Arpan Jain
            </Grid>
            <Grid item sm={3}>
                About
            </Grid>
            <Grid item sm={3}>
                Help
            </Grid>
            <Grid item sm={3}>
                <Typography  onClick={()=>setLogIn(!signup)}>SignUp</Typography>
            </Grid>
            <Grid item sm={3}>
                Aditya Kumar
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={3}>
                
            </Grid>
            <Grid item sm={12}>
                IndiiGlobe
            </Grid>
        </Grid>
    </div>)
}

export default LandingPage;