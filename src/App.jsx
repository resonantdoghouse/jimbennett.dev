import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <p>
                  Hello, World! My name is Jim and I like to make things.
                  &hearts;
                </p>
              </>
            }
          />
          <Route
            path="/contact"
            element={
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
            }
          />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
