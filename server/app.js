import express from 'express';
import React from 'react';

import Page from '../common/components/page';

import sqlite3 from 'sqlite3';
sqlite3.verbose();
const db = new sqlite3.Database(':memory:');

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

app.post('/api/register', (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.status(500).send({
      error: 'expected name parameter',
    });
  }

  db.run('CREATE TABLE IF NOT EXISTS users (name TEXT)');
  db.run('INSERT users SET name = ?', name);
  res.send({
    status: 'ok',
  });
});

const server = app.listen(8080);
