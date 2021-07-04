import React, { useState, useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';

import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';

import { AppContext } from 'src/context';

import ProductLink from 'src/components/ProductLink';

function ProductPageAdmin(props) {
  const { baseUrl, userToken, productPage, setProductPage } =
    useContext(AppContext);
  const { slug } = useParams();
  const navigate = useNavigate();

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
          navigate('/404', {
            replace: true
          });
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
        <Container fixed>
          <Box sx={{ pt: 3 }}>
            {productPage && (
              <Grid container spacing={3}>
                {productPage.link_items.map((linkItem) => (
                  <Grid item key={linkItem.id} lg={3} md={4} xs={6}>
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
