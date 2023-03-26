import { ReactP5Wrapper } from 'react-p5-wrapper'
import { Link } from 'react-router-dom'
import sketch from '../../generativeTerrainSketch'
import './HomePage.scss'
import playerPianoImg from '../../assets/images/react-player-piano.jpg'

const HomePage = () => (
  <div className="HomePage">
    <ReactP5Wrapper sketch={sketch} />
    <article className="article">
      <h1 className="article__title">Hello, World 👋</h1>
      <Link to="/contact" className="Link">
        Connect with me
      </Link>
    </article>
    <section className="section">
      <h2>Toy Projects</h2>
      <Link className="Link" to="https://thejoyofcss.art/" target="_blank">
        React Player Piano 🎹
        <img
          className="Link__img"
          src={playerPianoImg}
          alt="react player piano"
        />
      </Link>
    </section>
  </div>
)

export default HomePage
