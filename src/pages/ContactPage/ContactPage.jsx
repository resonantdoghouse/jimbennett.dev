import './ContactPage.scss';

const ContactPage = () => (
  <section className="ContactPage">
    <h1>Connect with me &rarr;</h1>
    <ul className="connect-list">
      <li className="connect-list__item">
        <a
          className="connect-list__link"
          href="https://codepen.io/jimbennett"
          target="_blank"
        >
          CodePen
        </a>
      </li>
      <li className="connect-list__item">
        <a
          className="connect-list__link"
          href="https://github.com/resonantdoghouse"
          target="_blank"
        >
          GitHub
        </a>
      </li>
      <li className="connect-list__item">
        <a
          className="connect-list__link"
          href="https://www.linkedin.com/in/jim-bennett/"
          target="_blank"
        >
          LinkedIn
        </a>
      </li>
    </ul>
    <h2>Contact</h2>
    <form className="contact-form" name="contact" method="POST" netlify>
      <label className="contact-form__label">
        Your Name:{' '}
        <input
          className="contact-form__input"
          type="text"
          name="name"
          placeholder="name"
        />
      </label>

      <label className="contact-form__label">
        Your Email:{' '}
        <input
          className="contact-form__input"
          type="email"
          name="email"
          placeholder="email"
        />
      </label>

      <label className="contact-form__label">
        Message:{' '}
        <textarea
          className="contact-form__textarea"
          name="message"
          placeholder="message"
        ></textarea>
      </label>

      <button className="contact-form__btn" type="submit">
        Send
      </button>
    </form>
  </section>
);

export default ContactPage;
