import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Box, Container, Grid } from '@material-ui/core';
import PageCount from 'src/components/dashboard/PageCount';
import LatestOrders from 'src/components/dashboard//LatestOrders';
import RecentProductPages from 'src/components/dashboard/RecentProductPages';
import Sales from 'src/components/dashboard//Sales';
import LinkCount from 'src/components/dashboard/LinkCount';
import PageViews from 'src/components/dashboard/PageViews';
import LinkViewCount from 'src/components/dashboard/LinkViewCount';
import TrafficByDevice from 'src/components/dashboard//TrafficByDevice';

import { AppContext } from 'src/context';

const Dashboard = () => {
  const { productPages, setProductPages, baseUrl, userToken } =
    useContext(AppContext);
  const [dataOverview, setDataOverview] = useState(null);
  const options = {
    headers: {
      authorization: `bearer ${userToken}`
    }
  };

  useEffect(() => {
    if (userToken) {
      axios
        .get(baseUrl + '/api/product_pages', options)
        .then((response) => {
          setProductPages(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userToken]);

  useEffect(() => {
    if (userToken) {
      axios
        .get(baseUrl + '/api/overview', options)
        .then((response) => {
          setDataOverview(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userToken]);

  return (
    <>
      <Helmet>
        <title>Dashboard | klink.to</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        {dataOverview && (
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <PageCount data={dataOverview.page_count} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <PageViews data={dataOverview.all_views} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <LinkCount data={dataOverview.link_count} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <LinkViewCount
                  data={dataOverview.link_view_count}
                  sx={{ height: '100%' }}
                />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <Sales />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <TrafficByDevice
                  sx={{ height: '100%' }}
                  data={dataOverview.all_page_traffic}
                />
              </Grid>
              <Grid item lg={4} md={6} xl={3} xs={12}>
                <RecentProductPages
                  pages={productPages.pages}
                  sx={{ height: '100%' }}
                />
              </Grid>
              <Grid item lg={8} md={12} xl={9} xs={12}>
                <LatestOrders />
              </Grid>
            </Grid>
          </Container>
        )}
      </Box>
    </>
  );
};

export default Dashboard;
