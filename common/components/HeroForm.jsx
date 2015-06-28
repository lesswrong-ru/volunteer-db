import React from 'react';
import styles from './HeroForm.scss';


export default React.createClass({
  render () {
    return (
      <div className={styles.main}>
        <input className={styles.input} placeholder="Введите e-mail"/>
        <button className={styles.button}>Да, возьмите меня на опыты!</button>
      </div>
    );
  },
});
