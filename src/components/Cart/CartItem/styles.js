import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 500,
  },
  secondary:{
    main: '#11cb5f',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily:'Rockwell',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  button: {
    background: 'rgba(210,125,162,1)',
    fontFamily:'Rockwell',
    fontStyle: 'bold',
    color: 'black',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(90deg, rgba(210,125,162,1) 0%, rgba(241,241,67,1) 100%)',
  },
}));