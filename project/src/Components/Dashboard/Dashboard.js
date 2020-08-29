import React, { useState,useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
//import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import {Chip, Button, Typography, List, Toolbar} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems, secondaryListItems, ThirdListItems } from './listItems';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Link from '@material-ui/core/Link';
// import BarImage from '../../Assets/barChart.png'
// import dashboard from '../../Assets/dashboard.png'
// import Graph from '../../Assets/graph.JPG'
// import Profile from '../../Assets/profile.png'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import dashImage from '../../Assets/Dashboard.jpg'
import donate from '../../Assets/donate.jpg'
import profileImg from '../../Assets/profile.jpg'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © IndiiGlobe'}
      {/*<Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>*/}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold"
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  loginIcon:{
    color:"white",
  },
  ProfileHeader:{
    textTransform:"capitalize",
    fontWeight:"bold",
    padding:"5px",
    //color:"white"
  },
  ProfileData:{
    textTransform:"capitalize",
    //fontWeight:"bold",
    padding:"5px",
    //color:"white"
  },
  DashboardStyle:{
    color:theme.palette.primary.main,
    fontWeight:"bold"
  },
  DashboardRed:{
    color:theme.palette.error.main
  },
  DashboardLeft:{
    color:"black",
    fontWeight:"bold"
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [id, setId] = useState(0)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [userDetail, setUserDetail] = useState({})
  // const [orderId, setOrderId] = useState("")
  const [bank, setBank] = useState({})

  async function handleProfileApi(){
    //let postObject = "token"+" "+token
    await axios.get("https://fiveninitynine.herokuapp.com/account/getuserdetails/",{
      headers: {
        Authorization: 'Token ' + token
      }
    })
    .then(res=>{
      setUserDetail(res.data.user)
      setBank(res.data.bank)
    })
    .catch(err=>{
      setUserDetail({})
    })
  }
  useEffect(()=>{
    handleProfileApi()
  },[])


  const handleFileUpload=(e)=>{
    const files = e.target.files
    console.log(files)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleContentId=(id)=>{
    // console.log(id,"id")
    setId(id)
  }

  const mainListItems = (
    <div>
      <ListItem button  onClick={()=>handleContentId(0)}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button  onClick={()=>handleContentId(1)}>
        <ListItemIcon>
        <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Donate" />
      </ListItem>
      {/* <ListSubheader inset>Account Details</ListSubheader> */}
      <ListItem button  onClick={()=>handleContentId(3)}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Become Member" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem> */}
      <ListItem button onClick={()=>setToken("")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        
          <ListItemText primary="Sign Out" />
        
      </ListItem>
      {/* <ListItem button  onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button  onClick={()=>handleContentId(1)}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem> */}
    </div>
  );
  
  const secondaryListItems = (
    <div>
      {/* <ListSubheader inset>Saved reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end" />
      </ListItem> */}
    </div>
  );

  const ThirdListItems = (
    <div>
      <ListSubheader inset>Account Details</ListSubheader>
      <ListItem button  onClick={()=>handleContentId(3)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={()=>handleContentId(2)}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Become Member" />
      </ListItem>
      {/* <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem> */}
      <ListItem button onClick={()=>setToken("")}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        
          <ListItemText primary="Sign Out" />
        
      </ListItem>
    </div>
  );
if(token==="")
  return <Redirect to= "/"/>
else
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <span style={{color:"dodgerblue"}}>Indii</span><span style={{color:"red"}}>Globe</span>
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <Chip
              icon={<AccountCircleIcon />}
              label={userDetail.name}
            />
          </IconButton>
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={()=>handleContentId(3)}>
          
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem onClick={()=>handleContentId(2)}>
          
          <ListItemText primary="Membership" />
        </StyledMenuItem>
        <StyledMenuItem  onClick={()=>setToken("")}>
        
          <ListItemText primary="Sign Out" />
          
        </StyledMenuItem>
      </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        {/* <Divider /> */}
        {/* <List>{secondaryListItems}</List>
        <Divider /> */}
        {/* <List>{ThirdListItems}</List> */}
      </Drawer>
      {id===0?<main className={classes.content} style={{backgroundImage:`url(${dashImage})`,backgroundRepeat: "no-repeat"}}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container} >
          <Grid container >
            
            <Grid item sm={12} >
              <Typography className={classes.DashboardStyle} style={{fontWeight:"500"}}>Indii Globe Support Funding.</Typography>
              <Typography className={classes.DashboardRed}>Happiness At Your Doorstep</Typography>
              <Typography className={classes.DashboardStyle}>*At our platform, you get certain and maximum earn. </Typography>
              <Typography className={classes.DashboardStyle}>*Our “Support Funding System” is built in a way, to become most rewarding ever.</Typography>
              <Typography className={classes.DashboardStyle}>Start Raising Happiness Today</Typography>
            </Grid>
            
             <Grid item sm={12} style={{textAlign:"right",marginTop:"20%"}}>
             <Typography className={classes.DashboardLeft}>*Welcome to WIN-WIN situation for donor, created by Indiiglobe.</Typography>
             <Typography className={classes.DashboardLeft}>*We established a system, where you get 3 times return of your donation amount.</Typography>
             <Typography className={classes.DashboardLeft}>*And only 5 % of your earning will support to orphan house associated with us.</Typography>

            </Grid> 
          </Grid>

          {/* <Box pt={4} >
            <Copyright />
          </Box> */}

        </Container>
      </main>: id ===3?
  <main className={classes.content} style={{backgroundImage:`url(${profileImg})`,backgroundRepeat: "no-repeat"}}>
  <div className={classes.appBarSpacer} />
  <Container maxWidth="lg" className={classes.container}>
    <Grid container>
      {/* <Paper style={{width:"100%",padding:"20px",paddingLeft:"40px"}}> */}
      {/* <AccountCircleIcon /> */}
      <Grid container>
            <Grid item sm={3} className={classes.ProfileHeader}>Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Email : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.email}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Gender : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.gender}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Father Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.father_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Mother Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.mother_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Contact Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.mobile}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Qualification : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.qualification}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Occupation : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{userDetail.occupation}</Grid>
            
            <Grid item sm={2} className={classes.ProfileHeader} style={{paddingTop:"10px",paddingBottom:"10px"}}>Bank Details</Grid>
            <Grid item sm={10} style={{paddingTop:"20px",paddingBottom:"10px"}}> <Divider style={{backgroundColor:"black"}}/></Grid>

            <Grid item sm={3} className={classes.ProfileHeader}>Bank : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.bank_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Branch : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.branch_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>IFSC : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.ifsc_code}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Holder Name : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.account_holder_name}</Grid>
            
            <Grid item sm={3} className={classes.ProfileHeader}>Account Number : </Grid>
            <Grid item sm={9} className={classes.ProfileData}>{bank.account_number}</Grid>
        </Grid>
      {/* </Paper> */}
    </Grid>
  </Container>
</main>:
id===1?
<main className={classes.content}  style={{backgroundImage:`url(${donate})`,backgroundRepeat: "no-repeat"}}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
  <Grid container spacing={3}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}>
      <Paper className={fixedHeightPaper} style={{borderRadius:"45%",padding:"8%",width:"50%"}}>
      <Grid container>
          <Grid item sm={6} className={classes.ProfileHeader}>
            Name
          </Grid>
          <Grid item sm={6} className={classes.ProfileHeader}>
            Payment
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} className={classes.ProfileData} style={{paddingLeft:"15px"}}>
            Aditya
          </Grid>
          <Grid item sm={6} className={classes.ProfileData}>
            <Button variant="contained" color="secondary" >Pay</Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={6} className={classes.ProfileData}  style={{paddingLeft:"15px"}}>
            Arpan
          </Grid>
          <Grid item sm={6} className={classes.ProfileData}>
            <Button variant="contained" color="secondary" >Pay</Button>
          </Grid>
        </Grid>
      </Paper>
</Grid>
</Grid>
</Container>
</main>
:id===2?
<main className={classes.content} style={{backgroundImage:`url(${profileImg})`,backgroundRepeat: "no-repeat"}}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
  <Grid container spacing={3}>
    <Grid item xs={6}></Grid>
    <Grid item xs={6}>
      <Paper className={fixedHeightPaper}>
          <Grid item sm={12}>
            <h4>Upload Reciept Image to verify Payment and Become Member</h4>
            <input type="file" name="img" onChange={(e)=>handleFileUpload(e)}/>
          </Grid>
          <Grid item sm={12} style={{marginTop:"50px"}}>
          <Button variant="contained" color="primary" >Upload</Button>
          </Grid>
      </Paper>
</Grid>
</Grid>
</Container>
</main>:null}
</div>
  )
}