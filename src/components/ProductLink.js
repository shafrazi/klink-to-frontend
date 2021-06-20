import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    width: '80%',
    height: '80%',
    maxWidth: 300
  }
});

const ProductLink = ({ product, ...rest }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 6
          }}
        >
          <CardMedia
            height="400"
            image={product.image}
            component="img"
            title={product.title}
            className={classes.media}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Button
          color="primary"
          variant="contained"
          // component={Link}
          // href={product.source}
          // target="_blank"
          onClick={() => {
            window.open(product.source, '_blank');
            console.log('ok');
          }}
        >
          Go to link
        </Button>
      </Box>
    </Card>
  );
};

export default ProductLink;
