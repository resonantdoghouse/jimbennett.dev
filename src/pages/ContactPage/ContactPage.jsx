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
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
);

export default ContactPage;
