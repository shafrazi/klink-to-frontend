import React, { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Button,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core';

import { useParams } from 'react-router-dom';

import { AppContext } from 'src/context';

function ProductPageAdmin(props) {
  const { handleAddProductLink } = useContext(AppContext);
  const { slug } = useParams();

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
        <Container maxWidth="lg">
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
        </Container>
      </Box>
    </>
  );
}

export default ProductPageAdmin;
