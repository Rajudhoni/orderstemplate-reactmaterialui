import React from 'react';
import Grid from '@material-ui/core/Grid';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1, 
        marginLeft: "30px",
        marginRight: "30px",
        marginTop: "30px"
       
    },


  ul: {
     
    
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
});

export default function Pagination() {
  const classes = useStyles();
  const { items } = usePagination({
    count: 10,
  });

  return (
    <Grid
    className={classes.root}
    spacing={24}
    container
    direction="row"
    justify="space-between"
    
    >
        <Grid item xs={6} >
            <p >Show 10 in 30 items.</p>
        </Grid>

        <Grid item xs={6}  >
       <Grid 
       justify="flex-end"
       container>
        <Grid item >
        <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button type="button" style={{ backgroundColor: selected ? 'orange' : undefined }} {...item}>
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
    </Grid>
    </Grid>
   
        </Grid>
    </Grid>
    
  );
}