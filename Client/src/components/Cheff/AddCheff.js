import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PersonLogo from '../img/Person.png'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
class AddCheff extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { classes } = this.props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          <img src={PersonLogo} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Team
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="contact">Contact</InputLabel>
            <Input name="contact" type="number" id="contact" autoComplete="contact" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="address">Address</InputLabel>
            <Input name="address" id="address" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="salary">Salary</InputLabel>
            <Input name="Salary" type="number" id="Salary" />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Save
          </Button>
        </form>
      </Paper>
    </main>
  );
    }
}
AddCheff.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddCheff);

// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// class AddCheff extends React.Component {

// constructor(props) {
//     super(props);
    
//     }
    

// render() {
//     const { classes } = this.props;
//     return (    
//         <Grid container direction="column" alignItems='center' style={{marginTop:100}}>
//                 <Typography component="h5" variant="h3">Add Cheff</Typography>
                
//         <Grid item style={{width:300}}>

//             <input type="text" placeholder="Cheff Name" fullWidth margin="normal"/>
//             <input type="number" placeholder="Contact" fullWidth margin="normal"/>
//             <input type="text" multiple placeholder="Address" fullWidth margin="normal"/>
//             <input type="number" placeholder="Salary" fullWidth margin="normal"/>
              
//             <button margin="normal" style={{width:300,height:30,fontWeight:'bold',fontSize:20}}
//                 type="submit" >Save</button>
//         </Grid>
//         </Grid>
        
//         );
//     }
// }
// export default AddCheff
