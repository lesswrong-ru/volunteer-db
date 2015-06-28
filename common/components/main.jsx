import React from 'react';
import BigSection from './BigSection';
import HeroForm from './HeroForm';
import {ReasonsList, Reason} from './reasons';

require('../../style/main.scss');
import styles from './main.scss';

let Continue = React.createClass({
  scrollDown () {
    // TODO
  },

  render () {
    return (
      <div className='continue'>
        <a className='continue--link' href='#' onClick={this.scrollDown}>
          Узнать больше <i className='fa fa-caret-down'></i>
        </a>
      </div>
    );
  },
});

let Header = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(['hero']),
  },

  cx () {
    if (this.props.size == 'hero') {
      return styles.HeroHeader;
    }
    else {
      return styles.Header;
    }
  },

  render () {
    return (
      <header className={this.cx()}>
        {this.props.children}
      </header>
    );
  },
});

let BigFooter = React.createClass({
  render () {
    return (
      <footer className={styles.BigFooter}>
        <a href='http://lesswrong.ru'>© Команда LessWrong.ru</a>
      </footer>
    );
  },
});

let FirstScreen = React.createClass({
  render () {
    return (
      <div className={styles.FirstScreen}>
        <BigSection wide={true} color='grey' grow={1}>
          <Header size='hero'>Открытое объединение волонтеров</Header>
        </BigSection>

        <BigSection color='green' grow={1}>
          <Header>Хочешь помочь науке? Стань волонтером!</Header>
          <p>
          Ты готов отдать свои тело и разум на службу науке, во имя истины и блага человечества?
          Запишись в Открытое Объединение Волонтеров.
          </p>
          <p>
          Мы помогаем исследователям и испытуемым найти друг друга и внести совместный вклад в умножение знания.
          </p>
        </BigSection>

        <BigSection color='grey' grow={1}>
          <HeroForm/>
        </BigSection>

        <BigSection color='grey'>
          <Continue />
        </BigSection>
      </div>
    );
  },
});

let ReasonsScreen = React.createClass({
  render () {
    return (
      <div>
        <BigSection>
          <Header>Для чего это тебе?</Header>
          <ReasonsList>
            <Reason
              text='Ты внесешь вклад в мировую науку'
              details='участником программы может стать абсолютно любой человек старше 18 лет. результаты экспериментов публикуются открыто.'
            />
            <Reason
              text='Ты познакомишься с процессом проведения экспериментов на людях изнутри'
              details='может быть, тебя отведут в настоящую лабораторию или даже прицепят к мозгу провода. или будут спрашивать про интересное.'
            />
            <Reason
              text='Ты узнаешь о себе что-то новое'
              details='в зависимости от исследования, тебе, возможно, расскажут что-то новое о том, как работают всякие шутки у тебя в голове.'
            />
          </ReasonsList>
        </BigSection>

        <BigSection>
          <Header>Для чего это нам?</Header>
          <ReasonsList>
            <Reason
              text='Мы – некоммерческий проект, мы за науку'
              details='никто не возьмет ни с кого никаких денег, все делается добровольно и на общественных началах.'
            />
            <Reason
              text='Мы хотим, чтобы люди вокруг тоже были за науку'
              details='мы хотим, чтобы все хотели, чтобы количество знания человечества росло быстрее. А еще мы хотим, чтобы те, кто этого хочет, знали, что для этого делать.'
            />
            <Reason
              text='Мы хотим облегчить жизнь исследователям'
              details='они и так делают трудное дело, пусть техническая часть станет как можно более простой и прозрачной.'
            />
          </ReasonsList>
        </BigSection>

        <BigSection>
          <Header>Для чего это исследователям?</Header>
          <ReasonsList>
            <Reason
              text='Собрать людей для экспериментов'
              details='чтобы подобрать людей для эксперимента, начинающей группе требуется N времени.'
            />
            <Reason
              text='Подобрать людей по нужным параметрам'
              details='если искать еще и не всех людей, а только нужную выборку, то задача становится сложнее.'
            />
            <Reason
              text='Иметь централизованную систему доступа к людям'
              details='не искать каждый раз заново и разными способами и не испытывать проблем с оповещением испытуемых.'
            />
          </ReasonsList>
        </BigSection>
      </div>
    );
  },
});

export default React.createClass({
  render () {
    return (
      <div>
        <FirstScreen />
        <ReasonsScreen />
        <BigFooter />
      </div>
    );
  },
});
