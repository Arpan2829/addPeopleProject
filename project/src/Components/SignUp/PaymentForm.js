import React from 'react';
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


export default function PaymentForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField 
            required 
            id="FatherName" 
            label="Father Name" 
            fullWidth 
            //autoComplete="cc-name" 
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="MotherName"
            label="Mother Name"
            fullWidth
            //autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              //value={state.age}
              //onChange={handleChange}
              name="Qualification"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Qualification' }}
            >
              <option value="">Select Qualification</option>
              <option value={10}>No Qualification</option>
              <option value={20}>Matriculation</option>
              <option value={30}>Intermediate</option>
              <option value={10}>Graduate</option>
              <option value={20}>Post Graduate</option>
              <option value={30}>P.H.D.</option>
            </NativeSelect>
            {/*<FormHelperText>With visually hidden label</FormHelperText>*/}
          </FormControl>
        </Grid>
        <Grid item xs={12}  md={6}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              //value={state.age}
              //onChange={handleChange}
              name="Occupation"
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Occupation' }}
            >
              <option value="">Select Occupation</option>
              <option value={10}>Student</option>
              <option value={20}>Employed</option>
              <option value={30}>UnEmployed</option>
              <option value={30}>Businessman</option>
            </NativeSelect>
            {/*<FormHelperText>With visually hidden label</FormHelperText>*/}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="PanNumber"
            label="Pan Number"
            fullWidth
            //autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="AadharNumber"
            label="Aadhar Number"
            fullWidth
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