import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import useStyles from './Products.styles';

const ProductsByCategory = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const { search } = window.location;
  const paramss = new URLSearchParams(search);
  const name = paramss.get('name');

  useEffect(() => {
    (async () => {
      if (!renderAfterCalled.current) {
        await dispatch(
          productActions.getProductByCategoryId({ id: params.id })
        );
        setLoading(false);
      }
    })();

    renderAfterCalled.current = true;
  });
  return (
    <MainLayout>
      <Typography variant='h4'>دسته بندی:‌ {name}</Typography>
      <div className={classes.root}>
        <div className={classes.productByCategory}>
          {loading ? (
            <Loading />
          ) : (
            <>
              {products?.length ? (
                <>
                  {products?.map((product) => (
                    <div className={classes.product}>
                      <div className={classes.productData}>
                        <ProductCard product={product} key={product?.id} />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <Typography variant='body1' color='text.secondary'>
                  محصولی در این دسته بندی وجود ندارد
                </Typography>
              )}
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsByCategory;
