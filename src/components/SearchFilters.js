import React from 'react'
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import ControlledOpenSelect from './OpenItems';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';    





const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow: 1, 
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "30px"
    
    },
    filterButton: {
        fontSize: "30px"
    },
    textFieldWidth: {
            width: "133ch"
    },
    
  
  }));

const SearchFilters = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={ classes.root}>
            <Grid item xs={12}>
            <TextField fullWidth id="outlined-search" label="Search field" type="search" variant="outlined" className={classes.textFieldWidth}/>
            </Grid>
            <Grid item xs={12}>
                
                <ControlledOpenSelect />
                
            </Grid>
            <Grid item xs={12}>
            <Button
                    className={classes.filterButton}
                    size="large"
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<FilterListIcon />}
                >
                    FILTER
                </Button>
            </Grid>


        </Grid>
    )
}

export default SearchFilters
