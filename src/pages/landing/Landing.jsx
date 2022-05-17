import { Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import useStyles from './Landing.styles';

const Landing = () => {
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
      <div className={classes.seeAll}>
        <Link to='/products'>
          <Button color='secondary' variant='outlined'>
            مشاهده همه
          </Button>
        </Link>
      </div>
      <div className={classes.products}>
        {products?.map((product) => (
          <div className={classes.product}>
            <ProductCard product={product} key={product?.id} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Landing;
