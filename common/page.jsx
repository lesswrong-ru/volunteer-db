import React from 'react';
import Main from './main';

export default React.createClass({
  render () {
    return (
      <html>
        <head>
          <title>Открытое объединение волонтеров</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css"/>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic'/>
          <link rel="stylesheet" href='/main.css'/>
        </head>
        <body>
          <Main/>
        </body>
      </html>
    );
  },
});
