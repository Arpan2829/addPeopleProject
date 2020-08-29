import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function PaymentForm(props) {
  const classes = useStyles();
  const [PersonalValues, setPersonalValues] = useState({
    "FatherName":"",
    "MotherName":"",
    "Qualification":"",
    "Occupation":"",
    "PanNumber":"",
    "AadharNumber":"",
  })
  const [Qualification, setQualification] = useState("")
  const [Occupation, setOccupation] = useState("")


  const handleChangeValue=(e)=>{
    if(e.target.name === "Qualification")
      setQualification(e.target.value)
    else if(e.target.name === "Occupation")
      setOccupation(e.target.value)
    let dummy = PersonalValues
    dummy[e.target.name] = e.target.value
    console.log(dummy)
    setPersonalValues(dummy) 
    console.log(PersonalValues)
    props.handleSetPersonal(PersonalValues)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            name="FatherName" 
            label="Father Name" 
            fullWidth 
            onChange={handleChangeValue}
            //autoComplete="cc-name" 
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            name="MotherName"
            label="Mother Name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={Qualification}
              onChange={handleChangeValue}
              name="Qualification"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Qualification' }}
            >
              <option value="" disabled>Select Qualification</option>
              <option value="No Qualification">No Qualification</option>
              <option value="Matriculation">Matriculation</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
              <option value="P.H.D.">P.H.D.</option>
            </NativeSelect>
            {/*<FormHelperText>With visually hidden label</FormHelperText>*/}
          </FormControl>
        </Grid>
        <Grid item xs={12}  md={6}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              value={Occupation}
              onChange={handleChangeValue}
              name="Occupation"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Occupation' }}
            >
              <option value="" disabled>Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Employed">Employed</option>
              <option value="UnEmployed">UnEmployed</option>
              <option value="Businessman">Businessman</option>
            </NativeSelect>
            {/*<FormHelperText>With visually hidden label</FormHelperText>*/}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="PanNumber"
            label="Pan Number"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="AadharNumber"
            label="Aadhar Number"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="cc-number"
          />
        </Grid>
        {/*<Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>*/}
      </Grid>
    </React.Fragment>
  );
}