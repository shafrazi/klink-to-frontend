import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { Link } from 'react-router-dom';

const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];

const RecentProductPages = (props) => {
  const { pages } = props;
  return (
    <Card {...props}>
      <CardHeader title="Recent Product Pages" />
      <Divider />
      {pages && (
        <List>
          {pages.map((page, i) => (
            <ListItem divider={i < pages.length - 1} key={page.id}>
              <ListItemAvatar>
                <img
                  alt={page.attributes.title}
                  src={page.attributes.Boximage}
                  style={{
                    height: 48,
                    width: 48
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={page.attributes.title}
                // secondary={`Updated ${page.updatedAt.fromNow()}`}
              />
              <IconButton edge="end" size="small">
                <Link to={`/app/product-page-admin/${page.attributes.slug}`}>
                  <MoreVertIcon />
                </Link>
              </IconButton>
            </ListItem>
          ))}
        </List>
      )}
      <Divider />
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

export default RecentProductPages;
