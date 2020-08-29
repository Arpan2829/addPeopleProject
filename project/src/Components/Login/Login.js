import React, { useState,useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Data from '../../json/loginData.json';
import axios from 'axios';
// import Dashboard from '../Dashboard/Dashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Website'}
      {/*<Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>*/}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorTextUser, seterrorTextUser] = useState("");
  const [errorTextPass, seterrorTextPass] = useState("");
  const [userError, setUserError] = useState(false)
  const [passError, setPassError] = useState(false)
  const [postObject, setPostObject] = useState({})
  const [status, setStatus] = useState(false)
  //const [register, setRegister] = useState(false)
  //const [token, setToken] = useState("")
  const path = `/App`; 

  async function handleLoginApi(){
    await axios.post("https://fiveninitynine.herokuapp.com/account/api-token-login/",postObject)
    .then(res=>{
      console.log(res.data.status)
      setStatus(res.data.status)
      if(res.data.status===true){
        console.log(status,"in")
        // setRegister(res.data.registered)
        // setToken(res.data.token)
        localStorage.setItem("token",res.data.token)
        history.push(path)
      }
      else if( postObject!=={}){
        localStorage.setItem("token","")
        
      }
      else{
        localStorage.setItem("token","")
        setUserError(true)
        setPassError(true)
        seterrorTextPass("Check Email Address/ Password")
      }
    })
    .catch(err=>{
      setStatus("false")
    })
  }

  useEffect(()=>{
    handleLoginApi()
  },[postObject])

  const handleSignIn=()=>{
    
    if(userId===""){
      seterrorTextUser("Please enter UserId")
      setUserError(true)
      setPassError(false)
    }
    else if(password===""){
      seterrorTextPass("Please enter Password")
      setPassError(true)
      setUserError(false)
    }
    else if(userId!=="" || password!==""){

      setPostObject({
        "email":userId,
        "password":password
        })
        
        

      // let authCode = false
      // let checkId = Data.loginDetails.filter(function (person) { return person.Id === userId });
      // console.log(checkId)
      // if(checkId.length>0 && checkId[0].password===password){
      //       authCode=true
      //       history.push(path)
      // }
      // else if(checkId.length>0 && checkId[0].password!==password){
      //   console.log("hello")
      //   setPassError(true)
      //   setUserError(false)
      //   seterrorTextUser("")
      //   seterrorTextPass("Please check Password")
      // }
      // /*Data.loginDetails.map(itr=>{
      //   console.log(itr.Id, userId)
      //   if(itr.Id.toString()===userId){
      //     console.log("hello")
      //     if(itr.password.toString()===password){
      //       console.log("hi")
      //       authCode=true
      //       history.push(path)
      //     }
      //     else{
      //       console.log("hello")
      //       setPassError(true)
      //       setUserError(false)
      //       seterrorTextUser("")
      //       seterrorTextPass("Please check Password")
      //     }
      //   }
      //   if(itr.Id!==userId){
      //     console.log(itr.Id===userId)
      //     setUserError(true)
      //     setPassError(false)
      //     seterrorTextPass("")
      //     seterrorTextUser("Please check UserId")
      //   }
      // })*/

      // if(authCode===true){
      //   setUserError(false)
      //   setPassError(false)
      //   setPassword("")
      //   setUserId("")
      // }
      // else{
      //   setUserError(true)
      //   setPassError(true)
      //   seterrorTextPass("Check Email Address/ Password")
      // }
    }
  }

  const handleTextFieldValue=(e)=>{
    if(e.key==="Enter" || e.key==="enter"){
      seterrorTextUser("")
      seterrorTextPass("")
      handleSignIn()
    }
    else if(e.target.id==="email"){
      setUserId(e.target.value)
      //console.log(userId,e.target.value)
      setUserError(false)
      setPassError(false)
      seterrorTextUser("")
      seterrorTextPass("")
    }
    else if(e.target.id==="password"){
      setPassword(e.target.value)
      setPassError(false)
      setUserError(false)
      seterrorTextPass("")
      seterrorTextUser("")
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={()=>handleSignIn()}>
            <TextField
              error={userError}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              //autoComplete="email"
              autoFocus
              helperText={errorTextUser}
              onChange={(event)=>handleTextFieldValue(event)}
              onKeyPress={(event)=>handleTextFieldValue(event)}
            />
            <TextField
              error={passError}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              //autoComplete="current-password"
              helperText={errorTextPass}
              onChange={(event)=>handleTextFieldValue(event)}
              onKeyPress={(event)=>handleTextFieldValue(event)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>handleSignIn()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}