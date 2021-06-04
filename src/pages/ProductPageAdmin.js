import React, { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid
} from '@material-ui/core';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import { AppContext } from 'src/context';

import ProductCard from 'src/components/product//ProductCard';
import products from 'src/__mocks__/products';
import ProductLink from 'src/components/ProductLink';

function ProductPageAdmin(props) {
  const {
    handleAddProductLink,
    baseUrl,
    userToken,
    productPage,
    setProductPage
  } = useContext(AppContext);
  const { slug } = useParams();

  const options = {
    headers: {
      Authorization: `bearer ${userToken}`
    }
  };

  useEffect(() => {
    if (userToken) {
      axios
        .get(baseUrl + `/api/product_pages/${slug}`, options)
        .then((response) => {
          setProductPage(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userToken]);

  return (
    <>
      <Helmet>
        <title>Product Page | klink.to</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <CardHeader subheader="Add product links" title="Product Page" />
            <CardContent></CardContent>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
              }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  handleAddProductLink(slug);
                }}
              >
                Add product link
              </Button>
            </Box>
          </Card>
          <Box sx={{ pt: 3 }}>
            {productPage && (
              <Grid container spacing={6}>
                {productPage.link_items.map((linkItem) => (
                  <Grid item key={linkItem.id} lg={3} md={4} xs={12}>
                    <ProductLink product={linkItem} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProductPageAdmin;
