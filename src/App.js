import './App.css';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import Buttons from './components/Buttons'
import { makeStyles } from '@material-ui/core/styles';
import SearchFilters from './components/SearchFilters';
import Tables from './components/Tables';
import Pagination from './components/Pagination';
import Sidenav from './components/Sidenav';



const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow: 1, 
 
 
    },
  
  }));


function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <Header />
        <Grid container className={classes.root}>
          <Buttons  />
          <SearchFilters />
          <Tables />
          <Pagination/>
        </Grid>


        
    </div>
  );
}

export default App;
