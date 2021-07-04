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

const Pages = (props) => {
  const pages = props.data.pages;

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
                <TableCell>Page link</TableCell>
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
            <TableBody>
              {pages.map((page) => (
                <TableRow hover key={page.id}>
                  <TableCell>{page.title}</TableCell>
                  <TableCell>{`https://klink.to/${page.slug}`}</TableCell>
                  <TableCell>
                    {moment(page.created_at).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip color="primary" label={page.slug} size="small" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
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
