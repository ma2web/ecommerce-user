import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useStyles from './CategoryCard.styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.categoryName}
          variant='h5'
          color='text.secondary'
        >
          {category?.name}
        </Typography>
        <List>
          {category?.children?.map((el) => (
            <>
              <ListItemButton
                key={el?._id}
                onClick={() => navigate(`/product/category/${el?._id}`)}
              >
                <ArrowLeftIcon />
                <ListItemText primary={el?.name} />
              </ListItemButton>
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
