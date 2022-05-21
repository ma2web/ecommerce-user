import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import useStyles from './Products.styles';
import { useParams } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const ProductsByCategory = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const params = useParams();
  const [loading, setLoading] = useState(true);

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
      <Typography variant='h4'>محصولات</Typography>
      <div className={classes.root}>
        <div className={classes.products}>
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
