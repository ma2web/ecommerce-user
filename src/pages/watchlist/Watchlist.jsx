import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import { categoryActions } from '../../redux/actions/category';
import { watchlistActions } from '../../redux/actions/watchlist';
import { filterActions } from '../../redux/actions/filter';
import useStyles from './Watchlist.styles';

const Watchlist = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.list);

  
  useEffect(() => {
    if(!renderAfterCalled.current) {
      dispatch(watchlistActions.getAll());
    }

    renderAfterCalled.current = true;
  }, []);

  return (
    <MainLayout>
      <Typography variant='h4'>لیست علاقه مندی ها</Typography>
      <div className={classes.root}>
        <div className={classes.products}>
          {watchlist.map((item) => {
    return item.product
  })?.map((product) => (
            <div className={classes.product}>
              <div className={classes.productData}>
                <ProductCard product={product} key={product?.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Watchlist;
