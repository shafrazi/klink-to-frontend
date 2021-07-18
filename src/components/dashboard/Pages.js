import { React, useContext } from 'react';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LaunchIcon from '@material-ui/icons/Launch';
import { Link } from 'react-router-dom';
import { AppContext } from 'src/context';

const Pages = (props) => {
  const pages = props.data;

  return (
    <Card {...props}>
      <CardHeader title="My Product Pages" />
      <Divider />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Page name</TableCell>
                <TableCell>Public link</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Created date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Views this week</TableCell>
              </TableRow>
            </TableHead>
            {pages && (
              <TableBody>
                {pages.map((page) => (
                  <TableRow hover key={page.id}>
                    <TableCell>
                      <Link
                        to={`/app/product-page-admin/${page.attributes.slug}`}
                      >
                        {page.attributes.title}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/${page.attributes.slug}`} target="_blank">
                        {`https://klink.to/${page.attributes.slug}`}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {moment(page.attributes.created_at).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>{page.attributes.weekly_views}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default Pages;
