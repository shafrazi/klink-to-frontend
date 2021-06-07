import React from 'react';
import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';

import DialogActions from '@material-ui/core/DialogActions';

import { TextField, makeStyles, CircularProgress } from '@material-ui/core';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import { AppContext } from 'src/context';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1)
      }
    }
  };
});

export default function AddProductLink(props) {
  const classes = useStyles();
  const { slug } = props;
  const navigate = useNavigate();
  const { baseUrl, userToken, handleCloseModal, productPage, setProductPage } =
    useContext(AppContext);
  const [productLink, setProductLink] = useState({ slug: slug });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setProductLink((prevProductLink) => {
      return {
        ...prevProductLink,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleGetDetails = (event) => {
    setLoading(true);
    const options = {
      headers: {
        Authorization: `bearer ${userToken}`
      }
    };

    const url = baseUrl + '/api/scrape';
    event.preventDefault();
    axios
      .post(url, { url: productLink.source }, options)
      .then((response) => {
        setProductLink((prevProductLink) => {
          return {
            ...prevProductLink,
            ...response.data.data
          };
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = baseUrl + '/api/link_items';
    const options = {
      headers: {
        Authorization: `bearer ${userToken}`
      }
    };
    axios
      .post(url, productLink, options)
      .then((response) => {
        setProductPage((prevProductPage) => {
          return {
            ...prevProductPage,
            link_items: [...prevProductPage.link_items, productLink]
          };
        });
        handleCloseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className={classes.root}>
        <div>
          <TextField
            name="source"
            label="Target link"
            defaultValue={productLink.source}
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </div>

        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleGetDetails}
            disabled={!productLink.source || loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            Get product details
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
      <div>
        <img src={productLink.image} />
      </div>
    </div>
  );
}
