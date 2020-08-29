import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AddressForm(props) {
  const [value, setValue] = React.useState('female');
  const [BasicValues, setBasicValues] = useState({
    "firstName":"",
    "lastName":"",
    "gender":"",
    "Email":"",
    "Contact":"",
    "Password":"",
  })

  const handleChangeValue=(e)=>{
    if(e.target.name==="gender")
    setValue(e.target.value)

    let dummy = BasicValues
    dummy[e.target.name] = e.target.value
    console.log(dummy)
    setBasicValues(dummy) 
    console.log(BasicValues)

    props.handleSetBasic(BasicValues)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Basic Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} style={{paddingBottom:"0px"}}>
            <FormControl component="fieldset" style={{display:"flex"}}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChangeValue} style={{flexDirection:"unset"}}>
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="email"
            name="Email"
            label="Email"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            //id="lastName"
            name="Contact"
            label="Contact Number"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            name="Password"
            label="Password"
            fullWidth
            onChange={handleChangeValue}
            //autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type="password"
            name="ConfirmPassword"
            label="Confirm Password"
            fullWidth
            //autoComplete="family-name"
          />
        </Grid>
        {/*<Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
  </Grid>**/}
      </Grid>
    </React.Fragment>
  );
}