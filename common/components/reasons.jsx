import React from 'react';
import styles from './reasons.scss';

export const Reason = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    details: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <li>
        {this.props.text}
        <small className={styles.ReasonDetails}>
          {this.props.details}
        </small>
      </li>
    );
  },
});

export const ReasonsList = React.createClass({
  render () {
    return (
      <ol className={styles.ReasonsList}>
        {this.props.children}
      </ol>
    );
  },
});

