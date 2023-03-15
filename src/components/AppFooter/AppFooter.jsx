import './AppFooter.scss';

function AppFooter() {
  return (
    <footer className="AppFooter">
      <div className="AppFooter__wrapper">
        JimBennett.dev &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default AppFooter;
