import {
    Button,
    Card,
    CardActionArea,
    Rating,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from '@mui/material';
  import NextLink from 'next/link';
  import React from 'react';
import classes from '../utils/classes';
  import { urlForThumbnail } from '../utils/image';
  
  export default function ProductItem({ product }) {
    return (
      <Card>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={urlForThumbnail(product.image)}
              title={product.name}
            ></CardMedia>
            <CardContent>
              <Typography>{product.name}</Typography>
              <Rating value={product.rating} readOnly></Rating>
            </CardContent>
          </CardActionArea>
        </NextLink>
        <CardActions>
          <Typography>${product.price}</Typography>
          <Button size="small" style={classes.button}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    );
  }