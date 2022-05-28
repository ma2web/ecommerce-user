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
import { filterActions } from '../../redux/actions/filter';
import useStyles from './Products.styles';

const Products = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector(
    (state) => state.category.categories?.categoryList
  );
  const filters = useSelector((state) => state.filter.filters);
  const [parentCategory, setParentCategory] = useState('');
  const [childCategory, setChildCategory] = useState('');
  const [parentFilter, setParentFilter] = useState('');

  useEffect(() => {
    if (!renderAfterCalled.current) {
      dispatch(productActions.getProducts());

      if (!categories) {
        dispatch(categoryActions.getCategories());
      }
    }

    renderAfterCalled.current = true;

    return () => {
      setParentCategory('');
      setChildCategory('');
      setParentFilter('');
    };
  }, []);

  console.log({
    caegories: childCategory,
    filters: Object.entries(parentFilter).map(([key, value]) => ({
      name: key,
      value: value,
    })),
  });

  const handleFilter = async (e) => {
    e.preventDefault();
    const data = {
      categories: childCategory,
      filters: Object.entries(parentFilter).map(([key, value]) => ({
        name: key,
        value: value,
      })),
    };

    const res = await dispatch(productActions.filterProducts({ data }));
    console.log(res);
  };

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
          <div className={classes.filterRow}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>دسته بندی</InputLabel>
              <Select
                onChange={(e) => setParentCategory(e.target.value)}
                value={parentCategory}
              >
                {categories?.map((category) => (
                  <MenuItem key={category?._id} value={category?._id}>
                    {category?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {parentCategory && (
            <div className={classes.filterRow}>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>
                  زیر دسته بندی
                </InputLabel>
                <Select
                  onChange={async (e) => {
                    await dispatch(
                      filterActions.getByCategory({ id: e.target.value })
                    );
                    setChildCategory(e.target.value);
                  }}
                  value={childCategory}
                >
                  {categories
                    ?.filter((item) => item?._id === parentCategory)?.[0]
                    ?.children?.map((category) => (
                      <MenuItem key={category?._id} value={category?._id}>
                        {category?.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          )}
          {filters?.length > 0 &&
            childCategory &&
            filters?.map((filter) => (
              <div className={classes.filterRow}>
                <FormControl className={classes.formControl}>
                  <InputLabel id='demo-simple-select-label'>
                    {filter?.name}
                  </InputLabel>
                  <Select
                    onChange={(e) =>
                      setParentFilter({
                        ...parentFilter,
                        [filter?.name?.trim()]: e.target.value,
                      })
                    }
                    value={parentFilter?.[filter?.name]}
                  >
                    {filter?.values?.map((value) => (
                      <MenuItem key={value?._id} value={value?._id}>
                        {value?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            ))}
          <div className={classes.filterRow}>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              onClick={handleFilter}
            >
              <Typography variant='h6'>اعمال فیلتر</Typography>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
