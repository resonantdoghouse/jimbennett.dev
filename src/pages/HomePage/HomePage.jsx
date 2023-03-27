import { Link } from 'react-router-dom'
import MountainLake from '../../scenes/MountainLake'
import './HomePage.scss'
import playerPianoImg from '../../assets/images/react-player-piano.jpg'
import threeHeightMapImage from '../../assets/images/threejs-heightmap.jpg'

const HomePage = () => (
  <div className="HomePage">
    <MountainLake />
    <article className="article">
      <h1 className="article__title">Hello, World 👋</h1>
      <Link to="/contact" className="Link">
        Connect with me
      </Link>
      <a href="#projects" className="Link">
        Projects &darr;
      </a>
    </article>

    <section id="projects" className="section">
      <h2>Toy Projects</h2>
      <div className="grid">
        <Link className="Link" to="https://thejoyofcss.art/" target="_blank">
          React Player Piano 🎹
          <img
            className="Link__img"
            src={playerPianoImg}
            alt="react player piano"
          />
        </Link>
        <Link
          className="Link"
          to="https://threejs-art-heightmap.netlify.app/"
          target="_blank"
        >
          Three.js Art HeightMap
          <img
            className="Link__img"
            src={threeHeightMapImage}
            alt="three.js Art Height Map Project"
          />
        </Link>
      </div>
    </section>
  </div>
)

export default HomePage
