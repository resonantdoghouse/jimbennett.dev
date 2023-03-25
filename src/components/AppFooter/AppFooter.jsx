import './AppFooter.scss'

const AppFooter = () => (
  <footer className="AppFooter">
    <div className="AppFooter__wrapper">&copy; {new Date().getFullYear()}</div>
  </footer>
)

export default AppFooter
