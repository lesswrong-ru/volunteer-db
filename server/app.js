import express from 'express';
import React from 'react';

import Page from '../common/components/page';

require("source-map-support").install(); // used by webpack-generated code

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    React.renderToStaticMarkup(
      React.createElement(Page)
    )
  );
});

const server = app.listen(8080);
