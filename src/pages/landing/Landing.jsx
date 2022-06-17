import { Button, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';
import Slider1 from '../../assets/images/slider/01.jpg';
import Slider2 from '../../assets/images/slider/02.jpg';
import Slider3 from '../../assets/images/slider/03.jpg';
import Slider4 from '../../assets/images/slider/04.jpg';
import CategoryCard from '../../components/categoryCard/CategoryCard';
import ProductCard from '../../components/productCard/ProductCard';
import MainLayout from '../../layout/MainLayout/MainLayout';
import { categoryActions } from '../../redux/actions/category';
import { productActions } from '../../redux/actions/products';
import useStyles from './Landing.styles';

const Landing = () => {
  const classes = useStyles();
  const renderAfterCalled = useRef(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector(
    (state) => state.category.categories?.categoryList
  );

  useEffect(() => {
    (async () => {
      if (!renderAfterCalled.current) {
        await dispatch(productActions.getProducts());
        await dispatch(categoryActions.getCategories());
      }
    })();

    renderAfterCalled.current = true;
  });

  const images = [
    { url: Slider1 },
    { url: Slider2 },
    { url: Slider3 },
    { url: Slider4 },
  ];

  return (
    <MainLayout>
      <div className={classes.slider}>
        <SimpleImageSlider
          width={window.innerWidth > 768 ? '95.5%' : '85%'}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
        />
      </div>

      <div className={classes.seeAll}>
        <Typography variant='h6'>دسته بندی</Typography>
      </div>
      <div className={classes.categories}>
        {categories?.map((category) => (
          <div className={classes.category} key={category?.id}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>

      <div className={classes.seeAll}>
        <Typography variant='h6'>آخرین محصولات</Typography>
        <Link to='/products'>
          <Button color='secondary' variant='outlined'>
            مشاهده همه
          </Button>
        </Link>
      </div>
      <div className={classes.products}>
        {products?.map((product) => (
          <div className={classes.product} key={product?.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default Landing;
