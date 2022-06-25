import { Person, PhoneAndroid } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import { api } from '../../redux/api';
import { addCommas } from '../../utils/utils';
import useStyles from './Product.styles';

const Product = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!renderAfterCalled.current && id) {
      dispatch(productActions.getProduct({ id }));
      setLoading(false);
    }

    renderAfterCalled.current = true;
  }, [id, dispatch]);

  return (
    <MainLayout showBack>
      {loading ? (
        'در حال بارگذاری...'
      ) : (
        <div className={classes.root}>
          <div className={classes.right}>
            <div className={classes.name}>
              <Typography variant='h4'>{product?.name}</Typography>
            </div>
            <div className={classes.price}>
              <Typography variant='h5'>
                {product?.price && addCommas(product?.price)} تومان
              </Typography>
            </div>
            <div className={classes.description}>
              <Typography variant='h6'>{product?.description}</Typography>
            </div>
            <div className={classes.store}>
              <Typography className={classes.storeTitle} variant='h6'>
                اطلاعات فروشگاه
              </Typography>
              <Typography className={classes.storeOwner} variant='body1'>
                <Person /> {product?.user?.firstName} {product?.user?.lastName}
              </Typography>
              <Typography
                className={classes.storePhone}
                variant='body1'
                onClick={() => {
                  window.location.href = `tel:${product?.user?.phone}`;
                }}
              >
                <PhoneAndroid />
                {`${product?.user?.countryCode}${product?.user?.phoneNumber}+`}
              </Typography>
            </div>
            <div className={classes.category}>
              <Typography className={classes.categoryName} variant='body2'>
                دسته بندی: <span>{product?.categories}</span>
              </Typography>
            </div>
            <div className={classes.filter}>
              <Typography className={classes.filterName} variant='body2'>
                فیلتر:{' '}
                {product?.filters?.map((el) => (
                  <span>{el?.name + ' , '}</span>
                ))}
              </Typography>
            </div>
            <div className={classes.subFilter}>
              <Typography className={classes.subFilterName} variant='body2'>
                زیر فیلتر:{' '}
                {product?.subFilter?.map((el) => (
                  <span>{el?.title + ' , '}</span>
                ))}
              </Typography>
            </div>
          </div>
          <div className={classes.left}>
            <img
              src={`${api}/uploads/admin/product/${product?._id}/${product?.images?.[selectedImage]}`}
              alt={product?.name}
            />
            {
              <div className={classes.slider}>
                {product?.images?.length > 1 && (
                  <>
                    {product?.images?.map((el, index) => (
                      <div>
                        <img
                          key={index}
                          src={`${api}/uploads/admin/product/${product?._id}/${el}`}
                          alt={product?.name}
                          onClick={() => setSelectedImage(index)}
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            }
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Product;
