import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/logo.png';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import GroupIcon from '@material-ui/icons/Group';
import AllOutIcon from '@material-ui/icons/AllOut';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow: 1, 
      borderBottom: '1px solid grey',
      paddingLeft: "20px",
      paddingRight: "20px"
    
    },
    menuIcon: {
        fontSize: "30px",
        marginTop: "20px"
    },
    list : {
      lineHeight: 1.5,
      color: "#212529"
    },

    lista: {
      position: "relative",
      display: "block",
      padding: "10px 0",
      paddingTop: "10px",
      paddingRight: "0px",
      paddingBottom: "10px",
      paddingLeft: "0px",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "20px",
      color: "#222",
      fontWeight: 500,
      textSransform: 'capitalize',
      transformStyle: 'preserve-3d',
      textDecoration: 'none',
      hover: {
        "&:hover": {
          backgroundColor: 'rgb(7, 177, 77, 0.42)'
        }
      }
      
    },
  }));

const Header = () => {

    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const handleDrawer = () => {
        setOpen(!open)
    }



    return (
    
       <div className={classes.root}>
      
        <Grid
             
            spacing={24}
            container
            direction="row"
            justify="space-between"
            
            >
                
                <Grid item xs={4}
                      justify="center"
                      alignItems="center"
                >
          <IconButton onClick={handleDrawer} aria-label="menu">
           <MenuIcon className={ classes.menuIcon}/>
           </IconButton>
        </Grid>
        <Grid item xs={4}>
          <p  style={{textAlign: "center"}}>
          <img src={logo} alt="logo" />
          </p>
        </Grid>
        <Grid item xs={4} >
          <div style={{textAlign: "right"}}>
          <ExitToAppIcon  className={ classes.menuIcon} />
          </div>
        </Grid>
               
            </Grid>
          <Drawer
            anchor='left'
            open={open}
            onClose={() => setOpen(!open)}
          >
            <div style={{height: '100%', width: "700px"}}>
              <Grid container>
                <Grid item xs>
                        <h1 style={{paddingLeft: "20px"}}>Menu</h1>
                </Grid>
                <Grid item xs>
                  <Grid 
                      container
                      container
                      direction="row"
                      justify="flex-end"
                  
                  >
                        <Grid item>
                        <IconButton onClick={handleDrawer} aria-label="menu">
                            <CloseIcon className={ classes.menuIcon}/>
                        </IconButton>
                        </Grid>
                  </Grid>
                
                </Grid>     
                
              </Grid>
              <Divider />
              <div>
                <ul style={{display: "block", marginLeft: '30px', padding: 0, listStyle: 'none', fontSize:"20px", fontWeight: "500"}}>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <HomeIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>DashBoard</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <HorizontalSplitIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Products</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <LocalMallIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Orders</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <GroupIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Customers</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <AllOutIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Coupons</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <ViewAgendaIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Categories</strong>
                    </a>
                  </li>
                  <li className={classes.list}>
                    <a href="#" className={classes.lista}>
                      <SettingsIcon /> &nbsp;&nbsp;&nbsp;
                      <strong>Settings</strong>
                    </a>
                  </li>
                </ul>
              </div>
                        
                       
                   
                     
                 
            </div>
          </Drawer>
           
            </div>
    )
}

export default Header
