import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardItem from '../interfaces/CardItem';
import formatPrice from '../utils/formatPrice';

export default function ItemCard({ item }: { item: CardItem }) {
  return (

    <Card sx={{ maxWidth: 345 }} style={{height: "100%"}}>
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
  );
}
