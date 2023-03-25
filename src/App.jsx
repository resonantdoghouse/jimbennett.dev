import { Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import './App.scss'

const App = () => (
  <div className="App">
    <AppHeader />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

    <AppFooter />
  </div>
)

export default App
