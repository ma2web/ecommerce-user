import useStyles from './MainLayout.style';

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default MainLayout;
