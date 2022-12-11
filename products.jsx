import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
});

const products = [
  {
    name: 'Red Dress',
    image: 'https://example.com/red-dress.jpg',
    description: 'A beautiful red dress perfect for any occasion.'
  },
  {
    name: 'Blue T-Shirt',
    image: 'https://example.com/blue-tshirt.jpg',
    description: 'A comfortable blue t-shirt with a stylish design.'
  },
  {
    name: 'Green Shoes',
    image: 'https://example.com/green-shoes.jpg',
    description: 'Elegant green shoes that will make you stand out.'
  },
];

function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.image}
                  title={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
