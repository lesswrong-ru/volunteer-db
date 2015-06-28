import React from 'react';
import styles from './BigSection.scss';

export default React.createClass({
  propTypes: {
    wide: React.PropTypes.bool,
    grow: React.PropTypes.number,
    color: React.PropTypes.string,
  },

  getInitialProps () {
    return {
      wide: false,
    };
  },

  colors: {
    grey: '#eee',
    green: '#95c19c',
  },

  render () {
    let outerCx = styles.outer;
    let innerCx = styles.inner;

    if (this.props.wide) {
      innerCx += ' ' + styles.wide;
    }
    if (this.props.grow) {
      outerCx += ' ' + styles.grow;
    }

    let style = {};
    if (this.props.color) {
      style.backgroundColor = this.colors[this.props.color];
    }

    return (
      <div style={style} className={outerCx}>
        <section className={innerCx}>
          {this.props.children}
        </section>
      </div>
    );
  },
});

