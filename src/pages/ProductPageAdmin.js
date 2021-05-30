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

import { AppContext } from 'src/context';

function ProductPageAdmin() {
  const { handleAddProductLink } = useContext(AppContext);

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
                onClick={handleAddProductLink}
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
