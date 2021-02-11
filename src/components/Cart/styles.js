import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5px',
    fontFamily:'Rockwell',
    fontSize: '2rem',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
      
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    background: 'linear-gradient(90deg, rgba(210,125,162,1) 0%, rgba(241,241,67,1) 100%)',
    fontFamily:'Rockwell',
    fontStyle: 'bold',
    marginBottom: '50px',

  },
  checkoutButton: {
    minWidth: '150px',
    background: 'linear-gradient(90deg, rgba(210,125,162,1) 0%, rgba(241,241,67,1) 100%)',
    fontFamily:'Rockwell',
    fontStyle: 'bold',
    marginBottom: '50px',
    color:'black',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    fontFamily:'Rockwell',
    fontStyle: 'bold',
  },
}));