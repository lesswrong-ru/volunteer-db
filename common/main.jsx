let React = require('react');

require('../style/main.scss');

let HeroHeader = React.createClass({
  render () {
    return <header className='hero-header'>{this.props.children}</header>
  },
});

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

let BigHeader = React.createClass({
  render () {
    return <header className='big-header'>{this.props.children}</header>
  },
});

let BigSection = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
  },

  render () {
    let outerCx = 'big-section-outer';
    let cx = 'big-section';
    if (this.props.type) {
      outerCx += ` big-section-outer--${this.props.type}`;
      cx += ` big-section--${this.props.type}`;
    }
    return (
      <div className={outerCx}>
        <section className={cx}>
          {this.props.children}
        </section>
      </div>
    );
  },
});

let Reason = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    details: React.PropTypes.string.isRequired,
  },

  render () {
    return (
      <li>
        {this.props.text}
        <small className='reason-details'>{this.props.details}</small>
      </li>
    );
  },
});

let ReasonsList = React.createClass({
  render () {
    return (
      <ol className='reasons-list'>
        {this.props.children}
      </ol>
    );
  },
});

export default React.createClass({
  render () {
    return (
      <div>
        <div className='hero-group'>
          <BigSection type='hero'>
            <HeroHeader>Открытое объединение волонтеров</HeroHeader>
          </BigSection>

          <BigSection>
            <BigHeader>Хочешь помочь науке? Стань волонтером!</BigHeader>
            <p>
            Ты готов отдать свои тело и разум на службу науке, во имя истины и блага человечества?
            Запишись в Открытое Объединение Волонтеров.
            </p>
            <p>
            Мы помогаем исследователям и испытуемым найти друг друга и внести совместный вклад в умножение знания.
            </p>
          </BigSection>

          <BigSection type='input'>
            <div className="hero-form">
              <input className="hero-form__input" placeholder="Введите e-mail"/>
              <button className="hero-form__button">Да, возьмите меня на опыты!</button>
            </div>
          </BigSection>

          <Continue />
        </div>

        <BigSection type='text'>
          <BigHeader>Для чего это тебе?</BigHeader>
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

        <BigSection type='text'>
          <BigHeader>Для чего это нам?</BigHeader>
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

        <BigSection type='text'>
          <BigHeader>Для чего это исследователям?</BigHeader>
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

        <footer className="big-footer">
          <a href="http://lesswrong.ru">© Команда LessWrong.ru</a>
        </footer>
      </div>
    );
  },
});
