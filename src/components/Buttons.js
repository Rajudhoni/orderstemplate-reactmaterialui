import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow: 1, 
     marginRight: "30px",
     marginTop: "30px"
    
    },
    button: {
        fontSize: "15px",
        color: "white"
       
    }
  
  }));

const Buttons = () => {

    const classes = useStyles();



    return (
            <>
                    <Grid
                        className={classes.root}
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        spacing={3}
                    >
                        <Grid item>
                        <Button
                            className={classes.button}
                            variant="contained"
                            
                            className={classes.button}
                            startIcon={<AddIcon/>}
                            size="large"
                            style={{backgroundColor: "green"}}

                        >
                            NEW ORDER
                        </Button>
                        </Grid>
                        <Grid item>
                            
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="default"
                            className={classes.button}
                            startIcon={<ArrowDownwardIcon />}
                            size="large"
                            style={{color: "black"}}

                        >
                            EXPORT
                        </Button>


                        </Grid>
                    </Grid>
            </>
    )
}

export default Buttons
