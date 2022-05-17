import { Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import useStyles from './Product.styles';

const Products = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      dispatch(productActions.getProducts());
    }

    renderAfterCalled.current = true;
  });
  return (
    <MainLayout>
      <Typography variant='h4'>محصولات</Typography>
      <div className={classes.root}>
        {products?.map((product) => (
          <div className={classes.product}>
            <ProductCard product={product} key={product?.id} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Products;
