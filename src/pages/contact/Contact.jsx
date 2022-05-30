import { Typography, Grid } from '@mui/material';
import MainLayout from '../../layout/MainLayout/MainLayout';
import useStyles from './Contact.styles';

const Contact = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant='h4'>تماس با ما</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.left}>
          <Typography variant='h6'>آدرس</Typography>
          <Typography variant='body1'>تهران - خیابان شهید بهشتی</Typography>
          <br />
          <Typography variant='h6'>تلفن</Typography>
          <Typography variant='body1'>+98912912912</Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.right}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33049.31103912946!2d28.83241234779262!3d41.012452668511344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4ae347c61f9%3A0xec626f1c65a6569e!2sNational%20Sovereignty%20Park!5e0!3m2!1sen!2str!4v1653920653544!5m2!1sen!2str'
            width='100%'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Contact;
