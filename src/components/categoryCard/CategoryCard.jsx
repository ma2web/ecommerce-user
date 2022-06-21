import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './CategoryCard.styles';

const CategoryCard = ({ category }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography
          className={classes.categoryName}
          variant='h6'
          color='text.secondary'
        >
          {category?.name}
        </Typography>
        <List>
          {category?.children?.map((el) => (
            <>
              <ListItemButton
                key={el?._id}
                onClick={() => navigate(`/product/category/${el?._id}?name=${el?.name}`)}
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
