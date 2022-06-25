import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { categoryActions } from '../../redux/actions/category';
import { filterActions } from '../../redux/actions/filter';
import { productActions } from '../../redux/actions/products';
import { watchlistActions } from '../../redux/actions/watchlist';
import useStyles from './Products.styles';

const CategoryProduct = () => {
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
      dispatch(productActions.clearProducts());
      dispatch(watchlistActions.getAll());

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

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id');
    setParentCategory(id);
  }, [window.location.search]);

  const handleFilter = async (e) => {
    e.preventDefault();
    if (childCategory) {
      const data = {
        categories: childCategory,
        filters: Object.entries(parentFilter).map(([key, value]) => ({
          name: key,
          value: value,
        })),
      };

      await dispatch(productActions.filterProducts({ data }));
    } else {
      dispatch(productActions.getProducts());
    }
  };

  return (
    <MainLayout>
      <Typography variant='h4'>محصولات</Typography>
      <div className={classes.root}>
        <div className={classes.filter}>
          <Typography variant='h6'>فیلتر</Typography>
          <div className={classes.filterRow}>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>دسته بندی</InputLabel>
              <Select
                onChange={(e) => {
                  setParentCategory(e.target.value);
                }}
                value={new URLSearchParams(window.location.search).get('id')}
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
                    onChange={(e) => {
                      console.log(parentFilter);
                      if (e.target.value.length) {
                        setParentFilter({
                          ...parentFilter,
                          [filter?.name?.trim()]: e.target.value,
                        });
                      } else {
                        delete parentFilter[filter?.name?.trim()];
                      }
                    }}
                    value={parentFilter?.[filter?.name]}
                  >
                    <MenuItem value=''>انتخاب کنید</MenuItem>
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
        <div className={classes.products}>
          {products?.map((product) => (
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

export default CategoryProduct;
