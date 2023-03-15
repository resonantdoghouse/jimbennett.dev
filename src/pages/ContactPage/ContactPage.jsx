import './ContactPage.scss';

const ContactPage = () => (
  <>
    <p>Connect with me.</p>
    <ul className="connect-list">
      <li className="connect-list__item">
        <a
          className="connect-list__link"
          href="https://www.linkedin.com/in/jim-bennett/"
          target="_blank"
        >
          LinkedIn
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
          href="https://codepen.io/jimbennett"
          target="_blank"
        >
          CodePen
        </a>
      </li>
    </ul>
  </>
);

export default ContactPage;
