import { Routes, Route } from 'react-router-dom'
import AppHeader from './components/AppHeader'
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
  </div>
)

export default App
