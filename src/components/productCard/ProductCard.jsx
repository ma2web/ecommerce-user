import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { api } from '../../redux/api';
import { addCommas } from '../../utils/utils';
import useStyles from './ProductCard.styles';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { watchlistActions } from '../../redux/actions/watchlist';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard({ product }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.list);
  const [favorite, setFavorite] = React.useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
    const productId = product._id;

    if (!favorite) {
      dispatch(watchlistActions.addToWatchlist({ productId }));
    }
  }

  React.useEffect(() => {
    if(watchlist.length > 0) {
      const findItem = watchlist?.find((item) => item.product === product._id);

      if(findItem?.product) {
        setFavorite(true);
      }
    }
  }, [watchlist]);


  return (
    <div
      className={classes.root}
      
    >
      <div className={classes.price} onClick={() => navigate(`/product/${product?._id}`)}>
        <Typography variant='h6'>{addCommas(product?.price)} تومان</Typography>
      </div>
      <Card>
        <CardMedia
          component='img'
          height='194'
          image={`${api}/uploads/admin/product/${product?._id}/${product?.images?.[0]}`}
          alt={product?.name}
          onClick={() => navigate(`/product/${product?._id}`)}
        />
        <CardContent onClick={() => navigate(`/product/${product?._id}`)}>
          <Typography
            className={classes.productName}
            variant='h6'
            color='text.secondary'
          >
            {product?.name}
          </Typography>
          <Typography
            className={classes.productDescription}
            variant='body2'
            color='text.secondary'
          >
            {product?.description}
          </Typography>
          <br />
          <Typography
            className={classes.productDescription}
            variant='caption'
            color='text.secondary'
          >
            فروشنده:‌{product?.user?.firstName} {product?.user?.lastName}
          </Typography>          
        </CardContent>
        <CardActions disableSpacing>
            <IconButton onClick={() => handleFavorite()} aria-label="add to favorites" color={favorite ? 'primary' : 'default'}>
              <FavoriteIcon />
            </IconButton>
            {/* <IconButton aria-label="share">
              <ShareIcon />
            </IconButton> */}
          </CardActions>
      </Card>
    </div>
  );
}
