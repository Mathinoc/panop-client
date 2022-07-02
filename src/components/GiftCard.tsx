import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardItem from '../interfaces/CardItem';
import { Link } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';

export default function GiftCard({ item }: { item: CardItem }) {
  return (
    <Link to={`/item/${item.id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.photo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}Lizard
          </Typography>
          <Typography>
            {formatPrice(item.price)}
          </Typography>
        </CardContent>

        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
      </Card>
    </Link>
  );
}
