import React from 'react'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomizedTables from './CustomizedTables';



const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow: 1, 
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "30px"
    
    },
  
  
  }));

const Tables = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs>
                <CustomizedTables />
            </Grid>
        </Grid>
    )
}

export default Tables
