import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { productActions } from '../../redux/actions/products';
import useStyles from './Products.styles';

const Products = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [filter, setFilter] = useState({
    category: '',
    filter: '',
    subFilter: '',
  });

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
        <div className={classes.products}>
          {products?.map((product) => (
            <div className={classes.product}>
              <div className={classes.productData}>
                <ProductCard product={product} key={product?.id} />
              </div>
            </div>
          ))}
        </div>
        <div className={classes.filter}>
          <Typography variant='h6'>فیلتر</Typography>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>دسته بندی</InputLabel>
              <Select
                onChange={(e) => {
                  setFilter({ ...filter, category: e.target.value });
                }}
                value={filter?.category}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
