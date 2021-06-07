const axios = require('axios');
const config = require('./config');

// Gets all the products in the API

const getAllProducts = () => {
  const options = {
    url: `${config.APIURL}products`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };

  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('ERROR: ', err);
    });
};

const getProductById = (id) => {
  const options = {
    url: `${config.APIURL}products/${id}/`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };
  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

const getRelatedItems = (id) => {
  const options = {
    url: `${config.APIURL}products/${id}/related`,
    headers: {
      Authorization: config.APITOKEN,
    },
  };
  axios(options)
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error: ', err);
    });
};

// getAtelierProducts();

module.exports = {
  getAllProducts,
  getProductById,
  getRelatedItems,
};
