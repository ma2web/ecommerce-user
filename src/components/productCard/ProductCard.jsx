import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { api } from '../../redux/api';
import { addCommas } from '../../utils/utils';
import useStyles from './ProductCard.styles';

export default function ProductCard({ product }) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div
      className={classes.root}
      onClick={() => navigate(`/product/${product?._id}`)}
    >
      <div className={classes.price}>
        <Typography variant='h6'>{addCommas(product?.price)} تومان</Typography>
      </div>
      <Card>
        <CardMedia
          component='img'
          height='194'
          image={`${api}/uploads/admin/product/${product?._id}/${product?.images?.[0]}`}
          alt={product?.name}
        />
        <CardContent>
          <Typography
            className={classes.productName}
            variant='h5'
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
      </Card>
    </div>
  );
}
