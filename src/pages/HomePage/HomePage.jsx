import { ReactP5Wrapper } from 'react-p5-wrapper'
import { Link } from 'react-router-dom'
import sketch from '../../generativeTerrainSketch'
import './HomePage.scss'

const HomePage = () => (
  <>
    <div className="overlay">
      <h1 className="overlay__title">Hello, World 👋</h1>
      <Link to="/contact" className="Link">
        Connect with me
      </Link>
    </div>
    <ReactP5Wrapper sketch={sketch} />
  </>
)

export default HomePage
