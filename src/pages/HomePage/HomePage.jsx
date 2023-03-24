import { ReactP5Wrapper } from 'react-p5-wrapper';

const sketch = (p5) => {
  const generateTerrain = () => {
    for (let x = 0; x < window.innerWidth; x += 6) {
      const offsetX = 0.02 * x; // cache x offset
      for (let y = 0; y < window.innerHeight; y += 6) {
        const offsetY = 0.02 * y; // cache y offset
        let c = 255 * p5.noise(offsetX, offsetY);
        p5.fill(c); // grayscale
        if (c > 170) {
          p5.fill(255, 255, 255); // mountain top
        } else if (c > 130) {
          p5.fill(10, 10, 65); // mountain
        } else if (c > 76) {
          p5.fill(30, 200, 64); // grass
        } else {
          p5.fill(0, 60, 255); // water
        }
        p5.rect(x, y, 10, 10); // draw shape
      }
    }
  };

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.noLoop();
    p5.background(0);
    p5.noStroke();
  };

  p5.draw = () => {
    generateTerrain();
  };
};

const HomePage = () => <ReactP5Wrapper sketch={sketch} />;

export default HomePage;
